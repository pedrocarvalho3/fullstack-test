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

  const fetchCharacters = async (page: number) => {
    try {
      const url = `https://rickandmortyapi.com/api/character?page=${page}`;
      const response = await fetch(url);

      if (!response.ok) throw new Error("Erro ao buscar personagens.");

      const data: ApiResponse = await response.json();
      setCharacters(data.results);
      setError("");
    } catch (err) {
      setError("Erro ao carregar personagens. Tente novamente.");
      console.error("Erro ao buscar personagens:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(1);
  }, []);

  return { characters, loading, error, retry: () => fetchCharacters(1) };
}
