"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 relative">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image 
            src="/img/logo.png" 
            alt="Eco-Andes" 
            width={190} 
            height={60} 
            priority
          />
        </div>

        {/* Links centrados */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-12 text-[#161D38] font-medium">
          <a href="#" className="hover:text-orange-600 font-semibold">Inicio</a>
          <a href="#about" className="hover:text-orange-600">Quienes somos?</a>
          <a href="#contact" className="hover:text-orange-600">Contáctanos</a>
        </div>

        {/* Botón menú en móvil con el SVG */}
        <button
          className=" p-2 rounded-md  transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image 
            src="/img/Hambu.svg" 
            alt="Menú"
            width={28} 
            height={28} 
            priority
          />
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg rounded-lg flex flex-col items-center py-6 space-y-5 md:hidden">
          <a href="#" className="hover:text-orange-600 font-semibold">Inicio</a>
          <a href="#about" className="hover:text-orange-600">Quienes somos?</a>
          <a href="#contact" className="hover:text-orange-600">Contáctanos</a>
        </div>
      )}
    </nav>
  );
}
