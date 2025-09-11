// components/MoversCard.tsx
"use client";

import { Star } from "lucide-react";


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
    <div className="bg-white rounded-2xl  relative w-[250px]">
      {/* Imagen */}
      <div className="relative">
        <img
          src={image}
          alt={city}
          className="w-full h-64 object-cover rounded-t-2xl"
        />

        {/* Burbuja flotante del rating */}
        <div className="absolute bottom-2 left-4 bg-white shadow-sm rounded-full px-3 py-1 flex items-center gap-1 text-sm font-semibold">
          <Star className="w-4 h-4 text-yellow-500" />
          <span>
            {rating} ({reviews})
          </span>
          <span className="ml-1">😊</span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5">
        <h3 className="text-lg font-bold">{city}</h3>
        <p className="text-[#FFA03F] font-semibold text-sm">{description}</p>
      </div>
    </div>
  );
}
