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
        <h2 className="text-4xl font-bold mb-4">Da Medição à Instalação,<br></br> Cuidamos de Tudo</h2>
        <p className="text-lg text-gray-300 mb-16 max-w-3xl mx-auto">
          Nosso processo é pensado para sua comodidade, garantindo um resultado que une estética, segurança e a valorização do seu imóvel.
        </p>

        <div className="relative flex flex-col items-center gap-12">
          <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-white/30 rounded"></div>

          <TimelineStep icon={<MessageSquare size={32} />} step="1" title="Consulta e Projeto" isRight={false} delay="200ms">
            Você entra em contato e nossa equipe técnica vai até o local para entender suas necessidades, realizar a medição precisa e desenhar a solução ideal para seu espaço.
          </TimelineStep>

          <TimelineStep icon={<Scaling size={32} />} step="2" title="Fabricação Precisa" isRight={true} delay="400ms">
            Com o projeto aprovado, iniciamos a fabricação das suas esquadrias ou cortinas de vidro. Utilizamos materiais de alta qualidade e tecnologia de ponta para um acabamento perfeito.
          </TimelineStep>

          <TimelineStep icon={<Wrench size={32} />} step="3" title="Instalação Segura" isRight={false} delay="600ms">
            Nossos instaladores especializados garantem que tudo seja montado com máxima segurança e eficiência, seguindo rigorosamente as normas técnicas e o projeto definido.
          </TimelineStep>

          <TimelineStep icon={<Smile size={32} />} step="4" title="Valorização e Conforto" isRight={true} delay="800ms">
            Pronto! Seu ambiente está mais seguro, moderno e valorizado. Desfrute do conforto e da estética que só as soluções da All Vidro Esquadrias oferecem.
          </TimelineStep>
        </div>

        <div className="mt-16">
          <Link href="https://wa.me/5521991243966?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20All%20Vidro%20Esquadrias." target="_blank">
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
