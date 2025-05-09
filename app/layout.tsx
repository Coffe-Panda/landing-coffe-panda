// En lugar de usar Inter desde next/font/google
import "@/app/globals.css"

export const metadata = {
  title: "Panda Café - Descubre el auténtico sabor del café",
  description: "Explora nuestra selección de cafés de origen único y mezclas exclusivas.",
  generator: "v0.dev",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}