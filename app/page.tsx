import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Livros from "./pages/Livros";
import Reservas from "./pages/Reservas";
import { fetchLivros } from "@/api/livros";
import { fetchReservas } from "@/api/reservas";

export default async function Home() {
  const livros = await fetchLivros();
  const reservas = await fetchReservas();

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
        <Reservas reservas={reservas} />
      </TabsContent>
    </Tabs>
  );
}
