// components/MoversCarousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MoversCard from "./MoversCard";

const services = [
  {
    id: 1,
    city: "Mudanzas en Lima",
    description: "Servicio de mudanzas rápidas y seguras en Lima Metropolitana, con personal especializado.",
    rating: 4.8,
    reviews: 62,
    image: "/img/1.jpeg",
  },
  {
    id: 2,
    city: "Mudanzas en Callao",
    description: "Traslado confiable de muebles, departamentos y oficinas en la Provincia Constitucional del Callao.",
    rating: 4.7,
    reviews: 55,
    image: "/img/2.jpeg",
  },
  {
    id: 3,
    city: "Mudanzas en Puente Piedra",
    description: "Transporte de carga y mudanzas familiares en Puente Piedra con puntualidad garantizada.",
    rating: 4.9,
    reviews: 49,
    image: "/img/3.jpeg",
  },
  {
    id: 4,
    city: "Mudanzas en Miraflores",
    description: "Mudanzas en Miraflores con servicio premium y protección total de tus pertenencias.",
    rating: 4.9,
    reviews: 53,
    image: "/img/4.jpg",
  },
  {
    id: 5,
    city: "Mudanzas en Santa Anita",
    description: "Servicio económico de mudanzas locales y nacionales desde Santa Anita.",
    rating: 4.8,
    reviews: 47,
    image: "/img/5.jpeg",
  },
  {
    id: 6,
    city: "Mudanzas en Villa El Salvador",
    description: "Traslado seguro de oficinas, departamentos y casas en Villa El Salvador.",
    rating: 4.9,
    reviews: 51,
    image: "/img/8.jpeg",
  },
  {
    id: 7,
    city: "Mudanzas en Ancón",
    description: "Mudanzas económicas y confiables hacia y desde Ancón, con garantía de seguridad.",
    rating: 4.8,
    reviews: 44,
    image: "/img/9.jpeg",
  },
  {
    id: 8,
    city: "Mudanzas en Los Olivos",
    description: "Servicio profesional de mudanzas en Los Olivos: rápido, seguro y accesible.",
    rating: 4.9,
    reviews: 59,
    image: "/img/14.jpg",
  },
];


export default function MoversCarousel() {
  return (
    <section className="w-full py-12">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Título alineado a la izquierda */}
        <div className="mb-10 text-left">
          <p className="text-[#FFA03F] font-semibold mb-2 text-[20px] md:text-[20px]">
            ¡Confía en expertos para tu mudanza!
          </p>
          <h1 className="text-5xl md:text-4xl font-bold leading-tight">
            Soluciones de <span className="text-[#FFA03F]">Mudanza</span> para Ti
          </h1>
        </div>

        {/* Carrusel Responsive */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={12}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 18 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1280: { slidesPerView: 5, spaceBetween: 24 },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <MoversCard {...service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Estilos custom de flechas */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffa03f 60%, #ffb95f 100%);
          box-shadow: 0 8px 24px 0 rgba(255, 160, 63, 0.25);
          color: #fff !important;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: linear-gradient(135deg, #ffb95f 60%, #ffa03f 100%);
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 22px;
          font-weight: bold;
          color: #fff;
        }
        .swiper-pagination-bullet {
          background: #ffa03f;
          opacity: 0.4;
        }
        .swiper-pagination-bullet-active {
          background: #ffa03f;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
