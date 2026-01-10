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

                {/* Content Area */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition">
                        <h3 className="text-xl font-bold text-white mb-2">Por quê a Leziert?</h3>
                        <p className="text-slate-400">Somos uma empresa especializada que te prioriza, fornecendo assistência 24h com nossa equipe, segurança em sua rotina, confiabilidade e lucro para seu negocio: Direto e Assertivo.</p>

                        <p className="text-slate-400">IA INTEGRADA.</p> 
                        <p className="text-slate-400">SISTEMA DIGITAL.</p>
                        <p className="text-slate-400">MARKETING E ACOMPANHAMENTO.</p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition">
                        <h3 className="text-xl font-bold text-white mb-2">Quais ferramentas utilizamos?</h3>
                        <p className="text-slate-400">Alavancaremos todo o processo de atendimento direto ao cliente com nossa IA integrada + marketing digital e expansão da sua imagem empresarial em toda a internet através de nosso site e estratégias para atrair o público e converter em clientes.  </p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition">
                        <h3 className="text-xl font-bold text-white mb-2">Como vou aumentar meu lucro com a Leziert?</h3>
                        <p className="text-slate-400">Nós te garantimos todo acompanhamento e treinamento para nossas ferramentas trazerem resultados no seu dia a dia, através de nossos métodos, você foca no seu produto final e as demais atribuições cuidamos para você.</p>
                        <p className="text-slate-400">Estamos comprometidos com sua instituição</p>
                    </div>
                </section>
            </main>
        </>
    );
};