export default function FAQ() {
  const faqs = [
    {
      question: "¿La pendiente encarece la construcción?",
      answer: "La pendiente puede implicar partidas específicas como movimiento de tierras, contenciones, accesos y cimentación. Por eso la web muestra renders conceptuales y documentación técnica disponible para que el comprador pueda revisarlo con su arquitecto antes de avanzar.",
    },
    {
      question: "¿Hay que nivelar toda la parcela?",
      answer: "No necesariamente. Una solución arquitectónica habitual y eficiente es escalonar la vivienda y los espacios exteriores (terrazas, piscina) para adaptarse al perfil natural, reduciendo el movimiento de tierras.",
    },
    {
      question: "¿Puede plantearse un garaje?",
      answer: "Sí, la diferencia de cota entre la calle y la parcela permite estudiar la integración de un garaje semisubterráneo o a pie de calle en la parte inferior de la parcela.",
    },
    {
      question: "¿Qué acometidas existen?",
      answer: "La parcela se encuentra en suelo urbano consolidado y dispone de acceso a suministros básicos a pie de calle. Las acometidas definitivas deberán ser validadas por las compañías suministradoras y el Ayuntamiento.",
    },
    {
      question: "¿Qué implica utilizar fosa séptica?",
      answer: "Como en gran parte de la urbanización, no hay red de alcantarillado general. Será necesario instalar un sistema de depuración o fosa séptica homologada dentro de la parcela, algo habitual y contemplado en los proyectos de la zona.",
    },
    {
      question: "¿Puede mi arquitecto revisar el topográfico y el geotécnico antes de visitar?",
      answer: "Por supuesto. Ambos documentos están disponibles bajo solicitud para que tu equipo técnico pueda evaluar la viabilidad de tu proyecto antes de realizar una visita o presentar una oferta.",
    },
    {
      question: "¿Las imágenes son un proyecto aprobado?",
      answer: "No. Todas las imágenes mostradas (renders, implantación aérea, accesos) son recreaciones conceptuales orientativas. No constituyen un proyecto técnico ni cuentan con licencia municipal.",
    },
    {
      question: "¿Qué documentación puede revisarse antes de hacer una oferta?",
      answer: "Podemos facilitar el dossier comercial, ficha rápida, estudio topográfico, estudio geotécnico y datos catastrales. Toda esta documentación está pensada para aportar la máxima transparencia.",
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 relative bg-dark-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-500 tracking-widest uppercase mb-3">
            Preguntas Frecuentes
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
            Resolvemos tus dudas
          </h3>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
              <h4 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                <i className="fa-solid fa-circle-question text-brand-500 mt-1"></i>
                {faq.question}
              </h4>
              <p className="text-slate-400 pl-8 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
