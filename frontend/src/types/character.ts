export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  gender: string;
  origin: {
    name: string;
  };
}

export interface CharacterDetailed extends Character {
  location: {
    name: string;
    url: string;
  };
  episode: string[];
  url: string;
  created: string;
  origin: {
    name: string;
    url: string;
  };
}
