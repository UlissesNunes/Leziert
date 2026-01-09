import React from 'react';

export const MainLeziert: React.FC = () => {
    return (
    <>
            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black ">
                <section className="text-center mb-16">
                    <h2 className=" pt-11 text-5xl font-bold text-white mb-4">Bem-vindo ao Leziert</h2>
                    <p className="text-xl text-slate-300 mb-8">Uma plataforma moderna e poderosa</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition">
                        Começar Agora
                    </button>
                </section>

                {/* Content Area */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition">
                        <h3 className="text-xl font-bold text-white mb-2">Feature 1</h3>
                        <p className="text-slate-400">Descrição do recurso principal</p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition">
                        <h3 className="text-xl font-bold text-white mb-2">Feature 2</h3>
                        <p className="text-slate-400">Descrição do recurso principal</p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition">
                        <h3 className="text-xl font-bold text-white mb-2">Feature 3</h3>
                        <p className="text-slate-400">Descrição do recurso principal</p>
                    </div>
                </section>
            </main>
        </>
    );
};