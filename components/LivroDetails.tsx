"use client"

import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { Livro } from '@/types';

interface CarDetailsProps {
	isOpen: boolean;
	closeModal: () => void;
	livro: Livro;
}

const LivroDetails = ({ isOpen, closeModal, livro }: CarDetailsProps) => {
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

					<div className="fixed inset-0 overflow-y=auto">
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
										className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
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
										<div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
											<Image src={livro.imagem} alt="Imagem do livro" fill priority className='object-contain' />
										</div>
									</div>

									<div className="flex-1 flex flex-col gap-2">
										<h2 className='font-semibold text-xl capitalize'>
											{livro.titulo}
										</h2>

										<div className="mt-3 flex flex-wrap gap-4">
											{Object.entries(livro).map(([key, value]) => (
												<div className="flex justify-between gap-5 w-full text-right" key={key}>
													<h4 className="text-grey capitalize">{key.replace("_", " ")}</h4>
													<p className="text-black-100 font-semibold">{value}</p>
												</div>
											))}
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