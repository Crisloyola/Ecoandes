import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mudanzas en Lima | EcoAndes",
  description:
    "Ofrecemos un servicio de mudanza profesional y seguro, cuidando cada detalle para que tu experiencia sea rápida y sin preocupaciones.",
  icons: {
    icon: "/img/logo.png",
  },
  keywords: [
    "mudanzas en Lima",
    "empresa de mudanza",
    "mudanza económica",
    "Logistica EcoAndes",
    "mudanza segura",
    "servicio de mudanza",
    "mudanza rápida",
    "mudanza en Callao",
    "transporte especializado en mudanzas locales y nacionales"
  ],
  openGraph: {
    title: "Mudanzas en Lima | EcoAndes",
    description: "Tu mudanza segura y rápida en Lima y Callao.",
    url: "https://www.logisticaecoandes.com/",
    siteName: "EcoAndes",
    images: [
      {
        url: "https://www.logisticaecoandes.com/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Mudanza y Logistica en Lima",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        {children}

        {/* LocalBusiness Schema */}
        <Script
          id="schema-localbusiness"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovingCompany",
              name: "Mudanzas EcoAndes",
              image: "https://www.logisticaecoandes.com/img/logo.png",
              url: "https://www.logisticaecoandes.com/",
              telephone: "+51 988 780 491",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jr Luis Varelay Obergoso 218 oficina 401",
                addressLocality: "Lima",
                addressRegion: "Lima",
                postalCode: "15000",
                addressCountry: "PE",
              },
              openingHours: "Mo-Sa 08:00-20:00",
              priceRange: "$$",
              areaServed: {
                "@type": "Place",
                name: "Lima y Callao",
              },
            }),
          }}
        />

        {/* FAQ Schema */}
        <Script
          id="schema-faq"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cuánto cuesta una mudanza en Lima?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El precio depende del tamaño de la mudanza y la distancia, pero ofrecemos tarifas económicas y transparentes. Contáctanos para una cotización gratuita.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Ofrecen servicio de embalaje?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, contamos con un equipo especializado en embalaje seguro para proteger tus pertenencias durante la mudanza.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Realizan mudanzas al Callao?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, realizamos mudanzas tanto en Lima como en Callao, con transporte especializado y personal capacitado.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Puedo solicitar mudanza urgente?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, ofrecemos servicio de mudanza urgente sujeto a disponibilidad. Llámanos y coordinamos tu traslado lo antes posible.",
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
