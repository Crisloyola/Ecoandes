"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-white px-4 md:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-[1200px] mx-auto">
        
        {/* Texto */}
        <div className="space-y-6">
          <h1 className="text-[65px] sm:text-5xl md:text-[100px] font-bold leading-tight text-gray-900">
            <span className="relative inline-block">
              <span className="absolute -bottom-1 left-0 w-[8rem] sm:w-[12rem] md:w-[15rem] h-1 bg-[#FFA03F]"></span>
              <span className="relative z-10">Hacemos</span>
            </span>
            <br /> tu mudanza <br />más fácil en Lima
          </h1>

          <h2 className="text-gray-600 text-sm sm:text-base md:text-lg text-[20px]">
            “Somos una empresa de mudanzas en Lima y Callao que ofrece un servicio
            profesional, seguro y económico. En EcoAndes cuidamos cada detalle de tu
            traslado para que tu mudanza sea rápida, confiable y sin preocupaciones.”
          </h2>

          {/* Buscador solo visible en md+ */}
          <div className="hidden md:flex flex-col md:flex-row items-stretch shadow-lg rounded-[49px] overflow-hidden w-full md:w-[690px] h-auto md:h-[100px] text-[15px] md:text-[17px] bg-white/30 backdrop-blur-lg border border-white/20">
            <select className="px-4 py-3 text-[#161D38] focus:outline-none flex-1 bg-transparent mt-2">
              <option>Origen</option>
              <option>Lima</option>
              <option>Callao</option>
            </select>

            <select className="px-4 py-3 text-[#161D38] focus:outline-none flex-1 bg-transparent">
              <option>Destino</option>
              <option>San Borja</option>
              <option>Miraflores</option>
            </select>

            <select className="px-4 py-3 text-[#161D38] focus:outline-none flex-1 bg-transparent">
              <option>Tipo de mudanza</option>
              <option>Hogar</option>
              <option>Oficina</option>
            </select>

            <button className="text-white px-6 flex items-center justify-center ">
              <Image
                src="/img/buscador.svg"
                alt="Buscar"
                width={24}
                height={24}
                className="h-[35px] w-[35px] md:h-[45px] md:w-[45px]"
              />
            </button>
          </div>
        </div>

        {/* Imágenes solo visibles en md+ */}
        <div className="hidden md:grid grid-cols-2 gap-4">
          {/* Columna izquierda */}
          <div className="flex flex-col gap-4">
            <div className="flex-1 w-full h-[200px] sm:h-[280px] md:w-[240px] md:h-[327px]">
              <Image
                src="/img/16.jpg"
                alt="Mudanza contenedor"
                width={305}
                height={427}
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 w-full h-[200px] sm:h-[280px] md:w-[240px] md:h-[327px]">
              <Image
                src="/img/6.jpeg"
                alt="Mudanza cajas"
                width={305}
                height={427}
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Columna derecha */}
          <div className="row-span-2 w-full h-[300px] sm:h-[420px] md:w-[270px] md:h-[480px] md:mt-12">
            <Image
              src="/img/10.jpeg"
              alt="Mudanza camión"
              width={409}
              height={612}
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
