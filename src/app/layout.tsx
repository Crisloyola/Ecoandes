import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // 👈 incluye Medium
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Eco-Andes 🚚",
  description: "Ofrecemos un servicio de mudanza profesional y seguro, cuidando cada detalle para que tu experiencia sea rápida y sin preocupaciones.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
