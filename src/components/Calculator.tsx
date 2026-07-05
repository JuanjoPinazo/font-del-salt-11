"use client";

import { useState } from "react";

export default function Calculator() {
  const [plotPrice, setPlotPrice] = useState<number>(79000);
  const [houseSize, setHouseSize] = useState<number>(150);
  const [buildCostPerSqm, setBuildCostPerSqm] = useState<number>(1200);

  // Cálculos orientativos
  const plotTaxes = plotPrice * 0.10; // ITP 10% (puede variar)
  const buildCost = houseSize * buildCostPerSqm;
  const buildTaxes = buildCost * 0.10; // IVA Autopromoción 10%
  const licenses = buildCost * 0.04; // Licencias y tasas ~4%
  const notaryRegistry = 3000; // Gastos fijos estimados
  const totalInvestment = plotPrice + plotTaxes + buildCost + buildTaxes + licenses + notaryRegistry;
  
  // Ahorro
  const savedStudies = 2000; // Geotécnico + Topográfico

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
  };

  return (
    <section id="calculadora" className="py-16 sm:py-24 relative bg-dark-900 border-y border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-900/10 via-dark-900 to-dark-900"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-bold text-brand-500 tracking-widest uppercase mb-3">
            Planificación Financiera
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Calculadora de Autopromoción
          </h3>
          <p className="text-slate-400 text-lg">
            Estima la inversión total para construir la casa de tus sueños. Personaliza los valores para adaptarlos a tu proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controles */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl bg-dark-950 border border-slate-700 shadow-xl">
            <h4 className="text-white font-bold text-xl mb-8 flex items-center gap-2">
              <i className="fa-solid fa-sliders text-brand-500"></i> Parámetros de tu Proyecto
            </h4>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-300">Precio Parcela (€)</label>
                  <span className="text-brand-400 font-bold">{formatCurrency(plotPrice)}</span>
                </div>
                <div className="text-xs text-brand-500/70 mb-3">Precio de venta de la parcela: 79.000 €</div>
                <input 
                  type="range" 
                  min="0" 
                  max="200000" 
                  step="5000" 
                  value={plotPrice} 
                  onChange={(e) => setPlotPrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-300">Superficie Vivienda (m²)</label>
                  <span className="text-brand-400 font-bold">{houseSize} m²</span>
                </div>
                <input 
                  type="range" 
                  min="80" 
                  max="341" 
                  step="10" 
                  value={houseSize} 
                  onChange={(e) => setHouseSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
                <div className="text-xs text-slate-500 mt-2 text-right">Máx. orientativo permitido: ~341 m²</div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-300">Coste Construcción (€/m²)</label>
                  <span className="text-brand-400 font-bold">{formatCurrency(buildCostPerSqm)}</span>
                </div>
                <input 
                  type="range" 
                  min="800" 
                  max="2500" 
                  step="50" 
                  value={buildCostPerSqm} 
                  onChange={(e) => setBuildCostPerSqm(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
              </div>
            </div>
          </div>

          {/* Resultados */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl bg-slate-900 border border-brand-500/20 shadow-[0_0_30px_rgba(16,185,129,0.05)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <i className="fa-solid fa-chart-pie text-brand-500"></i> Desglose Estimado
            </h4>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-end border-b border-slate-800 pb-3">
                <div>
                  <span className="block text-white font-medium">1. Parcela e Impuestos (ITP)</span>
                  <span className="block text-xs text-slate-500 mt-1">Suelo + 10% ITP</span>
                </div>
                <span className="text-slate-300 font-mono">{formatCurrency(plotPrice + plotTaxes)}</span>
              </div>
              
              <div className="flex justify-between items-end border-b border-slate-800 pb-3">
                <div>
                  <span className="block text-white font-medium">2. Ejecución de Obra + IVA</span>
                  <span className="block text-xs text-slate-500 mt-1">{houseSize} m² a {buildCostPerSqm} €/m² + 10% IVA</span>
                </div>
                <span className="text-slate-300 font-mono">{formatCurrency(buildCost + buildTaxes)}</span>
              </div>

              <div className="flex justify-between items-end border-b border-slate-800 pb-3">
                <div>
                  <span className="block text-white font-medium">3. Tasas y Licencias</span>
                  <span className="block text-xs text-slate-500 mt-1">~4% sobre coste de obra</span>
                </div>
                <span className="text-slate-300 font-mono">{formatCurrency(licenses)}</span>
              </div>

              <div className="flex justify-between items-end border-b border-slate-800 pb-3">
                <div>
                  <span className="block text-white font-medium">4. Notaría y Registro</span>
                  <span className="block text-xs text-slate-500 mt-1">Estimación fija</span>
                </div>
                <span className="text-slate-300 font-mono">{formatCurrency(notaryRegistry)}</span>
              </div>
              
              <div className="flex justify-between items-end bg-brand-500/10 p-3 rounded-xl border border-brand-500/30">
                <div>
                  <span className="block text-brand-400 font-bold"><i className="fa-solid fa-gift mr-1"></i> Ahorro en Estudios Geotécnico y Topográfico</span>
                  <span className="block text-xs text-brand-500/70 mt-1">Ya incluidos en el precio</span>
                </div>
                <span className="text-brand-400 font-bold font-mono">-{formatCurrency(savedStudies)}</span>
              </div>
            </div>

            <div className="bg-dark-950 p-6 rounded-2xl border border-slate-800 text-center relative overflow-hidden">
              <span className="block text-sm text-slate-400 font-bold tracking-widest uppercase mb-2">Inversión Total Estimada</span>
              <span className="block text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-brand-500">
                {formatCurrency(totalInvestment)}
              </span>
            </div>

            <p className="text-[11px] text-slate-500 mt-6 text-center leading-relaxed">
              * Cálculo orientativo. Los importes reales dependerán del proyecto, calidades, licencias, impuestos vigentes y honorarios profesionales.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
