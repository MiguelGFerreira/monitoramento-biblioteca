import LivroCard from "@/components/LivroCard";
import NovoLivroForm from "@/components/NovoLivroForm";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"
import { Livro } from "@/types";

const livro: Livro = {
	titulo: "titulo",
	categoria: "Drama",
	subcategoria: "Suspense",
	autor: "Miguel",
	paginas: 150,
	status: "Ativo",
	imagem: "Imagem"
}

const Livros = () => {
	return (
		<main>
			<h1>Livros</h1>

			<Sheet>
				<SheetTrigger>
					<Button className="btn">Novo Livro</Button>
				</SheetTrigger>
					<SheetContent className="bg-white">
						<SheetHeader>
							<SheetTitle>Criando livro novo</SheetTitle>
						</SheetHeader>
						<NovoLivroForm />
					</SheetContent>
			</Sheet>

			<div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
				<LivroCard
					livro={livro}
				/>
			</div>
		</main>
	)
}

export default Livros;