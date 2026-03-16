

export const FooterLeziert: React.FC = () => {
  const currentYear = new Date().getFullYear();
const whatsappGo = () => {
        const numero = "556697220111";
        const mensagem = "Olá, quero saber mais sobre a Leziert!";
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank");
    }
  return (
    <footer className="bg-gradient-to-r from-slate-950 via-slate-950 to-slate-950 text-white  border-t-3 border-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-blue-100 mb-4">Leziert</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Inovação e excelência em soluções digitais.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-blue-100 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
             
              <li>
                <a href="#" className="hover:text-blue-100 transition" onClick={whatsappGo}>
                  Serviços
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-100 transition" onClick={whatsappGo}>
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-blue-100 mb-4">
              Contato
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Email: leziertautomacoes@gmail.com</li>
              <li>Phone: +55 (66) 9722-0111</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-500/30 pt-8 mt-8">
          {/* Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Leziert. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition text-sm"
              >
                Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition text-sm"
              >
                Termos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
