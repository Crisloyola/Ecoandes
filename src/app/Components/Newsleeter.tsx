export default function Newsletter() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Entérate primero de nuestras promociones y servicios
        </h2>

        {/* Descripción */}
        <p className="text-gray-600 mb-8">
          Suscríbete para recibir descuentos exclusivos, consejos prácticos y
          fechas disponibles. Haz tu mudanza más fácil con información útil y
          promociones directas a tu correo.
        </p>

        {/* Formulario */}
        <form className="flex flex-col md:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Ingresa tu correo"
            className="w-full md:w-[400px] px-4 py-3 rounded-lg bg-orange-100 placeholder-gray-500 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#FFA03F] text-white font-semibold rounded-lg hover:bg-orange-600 shadow-md"
          >
            SUSCRÍBETE
          </button>
        </form>
      </div>
    </section>
  );
}
