// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-white px-6 md:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-[1200px] mx-auto">
        
        {/* Texto */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-[100px] font-bold leading-tight text-gray-900">
            <span className="relative">
              <span className="absolute -bottom-1 left-0 w-[15rem] h-1 bg-orange-400"></span>
              <span className="relative z-10">Hacemos</span>
            </span>
            <br /> tu mudanza <br /> más fácil
          </h1>
          <p className="text-gray-600 text-lg">
            Ofrecemos un servicio de mudanza profesional y seguro, cuidando cada
            detalle para que tu experiencia sea rápida y sin preocupaciones.
          </p>

        {/* Buscador */}
          <div className="flex flex-col md:flex-row items-stretch 
            shadow-lg rounded-[49px] overflow-hidden w-[690px] h-[100px] text-[17px] 
            bg-white/30 backdrop-blur-lg border border-white/20">
            
            <select className="px-4 py-3 text-[#161D38] focus:outline-none flex-1 bg-transparent">
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

            <button className="text-white px-6 flex items-center justify-center">
              <Image
                src="/img/buscador.svg"
                alt="Buscar"
                width={24}
                height={24}
                className="h-[45px] w-[45px]"
              />
            </button>
          </div>
        </div>

       {/* Imágenes */}
        <div className="grid grid-cols-2 gap-4 ">
          {/* Columna izquierda con dos imágenes iguales */}
          <div className="flex flex-col gap-4">
            <div className="flex-1 w-[240px] h-[327px]">
              <Image
                src="/img/16.jpg"
                alt="Mudanza contenedor"
                width={305}
                height={427}
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 w-[240px] h-[327px]">
              <Image
                src="/img/6.jpeg"
                alt="Mudanza cajas"
                width={305}
                height={427}
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Columna derecha con imagen larga */}
          <div className="row-span-2 h-[480px] w-[270px] mt-15">
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
