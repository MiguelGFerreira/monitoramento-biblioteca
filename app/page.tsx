import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Livros from "./pages/Livros";
import Reservas from "./pages/Reservas";

const API_URL = 'http://10.10.200.70:8080/express-biblioteca/livros';

const fetchLivros = async () => {
  const res = await fetch(`${API_URL}/`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

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
