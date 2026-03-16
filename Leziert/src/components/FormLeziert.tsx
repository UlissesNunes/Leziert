import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Building2, Globe, Users, Target, Mail,
  ArrowRight, PhoneCall, Cpu,
} from "lucide-react";

export const FormLeziert: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const inputStyle =
    "w-full bg-white/5 border border-white/10 rounded-xl px-11 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300";
  const labelStyle =
    "block text-zinc-400 text-xs font-mono uppercase tracking-widest mb-2 ml-1";
  const iconStyle =
    "absolute left-4 top-[42px] text-zinc-500 transition-colors duration-300";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    try {
      await emailjs.sendForm(
        "service_nkgwpla",
        "template_scekngo",
        formRef.current,
        "T9wHKGRIpr6kBPqv-"
      );
      console.log("E-mail enviado!");
    } catch (error) {
      console.error("Erro no E-mail:", error);
    }

    const meuNumero = "556697220111";

    const textoZap =
      `*Nova solicitação de consulta Leziert*%0A%0A` +
      `*Empresa:* ${data.company}%0A` +
      `*CPF/CNPJ:* ${data.document}%0A` +
      `*E-mail comercial:* ${data.email}%0A` +
      `*Telefone:* ${data.phone}%0A` +
      `*Tamanho da empresa:* ${data.size}%0A` +
      `*Atividade principal:* ${data.activity}%0A%0A` +
      `Responda a este contato para iniciarmos a implementação do ecossistema de automação.`;

    window.open(`https://wa.me/${meuNumero}?text=${textoZap}`, "_blank");

    formRef.current.reset();
    setFocusedField(null);
  };

  return (
    <section className="bg-black text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="relative max-w-4xl mx-auto font-sans">
        {/* Fundo de glow apenas nessa seção */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        </div>

        {/* Header */}
        <div className="mb-10 text-center md:text-left w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-200/10 border border-blue-300/20 text-blue-400 text-[10px] font-mono mb-4 uppercase tracking-tighter">
            <Cpu size={14} />
            <span>Garanta 10% de desconto na primeira implementação</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Ecossistema Leziert
          </h2>
          <p className="mt-3 text-sm md:text-base text-zinc-400 max-w-xl">
            Preencha os dados da sua empresa e receba uma análise gratuita de como automatizar seus
            processos, reduzir tarefas manuais e aumentar o faturamento.
          </p>
        </div>

        {/* Card do Formulário */}
        <div className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl w-full">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            <div className="space-y-6">
              <div className="relative">
                <label className={labelStyle}>Nome da Empresa</label>
                <Building2
                  className={`${iconStyle} ${
                    focusedField === "company" ? "text-blue-400" : ""
                  }`}
                  size={18}
                />
                <input
                  name="company"
                  required
                  type="text"
                  placeholder="Ex: Leziert Tech Corp"
                  className={inputStyle}
                  onFocus={() => setFocusedField("company")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div className="relative">
                <label className={labelStyle}>CPF ou CNPJ</label>
                <Globe
                  className={`${iconStyle} ${
                    focusedField === "document" ? "text-blue-400" : ""
                  }`}
                  size={18}
                />
                <input
                  name="document"
                  required
                  type="text"
                  placeholder="00.000.000/0001-00"
                  className={inputStyle}
                  onFocus={() => setFocusedField("document")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div className="relative">
                <label className={labelStyle}>E-mail Corporativo</label>
                <Mail
                  className={`${iconStyle} ${
                    focusedField === "email" ? "text-blue-400" : ""
                  }`}
                  size={18}
                />
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="contato@empresa.com"
                  className={inputStyle}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <label className={labelStyle}>Tamanho da empresa</label>
                <Users
                  className={`${iconStyle} ${
                    focusedField === "size" ? "text-blue-400" : ""
                  }`}
                  size={18}
                />
                <select
                  name="size"
                  required
                  className={`${inputStyle} appearance-none`}
                  onFocus={() => setFocusedField("size")}
                  onBlur={() => setFocusedField(null)}
                >
                  <option value="" className="bg-zinc-900">
                    Selecione o porte
                  </option>
                  <option value="1-10" className="bg-zinc-900">
                    1 - 10 colaboradores
                  </option>
                  <option value="11-50" className="bg-zinc-900">
                    11 - 50 colaboradores
                  </option>
                  <option value="50+" className="bg-zinc-900">
                    50+ colaboradores
                  </option>
                </select>
              </div>

              <div className="relative">
                <label className={labelStyle}>Atividade Principal</label>
                <Target
                  className={`${iconStyle} ${
                    focusedField === "activity" ? "text-blue-400" : ""
                  }`}
                  size={18}
                />
                <input
                  name="activity"
                  required
                  type="text"
                  placeholder="Ex: Clínica médica, e-commerce, escritório contábil..."
                  className={inputStyle}
                  onFocus={() => setFocusedField("activity")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div className="relative">
                <label className={labelStyle}>Número de telefone</label>
                <PhoneCall
                  className={`${iconStyle} ${
                    focusedField === "phone" ? "text-blue-400" : ""
                  }`}
                  size={18}
                />
                <input
                  name="phone"
                  required
                  type="tel"
                  placeholder="(11) 91234-5678"
                  className={inputStyle}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
            </div>

            <div className="md:col-span-2 pt-6 border-t border-white/5 mt-2 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-zinc-500 text-[10px] md:text-[11px] font-mono leading-tight max-w-sm">
                Ao enviar, você autoriza o contato da Leziert para apresentação de soluções de
                automação e confirma que os dados informados são verdadeiros e de uso profissional.
              </p>

              <button
                type="submit"
                className="group relative w-full md:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors">
                  <img
                    src="/whatsapp.webp"
                    alt="WhatsApp"
                    className="mr-1 w-5 h-5"
                  />
                  Quero falar com um especialista
                  <ArrowRight size={18} />
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Benefícios do ecossistema Leziert */}
        <div className="mt-8 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <p className="text-xs text-zinc-200">
                <span className="font-semibold text-white">Sem custo de implantação inicial</span>
                <span className="hidden sm:inline"> — comece a testar o ecossistema sem barreiras.</span>
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <p className="text-xs text-zinc-200">
                <span className="font-semibold text-white">Suporte humano + IA</span>
                <span className="hidden sm:inline"> para ajustar o fluxo ideal para o seu negócio.</span>
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <p className="text-xs text-zinc-200">
                <span className="font-semibold text-white">Garantia de 30 dias</span>
                <span className="hidden sm:inline"> — devolvemos o investimento se você não enxergar valor.</span>
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <p className="text-xs text-zinc-200">
                <span className="font-semibold text-white">Cancelamento simples, sem fidelidade</span>
                <span className="hidden sm:inline"> — você permanece apenas se fizer sentido para a operação.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};