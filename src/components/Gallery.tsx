"use client";

import { propertyImages } from "@/data/images";
import LocalImage from "@/components/ui/LocalImage";

export default function Gallery() {
  const environmentImages = [
    { src: propertyImages.gallery.principal, alt: "Vista principal de la parcela" },
    { src: propertyImages.gallery.parcelaNorte, alt: "Vista de la parcela desde el norte" },
    { src: propertyImages.gallery.entornoNatural, alt: "Entorno natural de la parcela" },
    { src: propertyImages.gallery.calleFontDelSalt, alt: "Calle Font del Salt" },
    { src: propertyImages.gallery.detalleTopografico, alt: "Detalle topográfico" },
  ];

  const rendersImages = [
    { src: propertyImages.renders.viviendaPrincipal, alt: "Ejemplo de vivienda moderna - Fachada principal" },
    { src: propertyImages.renders.viviendaPiscina, alt: "Integración con el entorno y piscina" },
    { src: propertyImages.renders.accesoCalle, alt: "Acceso desde calle principal" },
    { src: propertyImages.renders.garaje, alt: "Diseño de garaje a pie de calle" },
    { src: propertyImages.renders.vistaAerea, alt: "Vista aérea del proyecto" },
  ];

  return (
    <section id="galeria" className="py-16 sm:py-24 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PARCELA Y ENTORNO */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-bold text-brand-500 tracking-widest uppercase mb-3">
            A) Parcela y Entorno
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Ubicación Premium en Náquera
          </h3>
          <p className="text-slate-400 text-lg">
            Imágenes de la parcela actual, su topografía y el entorno consolidado de la Urbanización El Paraíso.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {environmentImages.map((img, idx) => (
            <div key={idx} className={`group relative overflow-hidden rounded-2xl glass-panel ${idx === 0 || idx === 3 ? "lg:col-span-2 sm:aspect-[2/1] aspect-[4/3]" : "aspect-[4/3]"}`}>
              <LocalImage 
                src={img.src} 
                alt={img.alt} 
                className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105" 
                fallbackLabel="Imagen pendiente"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full pointer-events-none">
                <p className="text-white font-bold text-lg drop-shadow-md">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* INSPIRACIÓN Y RENDERS */}
        <div className="text-center max-w-3xl mx-auto mb-10 border-t border-slate-800 pt-16">
          <h2 className="text-sm font-bold text-brand-500 tracking-widest uppercase mb-3">
            B) Inspiración
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Lo que podrías construir</h3>
          <p className="text-slate-400 mb-8">
            Renders orientativos de posibles configuraciones de vivienda respetando la normativa urbanística de la zona.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rendersImages.map((render, idx) => (
              <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-2xl glass-panel shadow-2xl">
                <LocalImage 
                  src={render.src} 
                  alt={render.alt} 
                  className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105" 
                  fallbackLabel="Render pendiente"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full pointer-events-none">
                  <p className="text-white font-bold text-lg drop-shadow-md">{render.alt}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-6 italic">* Renders orientativos. El diseño final dependerá del proyecto del comprador y de la normativa urbanística aplicable (hasta ~341 m² construibles).</p>
        </div>
      </div>
    </section>
  );
}
