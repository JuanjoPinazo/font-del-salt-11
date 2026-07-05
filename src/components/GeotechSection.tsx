"use client";

import { driveAssets } from "@/data/assets";
import { driveFileUrl } from "@/lib/drive";

export default function GeotechSection() {
  const geotecnicoUrl = driveFileUrl(driveAssets.documents.geotecnico);

  const layers = [
    { name: "Tierra vegetal", depth: "0,00 m - 0,40 m", color: "bg-[#4a3f35]", textColor: "text-[#d1c7bd]", desc: "Capa superficial orgánica." },
    { name: "Dolomías grises", depth: "0,40 m - 4,50 m", color: "bg-[#6c757d]", textColor: "text-white", desc: "Sustrato rocoso de excelente capacidad portante." },
    { name: "Dolomías rojizas", depth: "4,50 m - 6,00 m", color: "bg-[#8b5a44]", textColor: "text-white", desc: "Roca base profunda." },
  ];

  return (
    <section id="geotecnico" className="py-16 sm:py-24 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-sm font-bold text-brand-500 tracking-widest uppercase mb-3">
              Estudio Geotécnico Completado
            </h2>
            <h2 className="text-3xl font-extrabold text-white mb-6">
              Estudio geotécnico ya realizado
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed font-light">
              La parcela cuenta con un estudio geotécnico ya realizado, confirmando la calidad del subsuelo para la construcción. Esto facilita el cálculo de la cimentación como base técnica del proyecto.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="glass-panel p-5 rounded-xl border-l-4 border-l-brand-500">
                <span className="block text-slate-400 text-sm mb-1">Carga Admisible</span>
                <span className="block text-white font-bold text-xl">4,20 kg/cm²</span>
              </div>
              <div className="glass-panel p-5 rounded-xl border-l-4 border-l-emerald-500">
                <span className="block text-slate-400 text-sm mb-1">Expansividad</span>
                <span className="block text-white font-bold text-xl">Nula / Excelente</span>
              </div>
              <div className="glass-panel p-5 rounded-xl border-l-4 border-l-brand-500 sm:col-span-2">
                <span className="block text-slate-400 text-sm mb-1">Cimentación Aconsejada</span>
                <span className="block text-white font-bold text-xl">Zapatas Directas</span>
                <span className="block text-slate-500 text-xs mt-1">Sustrato detectado: Dolomías grises recristalizadas</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              {geotecnicoUrl ? (
                <a href={geotecnicoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 w-full sm:w-auto text-sm font-bold text-brand-500 bg-brand-500/10 hover:bg-brand-500 hover:text-white rounded-xl transition-all border border-brand-500/30">
                  <i className="fa-regular fa-file-pdf mr-2"></i> Ver Estudio Completo
                </a>
              ) : (
                 <span className="inline-flex items-center justify-center px-6 py-3 w-full sm:w-auto text-sm font-bold text-slate-500 bg-slate-800 rounded-xl border border-slate-700 cursor-not-allowed">
                  <i className="fa-regular fa-file-pdf mr-2"></i> Estudio pendiente
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-500 mt-4 italic">
              * Información extraída del estudio geotécnico disponible para consulta. El proyecto final deberá ser validado por técnico competente.
            </p>
          </div>

          <div className="relative">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl bg-dark-900 border border-slate-700">
              <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                <i className="fa-solid fa-layer-group text-brand-500"></i> Estratigrafía del Terreno
              </h4>
              
              <div className="flex flex-col rounded-xl overflow-hidden shadow-inner bg-dark-950 border border-slate-800">
                {layers.map((layer, idx) => (
                  <div key={idx} className={`relative flex items-center justify-between p-4 sm:p-6 ${layer.color} border-b border-black/20 last:border-0`}>
                    <div className="relative z-10">
                      <span className={`block font-bold text-lg ${layer.textColor}`}>{layer.name}</span>
                      <span className={`block text-xs opacity-70 ${layer.textColor}`}>{layer.desc}</span>
                    </div>
                    <div className={`relative z-10 font-mono text-sm font-bold opacity-90 ${layer.textColor} whitespace-nowrap ml-4 bg-black/20 px-3 py-1 rounded-md`}>
                      {layer.depth}
                    </div>
                    {/* Textura sutil según la capa */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
