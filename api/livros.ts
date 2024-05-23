const API_URL = 'http://10.10.200.70:8080/express-biblioteca/livros';

export const fetchLivros = async () => {
  const res = await fetch(`${API_URL}/`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};