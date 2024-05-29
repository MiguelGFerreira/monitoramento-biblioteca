"use client"

import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { Livro, LivroData } from '@/types';
import { Button } from './ui/button';
import Swal from 'sweetalert2';
import { patchLivro } from '@/api/livros';

interface BookDetailsProps {
	isOpen: boolean;
	closeModal: () => void;
	livro: Livro;
}

const LivroDetails = ({ isOpen, closeModal, livro }: BookDetailsProps) => {
	const handleEdit = (async (livro: Livro) => {
		const { value: formValues } = await Swal.fire({
			title: "Editando Livro",
			html: `
				<input type="hidden" id="livro-id" value="${livro.id}">
				<input id="livro-titulo" value="${livro.titulo}">
				<input id="livro-categoria" value="${livro.categoria}">
				<input id="livro-subcategoria" value="${livro.subcategoria}">
				<input id="livro-autor" value="${livro.autor}">
				<input id="livro-paginas" value="${livro.paginas}">
			`,
			focusConfirm: false,
			preConfirm: () => {
				const idLivro = (document.getElementById("livro-id") as HTMLInputElement);
				const tituloLivro = (document.getElementById("livro-titulo") as HTMLInputElement);
				const categoriaLivro = (document.getElementById("livro-categoria") as HTMLInputElement);
				const subcategoriaLivro = (document.getElementById("livro-subcategoria") as HTMLInputElement);
				const autorLivro = (document.getElementById("livro-autor") as HTMLInputElement);
				const paginasLivro = (document.getElementById("livro-paginas") as HTMLInputElement);
				if (tituloLivro && categoriaLivro && subcategoriaLivro && autorLivro && paginasLivro) {
					const patchData: LivroData = {
						id: Number(idLivro.value),
						titulo: tituloLivro.value,
						categoria: categoriaLivro.value,
						subcategoria: subcategoriaLivro.value,
						autor: autorLivro.value,
						paginas: Number(paginasLivro.value)
					}
					console.log(patchData);
					patchLivro(patchData, false);
					return [
						// idLivro.value,
						// tituloLivro.value,
						// categoriaLivro.value,
						// subcategoriaLivro.value,
						// autorLivro.value,
						// paginasLivro.value
					];
				}
			}
		});

		if (formValues) {
			Swal.fire({
				title: "Livro editado! :D",
				icon: "success",
			})
		}
	});

	const handleDelete = (async (livro: Livro) => {
		Swal.fire({
			title: "Tem certeza?",
			text: "Você quer deletar o livro?! :o",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Sim, tchau livro!"
		}).then((result) => {
			if (result.isConfirmed) {
				const patchData: LivroData = { id: livro.id, deletado: "S"}
				patchLivro(patchData, true);
				Swal.fire({
					title: "Deletado!",
					text: "O livro foi embora :(",
					icon: "success"
				});
			}
		});
	});

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<TransitionChild
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="oapcity-100"
						leaveTo="opacity-0"
					>
						<div className='fixed inset-0 bg-black bg-opacity-25' />
					</TransitionChild>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<TransitionChild
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="oapcity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<DialogPanel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
									<button
										type="button"
										className="absolute top-2 right-2 z-10 w-fit p-2 bg-gray-200 rounded-full hover:bg-gray-300 trasition"
										onClick={closeModal}
									>
										<Image
											src="/close.svg"
											alt="close"
											width={20}
											height={20}
											className="object-contain"
										/>
									</button>

									<div className="flex-1 flex flex-col gap-3">
										<div className="relative w-full h-40 bg-gray-100 rounded-lg">
											<Image src={livro.link_capa} alt="Imagem do livro" fill priority className='object-contain rounded-lg' />
										</div>
									</div>

									<div className="flex-1 flex flex-col gap-2">
										<h2 className='font-semibold text-xl capitalize'>
											{livro.titulo}
										</h2>

										<div className="mt-3 flex flex-wrap gap-4">
											{Object.entries(livro).map(([key, value]) => (
												key !== "link_capa" && (
													<div className="flex justify-between gap-5 w-full text-right" key={key}>
														<h4 className="text-gray-500 capitalize">{key.replace("_", " ")}</h4>
														<p className="text-gray-800 font-semibold">{value}</p>
													</div>
												)
											))}
										</div>

										<div className="flex mt-4 justify-between">
											<Button onClick={(e: any) => handleDelete(livro)} className="btnPerigo hover:bg-red-500">Deletar</Button>
											<Button onClick={(e: any) => handleEdit(livro)} className="btnAzul hover:bg-sky-200">Editar</Button>
										</div>
									</div>
								</DialogPanel>
							</TransitionChild>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

export default LivroDetails;