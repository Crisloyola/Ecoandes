// components/MoversCard.tsx
"use client";

import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type ServiceCardProps = {
  city: string;
  description: string;
  rating: number;
  reviews: number;
  image: string;
};

export default function MoversCard({
  city,
  description,
  rating,
  reviews,
  image,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl relative w-full max-w-[250px] sm:max-w-[280px] md:max-w-[250px] mx-auto shadow-md transition-transform hover:scale-105 flex flex-col">
      {/* Imagen */}
      <div className="relative">
        <Image
          src={image}
          alt={`Servicio de mudanza - ${description}`}
          className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-2xl"
        />

        {/* Burbuja flotante del rating */}
        <div className="absolute bottom-2 left-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 text-sm font-semibold shadow">
          <Star className="w-4 h-4 text-yellow-500" />
          <span>
            {rating} ({reviews})
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg font-bold text-gray-800">{city}</h3>
        <p className="text-gray-600 text-sm sm:text-sm flex-grow mt-1">
          {description}
        </p>

        {/* Botón CTA */}
        <div className="mt-4">
          <Link
            href="https://wa.me/51988780491?text=Hola%20quiero%20una%20cotización%20de%20mudanza"
            target="_blank"
            className="block w-full text-center px-4 py-2 rounded-lg bg-[#FFA03F] text-white font-semibold shadow hover:bg-[#ff8c1a] transition"
          >
            Cotizar mudanza
          </Link>
        </div>
      </div>
    </div>
  );
}
