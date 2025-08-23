import { CharacterList } from "@/components/CharacterList";
import Header from "@/components/Header";

export default function Index() {
  return (
    <main className="mt-4">
      <Header />

      <CharacterList />
    </main>
  );
}
