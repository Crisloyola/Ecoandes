"use client";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Logist from "./Components/logist";
import MoversCarousel from "./Components/MoversCarousel";
import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsleeter";
import Testimonials from "./Components/Testimonials";
import WhyChoose from "./Components/WhyChoose";
import WhyChooseUs from "./Components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <MoversCarousel />
      <Logist />
      <WhyChoose />
      <Testimonials />
      <Newsletter />
      <Footer />  
      {/* Icono flotante de WhatsApp con animación */}
      <a
        href="https://wa.me/51988780491"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 animate-bounce-custom"
        aria-label="WhatsApp"
      >
        <img
          src="/img/what.svg"
          alt="WhatsApp"
          className="w-20 h-15 rounded-full hover:scale-110 transition-transform"
        />
      </a>
      <style jsx global>{`
        @keyframes bounce-custom {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          10% {
            transform: translateY(-8px) scale(1.08);
          }
          20% {
            transform: translateY(-16px) scale(1.12);
          }
          30% {
            transform: translateY(-8px) scale(1.08);
          }
          40% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-4px) scale(1.04);
          }
          60% {
            transform: translateY(0) scale(1);
          }
        }
        .animate-bounce-custom {
          animation: bounce-custom 2.2s infinite;
        }
      `}</style>
    </main>
  );
}
