import { Code2, Rocket, Users } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Código Limpo',
      description: 'Escrevo código limpo, testável e bem documentado seguindo as melhores práticas da indústria.',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Entrega Rápida',
      description: 'Experiência em CI/CD e DevOps para garantir deploys confiáveis e automatizados.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Trabalho em Equipe',
      description: 'Colaborativo e comunicativo, sempre buscando compartilhar conhecimento com o time.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white">Sobre Mim</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img
              src="/dev2.png"
              alt="Desenvolvimento de software"
              className="relative rounded-lg shadow-xl w-full h-auto border border-slate-800 -scale-x-100"
            />
          </div>

          <div>
            <p className="text-slate-300 mb-6">
              Sou um desenvolvedor full stack apaixonado por criar soluções inovadoras e escaláveis.
              Atualmente cursando o 7º semestre de Sistemas de Informação, combino conhecimento
              acadêmico com experiência prática no desenvolvimento de aplicações modernas.
            </p>
            <p className="text-slate-300 mb-6">
              Minha expertise abrange desde o backend robusto com Java e Node.js até interfaces
              modernas com React e Next.js. Tenho forte experiência em DevOps, trabalhando com
              Docker, Kubernetes, AWS e pipelines de CI/CD.
            </p>
            <p className="text-slate-300">
              Busco constantemente aprender novas tecnologias e aplicar as melhores práticas de
              desenvolvimento para criar produtos que fazem a diferença.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-slate-800/50 rounded-lg hover:shadow-lg hover:shadow-blue-500/10 transition-all border border-slate-700 hover:border-blue-500/50 group"
            >
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="mb-2 text-white">{item.title}</h3>
              <p className="text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
