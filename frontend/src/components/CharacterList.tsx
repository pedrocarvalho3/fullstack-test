import useCharacters from "@/hooks/useCharacters";
import CharacterCard from "./CharacterCard";
import type { Character } from "@/types/character";
import { useNavigate } from "react-router-dom";

export const CharacterList = () => {
  const { characters, loading, error } = useCharacters();
  const navigate = useNavigate();

  const handleCharacterClick = (character: Character) => {
    navigate(`/character/${character.id}`, { state: { character } });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {loading && <p>Carregando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onClick={() => handleCharacterClick(character)}
          />
        ))}
      </div>
    </div>
  );
};
