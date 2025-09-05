"use client";

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { X, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

// --- DADOS DO CATÁLOGO ---
const catalogData = [
  {
    title: "Esquadrias Linha Gold",
    description: "A linha Gold combina design sofisticado com o máximo de desempenho, ideal para projetos de alto padrão que exigem vãos maiores e performance superior.",
    media: [
      { type: 'image', src: '/go1.webp' },
      { type: 'image', src: '/go2.webp' },
      { type: 'image', src: '/go3.webp' },
      { type: 'image', src: '/go4.webp' },
      { type: 'image', src: '/go5.webp' },
      { type: 'image', src: '/go6.webp' },
    ],
  },
  {
    title: "Esquadrias Linha Suprema",
    description: "Versatilidade e excelente custo-benefício. A linha Suprema se adapta a diversos tipos de projetos, residenciais e comerciais, com qualidade e durabilidade. Assista ao vídeo e veja como: Destaque.",
    media: [
      { type: 'vimeo', videoId: '1116215946', isHighlight: true },
      { type: 'image', src: '/su1.webp' },
      { type: 'image', src: '/su2.webp' },
      { type: 'image', src: '/su3.webp' },
      { type: 'image', src: '/su4.webp' },
      { type: 'image', src: '/su5.webp' },
    ],
  },
  {
    title: "Coberturas de Vidro",
    description: "Aproveite a luz natural e proteja seus ambientes com nossas coberturas de vidro. Soluções fixas e retráteis com acionamento por controle remoto. Assista ao vídeo e veja como: Acionamento Automático.",
    media: [
      { type: 'vimeo', videoId: '1116220281', isHighlight: true },
      { type: 'vimeo', videoId: '1116220453' },
      { type: 'image', src: '/cob1.webp' },
      { type: 'image', src: '/cob2.webp' },
    ],
  },
  {
    title: "Envidraçamentos",
    description: "Soluções modernas e elegantes para envidraçamento de sacadas, varandas e ambientes, proporcionando conforto e integração.",
    media: [
      { type: 'image', src: '/env1.webp' },
      { type: 'image', src: '/env2.webp' },
      { type: 'image', src: '/env3.webp' },
      { type: 'image', src: '/env4.webp' },
    ],
  },
  {
    title: "Esquadrias Acústicas e Anti-Ruído",
    description: "Conforto e silêncio para seu lar ou escritório. Nossas esquadrias acústicas são projetadas para vedação total, bloqueando ruídos externos. Assista ao vídeo e veja como: Vedação Acústica.",
    media: [
      { type: 'vimeo', videoId: '1116167541', isHighlight: true },
      { type: 'image', src: '/acue1.webp' },
      { type: 'image', src: '/acue2.webp' },
    ],
  },
];

// --- COMPONENTES DA PÁGINA ---

const MediaModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="relative w-full max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-8 right-0 text-white hover:text-gray-300 z-10">
          <X size={32} />
        </button>
        {item.type === 'image' ? (
          <img src={item.src} alt="Visualização ampliada" className="w-full h-full object-contain max-h-[80vh]" />
        ) : (
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://player.vimeo.com/video/${item.videoId}?autoplay=1&title=0&byline=0&portrait=0`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        )}
        
      </div>
    </div>
  );
};

const MediaItem = ({ item, onOpenModal }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`relative rounded-lg overflow-hidden shadow-lg cursor-pointer group h-[200px] lg:h-[300px] transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      onClick={() => onOpenModal(item)}
    >
      {item.type === 'image' ? (
        <img src={item.src} alt="Item do catálogo" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      ) : (
        <div className="relative w-full h-full">
          <img src={`https://vumbnail.com/${item.videoId}.jpg`} alt="Thumbnail do vídeo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <PlayCircle size={64} className="text-white opacity-80 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      )}
    </div>
  );
};

