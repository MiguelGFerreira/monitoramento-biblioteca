const API_URL = 'http://127.0.0.1:8080/express-biblioteca/reservas';

export const fetchReservas = async () => {
	const res = await fetch(`${API_URL}/`);
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
};