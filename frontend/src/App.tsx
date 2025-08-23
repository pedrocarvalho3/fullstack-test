import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import { CharacterDetails } from "./pages/CharacterDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
