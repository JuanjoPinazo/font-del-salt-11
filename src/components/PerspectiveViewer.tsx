"use client";

import { useState } from "react";
import { propertyImages } from "@/data/images";
import LocalImage from "@/components/ui/LocalImage";

export default function PerspectiveViewer() {
  const [activeView, setActiveView] = useState<number>(1);

  const views = [
    { id: 1, title: "Vista 1", src: propertyImages.fiveViews.vista1, desc: "Mirando hacia la esquina noroeste." },
    { id: 2, title: "Vista 2", src: propertyImages.fiveViews.vista2, desc: "Perspectiva frontal del terreno natural." },
    { id: 3, title: "Vista 3", src: propertyImages.fiveViews.vista3, desc: "Centro de la parcela hacia zona alta." },
    { id: 4, title: "Vista 4", src: propertyImages.fiveViews.vista4, desc: "Enfoque lateral este de la parcela." },
    { id: 5, title: "Vista 5", src: propertyImages.fiveViews.vista5, desc: "Línea delimitadora superior." },
  ];

  const currentView = views.find(v => v.id === activeView) || views[0];

  return (
    <section id="vistas" className="py-16 sm:py-24 relative bg-dark-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-bold text-brand-500 tracking-widest uppercase mb-3">
            Exploración Terreno
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Visor Interactivo: 5 Vistas
          </h3>
          <p className="text-slate-400 text-lg">
            Hemos mapeado físicamente el terreno tal y como lo verías al situarte en la cota baja, mirando radialmente hacia arriba.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Controles y Croquis (Izquierda) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <div className="glass-panel p-6 rounded-2xl flex-grow flex flex-col justify-center border border-slate-800">
              <h4 className="text-white font-bold text-xl mb-6">Selecciona una perspectiva</h4>
              
              <div className="flex flex-col gap-3">
                {views.map((view) => (
                  <button
                    key={view.id}
                    onClick={() => setActiveView(view.id)}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                      activeView === view.id
                        ? "bg-brand-500/10 border-brand-500 text-brand-400"
                        : "bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        activeView === view.id ? "bg-brand-500 text-white" : "bg-slate-700 text-slate-300"
                      }`}>
                        {view.id}
                      </div>
                      <span className="font-semibold">{view.title}</span>
                    </div>
                    <i className="fa-solid fa-chevron-right text-xs opacity-50"></i>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Visor Principal (Derecha) */}
          <div className="w-full lg:w-2/3">
            <div className="glass-panel rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] relative shadow-2xl h-full flex flex-col bg-slate-900 border border-slate-700">
              
              <div className="relative flex-grow overflow-hidden">
                <LocalImage 
                  src={currentView.src} 
                  alt={currentView.desc} 
                  className="absolute inset-0 w-full h-full animate-fade-in" 
                  fallbackLabel={`Vista ${currentView.id} pendiente`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-transparent to-transparent pointer-events-none z-10"></div>
                
                {/* Indicador superpuesto */}
                <div className="absolute bottom-6 left-6 z-20">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">{currentView.title}</h4>
                  <p className="text-sm text-slate-300 max-w-md hidden sm:block">
                    {currentView.desc}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center">
              <a 
                href={propertyImages.premiumRenders.cotaBaja} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-brand-400 bg-brand-500/10 hover:bg-brand-500/20 rounded-xl transition-all border border-brand-500/30 group"
              >
                <i className="fa-solid fa-eye mr-2 group-hover:scale-110 transition-transform"></i>
                Ver render desde cota baja
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
