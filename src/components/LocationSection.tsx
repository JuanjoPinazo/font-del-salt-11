import { PROPERTY } from "@/data/property";

export default function LocationSection() {
  return (
    <section id="ubicacion" className="py-16 sm:py-20 relative bg-dark-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 glass-panel p-2 sm:p-4 rounded-3xl overflow-hidden shadow-2xl h-[400px] sm:h-[500px]">
            {/* Google Maps iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.492723049386!2d-0.4284164!3d39.6611394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f32b85e0503%3A0x633512ed7dd097df!2sC.%20Font%20del%20Salt%2C%2011%2C%2046119%20N%C3%A1quera%2C%20Valencia!5e0!3m2!1ses!2ses!4v1714578912345!5m2!1ses!2ses" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '1rem' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de ubicación - ${PROPERTY.address}`}
            ></iframe>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold text-brand-500 tracking-widest uppercase mb-3">
              Ubicación Privilegiada
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Vivir entre el mar y la montaña
            </h3>
            <p className="text-slate-400 text-lg mb-8">
              La Urbanización El Paraíso en Náquera ofrece un entorno natural excepcional en las estribaciones de la Sierra Calderona, manteniendo una conexión excelente con Valencia capital.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-brand-500 shrink-0 mt-1">
                  <i className="fa-solid fa-car"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold">25 minutos de Valencia</h4>
                  <p className="text-slate-400 text-sm">Acceso rápido por la autovía CV-35 o A-7.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-brand-500 shrink-0 mt-1">
                  <i className="fa-solid fa-tree"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold">Sierra Calderona</h4>
                  <p className="text-slate-400 text-sm">Entorno natural protegido a pocos minutos para senderismo y ciclismo.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-brand-500 shrink-0 mt-1">
                  <i className="fa-solid fa-shop"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold">Servicios cercanos</h4>
                  <p className="text-slate-400 text-sm">Supermercados, colegios, centro de salud y restaurantes en el pueblo de Náquera.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
