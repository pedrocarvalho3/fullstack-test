import { useEffect, useState } from "react";
import type { Character } from "@/types/character";

interface ApiResponse {
  results: Character[];
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
}

export default function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchCharacters = async (page: number, append: boolean = false) => {
    try {
      if (!append) setLoading(true);
      else setLoadingMore(true);

      const url = `https://rickandmortyapi.com/api/character?page=${page}`;
      const response = await fetch(url);

      if (!response.ok) throw new Error("Erro ao buscar personagens.");

      const data: ApiResponse = await response.json();

      setCharacters((prev) =>
        append ? [...prev, ...data.results] : data.results
      );
      setHasNextPage(!!data.info.next);
      setError("");
    } catch (err) {
      setError("Erro ao carregar personagens. Tente novamente.");
      console.error("Erro ao buscar personagens:", err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    setPage(1);
    fetchCharacters(1);
  }, []);

  function loadMore() {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchCharacters(nextPage, true);
  }

  return {
    characters,
    loading,
    error,
    hasNextPage,
    loadingMore,
    loadMore,
    retry: () => fetchCharacters(1),
  };
}
