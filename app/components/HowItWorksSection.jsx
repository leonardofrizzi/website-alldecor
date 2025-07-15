"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Scaling, Smile, Wrench } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; 
import Link from 'next/link';

const TimelineStep = ({ icon, step, title, children, isRight, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const alignmentClass = isRight ? 'md:self-end md:text-left' : 'md:self-start md:text-right';
  const animationClass = isRight
    ? (inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10')
    : (inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10');

  return (
    <div ref={ref} className={`relative flex flex-col items-center md:w-1/2 ${alignmentClass}`}>
   
      <div className="absolute top-0 left-1/2 -translate-x-1/2 md:hidden bg-white w-10 h-10 rounded-full border-4 border-[#070b52] flex items-center justify-center text-[#070b52] font-bold text-lg">
        {step}
      </div>
     
      <div className={`hidden md:flex items-center justify-center absolute top-0 ${isRight ? 'left-[-24px]' : 'right-[-24px]'} bg-white w-12 h-12 rounded-full border-4 border-[#070b52] text-[#070b52] font-bold text-xl`}>
        {step}
      </div>
    
      <div className={`bg-white text-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm transition-all duration-700 ease-out ${animationClass}`} style={{ transitionDelay: delay }}>
        <div className="flex items-center gap-4 mb-3" style={{ flexDirection: isRight ? 'row' : 'row-reverse' }}>
          <div className="text-[#070b52]">{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-600">{children}</p>
      </div>
    </div>
  );
};

export default function HowItWorksSection() {
  return (
    <section className="bg-[#070b52] py-20 px-6 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Nosso Processo, Sua Tranquilidade</h2>
        <p className="text-lg text-gray-300 mb-16 max-w-3xl mx-auto">
          Simplificamos cada etapa para que você tenha a melhor experiência, do início ao fim.
        </p>

        <div className="relative flex flex-col items-center gap-12">
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-white/30 rounded"></div>

          <TimelineStep icon={<MessageSquare size={32} />} step="1" title="Consulta e Orçamento" isRight={false} delay="200ms">
            Você entra em contato e agendamos uma visita. Medimos seu espaço e apresentamos as melhores opções, tudo sem custo ou compromisso.
          </TimelineStep>

          <TimelineStep icon={<Scaling size={32} />} step="2" title="Produção Sob Medida" isRight={true} delay="400ms">
            Com as medidas e materiais definidos, iniciamos a fabricação. Cada peça é produzida com precisão e materiais de alta qualidade.
          </TimelineStep>

          <TimelineStep icon={<Wrench size={32} />} step="3" title="Instalação Profissional" isRight={false} delay="600ms">
            Nossa equipe especializada realiza a instalação de forma rápida, limpa e eficiente, garantindo um acabamento perfeito.
          </TimelineStep>

          <TimelineStep icon={<Smile size={32} />} step="4" title="Seu Ambiente Transformado" isRight={true} delay="800ms">
            Pronto! Agora é só aproveitar seu novo ambiente, mais bonito e funcional, com a garantia de qualidade All Decor.
          </TimelineStep>
        </div>

        <div className="mt-16">
          <Link href="https://wa.me/5521975950916" target="_blank">
            <button className="inline-flex items-center justify-center gap-3 bg-white text-[#070b52] font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              <FaWhatsapp size={20} />
              Agendar visita gratuita
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}