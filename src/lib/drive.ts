/**
 * Extrae el ID de Google Drive a partir de un enlace o devuelve el input si ya es un ID.
 */
export function extractDriveId(input?: string): string {
  if (!input || typeof input !== "string" || input.trim() === "") return "";

  const cleanInput = input.trim();

  // Casos comunes de URLs de Drive
  const regexes = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/, // https://drive.google.com/file/d/ID/view
    /id=([a-zA-Z0-9_-]+)/,         // https://drive.google.com/open?id=ID, /uc?id=ID, /thumbnail?id=ID
  ];

  for (const regex of regexes) {
    const match = cleanInput.match(regex);
    if (match && match[1]) {
      return match[1];
    }
  }

  // Si no hay match pero es una URL (empieza con http), probablemente no es un ID válido.
  // Si no empieza con http, asumimos que es el ID directo.
  if (cleanInput.startsWith("http")) {
    return ""; // Es una URL pero no pudimos extraer ID
  }

  return cleanInput;
}

/**
 * Devuelve la URL de la imagen optimizada para visualización (thumbnail).
 */
export function driveImageUrl(input?: string, size: number = 1600): string {
  const id = extractDriveId(input);
  if (!id) return "";
  
  // Si parece una ruta local, la devolvemos tal cual
  if (id.startsWith("/")) {
    return id;
  }
  
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;
}

/**
 * Devuelve una lista de URLs alternativas para intentar cargar la imagen.
 */
export function driveImageCandidates(input?: string, size: number = 1600): string[] {
  const id = extractDriveId(input);
  if (!id) return [];

  // Si parece una ruta local, la devolvemos tal cual envuelta en un array
  if (id.startsWith("/")) {
    return [id];
  }

  return [
    `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`,
    `https://drive.usercontent.google.com/download?id=${id}&export=view&authuser=0`,
    `https://lh3.googleusercontent.com/d/${id}=w${size}`,
    `https://drive.google.com/uc?export=view&id=${id}`
  ];
}

/**
 * Devuelve la URL del documento para su descarga o previsualización.
 */
export function driveFileUrl(input?: string): string {
  const id = extractDriveId(input);
  if (!id) return "";
  
  if (id.startsWith("/")) {
    return id; // Fallback para rutas locales
  }
  
  return `https://drive.google.com/file/d/${id}/view`;
}

/**
 * Verifica si se ha configurado un valor (no está vacío).
 */
export function isDriveConfigured(input?: string): boolean {
  return extractDriveId(input) !== "";
}
