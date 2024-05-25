"use client"

import LivroCard from "@/components/LivroCard";
import NovoLivroForm from "@/components/NovoLivroForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Livro } from "@/types";
import { useState } from "react";

const Livros = ({ livros }: { livros: Livro[] }) => {
	const [pesquisa, setPesquisa] = useState("");

	const handleChange = (event: any) => {
		setPesquisa(event.target.value.toLowerCase());
	}

	return (
		<main>
			<div className='mt-12 padding-x padding-y max-width'>
				<div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
					<h1 className='text-4xl font-extrabold'>Livros</h1>
				</div>

				<Sheet>
					<SheetTrigger className="btn">
						Novo Livro
					</SheetTrigger>
					<SheetContent className="bg-white">
						<SheetHeader>
							<SheetTitle>Criando livro novo</SheetTitle>
						</SheetHeader>
						<NovoLivroForm />
						<SheetClose>
							<Button form="novo-livro" type="submit" className="btn">Cadastrar</Button>
						</SheetClose>
					</SheetContent>
				</Sheet>

				<div className="home__filters">
					<label htmlFor="input-pesquisa">Pesquisar:</label>
					<Input name="input-pesquisa" type="search" className="w-1/3" onChange={handleChange} />
				</div>
				
				{livros.length > 0 ? (
					<section>
						<div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
							{livros.map((livro: Livro) => (
								pesquisa !== "" ? (
									(livro.titulo.toLowerCase().includes(pesquisa) || livro.autor.toLowerCase().includes(pesquisa)) && (
										<LivroCard key={livro.id} livro={livro} />
									)) : (
									<LivroCard key={livro.id} livro={livro} />
								)
							))}
						</div>
					</section>
				) : (
					<div className="text-center">Carregando livros...</div>
				)}
			</div>
		</main>
	);
};

export default Livros;
