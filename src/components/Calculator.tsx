"use client";

import { useState } from "react";

export default function Calculator() {
  const [plotPrice, setPlotPrice] = useState<number>(79000);
  const [houseSize, setHouseSize] = useState<number>(150);
  const [buildCostPerSqm, setBuildCostPerSqm] = useState<number>(1200);
  
  // Fase 1: Compra + Gastos
  const [notaryRegistry, setNotaryRegistry] = useState<number>(3000);
  const [otherPurchaseCosts, setOtherPurchaseCosts] = useState<number>(0);

  // Fase 2: Proyecto Base e Iniciales
  const [technicalFees, setTechnicalFees] = useState<number>(15000);
  const [extraStudies, setExtraStudies] = useState<number>(0);
  const [licenses, setLicenses] = useState<number>(6000);
  const [connections, setConnections] = useState<number>(3000);
  const [sewage, setSewage] = useState<number>(4000);

  // Fase 3: Autopromoción y Desnivel
  const [earthworks, setEarthworks] = useState<number>(15000);
  const [retainingWalls, setRetainingWalls] = useState<number>(20000);
  const [foundation, setFoundation] = useState<number>(15000);
  const [access, setAccess] = useState<number>(10000);
  const [garage, setGarage] = useState<number>(0);
  
  // Fase Opcional
  const [exterior, setExterior] = useState<number>(10000);
  const [pool, setPool] = useState<number>(15000);
  const [gardening, setGardening] = useState<number>(5000);
  const [contingency, setContingency] = useState<number>(10000);

  // Cálculos
  const plotTaxes = plotPrice * 0.10; // ITP 10%
  const phase1Total = plotPrice + plotTaxes + notaryRegistry + otherPurchaseCosts;
  
  const phase2Total = technicalFees + extraStudies + licenses + connections + sewage;
  
  const buildCost = houseSize * buildCostPerSqm;
  const buildTaxes = buildCost * 0.10;
  
  const phase3SlopeCosts = earthworks + retainingWalls + foundation + access + garage;
  const phase3Total = buildCost + buildTaxes + phase3SlopeCosts;
  
  const phaseOptional = exterior + pool + gardening + contingency;
  
  const totalInvestment = phase1Total + phase2Total + phase3Total + phaseOptional;
  
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
            Estimación editable por fases
          </h3>
          <p className="text-slate-400 text-lg">
            No todo el importe se desembolsa al inicio. La compra de la parcela, el desarrollo del proyecto técnico y la construcción suelen producirse en fases diferenciadas. Todos los importes son orientativos y editables.
          </p>
          <div className="mt-4 p-4 bg-brand-500/10 rounded-xl border border-brand-500/30 text-sm text-brand-400 font-medium">
            <i className="fa-solid fa-triangle-exclamation mr-2"></i>
            Este estimador no sustituye un presupuesto técnico. En una parcela con pendiente, partidas como movimiento de tierras, contenciones, accesos, cimentación, acometidas y exteriores deben valorarse según el proyecto definitivo. No todas las partidas tienen por qué ejecutarse en una primera fase.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controles */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl bg-dark-950 border border-slate-700 shadow-xl overflow-y-auto max-h-[800px] custom-scrollbar">
            <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <i className="fa-solid fa-sliders text-brand-500"></i> Configuración de Partidas
            </h4>

            <div className="space-y-6">
              {/* Fase 1 */}
              <div className="pb-4 border-b border-slate-800">
                <h5 className="text-brand-500 font-bold mb-4">1. Compra + Gastos Iniciales</h5>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <label className="text-sm font-medium text-slate-300">Precio Parcela (€)</label>
                    <span className="text-brand-400 font-bold">{formatCurrency(plotPrice)}</span>
                  </div>
                  <input type="range" min="0" max="200000" step="1000" value={plotPrice} onChange={(e) => setPlotPrice(Number(e.target.value))} className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Notaría / Registro (€)</label>
                    <input type="number" value={notaryRegistry} onChange={(e) => setNotaryRegistry(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-brand-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Otros gastos compra (€)</label>
                    <input type="number" value={otherPurchaseCosts} onChange={(e) => setOtherPurchaseCosts(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-brand-500" />
                  </div>
                </div>
              </div>

              {/* Fase 2 */}
              <div className="pb-4 border-b border-slate-800">
                <h5 className="text-brand-500 font-bold mb-4">2. Proyecto Base / Fase Inicial</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Honorarios Técn. (€)</label>
                    <input type="number" value={technicalFees} onChange={(e) => setTechnicalFees(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-brand-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Estudios adic. (€)</label>
                    <input type="number" value={extraStudies} onChange={(e) => setExtraStudies(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-brand-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Licencias/Tasas (€)</label>
                    <input type="number" value={licenses} onChange={(e) => setLicenses(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-brand-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Acometidas (€)</label>
                    <input type="number" value={connections} onChange={(e) => setConnections(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-brand-500" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-slate-400 mb-1">Fosa Séptica / Saneamiento (€)</label>
                    <input type="number" value={sewage} onChange={(e) => setSewage(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-brand-500" />
                  </div>
                </div>
              </div>

              {/* Fase 3 */}
              <div className="pb-4 border-b border-slate-800">
                <h5 className="text-brand-500 font-bold mb-4">3. Autopromoción Constructiva</h5>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <label className="text-sm font-medium text-slate-300">Superficie Vivienda (m²)</label>
                    <span className="text-brand-400 font-bold">{houseSize} m²</span>
                  </div>
                  <input type="range" min="80" max="341" step="5" value={houseSize} onChange={(e) => setHouseSize(Number(e.target.value))} className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500" />
                </div>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <label className="text-sm font-medium text-slate-300">Coste Construcción (€/m²)</label>
                    <span className="text-brand-400 font-bold">{formatCurrency(buildCostPerSqm)}</span>
                  </div>
                  <input type="range" min="800" max="3000" step="50" value={buildCostPerSqm} onChange={(e) => setBuildCostPerSqm(Number(e.target.value))} className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Mov. Tierras (€)</label>
                    <input type="number" value={earthworks} onChange={(e) => setEarthworks(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-brand-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Contenciones (€)</label>
                    <input type="number" value={retainingWalls} onChange={(e) => setRetainingWalls(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-brand-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Cimentación especial (€)</label>
                    <input type="number" value={foundation} onChange={(e) => setFoundation(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-brand-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Accesos (€)</label>
                    <input type="number" value={access} onChange={(e) => setAccess(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-brand-500" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-slate-400 mb-1">Garaje (Si aplica) (€)</label>
                    <input type="number" value={garage} onChange={(e) => setGarage(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-brand-500" />
                  </div>
                </div>
              </div>

              {/* Partidas Opcionales */}
              <div>
                <h5 className="text-slate-400 font-bold mb-4">Partidas Opcionales / Faseables</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Exteriores (€)</label>
                    <input type="number" value={exterior} onChange={(e) => setExterior(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-brand-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Piscina (€)</label>
                    <input type="number" value={pool} onChange={(e) => setPool(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-brand-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Jardinería premium (€)</label>
                    <input type="number" value={gardening} onChange={(e) => setGardening(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-brand-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Contingencias (€)</label>
                    <input type="number" value={contingency} onChange={(e) => setContingency(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:border-brand-500" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Resultados */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl bg-slate-900 border border-brand-500/20 shadow-[0_0_30px_rgba(16,185,129,0.05)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <i className="fa-solid fa-chart-pie text-brand-500"></i> Desglose por Fases
            </h4>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-end border-b border-slate-800 pb-3">
                <div>
                  <span className="block text-white font-medium">1. Compra + Gastos Iniciales</span>
                  <span className="block text-xs text-slate-500 mt-1">Parcela, ITP y Notaría</span>
                </div>
                <span className="text-slate-300 font-mono">{formatCurrency(phase1Total)}</span>
              </div>
              
              <div className="flex justify-between items-end border-b border-slate-800 pb-3">
                <div>
                  <span className="block text-white font-medium">2. Proyecto Base Inicial</span>
                  <span className="block text-xs text-slate-500 mt-1">Arquitecto, licencias, acometidas...</span>
                </div>
                <span className="text-slate-300 font-mono">{formatCurrency(phase2Total)}</span>
              </div>

              <div className="flex justify-between items-end border-b border-slate-800 pb-3">
                <div>
                  <span className="block text-white font-medium">3. Obra + Partidas de Pendiente</span>
                  <span className="block text-xs text-slate-500 mt-1">Vivienda, tierras, muros, cimentación (Incluye 10% IVA obra)</span>
                </div>
                <span className="text-slate-300 font-mono">{formatCurrency(phase3Total)}</span>
              </div>

              <div className="flex justify-between items-end border-b border-slate-800 pb-3">
                <div>
                  <span className="block text-slate-400 font-medium italic">Partidas Opcionales y Faseables</span>
                  <span className="block text-xs text-slate-500 mt-1">Piscina, exteriores, jardinería, imprevistos</span>
                </div>
                <span className="text-slate-400 font-mono italic">{formatCurrency(phaseOptional)}</span>
              </div>
            </div>

            <div className="bg-dark-950 p-6 rounded-2xl border border-slate-800 text-center relative overflow-hidden mb-4">
              <span className="block text-sm text-slate-400 font-bold tracking-widest uppercase mb-2">Escenario orientativo de autopromoción completa</span>
              <span className="block text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-brand-500">
                {formatCurrency(totalInvestment)}
              </span>
            </div>
            
            <p className="text-[11px] text-slate-500 text-center leading-relaxed">
              * Importe orientativo, no presupuesto técnico. El IVA (10% o 21%) solo se ha calculado de forma simplificada en el volumen de obra. Consulte fiscalidad exacta.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
