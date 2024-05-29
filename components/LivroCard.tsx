"use client";

import { useState } from 'react'
import Image from 'next/image';
import { Button } from './ui/button';
import LivroDetails from './LivroDetails';
import { Livro } from '@/types';

interface LivroCardProps {
	livro: Livro
}

const LivroCard = ({ livro }: LivroCardProps) => {
	const { titulo, autor, categoria, subcategoria, paginas, status, link_capa } = livro;

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='livro-card group rounded-xl'>
			<div className='livro-card__content'>
				<h2 className='livro-card__content-title'>
					{titulo}
				</h2>
				<p className='livro-card__content-author'>
					{autor}
				</p>
			</div>

			<div className='livro-card__image'>
				<Image src={link_capa} alt="imagem livro" fill priority className='object-contain' />
			</div>

			<div className='relative flex w-full justify-between items-center mt-2'>
				<div className='flex group-hover:invisible w-full justify-between text-gray'>
					<div className='flex flex-col justify-center items-center gap-2'>
						<p className='text-sm text-gray-700'>
							{categoria}
						</p>
					</div>

					<div className={`flex flex-col justify-center items-center gap-2 ${status === "Reservado" ? 'bg-red-500' : 'bg-emerald-600'}`}>
						<p className='text-sm font-semibold'>
							{status}
						</p>
					</div>
				</div>

				<div className='livro-card__btn-container'>
					<Button
						type="button"
						className='w-full'
						onClick={() => setIsOpen(true)}
					>
						<span className='text-amber-700 font-bold'>
							Ver mais
						</span>

						<div className='relative -end-1/3 w-6 h-6'>
							<Image
								src={"/right-arrow.svg"}
								alt="Right Icon"
								fill
								className='object-contain'
							/>
						</div>
					</Button>
				</div>
			</div>

			<LivroDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} livro={livro} />
		</div>
	)
}

export default LivroCard;