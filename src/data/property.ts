export const PROPERTY = {
  address: "C/ Font del Salt, 11",
  location: "Urbanización El Paraíso, Náquera",
  sizeSqMeters: 812,
  buildabilityRatio: 0.42,
  get buildPotentialSqMeters() {
    return Math.round(this.sizeSqMeters * this.buildabilityRatio);
  },
  features: [
    "Suelo urbano consolidado",
    "Estudio geotécnico realizado",
    "Estudio topográfico disponible",
    "Fachada amplia",
  ],
  price: "A consultar", // Dejar constante editable si se quiere mostrar el precio
  description: "Parcela urbana premium lista para construir.",
  contactEmail: "contacto@tudominio.com", // Cambiar por el email real
  whatsappNumber: "34600000000", // Cambiar por el número real con código de país
  whatsappMessage:
    "Hola, estoy interesado en la parcela de C/ Font del Salt, 11 en Náquera. Me gustaría recibir más información.",
};
