import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PremiumVisuals from "@/components/sections/PremiumVisuals";
import Gallery from "@/components/Gallery";
import PerspectiveViewer from "@/components/PerspectiveViewer";
import BuildPotential from "@/components/BuildPotential";
import GeotechSection from "@/components/GeotechSection";
import Calculator from "@/components/Calculator";
import DocumentsSection from "@/components/DocumentsSection";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="flex-grow pt-16 sm:pt-20">
        <Hero />
        <PremiumVisuals />
        <Gallery />
        <PerspectiveViewer />
        <BuildPotential />
        <GeotechSection />
        <Calculator />
        <FAQ />
        <DocumentsSection />
        <ContactSection />
      </main>

      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
