"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import { Target, Eye, Gem, ArrowRight } from 'lucide-react';

const ValueCard = ({ icon, title, children, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={`bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: delay }}
    >
      <div className="inline-block bg-[#070b52] text-white p-4 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  );
};

export default function AboutPage() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-20">
        <div ref={ref1} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ease-out ${inView1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Paixão por transformar ambientes no Rio de Janeiro
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              A All Decor nasceu da paixão por transformar ambientes. Nos especializamos na fabricação e instalação de cortinas e persianas sob medida, combinando design, qualidade e funcionalidade.
            </p>
            <p className="text-lg text-gray-600">
              Nossa equipe atende todo o estado do Rio de Janeiro, levando soluções personalizadas que refletem o estilo e as necessidades de cada cliente. Acreditamos que cada janela é uma oportunidade de criar um novo cenário.
            </p>
          </div>
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 ease-out delay-200 ${inView1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <Image
              src="/sobre.webp"
              alt="Sala de estar com cortinas elegantes"
              width={400}
              height={500}
              className="rounded-lg shadow-2xl object-cover w-full h-full max-w-sm lg:max-w-md"
            />
          </div>
        </div>
      </div>

      <div ref={ref2} className="bg-[#070b52] text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Nossos Pilares</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ValueCard icon={<Target size={32} />} title="Missão" delay="200ms">
              Oferecer soluções em cortinas e persianas que unam estética e funcionalidade, superando as expectativas de nossos clientes.
            </ValueCard>
            <ValueCard icon={<Eye size={32} />} title="Visão" delay="400ms">
              Ser a empresa referência em decoração de janelas no Rio de Janeiro, reconhecida pela inovação e excelência no atendimento.
            </ValueCard>
            <ValueCard icon={<Gem size={32} />} title="Valores" delay="600ms">
              Compromisso com a qualidade, transparência nas relações, paixão pelo design e respeito total aos nossos clientes e colaboradores.
            </ValueCard>
          </div>
        </div>
      </div>

      <div className="bg-white py-20 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Vamos criar juntos o seu próximo ambiente?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Nossa equipe está pronta para transformar suas ideias em realidade. Entre em contato e solicite um orçamento sem compromisso.
          </p>
          <Link href="/contato">
            <button className="inline-flex items-center justify-center gap-3 bg-[#070b52] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#0a0f6c] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              Fale com um especialista
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
