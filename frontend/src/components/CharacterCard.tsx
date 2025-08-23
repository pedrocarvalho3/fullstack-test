import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Character } from "@/types/character";
import {
  GENDER_TRANSLATIONS,
  SPECIES_TRANSLATIONS,
  STATUS_TRANSLATIONS,
} from "@/constants/character";
import { getStatusColor } from "@/utils";
import { cardClass } from "@/constants/styles";

interface CharacterCardProps {
  character: Character;
  onClick: () => void;
}

export default function CharacterCard({
  character,
  onClick,
}: CharacterCardProps) {
  return (
    <Card className={`${cardClass} p-0`} onClick={onClick}>
      <div className="relative">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge className={getStatusColor(character.status)}>
            {STATUS_TRANSLATIONS[character.status.toLowerCase()] ||
              character.status}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 text-lime-100 group-hover:text-lime-500 transition-colors">
          {character.name}
        </h3>
        <div className="space-y-1 text-sm text-gray-500">
          <p>
            {SPECIES_TRANSLATIONS[character.species.toLowerCase()] ||
              character.species}{" "}
            •{" "}
            {GENDER_TRANSLATIONS[character.gender.toLowerCase()] ||
              character.gender}
          </p>
          <p className="truncate">
            Origem:{" "}
            {character.origin.name.toLowerCase() === "unknown"
              ? "Desconhecido"
              : character.origin.name}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
