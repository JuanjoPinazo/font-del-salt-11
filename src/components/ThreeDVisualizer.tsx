"use client";

import { useState } from "react";

export default function ThreeDVisualizer() {
  const [isActive, setIsActive] = useState(false);

  return (
    <section id="vistas" className="py-20 sm:py-28 relative bg-dark-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-500 tracking-widest uppercase mb-3">
            Explora el terreno
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Visor Interactivo 3D
          </h3>
          <p className="text-slate-400 text-lg">
            Descubre la topografía de la parcela y su inclinación. El estudio topográfico completo está disponible para descarga.
          </p>
        </div>

        <div className="relative glass-panel rounded-3xl overflow-hidden shadow-2xl h-[400px] sm:h-[600px] w-full flex items-center justify-center bg-dark-900 border border-slate-700">
          {!isActive ? (
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-brand-500/20 text-brand-500 flex items-center justify-center text-3xl mb-6 shadow-lg shadow-brand-500/20">
                <i className="fa-solid fa-cube"></i>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Modelo Topográfico 3D</h4>
              <p className="text-slate-400 mb-8 max-w-md mx-auto">
                Haz clic para cargar el visualizador interactivo del terreno. Funciona mejor en dispositivos de escritorio.
              </p>
              <button 
                onClick={() => setIsActive(true)}
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-xl transition-all shadow-lg"
              >
                Cargar Visualizador <i className="fa-solid fa-play ml-2"></i>
              </button>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-slate-900/50">
              <i className="fa-solid fa-person-digging text-6xl text-brand-500/50 mb-6"></i>
              <h4 className="text-xl font-bold text-white mb-2">Visualizador en Mantenimiento</h4>
              <p className="text-slate-400 text-center max-w-sm">
                Estamos actualizando el modelo 3D con los últimos datos topográficos. Por favor, descarga el plano topográfico en PDF en la sección de Descargas.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
