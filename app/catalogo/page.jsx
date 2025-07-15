"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ArrowRight, X, Sun, EyeOff, Sparkles, ShieldCheck, Wind, Waves } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const iconMap = {
  Sun: <Sun size={24} />,
  EyeOff: <EyeOff size={24} />,
  Sparkles: <Sparkles size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
  Wind: <Wind size={24} />,
  Waves: <Waves size={24} />,
};

const products = [
  {
    id: 'rolo',
    name: 'Persiana Rolô',
    description: 'Moderna e versátil, a persiana rolô é ideal para o controle de luz e privacidade. Disponível em tecidos translúcidos, blackout e tela solar.',
    gallery: ['/r1.webp', '/r2.webp', '/r3.webp', '/r3.webp', '/r4.webp', '/r5.webp', '/r6.webp'],
    details: 'A Persiana Rolô é uma solução prática e elegante para qualquer ambiente. Seu acionamento simples e design minimalista se adaptam a decorações modernas e clássicas. O tecido tela solar é perfeito para varandas gourmet, pois protege dos raios UV sem bloquear a vista. Já o tecido blackout é ideal para quartos, garantindo escuridão total.',
    benefits: [
      { icon: 'Sun', text: 'Controle Solar' },
      { icon: 'EyeOff', text: 'Privacidade Total' },
      { icon: 'Sparkles', text: 'Design Minimalista' },
    ],
  },
  {
    id: 'romana',
    name: 'Persiana Romana',
    description: 'Com seu design em gomos, a persiana romana adiciona um toque de sofisticação e aconchego, sendo uma excelente escolha para salas e quartos.',
    gallery: ['/ro1.webp', '/ro2.webp', '/ro3.webp', '/ro4.webp'],
    details: 'A Cortina Romana combina a praticidade de uma persiana com a elegância do tecido. Seus gomos horizontais criam um volume charmoso quando recolhida. Oferecemos uma vasta gama de tecidos, desde os mais leves até os mais encorpados, permitindo um controle de luminosidade preciso e um visual imponente.',
    benefits: [
      { icon: 'Sparkles', text: 'Visual Sofisticado' },
      { icon: 'Sun', text: 'Controle de Luz' },
      { icon: 'Wind', text: 'Ambiente Aconchegante' },
    ],
  },
  {
    id: 'double-vision',
    name: 'Persiana Double Vision',
    description: 'Inovadora, a Double Vision alterna faixas translúcidas e opacas, permitindo um controle preciso da luminosidade e um visual único.',
    gallery: ['/dv1.webp', '/dv2.webp', '/dv3.webp', '/dv4.webp', '/dv5.webp'],
    details: 'Também conhecida como "rolô dia e noite", a Double Vision é a escolha perfeita para quem busca versatilidade. Com um simples movimento, você pode alinhar as faixas para ter mais privacidade e menos luz, ou intercalá-las para uma iluminação suave e visibilidade externa.',
    benefits: [
        { icon: 'Sun', text: 'Luz e Privacidade' },
        { icon: 'Sparkles', text: 'Efeito Moderno' },
        { icon: 'EyeOff', text: 'Controle Preciso' },
    ],
  },
  {
    id: 'painel',
    name: 'Persiana Painel',
    description: 'Ideal para grandes vãos e portas de vidro, a persiana painel desliza suavemente em trilhos, oferecendo um visual limpo e contemporâneo.',
    gallery: ['/p1.webp', '/p2.webp', '/p3.webp', '/p4.webp', '/p5.webp'],
    details: 'A Persiana Painel é a solução mais elegante para cobrir grandes janelas e dividir ambientes. Seus painéis de tecido se sobrepõem ao serem recolhidos, otimizando o espaço e proporcionando um controle eficaz da luminosidade.',
    benefits: [
        { icon: 'Sparkles', text: 'Grandes Vãos' },
        { icon: 'Wind', text: 'Divisor de Ambientes' },
        { icon: 'Sun', text: 'Visual Clean' },
    ],
  },
  {
    id: 'vertical',
    name: 'Persiana Vertical',
    description: 'Um clássico versátil, a persiana vertical permite um controle preciso da luz através do giro de suas lâminas. Perfeita para escritórios e salas.',
    gallery: ['/v1.webp', '/v2.webp', '/v3.webp', '/v4.webp'],
    details: 'A Persiana Vertical é conhecida por sua funcionalidade e custo-benefício. Suas lâminas verticais podem ser giradas em até 180 graus, oferecendo total controle sobre a privacidade e a entrada de luz no ambiente.',
    benefits: [
        { icon: 'Sun', text: 'Controle de Giro' },
        { icon: 'EyeOff', text: 'Custo-Benefício' },
        { icon: 'Sparkles', text: 'Uso Corporativo' },
    ],
  },
  {
    id: 'linho',
    name: 'Cortina de Linho',
    description: 'Trazendo leveza e um toque natural, as cortinas de linho criam um ambiente aconchegante e sofisticado, com um caimento impecável.',
    gallery: ['/l1.webp', '/l2.webp', '/l3.webp', '/l4.webp', '/l5.webp', '/l6.webp'],
    details: 'A Cortina de Linho é sinônimo de elegância atemporal. Seu tecido nobre permite a passagem de uma luz suave e difusa, criando uma atmosfera acolhedora e confortável em salas de estar e quartos.',
    benefits: [
        { icon: 'Wind', text: 'Leveza e Fluidez' },
        { icon: 'Sparkles', text: 'Toque Natural' },
        { icon: 'Sun', text: 'Luz Suave' },
    ],
  },
  {
    id: 'madeira',
    name: 'Persiana Linha Madeira',
    description: 'As persianas de madeira ou sintéticas trazem o calor e a nobreza do material para o ambiente, garantindo um visual robusto e elegante.',
    gallery: ['/m1.webp', '/m2.webp', '/m3.webp', '/m4.webp'],
    details: 'Disponíveis em madeira natural ou materiais sintéticos de alta durabilidade que imitam a madeira, estas persianas são perfeitas para quem busca um toque de rusticidade e sofisticação. Controlam a luz de forma eficaz e são muito resistentes.',
    benefits: [
        { icon: 'Sparkles', text: 'Material Nobre' },
        { icon: 'Wind', text: 'Aconchego' },
        { icon: 'ShieldCheck', text: 'Alta Durabilidade' },
    ],
  },
  {
    id: 'acustica',
    name: 'Persiana Celular Acústica',
    description: 'Com formato de colmeia, oferece excelente isolamento térmico e acústico, ideal para um maior conforto e silêncio no ambiente.',
    gallery: ['/a1.webp', '/a2.webp'],
    details: 'Ideal para quartos e home theaters, a Persiana Celular possui um formato de colmeia que cria bolsões de ar, oferecendo excelente isolamento térmico e acústico. Ela barra parte das ondas sonoras e bloqueia a luz, proporcionando um ambiente mais silencioso e confortável.',
    benefits: [
        { icon: 'Waves', text: 'Redução de Ruído' },
        { icon: 'EyeOff', text: 'Bloqueio de Luz' },
        { icon: 'Wind', text: 'Conforto Térmico' },
    ],
  },
];

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col relative animate-scale-in">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black z-10">
          <X size={28} />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="relative w-full h-64 md:h-full bg-gray-100 rounded-l-lg">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-full h-full"
            >
              {product.gallery.map((imgSrc, index) => (
                <SwiperSlide key={index}>
                  <Image src={imgSrc} alt={`${product.name} - Imagem ${index + 1}`} layout="fill" className="object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="p-8 overflow-y-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-6">{product.details}</p>
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">Vantagens e Benefícios</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {product.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <span className="text-[#070b52]">{iconMap[benefit.icon]}</span>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>

            <Link href="/contato">
              <button className="inline-flex items-center justify-center gap-3 bg-[#070b52] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#0a0f6c] transition-colors">
                Solicitar Orçamento
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCategory = ({ product, onOpenModal, reverse = false }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const directionClass = reverse ? 'lg:flex-row-reverse' : 'lg:flex-row';

  return (
    <div ref={ref} className={`flex flex-col ${directionClass} items-center gap-8 lg:gap-16 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="w-full lg:w-1/2">
        <div className="w-full aspect-[4/3] rounded-lg shadow-xl overflow-hidden relative">
          <Swiper
            modules={[Navigation]}
            navigation
            className="w-full h-full"
          >
            {product.gallery.map((imgSrc, index) => (
              <SwiperSlide key={index}>
                <Image src={imgSrc} alt={`${product.name} - Imagem ${index + 1}`} layout="fill" className="object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h2>
        <p className="text-lg text-gray-600 mb-6">{product.description}</p>
        <button onClick={() => onOpenModal(product)} className="text-[#070b52] font-bold inline-flex items-center gap-2 group">
          Ver Detalhes
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default function CatalogPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="bg-white py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Nosso Catálogo</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore nossa variedade de cortinas e persianas, todas com fabricação própria e design exclusivo para o seu ambiente.
            </p>
          </div>

          <div className="space-y-24">
            {products.map((product, index) => (
              <ProductCategory
                key={product.id}
                product={product}
                onOpenModal={handleOpenModal}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </div>
      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
    </>
  );
}
