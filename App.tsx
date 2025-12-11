import React, { useState, useRef } from 'react';
import { analyzeImage } from './services/geminiService';
import { AnalysisResult } from './types';
import LoadingOverlay from './components/LoadingOverlay';
import AnalysisDisplay from './components/AnalysisDisplay';

const App: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImage(base64String);
        startAnalysis(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const startAnalysis = async (imgData: string) => {
    setLoading(true);
    setError(null);
    try {
      // Small delay to allow UI to update and show loading state properly
      await new Promise(resolve => setTimeout(resolve, 500));
      const result = await analyzeImage(imgData);
      setAnalysis(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
      setImage(null);
    } finally {
      setLoading(false);
    }
  };

  const resetApp = () => {
    setImage(null);
    setAnalysis(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-stone-800 rounded-full"></div>
            <span className="text-xl font-serif font-bold text-stone-800 tracking-tight">ChromaVisage AI</span>
          </div>
          <a 
            href="https://ai.google.dev" 
            target="_blank" 
            rel="noreferrer"
            className="text-xs font-medium text-stone-500 hover:text-stone-800 transition-colors"
          >
            Powered by Gemini
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {loading && <LoadingOverlay />}
        
        {!loading && !analysis && (
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
              Descubre tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">ADN Cromático</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto mb-12 leading-relaxed">
              Utilizamos visión artificial y la teoría Munsell para determinar tu estación de color y generar formulaciones de tinte profesionales.
            </p>

            <div className="relative group max-w-md mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-amber-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-xl shadow-xl p-8 border border-stone-100">
                <div className="flex flex-col items-center gap-6">
                  <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center border-2 border-dashed border-stone-300">
                    <svg className="w-8 h-8 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-semibold text-stone-900 mb-1">Sube tu Selfie</h3>
                    <p className="text-sm text-stone-400">Sin maquillaje, luz natural frontal</p>
                  </div>

                  <label className="w-full">
                    <input 
                      ref={fileInputRef}
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageUpload}
                      className="hidden" 
                    />
                    <div className="w-full bg-stone-900 text-white font-medium py-3 px-6 rounded-lg text-center cursor-pointer hover:bg-stone-800 transition-transform active:scale-95 shadow-md">
                      Comenzar Análisis
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {error && (
              <div className="mt-8 bg-red-50 text-red-600 p-4 rounded-lg max-w-md mx-auto border border-red-100 text-sm">
                {error}
              </div>
            )}

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-3xl mx-auto">
              {[
                { title: "Escaneo Biométrico", desc: "Detectamos 68 puntos faciales para aislar tono de piel, ojos y cabello." },
                { title: "Matriz de Decisión", desc: "Algoritmo de 12 Estaciones basado en flujo de temperatura y contraste." },
                { title: "Química Capilar", desc: "Aplicamos la Regla del 11 para neutralizar subtonos no deseados." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="h-1 w-8 bg-rose-400 mb-2"></div>
                  <h4 className="font-serif font-bold text-stone-800">{item.title}</h4>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {analysis && image && (
          <AnalysisDisplay 
            result={analysis} 
            imageSrc={image} 
            onReset={resetApp} 
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-stone-100 py-8 border-t border-stone-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-stone-400 text-sm">
          <p>© {new Date().getFullYear()} ChromaVisage AI. Informe Técnico: Arquitectura y Desarrollo de Sistemas de Colorimetría.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;