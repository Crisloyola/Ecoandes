import React from 'react'

export default function WhyChoose() {
  return (
    <section id="whychoose" className="w-full bg-white py-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            
            {/* Texto */}
            <div>
            <p className="text-[#FFA03F] font-semibold mb-2 text-[28px]">¿Quienes Somos?</p>
            <h2 className="text-5xl md:text-[48px] font-bold mb-4">
                Tu Mudanza Segura <br /> y Sin Estrés
            </h2>
            <p className="text-gray-600 mb-6 text-[18px]">
                Contamos con un equipo profesional, transporte especializado y años de experiencia 
                para garantizar que tu mudanza sea rápida, segura y sin complicaciones. 
                Desde embalaje hasta entrega, cuidamos cada detalle.
            </p>
            <button className="bg-[#FFA03F]  text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#FFA03F] transition">
                <a href="https://wa.me/51988780491" target='_blank'>Conócenos</a>
            </button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
                <div>
                <h3 className="text-4xl md:ext-[48px] font-bold">14</h3>
                <p className="text-gray-500 text-[18px]">Años de experiencia</p>
                </div>
                <div>
                <h3 className="text-4xl md:ext-[48px font-bold">320+</h3>
                <p className="text-gray-500 text-[15px]">Mudanzas realizadas con éxito</p>
                </div>
                <div>
                <h3 className="text-4xl md:ext-[48px font-bold">67+</h3>
                <p className="text-gray-500 text-[18px]">Clientes satisfechos</p>
                </div>
            </div>
            </div>

            {/* Imagen */}
            <div className="flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                src="/img/15.jpg"
                alt="Mudanza"
                className="w-full h-[590px] object-cover"
                />
            </div>
            </div>
        </div>
    </section>

  )
}
