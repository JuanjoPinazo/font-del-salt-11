import { getWhatsAppUrl } from "@/lib/contact";

export default function FloatingWhatsApp() {
  // Sustituir el número de teléfono (whatsappNumber) en src/data/contact.ts por el real
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20b858] text-white rounded-full flex items-center justify-center text-3xl shadow-lg shadow-[#25D366]/30 transition-all hover:scale-110 hover:-translate-y-1"
      aria-label="Contactar por WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
}
