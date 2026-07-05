# Parcela Náquera - Landing Page Premium

Este proyecto es una landing page moderna, rápida y optimizada para SEO creada con **Next.js (App Router)** y **Tailwind CSS**. Está diseñada para vender una parcela urbana premium con alta conversión comercial.

## Requisitos Previos

- Node.js 18.17 o superior.
- npm (incluido en Node.js).

## Instalación

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Estructura del Proyecto

- `src/components/`: Componentes modulares de la interfaz (Hero, Gallery, FAQ, etc.).
- `src/data/`: Archivos centrales de datos (fáciles de editar por personal no técnico):
  - `property.ts`: Información general, precios, contacto, WhatsApp.
  - `images.ts`: Referencias a las imágenes de la galería y renders.
  - `documents.ts`: Lista de documentos descargables.
- `public/images/`: Coloca aquí las imágenes locales.
- `public/docs/`: Coloca aquí los archivos PDF (Dossier, Geotécnico, Topográfico).

## Cómo cambiar el contenido

### Cambiar Textos y Datos
Abre `src/data/property.ts` y modifica los valores. Los cambios se reflejarán automáticamente en toda la web.

### Cómo añadir imágenes

Las imágenes de la web se cargan localmente para garantizar el máximo rendimiento y estabilidad.

**Instrucciones:**
1. Copiar la imagen dentro de la carpeta `/public/images`.
2. Usar nombres simples sin espacios ni acentos.
3. Editar `src/data/images.ts` para asignar la ruta.

*Ejemplo en `src/data/images.ts`:*
```typescript
claim: "/images/claim.jpg"
```

**Nombres recomendados:**
- `claim.jpg`
- `parcela-principal.jpg`
- `parcela-norte.jpg`
- `entorno-natural.jpg`
- `calle-font-del-salt.jpg`
- `detalle-topografico.jpg`
- `render-vivienda-principal.jpg`
- `render-vivienda-piscina.jpg`
- `render-acceso-calle.jpg`
- `render-garaje.jpg`
- `render-vista-aerea.jpg`
- `vista-1.jpg`
- `vista-2.jpg`
- `vista-3.jpg`
- `vista-4.jpg`
- `vista-5.jpg`

### Cómo compartir documentos desde Google Drive

La web permite cargar documentos descargables directamente desde Google Drive sin alojarlos localmente.

**Instrucciones:**
1. Subir el documento a Google Drive.
2. Click derecho sobre el archivo.
3. Pulsar Compartir.
4. En Acceso general seleccionar "Cualquier persona con el enlace".
5. Rol: Lector.
6. Copiar enlace.
7. Pegar en `src/data/assets.ts` (en la sección `documents`).

*Nota: La web procesa automáticamente el enlace para extraer el ID y mostrarlo como botón de descarga. Si dejas el enlace en blanco (`""`), la web mostrará un mensaje de "Pendiente" sin romperse.*

## Despliegue en Vercel

La forma más sencilla de desplegar tu aplicación Next.js es utilizar la [Plataforma Vercel](https://vercel.com/new).

1. Sube este código a un repositorio en GitHub, GitLab o Bitbucket.
2. Inicia sesión en Vercel y haz clic en "Add New Project".
3. Importa tu repositorio.
4. Vercel detectará automáticamente que es un proyecto Next.js y configurará los comandos de build.
5. Haz clic en "Deploy". En minutos tendrás tu web en vivo con un dominio `.vercel.app` (puedes añadir tu dominio personalizado gratis).

## SEO y Metadatos

Los metadatos SEO (título, descripción, keywords, Open Graph para redes sociales) están configurados en `src/app/layout.tsx`. Modifícalos allí si necesitas ajustar cómo se ve al compartir por WhatsApp o buscar en Google.
