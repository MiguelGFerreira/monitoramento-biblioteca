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
		<div className='livro-card group'>
			<div className='livro-card__content'>
				<h2 className='livro-card__content-title'>
					{titulo}
				</h2>
			</div>

			<p className='flex mt-6 text-[32px] font-extrabold'>
				{autor}
			</p>

			<div className='relative w-full h-40 my-3 object-contain'>
				<Image src={link_capa} alt="imagem livro" fill priority className='object-contain' />
			</div>

			<div className='relative flex w-full mt-2'>
				<div className='flex group-hover:invisible w-full justify-between text-gray'>
					<div className='flex flex-col justify-center items-center gap-2'>
						<p className='text-[14px]'>
							{categoria}
						</p>
					</div>

					<div className='flex flex-col justify-center items-center gap-2'>
						<p className='text-[14px]'>
							{subcategoria}
						</p>
					</div>

					<div className='flex flex-col justify-center items-center gap-2'>
						<p className='text-[14px]'>
							{paginas}
						</p>
					</div>
				</div>

				<div className='livro-card__btn-container'>
					<Button
						type="button"
						className='w-full py-[16px]'
						onClick={() => setIsOpen(true)}
					>
						<span className='text-amber-700 text-[14px] leading-[17px] font-bold'>
							Ver mais
						</span>

						<div className='relative w-6 h-6'>
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