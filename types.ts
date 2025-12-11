export enum SeasonId {
  TRUE_WINTER = 'TRUE_WINTER',
  DARK_WINTER = 'DARK_WINTER',
  BRIGHT_WINTER = 'BRIGHT_WINTER',
  TRUE_SUMMER = 'TRUE_SUMMER',
  LIGHT_SUMMER = 'LIGHT_SUMMER',
  SOFT_SUMMER = 'SOFT_SUMMER',
  TRUE_AUTUMN = 'TRUE_AUTUMN',
  DARK_AUTUMN = 'DARK_AUTUMN',
  SOFT_AUTUMN = 'SOFT_AUTUMN',
  TRUE_SPRING = 'TRUE_SPRING',
  LIGHT_SPRING = 'LIGHT_SPRING',
  BRIGHT_SPRING = 'BRIGHT_SPRING',
}

export interface ColorPalette {
  name: string;
  hex: string;
  category: 'base' | 'accent' | 'neutral';
}

export interface SeasonData {
  id: SeasonId;
  displayName: string;
  description: string;
  characteristics: {
    undertone: string;
    contrast: string;
    chroma: string;
  };
  palette: ColorPalette[];
}

export interface HairDiagnosis {
  naturalLevel: number;
  undertone: string; // e.g., "Red", "Orange", "Yellow"
  recommendedFormula: string;
  developerVol: string;
  explanation: string;
  technicalCode: string; // e.g., "6.34"
}

export interface AnalysisResult {
  seasonId: SeasonId;
  confidence: number;
  reasoning: string;
  skinAnalysis: {
    hue: 'Warm' | 'Cool' | 'Neutral';
    value: 'Light' | 'Medium' | 'Deep';
    chroma: 'Clear' | 'Muted';
  };
  hairDiagnosis: HairDiagnosis;
}
