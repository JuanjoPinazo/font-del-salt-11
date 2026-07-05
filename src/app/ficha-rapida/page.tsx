"use client";

import Link from "next/link";
import { propertyDocuments } from "@/data/documents";
import { propertyImages } from "@/data/images";

export default function FichaRapida() {
  const whatsappUrl = "https://wa.me/34629083361?text=Hola,%20he%20visto%20la%20parcela%20de%20Font%20del%20Salt%2011%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n";

  return (
    <div className="min-h-screen bg-slate-50 py-8 print:py-0 print:bg-white font-sans text-slate-800">
      <div className="max-w-4xl mx-auto bg-white shadow-xl sm:rounded-2xl overflow-hidden print:shadow-none print:rounded-none">
        
        {/* Controles Solo Pantalla */}
        <div className="p-4 bg-dark-950 flex items-center justify-between print:hidden">
          <Link href="/" className="text-white hover:text-brand-400 font-medium flex items-center transition-colors">
            <i className="fa-solid fa-arrow-left mr-2"></i> Volver a la web
          </Link>
          <button 
            onClick={() => window.print()} 
            className="px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg transition-colors flex items-center shadow-lg"
          >
            <i className="fa-solid fa-print mr-2"></i> Imprimir / Guardar PDF
          </button>
        </div>

        <div className="p-8 sm:p-12 print:p-0 print:m-0">
          
          {/* Cabecera */}
          <header className="mb-8 border-b-2 border-brand-500/20 pb-6 print:pb-4 print:mb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-dark-950 mb-2 print:text-3xl">
              Parcela urbana en Náquera
            </h1>
            <h2 className="text-xl text-brand-600 font-bold mb-4 print:text-lg">
              C/ Font del Salt, 11 · Urbanización El Paraíso
            </h2>
            <div className="inline-block bg-slate-100 px-4 py-2 rounded-lg text-slate-700 font-semibold print:bg-transparent print:p-0 print:text-black">
              812 m² · Suelo urbano · Estudios técnicos realizados · Precio: 79.000 €
            </div>
          </header>

          {/* Imagen principal */}
          <div className="mb-8 print:mb-6">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl mb-3 print:rounded-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={propertyImages.premiumRenders.vistaAerea || "/images/render-vista-aerea.png"} 
                alt="Vista aérea de implantación"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-slate-500 italic text-center print:text-[10px]">
              * Imagen orientativa para comprender la posible implantación de vivienda, piscina, jardín y acceso.
            </p>
          </div>

          {/* Resumen breve */}
          <div className="mb-10 print:mb-6">
            <p className="text-base leading-relaxed text-slate-700 print:text-sm">
              Parcela urbana de 812 m² situada en C/ Font del Salt, 11, Urbanización El Paraíso, Náquera. Una oportunidad para construir una vivienda unifamiliar en un entorno residencial consolidado, arbolado y con privacidad. La parcela cuenta con estudio geotécnico y documentación topográfica ya realizados, lo que facilita valorar el potencial del terreno desde el primer momento.
            </p>
          </div>

          {/* Dos columnas: Datos y Potencial */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 print:mb-6 print:grid-cols-2 print:gap-6">
            
            {/* Datos Clave */}
            <div>
              <h3 className="text-lg font-bold text-dark-950 mb-4 border-b border-slate-200 pb-2 print:text-base">Datos Clave</h3>
              <ul className="space-y-3 text-sm print:text-[11px] print:space-y-2">
                <li className="flex justify-between border-b border-slate-100 pb-1">
                  <span className="font-semibold text-slate-600">Precio</span>
                  <span className="font-extrabold text-brand-600">79.000 €</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-1">
                  <span className="font-semibold text-slate-600">Superficie</span>
                  <span className="font-bold text-slate-800">812 m²</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-1">
                  <span className="font-semibold text-slate-600">Ref. Catastral</span>
                  <span className="text-slate-800 font-mono text-xs">3028903YJ2932N0001YJ</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-1">
                  <span className="font-semibold text-slate-600">Clasificación</span>
                  <span className="text-slate-800">Urbano</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-1">
                  <span className="font-semibold text-slate-600">Uso actual</span>
                  <span className="text-slate-800">Suelo sin edificar</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-1">
                  <span className="font-semibold text-slate-600">Edificabilidad</span>
                  <span className="text-slate-800">0,42</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-1">
                  <span className="font-semibold text-slate-600">Construcción máx.</span>
                  <span className="text-slate-800">aprox. 341 m²</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-1">
                  <span className="font-semibold text-slate-600">Saneamiento</span>
                  <span className="text-slate-800">Fosa séptica individual</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span className="font-semibold text-slate-600">Estudios incl.</span>
                  <span className="text-slate-800 text-right">Geotécnico y<br/>topográfico</span>
                </li>
              </ul>
            </div>

            {/* Potencial y Documentación */}
            <div className="space-y-8 print:space-y-6">
              <div>
                <h3 className="text-lg font-bold text-dark-950 mb-3 border-b border-slate-200 pb-2 print:text-base">Potencial</h3>
                <p className="text-sm leading-relaxed text-slate-700 print:text-[11px]">
                  La pendiente natural de la parcela permite plantear una vivienda con acceso desde calle, garaje inferior, terrazas escalonadas, piscina, jardín mediterráneo y zonas exteriores con privacidad.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-dark-950 mb-3 border-b border-slate-200 pb-2 print:text-base">Documentación disponible</h3>
                <ul className="list-disc pl-5 text-sm space-y-1 text-slate-700 print:text-[11px]">
                  <li>Dossier comercial completo</li>
                  <li>Referencia catastral</li>
                  <li>Estudio geotécnico</li>
                  <li>Documentación topográfica / DWG</li>
                  <li>Nota simple / escritura en fase avanzada</li>
                  <li>IBI bajo solicitud</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Aviso */}
          <div className="bg-slate-100 p-4 rounded-lg mb-8 print:bg-transparent print:border print:border-slate-300 print:p-3 print:mb-6">
            <p className="text-xs text-slate-600 text-justify print:text-[9px]">
              <strong>Aviso legal:</strong> Las imágenes son renders orientativos. El diseño final dependerá del proyecto arquitectónico, la normativa urbanística aplicable y la validación de técnicos competentes. Precios y condiciones sujetos a cambios sin previo aviso.
            </p>
          </div>

          {/* CTA / Contacto */}
          <div className="text-center print:text-left print:mt-4 print:border-t print:border-slate-800 print:pt-4">
            <h3 className="text-xl font-bold text-dark-950 mb-6 print:text-lg print:mb-2">
              Solicita el dossier completo o concierta una visita
            </h3>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 print:hidden">
              <a 
                href={propertyDocuments.dossier.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors"
              >
                <i className="fa-solid fa-download mr-2"></i> Descargar dossier
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20b858] transition-colors"
              >
                <i className="fa-brands fa-whatsapp mr-2 text-xl"></i> WhatsApp
              </a>
              <a 
                href="mailto:juanjopinazo@gmail.com"
                className="px-6 py-3 border-2 border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors"
              >
                <i className="fa-regular fa-envelope mr-2"></i> Email
              </a>
            </div>

            {/* Datos de contacto visibles solo en impresión para que la persona pueda llamar/escribir */}
            <div className="hidden print:block text-sm">
              <p><strong>Email:</strong> juanjopinazo@gmail.com</p>
              <p><strong>Teléfono / WhatsApp:</strong> +34 629 083 361</p>
              <p><strong>Web:</strong> parcela-fontdelsalt.com</p>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Print Styles Injection */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body { background: white !important; -webkit-print-color-adjust: exact; color-adjust: exact; }
          @page { size: A4; margin: 1cm; }
        }
      `}} />
    </div>
  );
}
