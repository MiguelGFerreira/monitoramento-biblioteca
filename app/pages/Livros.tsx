import LivroCard from "@/components/LivroCard";
import NovoLivroForm from "@/components/NovoLivroForm";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Livro } from "@/types";

const Livros = ({ livros }: { livros: Livro[] }) => {
  return (
    <main>
      <div className='mt-12 padding-x padding-y max-width'>
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
          <h1 className='text-4xl font-extrabold'>Livros</h1>
        </div>

        <Sheet>
          <SheetTrigger className="btn">
            Novo Livro
          </SheetTrigger>
          <SheetContent className="bg-white">
            <SheetHeader>
              <SheetTitle>Criando livro novo</SheetTitle>
            </SheetHeader>
            <NovoLivroForm />
          </SheetContent>
        </Sheet>

        {livros.length > 0 ? (
          <section>
            <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
              {livros.map((livro: Livro) => (
                <LivroCard key={livro.id} livro={livro} />
              ))}
            </div>
          </section>
        ) : (
          <div className="text-center">Carregando livros...</div>
        )}
      </div>
    </main>
  );
};

export default Livros;
