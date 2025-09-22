"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "María Torres",
    role: "Cliente Residencial",
    text: "Mi mudanza fue mucho más fácil de lo que imaginaba. El equipo llegó puntual, empacaron todo con cuidado y en pocas horas ya estaba instalada en mi nuevo departamento. 100% recomendados.",
    image: "/img/13.jpg",
  },
  {
    name: "Juan Pérez",
    role: "Cliente Corporativo",
    text: "La empresa cumplió con todo el cronograma y trasladó nuestras oficinas sin problemas. Muy profesionales.",
    image: "/img/12.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Título */}
        <p className="text-[#FFA03F] font-medium text-[22px]">¿Por qué nos elige nuestro cliente?</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-10">
          Testimonio de nuestros Clientes
        </h1>

        {/* Card de Testimonio cubriendo todo el ancho */}
        <div className="relative w-full">
          {/* Botones navegación arriba del card */}
          <div className="absolute right-0 -top-16 flex gap-3 z-30">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-[#FFA03F] text-white flex items-center justify-center shadow-md hover:bg-orange-600 transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-[#FFA03F] text-white flex items-center justify-center shadow-md hover:bg-orange-600 transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center w-full">
            {/* Imagen */}
            <div className="relative flex-shrink-0 w-full md:w-[380px] h-[260px] md:h-[555px] z-10">
              <Image
                src={testimonials[current].image}
                alt={testimonials[current].name}
                fill
                className="rounded-2xl shadow-md object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
            {/* Card de Testimonio más largo */}
            <div className="relative bg-white shadow-lg rounded-2xl p-6 md:p-10 flex-1 border-l-0 md:border-l-4 border-[#FFA03F] md:-ml-10 mt-6 md:mt-0 z-20 w-full">
              <h3 className="text-[38px] font-semibold">
                {testimonials[current].name}
              </h3>
              <p className="text-[#FFA03F] text-[28px]">{testimonials[current].role}</p>
              <p className="text-gray-700 mt-4 leading-relaxed text-[20px]">
                {testimonials[current].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
