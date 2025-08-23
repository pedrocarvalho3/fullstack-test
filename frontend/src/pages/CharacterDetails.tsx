import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Calendar, Users } from "lucide-react";
import { getStatusColor } from "@/lib/utils";
import useCharacterDetails from "@/hooks/useCharacterDetails";
import { cardClass } from "@/constants/styles";
import {
  SPECIES_TRANSLATIONS,
  GENDER_TRANSLATIONS,
} from "@/constants/character";

export const CharacterDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { character, loading, error } = useCharacterDetails(
    id,
    location.state?.character
  );
  const navigate = useNavigate();

  if (error) {
    return (
      <div>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    );
  }

  if (!character) {
    return <h1>Not found</h1>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl mt-4">
      <Button
        onClick={() => navigate("/")}
        variant="outline"
        className="mb-6 border-lime-400 bg-slate-800 backdrop-blur-sm text-lime-100 cursor-pointer shadow-md hover:shadow-lime-500 hover:bg-lime-500"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar para Home
      </Button>

      <div className="grid grid-cols-1  gap-8">
        <Card className={`${cardClass} p-0`}>
          <div className="relative">
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-[640px] object-cover"
            />
            <div className="absolute top-4 right-4">
              <Badge className={getStatusColor(character.status)}>
                {character.status}
              </Badge>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-lime-100 mb-2">
              {character.name}
            </h1>
            <p className="text-xl text-gray-500">
              {SPECIES_TRANSLATIONS[character.species.toLowerCase()] ||
                character.species}{" "}
              •{" "}
              {GENDER_TRANSLATIONS[character.gender.toLowerCase()] ||
                character.gender}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <Card className={cardClass}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-xl gap-2 text-lime-500">
                  <MapPin className="h-6 w-6" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lime-100">{character.location.name}</p>
              </CardContent>
            </Card>

            <Card className={cardClass}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-xl gap-2 text-cyan-400">
                  <MapPin className="h-6 w-6" />
                  Origem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lime-100">
                  Origem:{" "}
                  {character.origin.name.toLowerCase() === "unknown"
                    ? "Desconhecido"
                    : character.origin.name}
                </p>
              </CardContent>
            </Card>

            <Card className={cardClass}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-xl gap-2 text-purple-400">
                  <Users className="h-6 w-6" />
                  Episódios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lime-100">
                  {character.episode.length} episódios
                </p>
              </CardContent>
            </Card>

            <Card className={cardClass}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-xl gap-2 text-lime-100">
                  <Calendar className="h-6 w-6" />
                  Data de criação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lime-100">
                  {new Date(character.created).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
