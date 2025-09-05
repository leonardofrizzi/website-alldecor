"use client";

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { ClipboardCheck, ShieldCheck, Wrench } from 'lucide-react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const FeatureCard = ({ icon, title, children, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,    
  });

  return (
    <div
      ref={ref} 
      className={`bg-[#070b52] p-8 rounded-lg shadow-xl text-center flex flex-col items-center transition-all duration-700 ease-out transform hover:-translate-y-2 hover:scale-105 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: delay }}
    >
      <div className="bg-white text-[#070b52] p-4 rounded-full mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 flex-grow">{children}</p>
    </div>
  );
};

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Vantagens que só a <span className="text-[#070b52]">All Vidro Esquadrias</span> oferece
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Nosso compromisso é com a sua satisfação total, do primeiro contato até a instalação final do seu produto.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <FeatureCard
            icon={<ClipboardCheck size={32} />}
            title="Orçamento Grátis"
            delay="200ms"
          >
            Solicite seu orçamento sem compromisso. Nossa equipe vai até você para entender suas necessidades e oferecer a melhor solução.
          </FeatureCard>
          <FeatureCard
            icon={<ShieldCheck size={32} />}
            title="Qualidade e Segurança"
            delay="400ms"
          >
            Utilizamos materiais de alta performance e seguimos rigorosas normas técnicas para garantir a durabilidade e segurança dos nossos produtos.
          </FeatureCard>
          <FeatureCard
            icon={<Wrench size={32} />}
            title="Instalação Grátis"
            delay="600ms"
          >
            Nossos técnicos especializados garantem uma instalação rápida, limpa e perfeita, sem que você precise pagar a mais por isso.
          </FeatureCard>
        </div>

        <Link href="https://wa.me/5521991243966?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20All%20Vidro%20Esquadrias." target="_blank">
          <button className="inline-flex items-center justify-center gap-3 bg-[#070b52] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#0a0f6c] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            <FaWhatsapp size={24} />
            Fale Conosco
          </button>
        </Link>
      </div>
    </section>
  );
}
