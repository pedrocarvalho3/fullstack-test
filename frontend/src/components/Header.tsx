export default function Header() {
  return (
    <header className="py-8 text-center">
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-lime-500 to-cyan-300 bg-clip-text text-transparent mb-2">
        Rick & Morty
      </h1>

      <p className="text-lg text-gray-500 max-w-2xl mx-auto px-4">
        Explore o universo e descubra todos os seus personagens favoritos do
        universo Rick and Morty
      </p>
    </header>
  );
}
