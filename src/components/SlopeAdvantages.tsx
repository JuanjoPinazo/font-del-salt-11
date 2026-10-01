import { propertyImages } from "@/data/images";
import LocalImage from "@/components/ui/LocalImage";

export default function SlopeAdvantages() {
  const advantages = [
    {
      icon: "fa-road",
      title: "Acceso desde calle",
      desc: "Posibilidad de plantear una entrada directa y cómoda aprovechando la fachada principal.",
    },
    {
      icon: "fa-car",
      title: "Garaje en cota inferior",
      desc: "La pendiente permite estudiar un garaje semisubterráneo o a nivel de calle inferior, optimizando el espacio.",
    },
    {
      icon: "fa-house-chimney-window",
      title: "Vivienda adaptada",
      desc: "Una solución posible sería organizar la vivienda en varios niveles integrados de forma natural en el terreno.",
    },
    {
      icon: "fa-layer-group",
      title: "Terrazas escalonadas",
      desc: "Conceptualmente se han representado zonas exteriores en distintos niveles para maximizar el uso del jardín.",
    },
    {
      icon: "fa-water-ladder",
      title: "Piscina integrada",
      desc: "El desnivel facilita encajar la piscina como un elemento arquitectónico que conecta diferentes cotas.",
    },
    {
      icon: "fa-eye",
      title: "Privacidad y vistas",
      desc: "Al elevar las zonas de estar sobre el nivel de la calle, se consigue mayor intimidad y vistas despejadas.",
    },
  ];

  return (
    <section id="aprovechar-desnivel" className="py-16 sm:py-24 relative bg-dark-950 border-t border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-900/10 via-dark-950 to-dark-950"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-500 tracking-widest uppercase mb-3">
            El valor del terreno
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Cómo aprovechar el desnivel
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Una posible forma de aprovechar la pendiente es organizar la vivienda en varios niveles, reservando la cota inferior para acceso de vehículos o garaje y las cotas superiores para vivienda, terrazas y piscina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {advantages.map((adv, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl bg-dark-900 border border-slate-800 shadow-xl hover:border-brand-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500 mb-4 text-xl border border-brand-500/20">
                <i className={`fa-solid ${adv.icon}`}></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{adv.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-700 text-center text-sm text-slate-400 max-w-4xl mx-auto italic">
          <i className="fa-solid fa-circle-info text-brand-500/50 mr-2"></i>
          Las imágenes mostradas en esta web son recreaciones conceptuales destinadas a visualizar el potencial de la parcela. No sustituyen el estudio de un arquitecto ni la validación urbanística municipal.
        </div>
      </div>
    </section>
  );
}
