export default function FAQ() {
  const faqs = [
    {
      question: "¿La parcela dispone de alcantarillado?",
      answer: "Actualmente la urbanización no dispone de red de alcantarillado general. Las viviendas de la zona funcionan mediante sistema individual de fosa séptica, solución habitual en la cooperativa/urbanización. Este punto deberá contemplarse en el proyecto de vivienda.",
    },
    {
      question: "¿La parcela cuenta con estudio geotécnico?",
      answer: "Sí. La parcela dispone de estudio geotécnico realizado, con información sobre capas del terreno, capacidad portante y recomendaciones de cimentación.",
    },
    {
      question: "¿Tiene estudio topográfico?",
      answer: "Sí. El estudio topográfico está realizado y disponible para consulta/descarga.",
    },
    {
      question: "¿Cuánta superficie se podría construir?",
      answer: "Con una edificabilidad de 0,42 sobre 812 m², la edificabilidad orientativa es de aproximadamente 341 m². El proyecto definitivo deberá ajustarse a la normativa urbanística aplicable y ser validado por técnico competente.",
    },
    {
      question: "¿Se puede modificar el terreno antes de construir?",
      answer: "Sí, siempre y cuando se respeten los límites de edificabilidad y las normativas municipales sobre movimientos de tierras y muros de contención."
    },
    {
      question: "¿Las imágenes muestran un proyecto definitivo?",
      answer: "No. Las imágenes son renders orientativos creados para visualizar el potencial de la parcela. El diseño definitivo dependerá del proyecto arquitectónico, la normativa urbanística aplicable y la validación de los técnicos competentes."
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
