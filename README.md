# Joyas Mágicas — Catálogo Digital

Sitio de catálogo digital de lujo para **Joyas Mágicas Joyería**, construido con React 19 + Vite + Tailwind CSS + Framer Motion + React Router, con un asistente de IA (Google Gemini) integrado vía función serverless de Vercel.

Desarrollado por **KCN Studio**.

## Contenido del proyecto

- **Home**: hero con el logo animado, categorías, piezas destacadas, colección especial y garantías.
- **Catálogo**: filtro por categoría (Anillos, Collares, Aretes, Pulseras, Relojes, Colección Especial) + buscador.
- **Detalle de producto**: imagen, material, precio, CTA de WhatsApp y piezas relacionadas.
- **Nosotros**: historia de marca y valores.
- **Contacto**: formulario que envía el mensaje directo a WhatsApp.
- **Asistente virtual (Gemini)**: chat flotante que responde preguntas sobre productos, materiales y proceso de compra.

## Cómo subir esto a GitHub (desde el editor web / móvil)

1. Crea un repositorio nuevo en GitHub (ej. `joyas-magicas`).
2. Sube **todos** los archivos y carpetas de este proyecto manteniendo la misma estructura (incluyendo `api/`, `public/`, `src/`).
3. Conecta el repositorio a Vercel (Import Project).

## Configurar la IA de Gemini (obligatorio para el chat)

1. Ve a [Google AI Studio](https://aistudio.google.com/) y genera una API Key gratuita.
2. En Vercel: **Settings → Environment Variables**, agrega:
   - `GEMINI_API_KEY` = tu clave de Google AI Studio
3. Vuelve a desplegar (redeploy) para que la variable tome efecto.

Sin esta variable, el resto del sitio funciona con normalidad — solo el chat mostrará un mensaje de error amigable.

## Reemplazar las fotos de stock por fotos reales

Todas las imágenes de productos están centralizadas en **`src/data/products.js`**.
Cada producto tiene un campo `image` apuntando a una foto de stock (Pexels) como placeholder.

Para usar fotos reales:
1. Sube las fotos a `public/productos/` (crea la carpeta).
2. Cambia el campo `image` del producto, ej: `image: '/productos/anillo-solitario.jpg'`.

## Personalizar precios, productos y categorías

Todo vive en `src/data/products.js`:
- `categories`: las 6 categorías del catálogo.
- `products`: cada pieza con nombre, material, precio (en colones), imagen, descripción y si es parte de la "Colección Especial".

## Actualizar el número de WhatsApp

El número de placeholder `+506 0000-0000` aparece en:
- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- `src/components/WhatsAppButton.jsx`
- `src/components/ChatWidget.jsx` (dentro de `api/chat.js` no aplica, solo en frontend)
- `src/pages/ProductDetail.jsx`
- `src/pages/Contacto.jsx`

Busca `50600000000` y reemplázalo por el número real (formato: código de país + número, sin espacios ni signos).

## Analítica (opcional)

Este proyecto no incluye GA4/Meta Pixel por defecto. Si quieres agregarlos, siguiendo el mismo patrón usado en el sitio de KCN Studio, se pueden insertar en `index.html`.

## Stack técnico

- React 19 + Vite 6
- Tailwind CSS 3
- Framer Motion (animaciones)
- React Router 6
- Google Gemini 2.5 Flash (chat, vía función serverless en `/api/chat.js`)
- Despliegue: Vercel
