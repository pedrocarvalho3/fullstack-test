import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import { CharacterDetails } from "./pages/CharacterDetails";
import { ScrollToTop } from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
