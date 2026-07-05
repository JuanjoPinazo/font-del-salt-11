import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { propertyImages } from "@/data/images";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ogImage = propertyImages.premiumRenders.atardecer;

export const metadata: Metadata = {
  metadataBase: new URL("https://parcela-fontdelsalt.com"),
  title: "Parcela urbana en Náquera | Font del Salt 11",
  description:
    "Parcela urbana de 812 m² en Urbanización El Paraíso, Náquera, con estudio geotécnico, topográfico, renders orientativos, dossier comercial y ficha rápida.",
  keywords: [
    "Parcela",
    "Náquera",
    "Urbanización El Paraíso",
    "Font del Salt",
    "Terreno",
    "Suelo Urbano",
    "Venta de Parcela",
  ],
  authors: [{ name: "Propiedad" }],
  openGraph: {
    title: "Parcela urbana en Náquera | Font del Salt 11",
    description:
      "Parcela urbana de 812 m² en Urbanización El Paraíso, Náquera, con estudio geotécnico, topográfico, renders orientativos, dossier comercial y ficha rápida.",
    type: "website",
    locale: "es_ES",
    siteName: "Parcela Font del Salt 11",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Render atardecer Parcela Náquera",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parcela urbana en Náquera | Font del Salt 11",
    description:
      "Parcela urbana de 812 m² en Urbanización El Paraíso, Náquera, con estudio geotécnico, topográfico, renders orientativos, dossier comercial y ficha rápida.",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="antialiased selection:bg-brand-500 selection:text-white overflow-x-hidden min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
