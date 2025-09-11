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
          <a href="#whychoose" className="hover:text-orange-600">Quienes somos?</a>
          <a href="#contact" className="hover:text-orange-600">Contáctanos</a>
        </div>

        {/* Botón menú en móvil con el SVG */}
        <button
          className="p-2 rounded-md transition md:hidden"
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

      {/* Menú móvil con transición y más abajo */}
      <div
        className={`
          fixed left-0 right-0 z-50 md:hidden
          transition-transform duration-300 ease-in-out
          bg-white shadow-lg rounded-b-lg mt-[70px]
          ${isOpen ? "translate-y-[80px] opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
        style={{ top: 0 }}
      >
        <div className="relative flex flex-col items-center py-8 space-y-5">
          {/* Botón de cerrar (X) */}
          <button
            className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-orange-600"
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar menú"
          >
            ×
          </button>
          <a href="#" className="hover:text-orange-600 font-semibold" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="#whychoose" className="hover:text-orange-600" onClick={() => setIsOpen(false)}>Quienes somos?</a>
          <a href="#contact" className="hover:text-orange-600" onClick={() => setIsOpen(false)}>Contáctanos</a>
        </div>
      </div>
    </nav>
  );
}
