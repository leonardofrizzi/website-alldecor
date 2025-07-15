"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/catalogo', text: 'Catálogo' },
    { href: '/sobre', text: 'Sobre Nós' },
    { href: '/contato', text: 'Contato' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex-shrink-0">
            <Link href="/">
                <Image 
                  src="/alldecor.webp" 
                  alt="Logo All Decor" 
                  width={200} 
                  height={70}
                  priority
                />
            </Link>
          </div>

          <div className="hidden md:flex flex-grow items-center justify-center">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className="relative text-black hover:text-[#070b52] transition-colors duration-300 group text-lg"
                >
                  {link.text}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#070b52] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex flex-shrink-0">
            <Link href="https://wa.me/5521975950916" target="_blank">
              <button className="flex items-center space-x-2 px-6 py-3 text-lg font-semibold rounded-full text-white bg-[#070b52] hover:bg-[#0a0f6c] transition-all duration-300 ease-in-out shadow-md">
                <FaWhatsapp size={20} />
                <span>Entre em Contato</span>
              </button>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Abrir menu">
              <Menu size={28} className="text-[#070b52]" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/" onClick={toggleMenu}>
                <Image 
                    src="/alldecor.webp" 
                    alt="Logo All Decor" 
                    width={110} 
                    height={35}
                />
            </Link>
            <button onClick={toggleMenu} aria-label="Fechar menu">
              <X size={28} className="text-[#070b52] transition-transform duration-300 hover:rotate-90" />
            </button>
          </div>

          <div className="flex flex-col items-start p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                onClick={toggleMenu}
                className="text-lg text-black w-full text-left p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              >
                {link.text}
              </Link>
            ))}
          </div>

          <div className="mt-auto p-4 border-t">
             <Link href="https://wa.me/5521975950916" target="_blank" className="w-full">
              <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 text-lg font-semibold rounded-full text-white bg-[#070b52] hover:bg-[#0a0f6c] transition-all duration-300 ease-in-out shadow-md">
                <FaWhatsapp size={20} />
                <span>Entre em Contato</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
