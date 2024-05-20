import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Livros from "./pages/Livros";
import Reservas from "./pages/Reservas";

export default function Home() {
  return (
    <Tabs defaultValue="livros">
      <TabsList className="w-full justify-center">
        <TabsTrigger value="livros" className="aba">Livros</TabsTrigger>
        <TabsTrigger value="reservas" className="aba">Reservas</TabsTrigger>
      </TabsList>
      <TabsContent value="livros">
        <Livros />
      </TabsContent>
      <TabsContent value="reservas">
        <Reservas />
      </TabsContent>
    </Tabs>

  );
}
