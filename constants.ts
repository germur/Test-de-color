import { SeasonId, SeasonData } from './types';

export const SEASONS: Record<SeasonId, SeasonData> = {
  [SeasonId.TRUE_WINTER]: {
    id: SeasonId.TRUE_WINTER,
    displayName: "Invierno Verdadero",
    description: "La estación fría por excelencia. Colores puros, helados y de alto contraste.",
    characteristics: { undertone: "Cool", contrast: "High", chroma: "Bright" },
    palette: [
      { name: "Fuchsia", hex: "#BD4C90", category: "accent" },
      { name: "Emerald Green", hex: "#0B9456", category: "accent" },
      { name: "Royal Blue", hex: "#3144A2", category: "base" },
      { name: "Icy Yellow", hex: "#F1ED6D", category: "accent" },
      { name: "Black", hex: "#000000", category: "neutral" },
      { name: "Pure White", hex: "#FFFFFF", category: "neutral" },
    ]
  },
  [SeasonId.DARK_WINTER]: {
    id: SeasonId.DARK_WINTER,
    displayName: "Invierno Profundo",
    description: "Dominado por la oscuridad, fluye hacia el otoño permitiendo cierta calidez profunda.",
    characteristics: { undertone: "Cool-Neutral", contrast: "High", chroma: "Deep" },
    palette: [
      { name: "Black Cherry", hex: "#461111", category: "base" },
      { name: "Pine Green", hex: "#01796F", category: "base" },
      { name: "Charcoal", hex: "#36454F", category: "neutral" },
      { name: "Deep Plum", hex: "#3F0854", category: "accent" }
    ]
  },
  [SeasonId.BRIGHT_WINTER]: {
    id: SeasonId.BRIGHT_WINTER,
    displayName: "Invierno Brillante",
    description: "Contraste extremo y colores neón. Fluye hacia la primavera.",
    characteristics: { undertone: "Cool-Neutral", contrast: "Very High", chroma: "Bright" },
    palette: [
      { name: "Hot Pink", hex: "#FF69B4", category: "accent" },
      { name: "Electric Blue", hex: "#7DF9FF", category: "accent" },
      { name: "Lemon", hex: "#FFF700", category: "accent" }
    ]
  },
  [SeasonId.TRUE_SUMMER]: {
    id: SeasonId.TRUE_SUMMER,
    displayName: "Verano Verdadero",
    description: "Fresco, suave y delicado. Colores con base azulada y ahumada.",
    characteristics: { undertone: "Cool", contrast: "Medium", chroma: "Soft" },
    palette: [
      { name: "Slate Blue", hex: "#6A5ACD", category: "base" },
      { name: "Mauve", hex: "#E0B0FF", category: "accent" },
      { name: "Soft Grey", hex: "#D3D3D3", category: "neutral" }
    ]
  },
  [SeasonId.LIGHT_SUMMER]: {
    id: SeasonId.LIGHT_SUMMER,
    displayName: "Verano Claro",
    description: "Luminoso y fresco. Fluye hacia la primavera con pasteles fríos.",
    characteristics: { undertone: "Cool-Neutral", contrast: "Low-Medium", chroma: "Light" },
    palette: [
      { name: "Sky Blue", hex: "#87CEEB", category: "base" },
      { name: "Powder Pink", hex: "#FFB2D0", category: "accent" },
      { name: "Lavender", hex: "#E6E6FA", category: "accent" }
    ]
  },
  [SeasonId.SOFT_SUMMER]: {
    id: SeasonId.SOFT_SUMMER,
    displayName: "Verano Suave",
    description: "Misterioso y desaturado. Fluye hacia el otoño.",
    characteristics: { undertone: "Cool-Neutral", contrast: "Low", chroma: "Muted" },
    palette: [
      { name: "Sage", hex: "#BCB88A", category: "base" },
      { name: "Dusty Rose", hex: "#DCAE96", category: "accent" },
      { name: "Grey Blue", hex: "#8C92AC", category: "neutral" }
    ]
  },
  [SeasonId.TRUE_AUTUMN]: {
    id: SeasonId.TRUE_AUTUMN,
    displayName: "Otoño Verdadero",
    description: "Cálido, rico y dorado. La esencia de las hojas caídas.",
    characteristics: { undertone: "Warm", contrast: "Medium", chroma: "Muted" },
    palette: [
      { name: "Rust", hex: "#B7410E", category: "accent" },
      { name: "Mustard", hex: "#FFDB58", category: "accent" },
      { name: "Olive", hex: "#808000", category: "base" }
    ]
  },
  [SeasonId.DARK_AUTUMN]: {
    id: SeasonId.DARK_AUTUMN,
    displayName: "Otoño Profundo",
    description: "Cálido y profundo. Fluye hacia el invierno permitiendo colores saturados oscuros.",
    characteristics: { undertone: "Warm-Neutral", contrast: "High", chroma: "Deep" },
    palette: [
      { name: "Rust Red", hex: "#A6432C", category: "accent" },
      { name: "Deep Mustard", hex: "#D9A91A", category: "accent" },
      { name: "Dark Olive", hex: "#404C24", category: "base" },
      { name: "Chocolate", hex: "#7B3F00", category: "neutral" }
    ]
  },
  [SeasonId.SOFT_AUTUMN]: {
    id: SeasonId.SOFT_AUTUMN,
    displayName: "Otoño Suave",
    description: "Cálido pero difuso. Fluye hacia el verano, compartiendo la cualidad polvorienta.",
    characteristics: { undertone: "Warm-Neutral", contrast: "Low", chroma: "Muted" },
    palette: [
      { name: "Khaki", hex: "#F0E68C", category: "neutral" },
      { name: "Salmon", hex: "#FA8072", category: "accent" },
      { name: "Moss", hex: "#8A9A5B", category: "base" }
    ]
  },
  [SeasonId.TRUE_SPRING]: {
    id: SeasonId.TRUE_SPRING,
    displayName: "Primavera Verdadera",
    description: "Cálida, clara y vibrante. Colores frescos como brotes nuevos.",
    characteristics: { undertone: "Warm", contrast: "Medium-High", chroma: "Clear" },
    palette: [
      { name: "Coral", hex: "#FF7F50", category: "accent" },
      { name: "Golden Yellow", hex: "#FFDF00", category: "accent" },
      { name: "Warm Green", hex: "#AFE313", category: "base" }
    ]
  },
  [SeasonId.LIGHT_SPRING]: {
    id: SeasonId.LIGHT_SPRING,
    displayName: "Primavera Clara",
    description: "Luminosa y cálida. Fluye hacia el verano con pasteles brillantes.",
    characteristics: { undertone: "Warm-Neutral", contrast: "Low", chroma: "Light" },
    palette: [
      { name: "Pale Spring Bud", hex: "#E0F1BB", category: "base" },
      { name: "Coral Pink", hex: "#F6B7C8", category: "accent" },
      { name: "Light Aqua", hex: "#9DEDEC", category: "accent" },
      { name: "Cream", hex: "#FFFCD1", category: "neutral" }
    ]
  },
  [SeasonId.BRIGHT_SPRING]: {
    id: SeasonId.BRIGHT_SPRING,
    displayName: "Primavera Brillante",
    description: "Saturación extrema con calidez. Fluye hacia el invierno.",
    characteristics: { undertone: "Warm-Neutral", contrast: "Very High", chroma: "Bright" },
    palette: [
      { name: "Bright Coral", hex: "#FF6F61", category: "accent" },
      { name: "Turquoise", hex: "#40E0D0", category: "accent" },
      { name: "Lime", hex: "#BFFF00", category: "accent" }
    ]
  },
};
