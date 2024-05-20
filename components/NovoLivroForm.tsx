"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const livroSchema = z.object({
	titulo: z.string().min(2).max(255),
	categoria: z.string().min(2).max(50),
	subcategoria: z.string().min(2).max(50),
	autor: z.string().min(2).max(255),
	paginas: z.number().positive(),
	capa: z.string().min(2).max(255)
})

const NovoLivroForm = () => {
	const form = useForm<z.infer<typeof livroSchema>>({
		resolver: zodResolver(livroSchema),
		defaultValues: {
			titulo: "",
			categoria: "",
			subcategoria: "",
			autor: "",
			paginas: 10,
			capa: "",
		},
	})

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof livroSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">

				<FormField
					control={form.control}
					name="titulo"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Título do livro</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="categoria"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Categoria</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="subcategoria"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Subcategoria</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="autor"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Autor</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="paginas"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Quantidade de Páginas</FormLabel>
							<FormControl>
								<Input type="number" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="capa"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Capa do livro</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>

				<Button type="submit" className="btn">Cadastrar</Button>
			</form>
		</Form>
	)
}

export default NovoLivroForm;