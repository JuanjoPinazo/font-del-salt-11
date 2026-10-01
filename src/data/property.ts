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
  price: "Precio bajo consulta",
  description: "Parcela urbana premium lista para construir.",
};
