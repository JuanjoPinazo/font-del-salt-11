import { PROPERTY } from "@/data/property";
import { contact } from "@/data/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-brand-600 to-emerald-400 flex items-center justify-center">
                <i className="fa-solid fa-mountain-sun text-white text-sm"></i>
              </div>
              <span className="text-lg font-bold text-white tracking-tight uppercase">
                {PROPERTY.address}
              </span>
            </div>
            <p className="text-slate-400 max-w-sm">
              Oportunidad única para adquirir una parcela premium en la Urbanización El Paraíso. Venta directa sin intermediarios.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Navegación</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#galeria" className="hover:text-brand-500 transition-colors">Galería y Entorno</a></li>
              <li><a href="#potencial" className="hover:text-brand-500 transition-colors">Potencial Constructivo</a></li>
              <li><a href="#descargas" className="hover:text-brand-500 transition-colors">Documentación</a></li>
              <li><a href="#faq" className="hover:text-brand-500 transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contacto</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <i className="fa-regular fa-envelope text-brand-500"></i>
                <a href={`mailto:${contact.email}`} className="hover:text-brand-500 transition-colors">{contact.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-brands fa-whatsapp text-brand-500"></i>
                <a href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="hover:text-brand-500 transition-colors">
                  WhatsApp Directo
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} Parcela {PROPERTY.address}. Todos los derechos reservados.</p>
          <p>
            Venta directa entre particulares. La información aquí mostrada es orientativa y no vinculante.
          </p>
        </div>
      </div>
    </footer>
  );
}
