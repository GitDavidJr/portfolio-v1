import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  demo: string | null;
}

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
    );
  }

  return (
    <div className="relative w-full h-full">
      <img
        src={images[currentIndex]}
        alt={`${title} - ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-slate-900/70 hover:bg-slate-900/90 rounded-full text-white transition-colors z-20"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-slate-900/70 hover:bg-slate-900/90 rounded-full text-white transition-colors z-20"
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-blue-400' : 'bg-slate-500/70'
              }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  const projects: Project[] = [
    {
      title: 'PulseChat',
      description: 'CRM com chatbot e IA para WhatsApp. Inclui automação de mensagens, integração com IA, processamento de pagamentos e gestão de conversas em tempo real.',
      images: ['/projetos/pulsechat/home.png', '/projetos/pulsechat/workflow.png'],
      tags: ['Next.js', 'Shadcn', 'Node.js', 'Fastify', 'MongoDB', 'OpenAI', 'Prisma', 'AWS', 'Stripe', 'WhatsApp'],
      demo: 'https://pulsechat-web.vercel.app',
    },
    {
      title: 'ProGest HGVC',
      description: 'Sistema de gerenciamento de estoque para medicamentos e materiais hospitalares do Hospital de Base de Vitória da Conquista.',
      images: ['/projetos/hgvc.png'],
      tags: ['Vue.js', 'Vite', 'Laravel', 'Shadcn', 'JWT', 'MySQL'],
      demo: null,
    },
    {
      title: 'EFA Doar',
      description: 'Sistema de doação online para a Escola Família Agrícola de Botuporã. Integrado com gateway de pagamento Cielo.',
      images: ['/projetos/efa-doar.png'],
      tags: ['Next.js', 'MongoDB', 'Cielo'],
      demo: 'https://efa-botupora-doar.vercel.app',
    },
    {
      title: 'Dashboard Financeiro',
      description: 'Dashboard para visualização de dados internos financeiros de uma distribuidora. Integração com automações e design personalizado.',
      images: ['/projetos/dashboard.png'],
      tags: ['Next.js', 'Supabase', 'PostgreSQL', 'n8n', 'Figma'],
      demo: null,
    },
    {
      title: 'Landing Page',
      description: 'Modelo de landing page responsiva com implementação de envio de e-mail e design moderno.',
      images: ['/projetos/landingpage.png'],
      tags: ['Next.js', 'CSS Modules', 'Mixins', 'Email'],
      demo: 'https://landing-page-david.vercel.app',
    },
    {
      title: 'Vitória Beatriz',
      description: 'Portfólio de arquitetura estilo blog para exibição de projetos. Permite que a arquiteta publique seus trabalhos e clientes explorem o catálogo.',
      images: ['/projetos/vitoriabeatriz.png'],
      tags: ['React', 'Vite', 'Supabase', 'PostgreSQL', 'Lovable'],
      demo: 'https://vitoriabeatriz.lovable.app/',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white">Projetos em Destaque</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Projetos reais que desenvolvi aplicando minhas habilidades técnicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:shadow-blue-500/10 transition-all border border-slate-700 hover:border-blue-500/50 group"
            >
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 z-10 pointer-events-none"></div>
                <ImageCarousel images={project.images} title={project.title} />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-white">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 5).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="px-3 py-1 text-slate-500 text-sm">
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Ver Projeto</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
