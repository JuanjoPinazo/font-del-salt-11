"use client";

import { useState } from "react";
import { driveImageCandidates, driveFileUrl, extractDriveId } from "@/lib/drive";

type DriveImageProps = {
  src?: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  showDebugLink?: boolean;
  objectFit?: "cover" | "contain";
  debugLabel?: string;
};

const isDev = process.env.NODE_ENV === "development";

export default function DriveImage({
  src,
  alt,
  className = "",
  fallbackLabel = "Imagen pendiente",
  showDebugLink = false,
  objectFit = "cover",
  debugLabel = "",
}: DriveImageProps) {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [hasFailedAll, setHasFailedAll] = useState(false);
  
  const id = extractDriveId(src);
  const candidates = driveImageCandidates(src);
  const fileUrl = driveFileUrl(src);

  const [currentSrc, setCurrentSrc] = useState(src);

  if (src !== currentSrc) {
    setCurrentSrc(src);
    setCandidateIndex(0);
    setHasFailedAll(false);
  }

  const handleError = () => {
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex(prev => prev + 1);
    } else {
      setHasFailedAll(true);
    }
  };

  // Estado 1: No hay ID configurado
  if (!id) {
    return (
      <div className={`flex flex-col items-center justify-center bg-slate-900 border border-slate-800 text-slate-500 p-6 text-center ${className}`}>
        <i className="fa-regular fa-image text-3xl sm:text-4xl mb-3 opacity-50"></i>
        <span className="text-xs sm:text-sm uppercase tracking-wider font-semibold opacity-70 mb-1">{fallbackLabel}</span>
        {isDev && debugLabel && <span className="text-[10px] opacity-50 font-mono mt-2 text-brand-500 border border-brand-500/30 px-2 py-1 rounded">Falta configurar: {debugLabel}</span>}
      </div>
    );
  }

  // Estado 2: Hay ID pero la imagen falló en todos sus candidatos
  if (hasFailedAll) {
    if (isDev) {
      return (
        <div className={`flex flex-col items-center justify-center bg-slate-900 border border-slate-800 text-red-500/70 p-6 text-center ${className}`}>
          <i className="fa-solid fa-link-slash text-3xl sm:text-4xl mb-3 opacity-70"></i>
          <span className="text-xs sm:text-sm uppercase tracking-wider font-semibold mb-1">Imagen configurada pero no visible</span>
          <span className="text-[10px] sm:text-xs opacity-70 max-w-xs mt-1">Revisa que el enlace tenga el permiso &quot;Cualquier persona con el enlace&quot; en Google Drive.</span>
          
          <div className="mt-4 flex flex-col gap-2 items-center">
            {debugLabel && <span className="text-[10px] font-mono text-slate-400">{debugLabel}</span>}
            <span className="text-[10px] font-mono text-red-400 bg-red-400/10 px-2 py-1 rounded">ID: {id}</span>
            <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-brand-500 hover:underline mt-1">
              <i className="fa-solid fa-external-link-alt mr-1"></i> Abrir en Drive
            </a>
          </div>
        </div>
      );
    } else {
      // Producción
      return (
        <div className={`flex flex-col items-center justify-center bg-slate-900 border border-slate-800 text-slate-500 p-6 text-center ${className}`}>
          <i className="fa-regular fa-image text-3xl sm:text-4xl mb-3 opacity-30"></i>
          <span className="text-xs sm:text-sm uppercase tracking-wider font-semibold opacity-50">Imagen no disponible temporalmente</span>
        </div>
      );
    }
  }

  // Estado 3: Carga normal (probando candidatos)
  return (
    <div className={`relative ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={candidates[candidateIndex]}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-${objectFit}`}
        onError={handleError}
      />
      
      {isDev && showDebugLink && (
        <a 
          href={fileUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute top-2 right-2 bg-dark-950/80 text-brand-400 text-[10px] font-mono px-2 py-1 rounded border border-brand-500/50 hover:bg-brand-500 hover:text-white transition-colors z-20"
        >
          <i className="fa-solid fa-eye"></i> Drive
        </a>
      )}
    </div>
  );
}
