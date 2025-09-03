import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-white p-4 rounded-lg inline-block">
              <Link href="/">
                <Image 
                  src="/alldecor.webp" 
                  alt="Logo All Decor" 
                  width={180} 
                  height={63}
                />
              </Link>
            </div>
            <p className="mt-4 text-gray-300 text-sm">
              Transformando ambientes com cortinas e persianas de fabricação própria.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin size={16} />
                <span>Rod Prefeito João Sampaio, 1020 - Maria Paula, Niterói - RJ</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail size={16} />
                <a href="mailto:contato@alldecor.com.br" className="hover:text-white">contato@alldecor.com.br</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaWhatsapp size={16} />
                <a href="https://wa.me/5521975950916?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Alldecor." target="_blank" className="hover:text-white">(21) 97595-0916</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Horário de Atendimento</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Segunda a Sexta: <strong>09:00 - 18:00</strong></li>
              <li>Sábado: <strong>09:00 - 13:00</strong></li>
              <li>Domingo: <strong>Fechado</strong></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/catalogo" className="text-gray-300 hover:text-white">Catálogo</Link></li>
              <li><Link href="/sobre" className="text-gray-300 hover:text-white">Sobre Nós</Link></li>
              <li><Link href="/contato" className="text-gray-300 hover:text-white">Contato</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 py-6 text-center md:flex md:justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} All Decor. Todos os direitos reservados.
          </p>
          <Link href="/politica-de-privacidade" className="text-gray-400 hover:text-white text-sm">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