const CatalogSection = ({ title, description, media, onOpenModal }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const highlightItem = media.find(item => item.isHighlight);
  const galleryItems = highlightItem ? media.filter(item => !item.isHighlight) : media; // Filter out highlight item for gallery

  // Layout para Coberturas de Vidro (4 itens em linha)
  if (title === "Coberturas de Vidro") {
    return (
      <section ref={ref} className={`py-16 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>
        <div className="grid grid-cols-2 md:flex md:flex-row justify-center items-center gap-4 w-full">
          {media.map((item, index) => (
            <div key={index} className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg cursor-pointer h-[300px] md:h-auto" onClick={() => onOpenModal(item)}>
              {item.type === 'image' ? (
                <img src={item.src} alt="Item do catálogo" className="w-full h-full object-cover md:w-[300px] md:h-[533px]" />
              ) : (
                <iframe
                  src={`https://player.vimeo.com/video/${item.videoId}?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0`}
                  width="100%"
                  height="100%" // Proporção 9:16 baseada na largura de 300px
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  className="rounded-lg md:w-[300px] md:h-[533px]"
                  title={`Video ${index + 1}`}
                ></iframe>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="https://wa.me/5521991243966?text=Ol%C3%A1%2C%20vim%20pelo%20cat%C3%A1logo%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20em%20vidro%20e%20esquadrias." target="_blank">
            <button className="inline-flex items-center justify-center gap-3 bg-[#070b52] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#0a0f6c] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              <FaWhatsapp size={20} />
              Fale Conosco
            </button>
          </Link>
        </div>
      </section>
    );
  }

  // Layout para seções com vídeo de destaque
  if (highlightItem) {
    return (
      <section ref={ref} className={`py-16 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Video as the first item */}
          <div className="rounded-lg overflow-hidden shadow-lg col-span-1">
            <iframe 
              src={`https://player.vimeo.com/video/${highlightItem.videoId}?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0`}
              width="100%" 
              height="auto" // Let the grid handle height, or set aspect ratio
              style={{ aspectRatio: '9 / 16' }} // Maintain vertical aspect ratio
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
              className="rounded-lg w-full h-full object-cover" 
              title={highlightItem.highlightText}
            ></iframe>
          </div>

          {/* Images filling the rest of the grid */}
          {galleryItems.map((item, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={() => onOpenModal(item)}>
              <img src={item.src} alt="Item do catálogo" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="https://wa.me/5521991243966?text=Ol%C3%A1%2C%20vim%20pelo%20cat%C3%A1logo%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20em%20vidro%20e%20esquadrias." target="_blank">
            <button className="inline-flex items-center justify-center gap-3 bg-[#070b52] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#0a0f6c] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              <FaWhatsapp size={20} />
              Fale Conosco
            </button>
          </Link>
        </div>
      </section>
    );
  }

  // Layout para seções normais (galeria)
  return (
    <section ref={ref} className={`py-16 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
      </div>
      {title === "Envidraçamentos" ? (
        <div className="grid grid-cols-2 md:flex md:flex-row justify-center items-center gap-4 w-full">
          {media.map((item, index) => (
            <div key={index} className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg cursor-pointer h-[200px] md:h-auto" onClick={() => onOpenModal(item)}>
              <img src={item.src} alt="Item do catálogo" className="w-full h-full object-cover md:w-[300px] md:h-[533px]" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {media.map((item, index) => (
            <MediaItem key={index} item={item} onOpenModal={onOpenModal} />
          ))}
        </div>
      )}
      <div className="mt-12 text-center">
        <Link href="https://wa.me/5521991243966?text=Ol%C3%A1%2C%20vim%20pelo%20cat%C3%A1logo%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20em%20vidro%20e%20esquadrias." target="_blank">
          <button className="inline-flex items-center justify-center gap-3 bg-[#070b52] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#0a0f6c] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            <FaWhatsapp size={20} />
            Fale Conosco
          </button>
        </Link>
      </div>
      </section>
  );
};

export default function CatalogPage() {
  const [modalItem, setModalItem] = useState(null);

  const handleOpenModal = (item) => {
    setModalItem(item);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setModalItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="bg-white py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Nosso Catálogo</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore nossas soluções em vidro e alumínio. Projetos que unem design, segurança e tecnologia para valorizar seu ambiente.
            </p>
          </div>
          <div className="divide-y divide-gray-200">
            {catalogData.map((section, index) => (
              <CatalogSection
                key={index}
                title={section.title}
                description={section.description}
                media={section.media}
                onOpenModal={handleOpenModal}
              />
            ))}
          </div>
        </div>
      </div>
      <MediaModal item={modalItem} onClose={handleCloseModal} />
    </>
  );
}
