import { useState } from "react";
import {
  Building2,
  Globe,
  Users,
  Target,
  Mail,
  ArrowRight,
  Database,
  Cpu,
} from "lucide-react";

const FormLeziert = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const inputStyle =
    "w-full bg-white/5 border border-white/10 rounded-xl px-11 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300";
  const labelStyle =
    "block text-zinc-400 text-xs font-mono uppercase tracking-widest mb-2 ml-1";
  const iconStyle =
    "absolute left-4 top-[42px] text-zinc-500 transition-colors duration-300";

  return (
    <div className="min-h-screen bg-black text-white p-6 flex items-center justify-center font-sans">
      {/* Background Decorativo Estilo Tech */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative w-full max-w-4xl">
        {/* Header do Formulário */}
        <div className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <Cpu size={14} /> SYSTEM_READY: DATA_COLLECTION_V1
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            Análise de Ecossistema Leziert
          </h1>
          <p className="text-zinc-400 mt-4 max-w-xl">
            Insira os dados da sua operação para que nossa inteligência de
            hardware processe o diagnóstico de performance.
          </p>
        </div>

        {/* Card do Formulário */}
        <div className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Coluna 1: Identidade */}
            <div className="space-y-6">
              <div className="relative">
                <label className={labelStyle}>Nome da Empresa</label>
                <Building2
                  className={`${iconStyle} ${
                    focusedField === "company" ? "text-emerald-400" : ""
                  }`}
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Ex: Leziert Tech Corp"
                  className={inputStyle}
                  onFocus={() => setFocusedField("company")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div className="relative">
                <label className={labelStyle}>Website Oficial</label>
                <Globe
                  className={`${iconStyle} ${
                    focusedField === "web" ? "text-emerald-400" : ""
                  }`}
                  size={18}
                />
                <input
                  type="url"
                  placeholder="https://suaempresa.com"
                  className={inputStyle}
                  onFocus={() => setFocusedField("web")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div className="relative">
                <label className={labelStyle}>E-mail Corporativo</label>
                <Mail
                  className={`${iconStyle} ${
                    focusedField === "email" ? "text-emerald-400" : ""
                  }`}
                  size={18}
                />
                <input
                  type="email"
                  placeholder="tech@empresa.com"
                  className={inputStyle}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
            </div>

            {/* Coluna 2: Métricas e Escopo */}
            <div className="space-y-6">
              <div className="relative">
                <label className={labelStyle}>Tamanho do Time</label>
                <Users
                  className={`${iconStyle} ${
                    focusedField === "size" ? "text-emerald-400" : ""
                  }`}
                  size={18}
                />
                <select
                  className={`${inputStyle} appearance-none cursor-pointer`}
                  onFocus={() => setFocusedField("size")}
                  onBlur={() => setFocusedField(null)}
                >
                  <option value="" className="bg-zinc-900">
                    Selecione o volume
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
                <label className={labelStyle}>Foco Tecnológico Principal</label>
                <Target
                  className={`${iconStyle} ${
                    focusedField === "focus" ? "text-emerald-400" : ""
                  }`}
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Ex: Cloud Computing, AI, Hardware"
                  className={inputStyle}
                  onFocus={() => setFocusedField("focus")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div className="relative">
                <label className={labelStyle}>Volume de Dados Mensal</label>
                <Database
                  className={`${iconStyle} ${
                    focusedField === "data" ? "text-emerald-400" : ""
                  }`}
                  size={18}
                />
                <select
                  className={`${inputStyle} appearance-none cursor-pointer`}
                  onFocus={() => setFocusedField("data")}
                  onBlur={() => setFocusedField(null)}
                >
                  <option value="" className="bg-zinc-900">
                    Selecione a escala
                  </option>
                  <option value="tb" className="bg-zinc-900">
                    Até 10 Terabytes
                  </option>
                  <option value="pb" className="bg-zinc-900">
                    Escala de Petabytes
                  </option>
                  <option value="infinite" className="bg-zinc-900">
                    Escala Enterprise (Zetabytes)
                  </option>
                </select>
              </div>
            </div>

            {/* Linha de Rodapé/Ação */}
            <div className="md:col-span-2 pt-6 border-t border-white/5 mt-4 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-zinc-500 text-[10px] font-mono leading-tight max-w-sm">
                AO SUBMETER ESTES DADOS, VOCÊ CONCORDA COM OS PROTOCOLOS DE
                ENCRIPTAÇÃO END-TO-END DA LEZIERT INFRASTRUCTURE.
              </p>

              <button className="group relative w-full md:w-auto px-10 py-4 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors">
                  PROCESSAR DIAGNÓSTICO <ArrowRight size={18} />
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Footer info */}
        <div className="mt-8 flex justify-center gap-12 text-zinc-600 font-mono text-[10px] tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-emerald-500 rounded-full" /> AES-256
            Encrypted
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-emerald-500 rounded-full" /> ISO 27001
            Compliant
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLeziert;
