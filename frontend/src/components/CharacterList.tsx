import useCharacters from "@/hooks/useCharacters";

export const CharacterList = () => {
  const { characters, loading, error } = useCharacters();

  return (
    <div className="container mx-auto px-4 py-8">
      {loading && <p>Carregando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {characters.map((character, index) => (
        <pre key={index} className="bg-gray-800 text-white p-2 rounded">
          {JSON.stringify(character, null, 2)}
        </pre>
      ))}
    </div>
  );
};
