import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.skills'), id: 'skills' },
    { label: t('nav.projects'), id: 'projects' },
    { label: t('nav.education'), id: 'education' },
    { label: t('nav.contact'), id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors"
          >
            <div className="relative h-5 w-20 overflow-hidden">
              <img
                src="/logo-clean.png"
                alt="Logo"
                className="absolute w-full h-full object-contain object-center"
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-blue-400 transition-colors"
              >
                {item.label}
              </button>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center gap-1 text-sm">
              <button
                onClick={() => i18n.changeLanguage('pt')}
                className={`transition-colors ${i18n.language === 'pt' ? 'text-blue-400 font-medium' : 'text-slate-500 hover:text-slate-300'}`}
              >
                PT
              </button>
              <span className="text-slate-600">|</span>
              <button
                onClick={() => i18n.changeLanguage('en')}
                className={`transition-colors ${i18n.language === 'en' ? 'text-blue-400 font-medium' : 'text-slate-500 hover:text-slate-300'}`}
              >
                EN
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Language Toggle Mobile */}
            <div className="flex items-center gap-1 text-sm">
              <button
                onClick={() => i18n.changeLanguage('pt')}
                className={`transition-colors ${i18n.language === 'pt' ? 'text-blue-400 font-medium' : 'text-slate-500 hover:text-slate-300'}`}
              >
                PT
              </button>
              <span className="text-slate-600">|</span>
              <button
                onClick={() => i18n.changeLanguage('en')}
                className={`transition-colors ${i18n.language === 'en' ? 'text-blue-400 font-medium' : 'text-slate-500 hover:text-slate-300'}`}
              >
                EN
              </button>
            </div>

            <button
              className="text-slate-300 hover:text-blue-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-300 hover:text-blue-400 transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}