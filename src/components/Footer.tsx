import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-slate-400 text-center flex items-center gap-2">
            Desenvolvido com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> por David Júnior
          </p>
          <p className="text-slate-600">
            © {currentYear} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}