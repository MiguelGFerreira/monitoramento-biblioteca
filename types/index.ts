export interface Livro {
	id: number,
	titulo: string;
	categoria: string;
	subcategoria: string;
	autor: string;
	paginas: number;
	status: "Ativo" | "Inativo" | "Reservado";
	imagem: string;
}