"use client";

import LocalImage from "@/components/ui/LocalImage";
import { propertyImages } from "@/data/images";
import { propertyDocuments } from "@/data/documents";
import { getWhatsAppUrl } from "@/lib/contact";

export default function Hero() {

  return (
    <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-dark-950 min-h-[85vh] flex flex-col justify-center">
      {/* Background gradient & image overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/30 via-dark-950 to-dark-950 z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-500 text-xs sm:text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Disponible para Venta Directa
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight sm:leading-tight lg:leading-tight mb-6">
              El lienzo perfecto para tu hogar en <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-brand-400">
                Náquera Premium
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Parcela urbana consolidada de 812 m² en Urbanización El Paraíso. Un entorno privilegiado para proyectar una vivienda unifamiliar con jardín, piscina y privacidad, con estudio topográfico y geotécnico ya realizados.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start flex-wrap">
              <a
                href="#contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-xl transition-all shadow-lg shadow-brand-500/30 hover:-translate-y-1"
              >
                Concertar visita
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-800 bg-[#25D366] hover:bg-[#20b858] rounded-xl transition-all shadow-lg hover:shadow-[#25D366]/40 hover:-translate-y-1"
              >
                <i className="fa-brands fa-whatsapp mr-2 text-xl"></i>
                Hablar por WhatsApp
              </a>
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
                      event_label: "Hero CTA",
                    });
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-200 bg-slate-800/80 hover:bg-slate-700 rounded-xl transition-all border border-slate-700 hover:border-slate-600 backdrop-blur-sm"
              >
                Descargar dossier
                <i className="fa-solid fa-download ml-2"></i>
              </a>
              <a
                href={propertyDocuments.fichaRapida.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-sm font-semibold text-brand-400 hover:text-brand-300 underline underline-offset-4 transition-colors"
              >
                Ver ficha rápida (1 página)
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-emerald-400/20 blur-2xl rounded-[3rem]"></div>
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden glass-panel shadow-2xl border-2 border-slate-800 bg-slate-900 flex items-center justify-center">
              
              <LocalImage 
                src={propertyImages.premiumRenders.atardecer} 
                alt="Vista principal de la parcela en Náquera al atardecer" 
                className="absolute inset-0 w-full h-full"
                fallbackLabel="Imagen principal pendiente"
                priority={true}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent pointer-events-none"></div>

              {/* Price Badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 glass-panel p-3 sm:p-4 rounded-2xl flex flex-col items-end backdrop-blur-md bg-dark-950/80 border-brand-500/30 text-right z-20 shadow-2xl">
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-brand-400 leading-none mb-1">
                  79.000 €
                </div>
                <div className="text-[10px] sm:text-xs text-slate-300 font-medium max-w-[200px] leading-tight">
                  Documentación disponible: geotécnico, topográfico, catastro y dossier comercial.
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 lg:right-auto glass-panel p-4 rounded-2xl flex items-center gap-4 backdrop-blur-md bg-dark-950/60 border-slate-700/50">
                <div className="w-12 h-12 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center text-xl shrink-0 border border-brand-500/30">
                  <i className="fa-solid fa-map-location-dot"></i>
                </div>
                <div>
                  <div className="text-xs text-slate-300 font-medium">Ubicación</div>
                  <div className="text-sm font-bold text-white leading-tight">Urb. El Paraíso</div>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-slate-500 mt-3 text-center lg:text-left italic">
              * Render orientativo. El diseño final dependerá del proyecto del comprador y de la normativa aplicable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
