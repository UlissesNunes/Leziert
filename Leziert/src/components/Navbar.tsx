import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tecnologia', href: '#tech' },
    { name: 'Soluções', href: '#solutions' },
    { name: 'Performance', href: '#performance' },
    { name: 'Sobre', href: '#about' },
  ];

  const whatsappGo = () => {
    const numero = '556697220111';
    const mensagem =
      'Olá, quero saber como a Leziert pode automatizar os processos da minha empresa.';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ease-out ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-900/70 py-2 shadow-[0_4px_20px_rgba(15,23,42,0.7)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-1 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <img
              src="/leziert-logo-fundobranco.webp"
              alt="Leziert Logo"
              className="w-10 h-10"
            />
          </div>
          <span className="text-xl font-bold tracking-tighter text-blue-100 uppercase italic">
            Leziert
          </span>
        </div>

        {/* Navegação desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-thin text-blue-50 transition-all duration-200 hover:bg-gradient-to-b hover:from-blue-100 hover:to-cyan-300 hover:bg-clip-text hover:text-transparent"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA desktop */}
        <div className="hidden md:block">
          <button
            onClick={whatsappGo}
            className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white text-sm font-medium shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:shadow-[0_0_40px_rgba(56,189,248,0.7)] hover:translate-y-[-1px] active:translate-y-[1px] transition-all"
          >
            <img
              src="/whatsapp.webp"
              alt="WhatsApp"
              className="w-5 h-5"
            />
            <span>Falar com um especialista</span>
          </button>
        </div>

        {/* Toggle mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-blue-100 hover:text-blue-300 transition-colors focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 md:hidden transition-all duration-500 ease-out ${
          isOpen
            ? 'opacity-100 translate-y-0 bg-slate-950/95 z-40 pointer-events-auto'
            : 'opacity-0 -translate-y-full bg-slate-950/95 z-[-10] pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)} // toque no fundo → fecha
      >
        {/* Card interno (não fecha ao clicar dentro) */}
        <div
          className="relative w-full h-full flex items-center justify-center px-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full max-w-sm rounded-3xl bg-slate-900/80 border border-slate-800 px-6 py-8 flex flex-col items-center gap-6">
            {/* Botão de fechar dentro do card */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-100 transition-colors"
              aria-label="Fechar menu"
            >
              <X size={22} />
            </button>

            {/* CTA topo */}
            <button
              onClick={whatsappGo}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white text-sm font-medium shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:shadow-[0_0_40px_rgba(56,189,248,0.7)] hover:translate-y-[-1px] active:translate-y-[1px] transition-all"
            >
              <img
                src="/whatsapp.webp"
                alt="WhatsApp"
                className="w-5 h-5"
              />
              <span>Falar com um especialista</span>
            </button>

            {/* Links */}
            <div className="flex flex-col items-center gap-4 mt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-thin text-blue-100 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;