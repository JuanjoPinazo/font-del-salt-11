"use client";

import LocalImage from "@/components/ui/LocalImage";
import { propertyImages } from "@/data/images";

export default function PremiumVisuals() {
  const visuals = [
    {
      id: "antesDespues",
      imgSrc: propertyImages.premiumRenders.antesDespues,
      title: "Antes y después",
      text: "Una comparación visual entre el estado actual de la parcela y una posible vivienda integrada en el terreno.",
      colSpan: "lg:col-span-2", // Ocupa 2 columnas en desktop
    },
    {
      id: "vistaAerea",
      imgSrc: propertyImages.premiumRenders.vistaAerea,
      title: "Implantación orientativa",
      text: "Vista aérea para entender cómo podrían organizarse vivienda, piscina, jardín, acceso y garaje.",
      colSpan: "lg:col-span-1",
    },
    {
      id: "atardecer",
      imgSrc: propertyImages.premiumRenders.atardecer,
      title: "Atardecer con iluminación exterior",
      text: "Una imagen emocional para visualizar el potencial residencial y aspiracional de la parcela.",
      colSpan: "lg:col-span-1",
    },
    {
      id: "cotaBaja",
      imgSrc: propertyImages.premiumRenders.cotaBaja,
      title: "Desde el interior de la parcela",
      text: "Perspectiva desde la cota baja que ayuda a entender el desnivel y la integración de la vivienda.",
      colSpan: "lg:col-span-2",
    },
  ];

  return (
    <section id="premium-visuals" className="py-16 sm:py-24 relative bg-dark-900 border-t border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/10 via-dark-900 to-dark-900"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-500 tracking-widest uppercase mb-3">
            Exploración Visual
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Visualiza el potencial de la parcela
          </h3>
          <p className="text-slate-400 text-lg">
            Renders orientativos creados a partir de la parcela, su pendiente, su entorno y las posibilidades de implantación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {visuals.map((visual) => (
            <div 
              key={visual.id} 
              className={`group relative overflow-hidden rounded-3xl glass-panel bg-dark-950 border border-slate-700 shadow-xl flex flex-col ${visual.colSpan}`}
            >
              <a 
                href={visual.imgSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[4/3] sm:aspect-[16/9] w-full overflow-hidden cursor-zoom-in"
              >
                <LocalImage 
                  src={visual.imgSrc} 
                  alt={visual.title} 
                  className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105" 
                  fallbackLabel="Imagen pendiente"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-brand-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-dark-950/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <i className="fa-solid fa-expand mr-2"></i> Ampliar imagen
                  </div>
                </div>
              </a>
              
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-white mb-3">{visual.title}</h4>
                <p className="text-slate-400 leading-relaxed">
                  {visual.text}
                </p>
                {visual.id === "vistaAerea" && (
                  <div className="mt-4 p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-500 italic">
                    <i className="fa-solid fa-circle-info mr-2 text-brand-500/50"></i>
                    Implantación orientativa no vinculante. La distribución definitiva dependerá del proyecto arquitectónico, normativa urbanística y validación técnica.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
