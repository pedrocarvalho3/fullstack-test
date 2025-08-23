import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Character } from "@/types/characters";

interface CharacterCardProps {
  character: Character;
  onClick: () => void;
}

export default function CharacterCard({
  character,
  onClick,
}: CharacterCardProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "alive":
        return "bg-lime-300 text-dark";
      case "dead":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card
      className="border-slate-600 bg-slate-800 cursor-pointer overflow-hidden group p-0 hover:border-primary shadow-lg transition-transform duration-300 hover:shadow-lime-500 hover:-translate-y-1 "
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge className={getStatusColor(character.status)}>
            {character.status}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 text-lime-100 group-hover:text-lime-500 transition-colors">
          {character.name}
        </h3>
        <div className="space-y-1 text-sm text-gray-500">
          <p>
            {character.species} • {character.gender}
          </p>
          <p className="truncate">Origem: {character.origin.name}</p>
        </div>
      </CardContent>
    </Card>
  );
}
