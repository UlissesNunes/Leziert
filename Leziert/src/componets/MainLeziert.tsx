import React from 'react';
import {ContentLeziert} from './ContentLeziert';

export const MainLeziert: React.FC = () => {

   const whatsappGo = () => {
        const numero = "556697220111";
        const mensagem = "Olá, quero saber mais sobre a Leziert!";
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank");
    }
    return (
    <>
            {/* Main Content */}
            <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black ">
                <section className="text-center mb-16">
                    <h2 className=" pt-11 text-3xl font-bold text-white mb-4">Automatize Processos, ganhe tempo e gere + resultados</h2>
                    <p className="text-base text-slate-300 mb-8">Transformamos processos manuais em automações que economizam tempo e te geram resultados</p>


                   
                    <button className="bg-transparent hover:bg-transparent hover:border-blue-400 border-b-2  border-blue-900  text-blue-50 hover:text-blue-100 font-semibold py-3 px-8 rounded-sm transition-all duration-100 ease-out" onClick={whatsappGo}>
                        Garanta seu Acesso agora
                    </button>
                </section>
                <section className="flex justify-center mb-16">
                     <img src="/public/solucoesdigitais.webp" alt="" />
                </section>
                <ContentLeziert />
               
               
            </main>
        </>
    );
};