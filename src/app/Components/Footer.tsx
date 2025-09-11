// components/Footer.tsx
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer  className="bg-[#FFA03F] text-white py-12">
      <div id="contac" className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Columna 1: Texto + redes */}
        <div>
          <p className="mb-4">
            Contamos con un equipo profesional, transporte especializado y años de
            experiencia para garantizar que tu mudanza sea rápida
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/TransporteEcoAndes"  className="hover:text-gray-200">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.instagram.com/transporteymudanzas.eco_andes/" className="hover:text-gray-200">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.tiktok.com/@mudanzasecoandes" className="hover:text-gray-200">
              <FaTiktok  size={20} />
            </a>
          </div>
        </div>

        {/* Columna 2: Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Inicio</a></li>
            <li><a href="#" className="hover:underline">Quienes somos?</a></li>
            <li><a href="#" className="hover:underline">Contactanos</a></li>
          </ul>
        </div>

        {/* Columna 3: Instagram */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Instagram</h3>
          <div className="grid grid-cols-3 gap-2">
            <img src="/img/1.jpeg" alt="Instagram 1" className="w-20 h-20 object-cover rounded-md" />
            <img src="/img/2.jpeg" alt="Instagram 2" className="w-20 h-20 object-cover rounded-md" />
            <img src="/img/3.jpeg" alt="Instagram 3" className="w-20 h-20 object-cover rounded-md" />
            <img src="/img/7.jpeg" alt="Instagram 4" className="w-20 h-20 object-cover rounded-md" />
            <img src="/img/9.jpeg" alt="Instagram 5" className="w-20 h-20 object-cover rounded-md" />
            <img src="/img/16.jpg" alt="Instagram 6" className="w-20 h-20 object-cover rounded-md" />
          </div>
        </div>

        {/* Columna 4: Contacto */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contactanos</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaLocationDot /> Jr Luis varelay obergoso 218 oficina 401
            </li>
            <li className="flex items-center gap-3">
              <FaPhone /> +51 988780491 <br /> +51 949359320
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope /> Presupuestos@eco-andes.com
            </li>
          </ul>
        </div>
      </div>

      {/* Línea final */}
      <div className="text-center mt-10 text-sm">
        AndesTransporte©2025 all right reserve
      </div>
    </footer>
  );
}
