"use client";

import { contact } from "@/data/contact";
import { propertyDocuments } from "@/data/documents";
import { getWhatsAppUrl, getMailtoUrl } from "@/lib/contact";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-16 sm:py-20 relative bg-dark-900 border-t border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-900/10 via-dark-900 to-dark-900"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CTA Dossier Block */}
        <div className="glass-panel p-8 sm:p-12 rounded-[2rem] bg-gradient-to-r from-brand-900/40 to-dark-900 border border-brand-500/30 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block">
            <i className="fa-solid fa-file-pdf text-[12rem] text-brand-500 mr-12"></i>
          </div>
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Toda la información preparada
            </h3>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Puedes descargar la ficha rápida para una primera valoración o el dossier completo para revisar todos los datos disponibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={propertyDocuments.fichaRapida.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-lg shadow-emerald-500/30"
              >
                Descargar ficha rápida
                <i className="fa-solid fa-download ml-3"></i>
              </a>
              <a 
                href={propertyDocuments.dossier.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-xl transition-all shadow-lg shadow-brand-500/30"
              >
                Descargar dossier completo
                <i className="fa-solid fa-download ml-3"></i>
              </a>
              <a 
                href={getWhatsAppUrl()}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-[#25D366] hover:bg-[#20b858] rounded-xl transition-all shadow-lg"
              >
                <i className="fa-brands fa-whatsapp mr-2 text-xl"></i>
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h2 className="text-sm font-bold text-brand-500 tracking-widest uppercase mb-3">
              ¿Hablamos?
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Contacta Directamente con la Propiedad
            </h3>
            <p className="text-slate-400 text-lg mb-8">
              Venta sin intermediarios ni comisiones de agencia. Escríbeme y resolveré cualquier duda sobre la parcela.
            </p>

            <div className="space-y-6">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center text-2xl group-hover:bg-brand-500 group-hover:text-white transition-all">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold group-hover:text-brand-500 transition-colors">WhatsApp</h4>
                  <p className="text-slate-400">{contact.phoneDisplay}</p>
                </div>
              </a>
              
              <a href={getMailtoUrl()} className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center text-2xl group-hover:bg-brand-500 group-hover:text-white transition-all">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold group-hover:text-brand-500 transition-colors">Email</h4>
                  <p className="text-slate-400">{contact.email}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-10 rounded-3xl bg-dark-950 shadow-2xl relative overflow-hidden border border-slate-700">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h4 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h4>
            
            <form action={getMailtoUrl()} method="GET" encType="text/plain" className="space-y-5">
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Asunto</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  defaultValue="Información sobre Parcela Font del Salt"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="body" className="block text-sm font-medium text-slate-300 mb-2">Mensaje</label>
                <textarea 
                  id="body" 
                  name="body"
                  rows={4} 
                  placeholder="Hola, me gustaría recibir más información sobre la parcela..." 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all resize-none"
                ></textarea>
              </div>
              
              <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-xl transition-all shadow-lg shadow-brand-500/25">
                Abrir en tu cliente de correo <i className="fa-regular fa-paper-plane ml-2"></i>
              </button>
              
              <p className="text-xs text-slate-500 text-center mt-4">
                El formulario abrirá tu aplicación de correo predeterminada (Outlook, Gmail, Apple Mail).
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
