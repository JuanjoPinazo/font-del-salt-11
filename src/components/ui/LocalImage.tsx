"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type LocalImageProps = {
  src?: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  objectFit?: "cover" | "contain";
  priority?: boolean;
};

export default function LocalImage({
  src,
  alt,
  className = "",
  fallbackLabel = "Imagen pendiente",
  objectFit = "cover",
  priority = false,
}: LocalImageProps) {
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  if (src !== currentSrc) {
    setCurrentSrc(src);
    setError(false);
  }

  // Estado 1: No hay src o la imagen falló
  if (!src || error) {
    return (
      <div className={`flex flex-col items-center justify-center bg-slate-900 border border-slate-800 text-slate-500 p-6 text-center ${className}`}>
        <i className="fa-regular fa-image text-3xl sm:text-4xl mb-3 opacity-30"></i>
        <span className="text-xs sm:text-sm uppercase tracking-wider font-semibold opacity-50">{fallbackLabel}</span>
      </div>
    );
  }

  // Estado 2: Carga normal
  return (
    <div className={`relative ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-${objectFit}`}
        onError={() => setError(true)}
      />
    </div>
  );
}
