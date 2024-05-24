import { Livro } from "@/types";

const API_URL = 'http://10.10.200.70:8080/express-biblioteca/livros';

export const fetchLivros = async () => {
	const res = await fetch(`${API_URL}/`);
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
};

export const postLivro = async (data: {titulo: string, categoria: string, subcategoria: string, autor: string, paginas: number}) => {
	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const raw = JSON.stringify({
		"titulo": data.titulo,
		"categoria": data.categoria,
		"subcategoria": data.subcategoria,
		"autor": data.autor,
		"paginas": data.paginas
	});

	fetch(
		"http://localhost:8080/express-biblioteca/livros",
		{
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		})
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log('error', error));
}