import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-32">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl animate-slideIn">
              Sistema de Gestão de Entregas
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 animate-fadeIn">
              Gerencie suas entregas de forma eficiente e profissional
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                onClick={() => navigate("/login")}
                className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
              >
                Começar agora
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Index;
