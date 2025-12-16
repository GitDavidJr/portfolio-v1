import { GraduationCap, Award, Calendar } from 'lucide-react';

export function Education() {
  const education = {
    degree: 'Bacharelado em Sistemas de Informação',
    institution: 'Instituto Federal de Educação, Ciência e Tecnologia do Estado da Bahia',
    period: '2023 - 2026 (Previsão)',
    currentSemester: '7º Semestre',
    description: 'Formação focada em desenvolvimento de software, arquitetura de sistemas, banco de dados e gestão de projetos de tecnologia.',
  };

  const certifications = [
    {
      title: 'Estrutura de Dados em Python',
      issuer: 'Fundação Bradesco',
      date: '2024',
    },
    {
      title: 'Campus Party 2024',
      issuer: 'Eventos Campus Party',
      date: '2024',
    },
    {
      title: 'Mensageria na Prática: Spring Boot + RabbitMQ',
      issuer: 'Week-it',
      date: '2025',
    },
    {
      title: 'Introdução ao Desenvolvimento Mobile com Flutter',
      issuer: 'Week-it',
      date: '2025',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white">Educação & Certificações</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="bg-slate-900/50 p-8 rounded-lg shadow-md hover:shadow-xl hover:shadow-blue-500/10 transition-all border border-slate-800 hover:border-blue-500/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-blue-400">Formação Acadêmica</h3>
              </div>
            </div>

            <h3 className="mb-2 text-white">{education.degree}</h3>
            <p className="text-slate-300 mb-2">{education.institution}</p>
            
            <div className="flex items-center gap-2 text-slate-400 mb-4">
              <Calendar size={16} />
              <span>{education.period}</span>
            </div>

            <div className="inline-block px-4 py-2 bg-green-500/10 text-green-400 rounded-full border border-green-500/20 mb-4">
              {education.currentSemester}
            </div>

            <p className="text-slate-400">{education.description}</p>
          </div>

          {/* Certifications Card */}
          <div className="bg-slate-900/50 p-8 rounded-lg shadow-md hover:shadow-xl hover:shadow-purple-500/10 transition-all border border-slate-800 hover:border-purple-500/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg border border-purple-500/20">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-purple-400">Certificações</h3>
              </div>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 hover:border-cyan-500 transition-colors">
                  <h4 className="mb-1 text-white">{cert.title}</h4>
                  <p className="text-slate-400">{cert.issuer}</p>
                  <p className="text-slate-500">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
