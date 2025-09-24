export default function Newsletter() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        {/* Título optimizado */}
        <h2 className="text-4xl md:text-4xl font-bold mb-4">
          Promociones y descuentos en <span className="text-[#FFA03F]">mudanzas en Lima</span>
        </h2>

        {/* Descripción */}
        <p className="text-gray-600 mb-6 text-lg">
          Suscríbete y recibe <strong>descuentos exclusivos</strong>, 
          consejos prácticos para tu mudanza y fechas disponibles directamente en tu correo.
        </p>

        {/* Formulario */}
        <form
          className="flex flex-col md:flex-row items-center justify-center gap-3"
          role="form"
        >
          <input
            type="email"
            name="email"
            aria-label="Correo electrónico"
            placeholder="Ingresa tu correo"
            required
            className="w-full md:w-[400px] px-4 py-3 rounded-lg bg-orange-100 placeholder-gray-500 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#FFA03F] text-white font-semibold rounded-lg hover:bg-orange-600 shadow-md"
          >
            Quiero mi descuento
          </button>
        </form>

        {/* Nota de confianza */}
        <p className="text-gray-400 text-sm mt-4">
          Tu información está segura. No enviamos spam 🚚✨
        </p>
      </div>
    </section>
  );
}
