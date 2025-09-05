"use client";

import React from 'react';
import { PanelRightClose, Square, RectangleHorizontal, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ icon, title, children, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,    
  });

  return (
    <div
      ref={ref} 
      className={`bg-white p-8 rounded-lg shadow-xl text-center flex flex-col items-center transition-all duration-700 ease-out transform hover:-translate-y-2 hover:scale-105 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: delay }}
    >
      <div className="bg-[#070b52] text-white p-4 rounded-full mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 flex-grow">{children}</p>
    </div>
  );
};

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Soluções em Vidro para seu Ambiente
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Oferecemos uma gama completa de serviços em vidro para atender às suas necessidades, combinando estética e funcionalidade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <ServiceCard
            icon={<PanelRightClose size={32} />}
            title="Cortinas de Vidro"
            delay="200ms"
          >
            Integre ambientes com elegância e proteção, aproveitando a vista sem abrir mão do conforto.
          </ServiceCard>
          <ServiceCard
            icon={<Square size={32} />}
            title="Esquadrias de Alumínio"
            delay="400ms"
          >
            Estruturas leves, duráveis e com design moderno para portas, janelas e fachadas.
          </ServiceCard>
          <ServiceCard
            icon={<RectangleHorizontal size={32} />}
            title="Janelas de Vidro"
            delay="600ms"
          >
            Iluminação natural e ventilação na medida certa com nossas janelas sob medida.
          </ServiceCard>
        </div>

        <Link href="/catalogo">
          <button className="inline-flex items-center justify-center gap-3 bg-[#070b52] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#0a0f6c] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            Veja todas as nossas soluções
            <ArrowRight size={20} />
          </button>
        </Link>
      </div>
    </section>
  );
}