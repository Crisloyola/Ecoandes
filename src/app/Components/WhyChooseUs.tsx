"use client";

import { ShieldCheck, CalendarDays, MapPin, HelpCircle } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
      {/* Imagen con fondo y badge */}
      <div className="relative w-full h-[700px]">
        {/* Fondo detrás de la imagen */}
        <div className="absolute -top-6 -left-6 w-full h-full bg-gray-100 rounded-3xl -z-10" />

        <Image
          src="/img/4.jpg"
          alt="Camión de mudanza"
          fill
          priority
          className="rounded-3xl object-cover"
        />

        {/* Badge Atención */}
        <div className=" absolute -bottom-6 right-1 backdrop-blur-lg shadow-lg rounded-xl px-2 py-2 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-orange-500" />
          <span className="font-medium text-sm">Atención Personalizada</span>
        </div>
      </div>

      {/* Texto */}
      <div className="flex flex-col justify-center">
        <p className="text-[#FFA03F] font-medium mb-2 text-2xl">
          ¿Por qué elegir a EcoAndes para tu mudanza en Lima y Callao?
        </p>
        <h1 className="text-5xl font-bold mb-8 leading-snug">
          Tu mudanza en las <br /> mejores manos
        </h1>

        <div className="space-y-6">
          {/* Seguridad Garantizada */}
          <div className="flex gap-4 items-start">
            <div className="bg-orange-100 p-3 rounded-xl">
              <ShieldCheck className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h3 className="font-semibold text-2xl">Seguridad Garantizada</h3>
              <p className="text-gray-600 text-base">
                Tus pertenencias viajan protegidas con materiales de embalaje de alta calidad y personal experto en mudanzas.
              </p>
            </div>
          </div>

          {/* Puntualidad */}
          <div className="flex gap-4 items-start">
            <div className="bg-orange-100 p-3 rounded-xl">
              <CalendarDays className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h3 className="font-semibold text-2xl">
                Puntualidad y Responsabilidad
              </h3>
              <p className="text-gray-600 text-base">
                Cumplimos los tiempos acordados para que tu mudanza en Lima o Callao sea rápida y sin estrés.
              </p>
            </div>
          </div>

          {/* Precios Claros */}
          <div className="flex gap-4 items-start"   >
            <div className="bg-orange-100 p-3 rounded-xl">
              <MapPin className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h3 className="font-semibold text-2xl">Precios Claros y Justos</h3>
              <p className="text-gray-600 text-base">
                Cotizaciones transparentes sin costos ocultos. Mudanzas económicas con la mejor relación calidad-precio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
