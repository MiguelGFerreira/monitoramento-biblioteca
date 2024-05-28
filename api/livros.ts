import { LivroData } from "@/types";

const API_URL = 'http://127.0.0.1:8080/express-biblioteca/livros';

export const fetchLivros = async () => {
	const res = await fetch(`${API_URL}/`);
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
};

export const postLivro = async (data: LivroData) => {
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
		`${API_URL}`,
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

export const patchLivro = async (data: LivroData, del: boolean) => {
	const url = `${API_URL}/${data.id}`;
	const myHeaders = new Headers();

	myHeaders.append('Content-Type', 'application/json');

	if (del) {
		var raw = JSON.stringify({
			"deletado": data.deletado
		})
	} else {
		var raw = JSON.stringify({
			"titulo": data.titulo,
			"categoria": data.categoria,
			"subcategoria": data.subcategoria,
			"autor": data.autor,
			"paginas": data.paginas
		});
	}

	try {
		const response = await fetch(url, {
			method: 'PATCH',
			headers: myHeaders,
			body: raw,
			redirect: 'follow',
		});
		const result = await response.text();
		console.log('Livro atualizado com sucesso:', result);
	} catch (error) {
		console.error('Falha ao atualizar livro:', error);
	}
};
