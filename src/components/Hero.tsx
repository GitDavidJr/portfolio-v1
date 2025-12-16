import { Github, Linkedin, Mail, ArrowRight, Code2, Braces } from 'lucide-react';
import { motion } from 'motion/react';
import { TypewriterCode } from './TypewriterCode';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const technologies = ['Java', 'Node.js', 'React', 'Next.js', 'Docker', 'Kubernetes', 'AWS'];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Disponível para projetos</span>
              </div>
            </div>

            <h1 className="mb-6 text-white">
              Olá, eu sou
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                David Júnior
              </span>
            </h1>

            <div className="mb-6 flex items-center gap-3 text-slate-300">
              <Code2 className="text-blue-400" size={24} />
              <span className="text-xl">Desenvolvedor Full Stack</span>
            </div>

            <p className="text-slate-400 mb-8 max-w-xl leading-relaxed">
              Especializado em <span className="text-blue-400">Java</span> e <span className="text-blue-400">Node.js</span>,
              criando soluções escaláveis e modernas. Experiência em DevOps, arquitetura de microserviços
              e desenvolvimento de aplicações web completas.
            </p>

            {/* Tech Stack Pills */}
            <div className="mb-8">
              <p className="text-slate-500 mb-3">Tech Stack:</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-md border border-slate-700/50 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-blue-500/50 flex items-center gap-2"
              >
                Ver Projetos
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/GitDavidJr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-all text-slate-300 hover:text-blue-400 border border-slate-700/50 hover:border-blue-500/50"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/devdavidjunior"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-all text-slate-300 hover:text-blue-400 border border-slate-700/50 hover:border-blue-500/50"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:davidjunior@email.com"
                className="p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-all text-slate-300 hover:text-blue-400 border border-slate-700/50 hover:border-blue-500/50"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Profile Image & Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl"></div>

              {/* Main card */}
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 shadow-2xl">
                {/* Profile Image */}
                <div className="mb-6 relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-50"></div>
                  <img
                    src="/ft.jpg"
                    alt="David Júnior"
                    className="relative w-48 h-48 rounded-full object-cover border-4 border-slate-800 mx-auto"
                  />
                </div>

                {/* Code snippet decoration */}
                <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-800 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-3 text-slate-500">
                    <Braces size={16} className="text-blue-400" />
                    <span>developer.js</span>
                  </div>
                  <TypewriterCode />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-3 bg-slate-950/50 rounded-lg border border-slate-800">
                    <div className="text-blue-400 mb-1">1+</div>
                    <div className="text-slate-500 text-xs">Ano</div>
                  </div>
                  <div className="text-center p-3 bg-slate-950/50 rounded-lg border border-slate-800">
                    <div className="text-cyan-400 mb-1">10+</div>
                    <div className="text-slate-500 text-xs">Projetos</div>
                  </div>
                  <div className="text-center p-3 bg-slate-950/50 rounded-lg border border-slate-800">
                    <div className="text-purple-400 mb-1">20+</div>
                    <div className="text-slate-500 text-xs">Tecnologias</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-blue-400 transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs">Scroll</span>
          <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-blue-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.button>
    </section>
  );
}
