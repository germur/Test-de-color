import React from 'react';
import { AnalysisResult, SeasonId } from '../types';
import { SEASONS } from '../constants';

interface AnalysisDisplayProps {
  result: AnalysisResult;
  imageSrc: string;
  onReset: () => void;
}

const AnalysisDisplay: React.FC<AnalysisDisplayProps> = ({ result, imageSrc, onReset }) => {
  const seasonData = SEASONS[result.seasonId];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 animate-fade-in">
      {/* Header Result */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8 border border-stone-100">
        <div className="md:flex">
          <div className="md:w-1/3 relative bg-stone-200 min-h-[300px]">
            <img 
              src={imageSrc} 
              alt="Analyzed face" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div>
                <span className="bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                  Diagnóstico Completado
                </span>
                <p className="text-white/80 text-sm">Confianza: {(result.confidence * 100).toFixed(0)}%</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 p-8 flex flex-col justify-center">
            <h2 className="text-stone-500 text-sm font-bold uppercase tracking-widest mb-2">Tu Estación Cromática</h2>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
              {seasonData.displayName}
            </h1>
            <p className="text-stone-600 leading-relaxed mb-6">
              {result.reasoning}
            </p>
            
            <div className="grid grid-cols-3 gap-4 border-t border-stone-100 pt-6">
              <div className="text-center">
                <span className="block text-xs text-stone-400 uppercase">Matiz (Hue)</span>
                <span className="font-semibold text-stone-800">{result.skinAnalysis.hue}</span>
              </div>
              <div className="text-center border-l border-stone-100">
                <span className="block text-xs text-stone-400 uppercase">Valor (Value)</span>
                <span className="font-semibold text-stone-800">{result.skinAnalysis.value}</span>
              </div>
              <div className="text-center border-l border-stone-100">
                <span className="block text-xs text-stone-400 uppercase">Croma</span>
                <span className="font-semibold text-stone-800">{result.skinAnalysis.chroma}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Palette Section */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-serif font-semibold text-stone-800">Tu Paleta Maestra</h3>
            <span className="text-rose-500 text-sm font-medium">Recomendados</span>
          </div>
          <p className="text-stone-600 text-sm mb-6">{seasonData.description}</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {seasonData.palette.map((color, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div 
                  className="h-20 w-full rounded-xl shadow-inner mb-2 transition-transform transform group-hover:scale-105 border border-stone-200"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <div className="flex justify-between items-center px-1">
                  <span className="text-xs font-semibold text-stone-700">{color.name}</span>
                  <span className="text-[10px] text-stone-400 font-mono">{color.hex}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hair Diagnosis Section */}
        <div className="bg-stone-900 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
               <div className="bg-rose-500 p-2 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
               </div>
              <h3 className="text-2xl font-serif font-semibold">Formulación Capilar</h3>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                  <span className="block text-stone-400 text-xs uppercase mb-1">Nivel Natural Detectado</span>
                  <span className="text-xl font-medium">Nivel {result.hairDiagnosis.naturalLevel}</span>
                </div>
                <div className="text-right">
                   <span className="block text-stone-400 text-xs uppercase mb-1">Fondo de Aclaración</span>
                   <span className="text-rose-300 font-medium">{result.hairDiagnosis.undertone}</span>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <span className="block text-stone-400 text-xs uppercase mb-2">Recomendación Técnica</span>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-serif font-bold text-rose-400">{result.hairDiagnosis.technicalCode}</span>
                  <span className="text-lg text-white">{result.hairDiagnosis.recommendedFormula}</span>
                </div>
                <p className="text-sm text-stone-300 mt-2">
                  + Revelador <span className="text-white font-semibold">{result.hairDiagnosis.developerVol}</span>
                </p>
              </div>

              <div className="bg-rose-500/10 rounded-xl p-4 border border-rose-500/20">
                <p className="text-sm text-stone-200 italic">
                  "{result.hairDiagnosis.explanation}"
                </p>
              </div>
            </div>
            
            <button className="w-full mt-6 bg-white text-stone-900 font-semibold py-3 rounded-lg hover:bg-stone-200 transition-colors">
              Guardar Fórmula en Perfil
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <button 
          onClick={onReset}
          className="text-stone-500 hover:text-stone-800 underline decoration-stone-300 underline-offset-4 transition-colors"
        >
          Analizar otra imagen
        </button>
      </div>
    </div>
  );
};

export default AnalysisDisplay;