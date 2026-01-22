import React from 'react';

export const MainLeziert: React.FC = () => {
    return (
    <>
            {/* Main Content */}
            <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black ">
                <section className="text-center mb-16">
                    <h2 className=" pt-11 text-3xl font-bold text-white mb-4">Automatize Processos, ganhe tempo e gere + resultados</h2>
                    <p className="text-base text-slate-300 mb-8">Transformamos processos manuais em automações que economizam tempo e te geram resultados</p>


                   
                    <button className="bg-transparent hover:bg-transparent hover:border-blue-400 border-b-2  border-blue-900  text-blue-50 hover:text-blue-100 font-semibold py-3 px-8 rounded-sm transition-all duration-100 ease-out">
                        Garanta seu Acesso agora
                    </button>
                </section>
                <section className="flex justify-center mb-16">
                     <img src="/public/solucoesdigitais.webp" alt="" />
                </section>

                {/* Content Area */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition">
                        <h3 className="text-xl font-bold text-white mb-2">Oque é a Leziert?</h3>
                        <p className="text-slate-400 ">Somos uma empresa especializada que te prioriza, fornecendo assistência 24h com nossa equipe, segurança em sua rotina, confiabilidade e lucro para seu negocio: Direto e Assertivo.</p>

                        
                    </div>
                    
                    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition">
                        <h3 className="text-xl font-bold text-white mb-2">Qual a nossa estratégia?</h3>
                        <p className="text-slate-400">Alavancaremos todo o processo de atendimento direto ao cliente com nossa IA integrada + marketing digital + site com nosso método empresarial para atrair e converter clientes, você foca no seu produto final e as demais atribuições cuidamos para você.  </p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition">
                        <h3 className="text-xl font-bold text-white mb-2">Como vamos aumentar seu lucro com a Leziert?</h3>
                        <p className="text-slate-400">Nós garantimos todo acompanhamento e treinamento para nossas ferramentas trazerem resultados no seu dia a dia. </p>
                        <p className="text-slate-400">Estamos comprometidos com sua instituição.</p>
                    </div>

                   
                </section>
            </main>
        </>
    );
};