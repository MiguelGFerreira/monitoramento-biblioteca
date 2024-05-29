import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Reserva } from "@/types";


const Reservas = ({ reservas }: { reservas: Reserva[] }) => {
	return (
		<main>
			<div className='mt-12 padding-x padding-y max-width'>
				<div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
					<h1 className='text-4xl font-extrabold'>Reservas</h1>
				</div>
				<Table>
					{/* <TableCaption>A list of your recent invoices.</TableCaption> */}
					<TableHeader>
						<TableRow>
							<TableHead>Id</TableHead>
							<TableHead>Matricula</TableHead>
							<TableHead>Funcionário</TableHead>
							<TableHead>Livro</TableHead>
							<TableHead>Data de empréstimo</TableHead>
							<TableHead>Data de devolução</TableHead>
						</TableRow>
					</TableHeader>

					{reservas.length > 0 ? (
						<TableBody>
							{reservas.map((reserva: Reserva) => (
								<TableRow>
									<TableCell>{reserva.id}</TableCell>
									<TableCell>{reserva.matricula}</TableCell>
									<TableCell>{reserva.nome}</TableCell>
									<TableCell>{reserva.titulo}</TableCell>
									<TableCell>{reserva.data_emprestimo}</TableCell>
									<TableCell>{reserva.data_devolucao}</TableCell>
								</TableRow>
							))}
						</TableBody>
					) : (
						<div className="text-center">Carregando livros...</div>
					)}
				</Table>
			</div>
		</main >
	)
}

export default Reservas;