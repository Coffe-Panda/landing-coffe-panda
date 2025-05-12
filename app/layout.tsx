import "@/app/globals.css";

export const metadata = {
  title: "Panda Café - Servicios Técnicos y Cursos de Barismo",
  description:
    "Descubre el auténtico sabor del café con Panda Café. Ofrecemos servicios técnicos de máquinas de café y cursos de barismo para todos los niveles.",
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Panda Café" />
        <meta
          name="keywords"
          content="café, café de Honduras, café artesanal, Panda Café, máquinas de café, servicio técnico café, reparación de máquinas de café, cursos de barismo, barismo profesional"
        />
        <meta
          property="og:title"
          content="Panda Café - Servicios Técnicos y Cursos de Barismo"
        />
        <meta
          property="og:description"
          content="Descubre el auténtico sabor del café con Panda Café. Ofrecemos servicios técnicos de máquinas de café y cursos de barismo para todos los niveles."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.pandacafe.com" />
        <meta property="og:type" content="website" />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>{children}</body>
    </html>
  );
}