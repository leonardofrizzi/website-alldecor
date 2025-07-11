"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  
    const hasAcceptedCookies = localStorage.getItem('cookie_consent');
    if (!hasAcceptedCookies) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 bg-gray-800 text-white shadow-lg transition-transform duration-500 ease-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-sm text-center sm:text-left">
          <Cookie className="hidden sm:block flex-shrink-0" size={28} />
          <span>
            Nós utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com a nossa{' '}
            <Link href="/politica-de-privacidade" className="font-bold underline hover:text-gray-300">
              Política de Privacidade
            </Link>
            .
          </span>
        </div>
        <button 
          onClick={handleAccept}
          className="bg-white text-[#070b52] font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors flex-shrink-0"
        >
          OK, entendi
        </button>
      </div>
    </div>
  );
}
