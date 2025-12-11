import { GoogleGenAI, Type, Schema } from "@google/genai";
import { AnalysisResult, SeasonId } from '../types';

const getApiKey = (): string => {
  const key = process.env.API_KEY;
  if (!key) {
    throw new Error("API Key is missing. Please select a project/key.");
  }
  return key;
};

// Define the JSON Schema for the response
const analysisSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    seasonId: {
      type: Type.STRING,
      enum: Object.values(SeasonId),
      description: "The calculated 12-season color analysis result."
    },
    confidence: {
      type: Type.NUMBER,
      description: "Confidence level of the analysis between 0 and 1."
    },
    reasoning: {
      type: Type.STRING,
      description: "Explanation of why this season was chosen based on skin, eyes, and hair."
    },
    skinAnalysis: {
      type: Type.OBJECT,
      properties: {
        hue: { type: Type.STRING, enum: ['Warm', 'Cool', 'Neutral'] },
        value: { type: Type.STRING, enum: ['Light', 'Medium', 'Deep'] },
        chroma: { type: Type.STRING, enum: ['Clear', 'Muted'] }
      },
      required: ['hue', 'value', 'chroma']
    },
    hairDiagnosis: {
      type: Type.OBJECT,
      properties: {
        naturalLevel: { type: Type.INTEGER, description: "Estimated natural hair level (1-10)" },
        undertone: { type: Type.STRING, description: "Underlying pigment (e.g., Red, Orange, Yellow)" },
        recommendedFormula: { type: Type.STRING, description: "Name of the recommended color direction (e.g. Ash Blonde)" },
        technicalCode: { type: Type.STRING, description: "Technical color code recommendation (e.g., 7.1)" },
        developerVol: { type: Type.STRING, description: "Recommended developer volume (e.g., 20 Vol)" },
        explanation: { type: Type.STRING, description: "Why this formula neutralizes or enhances the user." }
      },
      required: ['naturalLevel', 'undertone', 'recommendedFormula', 'technicalCode', 'developerVol', 'explanation']
    }
  },
  required: ['seasonId', 'confidence', 'reasoning', 'skinAnalysis', 'hairDiagnosis']
};

export const analyzeImage = async (base64Image: string): Promise<AnalysisResult> => {
  const ai = new GoogleGenAI({ apiKey: getApiKey() });

  // Remove data URL prefix if present for the API call
  const base64Data = base64Image.split(',')[1] || base64Image;

  const systemInstruction = `
    You are an expert Color Analyst and Cosmetic Chemist based on the '12 Seasonal Color Analysis' and Munsell Color Theory.
    
    TASK:
    1. Analyze the face in the image for Skin Tone (Hue: Cool/Warm), Value (Light/Dark), and Chroma (Muted/Bright).
    2. Determine the specific Season (e.g., Dark Autumn, Light Spring) based on flow theory.
    3. Analyze the hair color to determine Natural Level (1-10) and underlying pigments.
    4. Formulate a hair color recommendation. Use the "Rule of 11" for neutralization if needed. 
       - If the user is cool-toned, suggest ash/cool tones to harmonize.
       - If the user is warm-toned, suggest gold/copper tones.
       - Warning: If recommending lifting > 3 levels, note high developer volume.
    
    IMPORTANT: Be precise with the 'technicalCode' (e.g., 6.34, 9.1).
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: {
        parts: [
          { inlineData: { mimeType: "image/jpeg", data: base64Data } },
          { text: "Analyze this person's seasonal color palette and provide a hair color diagnosis." }
        ]
      },
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: analysisSchema,
        temperature: 0.2 // Low temperature for deterministic analysis
      }
    });

    if (!response.text) {
      throw new Error("No analysis generated");
    }

    const result = JSON.parse(response.text) as AnalysisResult;
    return result;

  } catch (error) {
    console.error("Analysis failed:", error);
    throw new Error("Failed to analyze image. Please try again.");
  }
};
