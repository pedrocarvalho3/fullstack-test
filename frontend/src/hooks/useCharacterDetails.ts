import { useState, useEffect } from "react";
import type { CharacterDetailed } from "@/types/character";

export default function useCharacterDetails(
  characterId?: string,
  initialData?: CharacterDetailed | null
) {
  const [character, setCharacter] = useState<CharacterDetailed | null>(
    initialData || null
  );
  const [loading, setLoading] = useState(!initialData);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!character && characterId) {
      fetchCharacter(characterId);
    }
  }, [characterId, character]);

  const fetchCharacter = async (id: string) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      if (!response.ok) throw new Error("Personagem não encontrado!");
      const data: CharacterDetailed = await response.json();
      setCharacter(data);
      setError("");
    } catch (err) {
      setError("Erro ao carregar personagem. Tente novamente.");
      console.error("Erro ao buscar personagem:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    character,
    loading,
    error,
    retry: () => characterId && fetchCharacter(characterId),
  };
}
