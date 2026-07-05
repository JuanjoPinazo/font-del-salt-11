import { PROPERTY } from "@/data/property";

export default function BuildPotential() {
  return (
    <section id="potencial" className="py-16 sm:py-20 relative bg-dark-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm font-bold text-brand-500 tracking-widest uppercase mb-3">
              Datos Técnicos
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Datos clave de la parcela
            </h3>
            <p className="text-slate-400 text-lg mb-8">
              La parcela cuenta con calificación de suelo urbano consolidado, lista para el diseño de una vivienda unifamiliar. A continuación, los parámetros urbanísticos y técnicos más relevantes.
            </p>
            
            <div className="space-y-4">
              <div className="glass-panel p-5 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-brand-500">
                    <i className="fa-solid fa-ruler-combined"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Superficie Total</h4>
                    <p className="text-slate-400 text-sm">Área de la parcela</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-white">{PROPERTY.sizeSqMeters}</span>
                  <span className="text-brand-500 font-bold ml-1">m²</span>
                </div>
              </div>

              <div className="glass-panel p-5 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-brand-500">
                    <i className="fa-solid fa-percent"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Edificabilidad</h4>
                    <p className="text-slate-400 text-sm">Coeficiente permitido (0.42)</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-white">{PROPERTY.buildabilityRatio}</span>
                </div>
              </div>

              <div className="glass-panel p-5 rounded-2xl flex items-center justify-between border-brand-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-600 flex items-center justify-center text-white">
                    <i className="fa-solid fa-house-chimney"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Construcción orientativa máx.</h4>
                    <p className="text-slate-400 text-sm">Superficie de techo construible</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-white">~{PROPERTY.buildPotentialSqMeters}</span>
                  <span className="text-brand-500 font-bold ml-1">m²</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-panel rounded-3xl p-8 lg:p-10 flex flex-col justify-center bg-dark-950 shadow-2xl relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <h4 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Características Urbanísticas</h4>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-500/10 text-brand-500 flex items-center justify-center shrink-0 mt-1">
                  <i className="fa-solid fa-file-contract"></i>
                </div>
                <div>
                  <h5 className="text-white font-bold">Clasificación</h5>
                  <p className="text-slate-400 text-sm">Suelo urbano consolidado.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-500/10 text-brand-500 flex items-center justify-center shrink-0 mt-1">
                  <i className="fa-solid fa-microscope"></i>
                </div>
                <div>
                  <h5 className="text-white font-bold">Estudios Previos Completados</h5>
                  <p className="text-slate-400 text-sm">Topográfico y geotécnico ya realizados y disponibles.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-500/10 text-brand-500 flex items-center justify-center shrink-0 mt-1">
                  <i className="fa-solid fa-water"></i>
                </div>
                <div>
                  <h5 className="text-white font-bold">Saneamiento</h5>
                  <p className="text-slate-400 text-sm">Fosa séptica individual según funcionamiento habitual de la urbanización.</p>
                </div>
              </li>
            </ul>

            <div className="mt-10 pt-6 border-t border-slate-800 text-center">
              <span className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-slate-300 bg-slate-900 rounded-xl border border-slate-700 cursor-not-allowed">
                <i className="fa-regular fa-file-pdf mr-2"></i> Documentación técnica disponible bajo solicitud
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
