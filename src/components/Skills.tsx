import { Server, Code, Cloud, Database, Wrench, GitBranch } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Backend',
      color: 'bg-green-500/10 text-green-400 border-green-500/20',
      skills: ['Java', 'Kotlin', 'Node.js', 'Spring Boot', 'Fastify', 'Express.js', 'REST APIs', 'WebSocket'],
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Frontend',
      color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      skills: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI', 'JavaScript'],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Banco de Dados',
      color: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase', 'Prisma', 'Redis'],
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'DevOps & Cloud',
      color: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      skills: ['Docker', 'AWS', 'Google Cloud', 'Vercel', 'Cloudflare', 'CI/CD', 'GitHub Actions'],
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Ferramentas',
      color: 'bg-red-500/10 text-red-400 border-red-500/20',
      skills: ['Git', 'VS Code', 'N8N', 'Postman', 'Figma', 'Lovable'],
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'Metodologias',
      color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      skills: ['Agile', 'Scrum', 'TDD', 'Clean Code', 'Design Patterns', 'Microservices'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white">Habilidades & Tecnologias</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Um conjunto diversificado de tecnologias e ferramentas que utilizo para criar soluções completas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900/50 p-6 rounded-lg shadow-md hover:shadow-xl hover:shadow-blue-500/10 transition-all border border-slate-800 hover:border-blue-500/50 group"
            >
              <div className={`inline-flex p-3 rounded-lg ${category.color} border mb-4 group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="mb-4 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-full border border-slate-700 hover:border-blue-500/50 hover:text-blue-400 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
