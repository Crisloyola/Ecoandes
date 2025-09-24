import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-500 to-[#FFA03F] text-white py-12">
      <div
        id="contac"
        className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        {/* Columna 1: Texto + redes */}
        <div>
          <p className="mb-4 text-sm">
            Contamos con un equipo profesional, transporte especializado y años de
            experiencia para garantizar que tu mudanza sea rápida y segura.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/TransporteEcoAndes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/transporteymudanzas.eco_andes/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@mudanzasecoandes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaTiktok size={20} />
            </a>
          </div>
        </div>

        {/* Columna 2: Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Nuestros Servicios</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#inicio" className="hover:underline">Inicio</a></li>
            <li><a href="#whychoose" className="hover:underline">¿Quiénes somos?</a></li>
            <li><a href="#contac" className="hover:underline">Contáctanos</a></li>
          </ul>
        </div>

        {/* Columna 3: Instagram */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Instagram</h3>
          <div className="grid grid-cols-3 gap-2">
            {["1.jpeg", "2.jpeg", "3.jpeg", "7.jpeg", "9.jpeg", "16.jpg"].map(
              (img, i) => (
                <img
                  key={i}
                  src={`/img/${img}`}
                  alt={`Mudanza EcoAndes ${i + 1}`}
                  className="w-20 h-20 object-cover rounded-md hover:scale-105 transition-transform"
                />
              )
            )}
          </div>
        </div>

        {/* Columna 4: Contacto */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contáctanos</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <FaLocationDot /> Jr Luis Varelay Obergoso 218 Oficina 401
            </li>
            <li className="flex items-start gap-3">
              <FaPhone />{" "}
              <div className="flex flex-col">
                <a href="https://wa.me/51988780491" target="_blank">+51 988780491</a>
                <a href="https://wa.me/51949359320" target="_blank">+51 949359320</a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope />{" "}
              <a href="mailto:Presupuestos@eco-andes.com">
                Presupuestos@eco-andes.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Línea final */}
      <div className="text-center mt-10 text-xs border-t border-white/30 pt-4">
        © 2025 Eco Andes Transporte. Todos los derechos reservados.
      </div>
    </footer>
  );
}
