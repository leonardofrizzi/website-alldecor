"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp } from 'react-icons/fa';
import { Mail, Send } from 'lucide-react';

export default function ContactPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="bg-gray-50">
      <div ref={ref} className="container mx-auto px-6 py-20">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Fale com a All Vidro Esquadrias
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tem alguma dúvida ou gostaria de solicitar um orçamento? Escolha a melhor forma de nos contatar. Nossa equipe de especialistas está pronta para atender você!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className={`space-y-8 transition-all duration-1000 ease-out delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-3xl font-bold text-gray-800">Contato Rápido</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4">
              <FaWhatsapp size={32} className="text-green-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">WhatsApp</h3>
                <p className="text-gray-600">Nosso canal direto para um atendimento ágil.</p>
                <a href="https://wa.me/5521991243966?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20All%20Vidro%20Esquadrias." target="_blank" className="text-[#070b52] font-bold hover:underline mt-1 inline-block">
                  (21) 99124-3966
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4">
              <Mail size={32} className="text-[#070b52]" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">E-mail</h3>
                <p className="text-gray-600">Envie-nos suas dúvidas ou projetos detalhados.</p>
                <a href="mailto:contato@alldecor.com.br" className="text-[#070b52] font-bold hover:underline mt-1 inline-block">
                  contato@alldecor.com.br
                </a>
              </div>
            </div>
          </div>

          <div className={`bg-white p-8 rounded-lg shadow-lg transition-all duration-1000 ease-out delay-400 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Ou, se preferir, preencha o formulário</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#070b52] outline-none" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#070b52] outline-none" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
                <input type="tel" id="phone" name="phone" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#070b52] outline-none" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea id="message" name="message" rows={5} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#070b52] outline-none"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-3 bg-[#070b52] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#0a0f6c] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                  Enviar Mensagem
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full h-[450px] bg-gray-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.183926897434!2d-43.18840492346147!3d-22.96972373816942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd5461b9e0d8b%3A0x3b3e3e3e3e3e3e3e!2sRua%20Santa%20Clara%2C%2070%20-%20Copacabana%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da All Vidro Esquadrias"
        ></iframe>
      </div>
    </div>
  );
}