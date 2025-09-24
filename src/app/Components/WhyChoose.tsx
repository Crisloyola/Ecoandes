import React from 'react'

export default function WhyChoose() {
  return (
    <section id="whychoose" className="w-full bg-white py-16">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
        
        {/* Texto */}
        <div>
          <p className="text-[#FFA03F] font-semibold mb-2 text-[28px]">¿Quiénes Somos?</p>
          <h1 className="text-5xl md:text-[48px] font-bold mb-4">
            Tu Mudanza Segura <br /> y Sin Estrés
          </h1>
          <p className="text-gray-600 mb-6 text-[18px] leading-relaxed">
            En <span className="font-semibold">EcoAndes</span> contamos con un equipo profesional, 
            transporte especializado y más de 14 años de experiencia en el rubro de 
            <strong> mudanzas en Lima y Callao</strong>. 
            Garantizamos que tu traslado sea rápido, seguro y sin complicaciones. 
            Ofrecemos servicios de <strong>embalaje, transporte de oficinas, departamentos y mudanzas nacionales</strong>, 
            cuidando cada detalle de inicio a fin.
          </p>

          <button className="bg-[#FFA03F] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#e68a25] transition">
            <a href="https://wa.me/51988780491" target="_blank" rel="noopener noreferrer">
              Cotiza tu Mudanza
            </a>
          </button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            <div>
              <h3 className="text-4xl md:text-[48px] font-bold">14</h3>
              <p className="text-gray-500 text-[18px]">Años de experiencia</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-[48px] font-bold">320+</h3>
              <p className="text-gray-500 text-[15px]">Mudanzas exitosas</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-[48px] font-bold">67+</h3>
              <p className="text-gray-500 text-[18px]">Clientes satisfechos</p>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/img/15.jpg"
              alt="Mudanzas en Lima - EcoAndes"
              className="w-full h-[590px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
