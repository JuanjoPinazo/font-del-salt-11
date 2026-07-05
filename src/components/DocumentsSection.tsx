"use client";

import { propertyDocuments } from "@/data/documents";

export default function DocumentsSection() {
  return (
    <section id="descargas" className="py-16 sm:py-20 relative bg-dark-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-brand-500 tracking-widest uppercase mb-3">
            Documentación
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Todo lo que necesitas saber
          </h3>
          <p className="text-slate-400 text-lg">
            Descarga el dossier con el resumen completo o solicita los documentos técnicos para evaluarlos con tu arquitecto.
          </p>
        </div>

        {/* Dossier Destacado */}
        <div className="glass-panel p-8 sm:p-10 rounded-[2rem] border border-brand-500/30 bg-gradient-to-br from-dark-900 to-dark-950 shadow-2xl shadow-brand-900/10 mb-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
            <i className="fa-solid fa-file-pdf text-8xl text-brand-500"></i>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-start sm:items-center justify-between">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider mb-4 border border-brand-500/20">
                Completo
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white mb-3">{propertyDocuments.dossier.title}</h4>
              <p className="text-slate-300 text-base max-w-xl">
                Documento principal con toda la información comercial, visual y técnica resumida.
              </p>
            </div>
            <div className="w-full sm:w-auto shrink-0">
              <a
                href={propertyDocuments.dossier.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  if (typeof window !== "undefined" && (window as any).gtag) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (window as any).gtag("event", "download_dossier", {
                      event_category: "engagement",
                      event_label: "DocumentsSection",
                    });
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-xl transition-all shadow-lg shadow-brand-500/30 hover:-translate-y-1"
              >
                Descargar dossier
                <i className="fa-solid fa-download ml-3"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Ficha Rápida */}
        <div className="glass-panel p-6 sm:p-8 rounded-[2rem] border border-slate-700 bg-dark-900 mb-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 hover:border-brand-500/50 transition-colors">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 text-3xl shadow-inner">
              <i className="fa-solid fa-file-invoice"></i>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-slate-800 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-2 border border-slate-700">
                1 página
              </div>
              <h4 className="text-xl font-bold text-white mb-1">{propertyDocuments.fichaRapida.title}</h4>
              <p className="text-slate-400 text-sm max-w-md">
                Resumen de una página para enviar por WhatsApp o revisar de un vistazo.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 shrink-0">
            <a
              href={propertyDocuments.fichaRapida.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
            >
              Descargar ficha rápida
              <i className="fa-solid fa-download ml-2"></i>
            </a>
          </div>
        </div>

        {/* Documentos Técnicos Bajo Solicitud */}
        <div className="mb-4">
          <h4 className="text-white font-bold text-lg mb-4">Documentación técnica <span className="text-slate-400 text-sm font-normal">(bajo solicitud)</span></h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="glass-panel p-5 rounded-2xl border border-slate-800 bg-dark-900 flex items-center justify-between opacity-80">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center">
                <i className="fa-solid fa-microscope"></i>
              </div>
              <div>
                <div className="text-white font-bold text-sm">{propertyDocuments.geotecnico.title}</div>
                <div className="text-slate-500 text-xs mt-0.5">Disponible bajo solicitud</div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800 bg-dark-900 flex items-center justify-between opacity-80">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center">
                <i className="fa-solid fa-map"></i>
              </div>
              <div>
                <div className="text-white font-bold text-sm">{propertyDocuments.topografico.title}</div>
                <div className="text-slate-500 text-xs mt-0.5">Disponible bajo solicitud</div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800 bg-dark-900 flex items-center justify-between opacity-80">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center">
                <i className="fa-solid fa-map-location-dot"></i>
              </div>
              <div>
                <div className="text-white font-bold text-sm">{propertyDocuments.catastro.title}</div>
                <div className="text-slate-500 text-xs mt-0.5">Disponible bajo solicitud</div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800 bg-dark-900 flex items-center justify-between opacity-80">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center">
                <i className="fa-solid fa-file-signature"></i>
              </div>
              <div>
                <div className="text-white font-bold text-sm">Nota Simple / Escritura</div>
                <div className="text-slate-500 text-xs mt-0.5">Fase avanzada de compra</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
