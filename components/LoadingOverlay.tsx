import React from 'react';

const LoadingOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-stone-900/90 z-50 flex flex-col items-center justify-center p-6 text-white">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 border-4 border-stone-700 rounded-full"></div>
        <div className="absolute inset-0 border-t-4 border-rose-400 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-8 h-8 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      </div>
      <h3 className="text-2xl font-serif font-semibold mb-2 text-center">Analizando Biometría Cromática</h3>
      <p className="text-stone-400 text-sm max-w-md text-center animate-pulse">
        Calculando variables Munsell (Matiz, Valor, Croma) y determinando pigmentos subyacentes...
      </p>
      
      <div className="mt-8 flex gap-2">
         {[1, 2, 3].map(i => (
           <div key={i} className="h-2 w-2 bg-rose-500 rounded-full animate-bounce" style={{ animationDelay: `${i * 150}ms`}}></div>
         ))}
      </div>
    </div>
  );
};

export default LoadingOverlay;