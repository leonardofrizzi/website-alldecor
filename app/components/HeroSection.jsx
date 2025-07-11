"use client"; 

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Montserrat, Roboto } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'], 
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300'], 
});

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100); 
    return () => clearTimeout(timer); 
  }, []);

  return (
    <section className="relative flex items-center justify-center text-center text-white overflow-hidden" style={{ minHeight: 'calc(100svh - 96px)' }}>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/hero.webp')",
        }}
        aria-hidden="true"
      ></div>

      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#070b52] to-[#0a0f6c] opacity-75"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 shadow-text ${montserrat.className} transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          Cortinas e persianas sob medida
        </h1>
        <p className={`text-lg sm:text-xl md:text-2xl mb-8 font-light shadow-text ${roboto.className} transition-all duration-700 ease-out delay-200 ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          Fabricação própria com a qualidade e o design que seu ambiente merece.
        </p>
        <Link href="/catalogo">
          <button className={`inline-flex items-center justify-center gap-3 bg-white text-[#070b52] font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg transition-all duration-700 ease-out delay-300 ${isMounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            Veja nosso catálogo
            <ArrowRight size={20} />
          </button>
        </Link>
      </div>
    </section>
  );
}
