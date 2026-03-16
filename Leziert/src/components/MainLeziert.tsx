import React from 'react';
import { ContentLeziert } from './ContentLeziert';

export const MainLeziert: React.FC = () => {
  const whatsappGo = () => {
    const numero = '556697220111';
    const mensagem =
      'Olá, quero saber como a Leziert pode automatizar os processos da minha empresa.';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <main className="bg-black">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Texto + CTA */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 mt-10 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-[11px] font-mono uppercase tracking-[0.25em] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span>Automação orientada por IA</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-4">
                Automatize processos{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-500 bg-clip-text text-transparent">
                  críticos do seu negócio
                </span>{" "}
                com a Leziert.
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300/90 mb-6 max-w-xl">
                Reduza tarefas repetitivas e ganhe clareza sobre o que realmente gera resultado,
                conectando atendimento, site e campanhas em um único ecossistema.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <button
                  onClick={whatsappGo}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-medium text-sm shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:shadow-[0_0_45px_rgba(56,189,248,0.7)] hover:translate-y-[-1px] active:translate-y-[1px] transition-all"
                >
                  <img
                    src="/whatsapp.webp"
                    alt="WhatsApp"
                    className="w-5 h-5"
                  />
                  <span>Falar com um especialista</span>
                </button>

                <button
                  onClick={whatsappGo}
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-full border border-slate-700 text-slate-200 text-sm hover:border-blue-400 hover:text-blue-100 transition-colors"
                >
                  Ver como funciona na prática
                </button>
              </div>

              <p className="text-[11px] sm:text-xs text-slate-500 max-w-sm">
                Primeira conversa sem compromisso. Em poucos minutos você entende onde a automação
                pode liberar mais tempo para o que importa.
              </p>
            </div>

            {/* Imagem responsiva minimalista com hover */}
            <div className="relative">
              <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-tr from-blue-500/35 via-cyan-400/20 to-sky-500/15 blur-3xl opacity-70 pointer-events-none" />

              <div
                className="
                  relative group
                  rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden
                  shadow-[0_0_60px_rgba(37,99,235,0.5)] backdrop-blur-xl
                  transition-all duration-500 ease-out
                  hover:shadow-[0_0_80px_rgba(56,189,248,0.7)]
                  hover:border-blue-400/70
                  hover:-translate-y-1 hover:scale-[1.02]
                "
              >
                <div className="aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] overflow-hidden">
                  <img
                    src="/solucoesdigitais.webp"
                    alt="Interface tecnológica do ecossistema Leziert"
                    className="
                      w-full h-full object-cover object-center
                      transform transition-transform duration-700 ease-out
                      group-hover:scale-105
                    "
                    loading="lazy"
                  />
                </div>

                {/* Barra inferior – conteúdo mais útil */}
                <div className="px-4 sm:px-5 py-3 bg-black/40 backdrop-blur-md border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-200">
                      Onboarding guiado pela equipe Leziert
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-200">
                      Integração com WhatsApp e site já no início
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-200">
                      Acompanhamento de resultados mês a mês
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conteúdo abaixo do hero */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          <ContentLeziert />
        </section>
      </main>
    </>
  );
};