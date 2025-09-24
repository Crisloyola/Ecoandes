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
  title: "Mudanzas en Lima | EcoAndes - Servicio de mudanza rápida y segura",
  description:
    "EcoAndes es tu empresa de mudanzas en Lima y Callao. Transporte especializado, embalaje profesional y mudanza sin estrés. Cotiza hoy.",
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
        <main>{children}</main>

        {/* LocalBusiness Schema */}
          <Script
            id="schema-localbusiness"
            type="application/ld+json"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MovingCompany",
                "@id": "https://www.logisticaecoandes.com/#company",
                name: "EcoAndes Mudanzas",
                url: "https://www.logisticaecoandes.com/",
                logo: "https://www.logisticaecoandes.com/img/logo.png",
                image: "https://www.logisticaecoandes.com/img/logo.png",
                description:
                  "EcoAndes ofrece mudanzas en Lima y Callao. Transporte seguro, embalaje profesional y servicio de mudanza rápida y sin estrés.",
                telephone: "+51 988 780 491",
                priceRange: "$$",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Jr Luis Varelay Obergoso 218 oficina 401",
                  addressLocality: "Lima",
                  addressRegion: "Lima",
                  postalCode: "15000",
                  addressCountry: "PE",
                },
                openingHours: ["Mo-Sa 08:00-20:00"],
                areaServed: [
                  {
                    "@type": "City",
                    name: "Lima",
                  },
                  {
                    "@type": "City",
                    name: "Callao",
                  },
                ],
                serviceOffered: {
                  "@type": "Service",
                  name: "Mudanzas en Lima y Callao",
                  serviceType: "Mudanza residencial y corporativa",
                  areaServed: {
                    "@type": "AdministrativeArea",
                    name: "Lima Metropolitana y Callao",
                  },
                },
                sameAs: [
                  "https://www.facebook.com/ecoandes.mudanzas",
                  "https://www.instagram.com/ecoandes.mudanzas",
                ],
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
