import useCharacters from "@/hooks/useCharacters";
import CharacterCard from "./CharacterCard";
import type { Character } from "@/types/character";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { cardClass } from "@/constants/styles";
import { Skeleton } from "./ui/skeleton";
import { Loader2 } from "lucide-react";

export const CharacterList = () => {
  const {
    characters,
    loading,
    error,
    hasNextPage,
    loadingMore,
    loadMore,
    retry,
  } = useCharacters();
  const navigate = useNavigate();

  const handleCharacterClick = (character: Character) => {
    navigate(`/character/${character.id}`, { state: { character } });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={`${cardClass}p-0 overflow-hidden`}>
              <Skeleton className="w-full h-48 bg-muted" />
              <div className="p-4 space-y-2">
                <Skeleton className="h-4 w-3/4 bg-muted" />
                <Skeleton className="h-3 w-1/2 bg-muted" />
                <Skeleton className="h-3 w-2/3 bg-muted" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-destructive mb-4">{error}</p>
        <Button onClick={() => retry()} variant="outline">
          Tentar novamente
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onClick={() => handleCharacterClick(character)}
          />
        ))}
      </div>

      {hasNextPage && (
        <div className="text-center">
          <Button
            onClick={loadMore}
            disabled={loadingMore}
            variant="outline"
            className="mb-6 border-lime-400 bg-slate-800 backdrop-blur-sm text-lime-100 cursor-pointer shadow-md hover:shadow-lime-500 hover:bg-lime-500"
          >
            {loadingMore ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Carregando...
              </>
            ) : (
              "Buscar mais personagens"
            )}
          </Button>
        </div>
      )}
    </div>
  );
};
