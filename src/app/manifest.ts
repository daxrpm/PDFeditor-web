import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PDF Editor - Edita PDFs de forma privada',
    short_name: 'PDF Editor',
    description: 'Editor de PDF open source y privado. Unir, comprimir y separar archivos PDF sin registro.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#2563eb',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
    categories: ['productivity', 'utilities'],
    lang: 'es',
  }
}

