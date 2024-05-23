import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Livros from "./pages/Livros";
import Reservas from "./pages/Reservas";
import { fetchLivros } from "@/api/livros";

export default async function Home() {
  const livros = await fetchLivros();

  return (
    <Tabs defaultValue="livros">
      <TabsList className="w-full justify-center">
        <TabsTrigger value="livros" className="aba">Livros</TabsTrigger>
        <TabsTrigger value="reservas" className="aba">Reservas</TabsTrigger>
      </TabsList>
      <TabsContent value="livros">
        <Livros livros={livros} />
      </TabsContent>
      <TabsContent value="reservas">
        <Reservas />
      </TabsContent>
    </Tabs>
  );
}
