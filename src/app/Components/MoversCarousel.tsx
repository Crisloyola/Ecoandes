// components/MoversCarousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // agrega Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MoversCard from "./MoversCard";

const services = [
  {
    id: 1,
    city: "Lima",
    description: "Llevamos tu mercadería",
    rating: 4.0,
    reviews: 34,
    image: "/img/9.jpeg",
  },
  {
    id: 2,
    city: "Lima",
    description: "Llevamos tu mercadería",
    rating: 4.5,
    reviews: 41,
    image: "/img/12.jpg",
  },
  {
    id: 3,
    city: "Lima",
    description: "Llevamos tu mercadería",
    rating: 4.9,
    reviews: 49,
    image: "/img/16.jpg",
  },
  {
    id: 4,
    city: "Lima",
    description: "Llevamos tu mercadería",
    rating: 4.9,
    reviews: 49,
    image: "/img/16.jpg",
  },
  {
    id: 5,
    city: "Lima",
    description: "Llevamos tu mercadería",
    rating: 4.9,
    reviews: 49,
    image: "/img/16.jpg",
  },
  {
    id: 6,
    city: "Lima",
    description: "Llevamos tu mercadería",
    rating: 4.9,
    reviews: 49,
    image: "/img/16.jpg",
  },
  {
    id: 7,
    city: "Lima",
    description: "Llevamos tu mercadería",
    rating: 4.9,
    reviews: 49,
    image: "/img/16.jpg",
  },
  {
    id: 8,
    city: "Lima",
    description: "Llevamos tu mercadería",
    rating: 4.9,
    reviews: 49,
    image: "/img/16.jpg",
  },
  
];

export default function MoversCarousel() {
  return (
    <section className="w-full py-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Título */}
        <div className="mb-10">
          <p className="text-[#FFA03F] font-semibold">
            ¡Confía en expertos para tu mudanza!
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Soluciones de <span className="text-[#FFA03F]">Mudanza</span> para Ti
          </h2>
        </div>

        {/* Carrusel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={3}
          slidesPerView={4}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 5 },
            800: { slidesPerView: 4 },
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
