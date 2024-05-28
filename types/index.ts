export interface Livro {
	id: number,
	titulo: string;
	categoria: string;
	subcategoria: string;
	autor: string;
	paginas: number;
	status: "Ativo" | "Inativo" | "Reservado";
	link_capa: string;
}

export interface Reserva {
	id: number,
	matricula: string,
	nome: string,
	titulo: string,
	data_emprestimo: string,
	data_devolucao: string
}

export interface LivroData {
	id?: number;
	titulo?: string;
	categoria?: string;
	subcategoria?: string;
	autor?: string;
	paginas?: number;
	deletado?: string;
  }