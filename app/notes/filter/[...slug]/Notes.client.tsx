"use client";

import { useState, useEffect, useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import NotesList from "@/components/NoteList/NoteList";
import SearchBox from "@/components/SearchBox/SearchBox";
import Pagination from "@/components/Pagination/Pagination";
import type { NoteTag } from "@/types/note";
import { fetchNotes, deleteNote, type FetchNotesResponse } from "@/lib/api";
import formCSS from "@/components/NoteForm/NoteForm.module.css";
import { useRouter, usePathname } from "next/navigation";

interface NotesClientProps {
  tag?: NoteTag;
}

export default function NotesClient({ tag }: NotesClientProps) {
  const router = useRouter();
  const pathname = usePathname(); 
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const queryClient = useQueryClient();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 400);
    return () => clearTimeout(timer);
  }, [search]);

  const { data, isError, isFetching } = useQuery<FetchNotesResponse, Error>({
    queryKey: ["notes", page, debouncedSearch, tag],
    queryFn: () =>
      fetchNotes({
        page,
        perPage: 10,
        search: debouncedSearch,
        tag: tag ?? "all",
      }),
    staleTime: 1000 * 60,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteNote(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["notes"] }),
    onError: () => alert("Failed to delete note. Try again."),
  });

  const handleDelete = useCallback(
    (id: string) => {
      deleteMutation.mutate(id); 
    },
    [deleteMutation]
  );

  const handleCreateNote = () => router.push("/notes/action/create");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginBottom: pathname === "/notes/filter/all" ? "32px" : "16px", 
        }}
      >
        <div style={{ flex: 1, minWidth: "240px" }}>
          <SearchBox value={search} onChange={setSearch} />
        </div>

        {data?.totalPages && data.totalPages > 1 && (
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Pagination
              currentPage={page}
              pageCount={data.totalPages}
              onPageChange={setPage}
            />
          </div>
        )}

        <div>
          <button
            onClick={handleCreateNote}
            className={formCSS.submitButton}
          >
            Create Note
          </button>
        </div>
      </div>

      {isError && <p className={formCSS.error}>Could not fetch notes.</p>}
      {isFetching && <p>Loading notes...</p>}

      {data && data.notes.length > 0 ? (
        <NotesList notes={data.notes} onDelete={handleDelete} />
      ) : (
        <p>No notes found</p>
      )}
    </div>
  );
}