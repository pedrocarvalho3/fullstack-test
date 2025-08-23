import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Usuário tentou acessar rota inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-lime-100">404</h1>
        <p className="text-xl text-gray-600 mb-4">
          Oops! Página não encontrada!
        </p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Retornar á Home
        </a>
      </div>
    </div>
  );
}
