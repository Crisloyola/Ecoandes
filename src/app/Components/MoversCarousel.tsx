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
  city: "Eco-Andes",
  description: "Mudanzas rápidas y seguras a cualquier destino.",
  rating: 4.0,
  reviews: 34,
  image: "/img/1.jpeg",
},
{
  id: 2,
  city: "Eco-Andes",
  description: "Traslado confiable de muebles y enseres con cuidado especial.",
  rating: 4.5,
  reviews: 41,
  image: "/img/2.jpeg",
},
{
  id: 3,
  city: "Eco-Andes",
  description: "Ofrecemos transporte de carga y mudanzas familiares sin estrés.",
  rating: 4.9,
  reviews: 49,
  image: "/img/3.jpeg",
},
{
  id: 4,
  city: "Eco-Andes",
  description: "Tu mudanza en buenas manos, cuidamos cada detalle.",
  rating: 4.9,
  reviews: 49,
  image: "/img/4.jpg",
},
{
  id: 5,
  city: "Eco-Andes",
  description: "Servicio de mudanzas rápidas dentro y fuera de la ciudad.",
  rating: 4.9,
  reviews: 49,
  image: "/img/5.jpeg",
},
{
  id: 6,
  city: "Eco-Andes",
  description: "Transporte de oficinas, departamentos y casas con puntualidad.",
  rating: 4.9,
  reviews: 49,
  image: "/img/8.jpeg",
},
{
  id: 7,
  city: "Eco-Andes",
  description: "Mudanzas económicas sin sacrificar calidad ni seguridad.",
  rating: 4.9,
  reviews: 49,
  image: "/img/9.jpeg",
},
{
  id: 8,
  city: "Eco-Andes",
  description: "Movemos tus pertenencias como si fueran nuestras.",
  rating: 4.9,
  reviews: 49,
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
