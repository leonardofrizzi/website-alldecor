"use client";

import React from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <Link 
      href="https://wa.me/5521975950916?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Alldecor." 
      target="_blank"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <div className="relative flex justify-center items-center">
        <div className="animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></div>
        <div className="relative bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-110">
          <FaWhatsapp size={32} />
        </div>
      </div>
    </Link>
  );
}