import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito para mudar o fundo ao scrollar,
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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-gradient-to-br from-blue-950 to-black ${
      scrolled ? 'bg-blue/70 backdrop-blur-xl border-b border-blue-950/10 py-2' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-3 flex justify-between items-center ">
        
        {/* Logo - Laziert */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className=" p-1 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <img src="/leziert-logo-fundobranco.webp" alt="Leziert Logo" className="w-10 h-10" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-blue-100 uppercase italic">
            Leziert
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-thin text-blue-50
    transition-all duration-200

    hover:bg-gradient-to-b
    hover:from-blue-100 hover:to-cyan-300
    hover:bg-clip-text
    hover:text-transparent"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button - Estilo Tech */}
        <div className="hidden md:block">
          <button className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition-all bg-white rounded-full hover:bg-white group">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-full bg-gradient-to-br from-blue-950 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative text-blue-950 group-hover:text-white flex items-center gap-2 text-sm font-bold">
              Experimentar <ChevronRight size={16} />
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-100 hover:text-blue-950 transition-colors focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-slate-950 z-[-1] md:hidden transition-all duration-500 ease ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-6">
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
          <button className="mt-4 px-10 py-4 bg-gradient-to-br from-blue-950to-cyan-300 text-blue-50 rounded-full font-bold">
            Começar Agora
          </button>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;