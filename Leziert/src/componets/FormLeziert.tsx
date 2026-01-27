import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Building2, Globe, Users, Target, Mail,
  ArrowRight, PhoneCall, Cpu,
} from "lucide-react";

export const FormLeziert: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Estilos reutilizáveis para manter o código limpo
  const inputStyle = "w-full bg-white/5 border border-white/10 rounded-xl px-11 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300";
  const labelStyle = "block text-zinc-400 text-xs font-mono uppercase tracking-widest mb-2 ml-1";
  const iconStyle = "absolute left-4 top-[42px] text-zinc-500 transition-colors duration-300";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // 1. Extração de dados
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    // 2. Envio de E-mail (Configura o EmailJS com os teus IDs reais)
    try {
      // Substitua: 'SERVICE_ID', 'TEMPLATE_ID', 'PUBLIC_KEY'
      await emailjs.sendForm('service_nkgwpla', 'template_scekngo', formRef.current, 'T9wHKGRIpr6kBPqv-');
      console.log("E-mail enviado!");
    } catch (error) {
      console.error("Erro no E-mail:", error);
    }

    // 3. Envio de WhatsApp
    const meuNumero = "556697220111"; // Substitui pelo teu número (DDD + Número)
    const textoZap = `*Solicitação Leziert*%0A%0A` +
      `*Nome da Empresa:* ${data.company}%0A` +
      `*Cnpj/cpf:* ${data.document}%0A` +
      `*E-mail comercial:* ${data.email}%0A` +
      `*Telefone:* ${data.phone}%0A` +
      `*Tamanho:* ${data.size}%0A` +
      `*Atividade:* ${data.activity}`;

    window.open(`https://wa.me/${meuNumero}?text=${textoZap}`, "_blank");

    formRef.current.reset();
    setFocusedField(null);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex items-center justify-center font-sans">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative w-full max-w-4xl flex flex-col items-center">
        {/* Header */}
        <div className="mb-10 text-center md:text-left w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-200/10 border border-blue-300/20 text-blue-400 text-[10px] font-mono mb-4 uppercase tracking-tighter">
            <Cpu size={14} /> <span>Garanta 10% de desconto no primeiro plano</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Ecossistema Leziert
          </h1>
        </div>

        {/* Card do Formulário */}
        <div className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl w-full">
          <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="space-y-6">
              <div className="relative">
                <label className={labelStyle}>Nome da Empresa</label>
                <Building2 className={`${iconStyle} ${focusedField === "company" ? "text-blue-400" : ""}`} size={18} />
                <input name="company" required type="text" placeholder="Ex: Leziert Tech Corp" className={inputStyle} onFocus={() => setFocusedField("company")} onBlur={() => setFocusedField(null)} />
              </div>

              <div className="relative">
                <label className={labelStyle}>CPF ou CNPJ</label>
                <Globe className={`${iconStyle} ${focusedField === "document" ? "text-blue-400" : ""}`} size={18} />
                <input name="document" required type="number" placeholder="00.000.000/0001-00" className={inputStyle} onFocus={() => setFocusedField("document")} onBlur={() => setFocusedField(null)} />
              </div>

              <div className="relative">
                <label className={labelStyle}>E-mail Corporativo</label>
                <Mail className={`${iconStyle} ${focusedField === "email" ? "text-blue-400" : ""}`} size={18} />
                <input name="email" required type="email" placeholder="tech@empresa.com" className={inputStyle} onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)} />
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <label className={labelStyle}>Tamanho da empresa</label>
                <Users className={`${iconStyle} ${focusedField === "size" ? "text-blue-400" : ""}`} size={18} />
                <select name="size" required className={`${inputStyle} appearance-none`} onFocus={() => setFocusedField("size")} onBlur={() => setFocusedField(null)}>
                  <option value="" className="bg-zinc-900">Selecione o volume</option>
                  <option value="1-10" className="bg-zinc-900">1 - 10 colaboradores</option>
                  <option value="11-50" className="bg-zinc-900">11 - 50 colaboradores</option>
                  <option value="50+" className="bg-zinc-900">50+ colaboradores</option>
                </select>
              </div>

              <div className="relative">
                <label className={labelStyle}>Atividade Principal</label>
                <Target className={`${iconStyle} ${focusedField === "activity" ? "text-blue-400" : ""}`} size={18} />
                <input name="activity" required type="text" placeholder="Ex: Cloud Computing" className={inputStyle} onFocus={() => setFocusedField("activity")} onBlur={() => setFocusedField(null)} />
              </div>

              <div className="relative">
                <label className={labelStyle}>Número de telefone</label>
                <PhoneCall className={`${iconStyle} ${focusedField === "phone" ? "text-blue-400" : ""}`} size={18} />
                <input name="phone" required type="tel" placeholder="(11) 91234-5678" className={inputStyle} onFocus={() => setFocusedField("phone")} onBlur={() => setFocusedField(null)} />
              </div>
            </div>

            <div className="md:col-span-2 pt-6 border-t border-white/5 mt-4 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-zinc-500 text-[10px] font-mono leading-tight max-w-sm">
                AO SUBMETER ESTES DADOS, CONCORDA COM OS PROTOCOLOS DE ENCRIPTAÇÃO AES-256 DA LEZIERT INFRASTRUCTURE.
              </p>

              <button type="submit" className="group relative w-full md:w-auto px-10 py-4 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors">
                  <img src="/public/whatsapp.webp" alt="" className="flex  mr-1 w-5 h-5 justify-center align-middle"/> ENVIAR DADOS<ArrowRight size={18} />
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Segurança */}
        <div className="mt-8 flex justify-center gap-12 text-zinc-600 font-mono text-[10px] tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-blue-500 rounded-full" /> AES-256 Encrypted
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-blue-500 rounded-full" /> ISO 27001 Compliant
          </div>
        </div>
      </div>
    </div>
  );
};

