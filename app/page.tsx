import Link from "next/link";
import { Footer } from "@/components/ui/Footer";
import { Contacs } from "@/components/ui/Contacs";
import { ImageWithSkeleton } from "@/components/ui/ImageWithSkeleton";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-24 lg:py-20 bg-[#f8f3e9]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold trackin-tighter sm:text-4xl md:text-5xl text-[#5c3d2e] mb-8">
                  Descubre el auténtico sabor del café
                </h1>
                <p className="text-2xl max-w-[600px] text-gray-700 md:text-xl mb-8">
                  En Panda Café seleccionamos los mejores granos de café de
                  fincas de Honduras para ofrecerte una experiencia única en
                  cada taza. También ofrecemos{" "}
                  <strong>servicio técnico de máquinas de café</strong> y{" "}
                  <strong>cursos de barismo</strong> para todos los niveles.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button
                    className="bg-[#5c3d2e] hover:bg-[#4a3121] text-xl"
                    asChild
                  >
                    <Link href="#tipos-cafe">Explorar nuestros cafés</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#5c3d2e] text-[#5c3d2e] flex items-center gap-2 text-xl"
                  >
                    <Link
                      href="https://wa.me/50433363825"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#5c3d2e]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0a11.94 11.94 0 0 0-8.52 3.48A11.94 11.94 0 0 0 0 12c0 2.12.55 4.19 1.6 6.02L0 24l5.98-1.6A11.94 11.94 0 0 0 12 24a11.94 11.94 0 0 0 8.52-3.48A11.94 11.94 0 0 0 24 12a11.94 11.94 0 0 0-3.48-8.52zM12 22c-1.87 0-3.7-.49-5.3-1.42l-.38-.22-3.55.95.95-3.55-.22-.38A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.27-7.73c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.27 5.17 4.58.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                      </svg>
                      Contáctanos
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto w-full max-w-lg">
                <ImageWithSkeleton
                  fallback="Imagen no disponible"
                  className="rounded-xl object-cover"
                  alt="Taza de café con granos alrededor"
                  height={400}
                  src="/cafe-grano.jpg?height=300&width=500"
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="tipos-cafe" className="w-full py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#5c3d2e]">
                  Nuestros Tipos de Café
                </h2>
                <p className="max-w-[700px] text-gray-700 md:text-xl">
                  Descubre nuestra selección de cafés de origen único y mezclas
                  exclusivas.
                </p>
              </div>
            </div>
             <section id="tipos-cafe" className="w-full py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#5c3d2e]">
                  Nuestros Tipos de Café
                </h2>
                <p className="max-w-[700px] text-gray-700 md:text-xl">
                  Descubre nuestra selección de cafés de origen único y mezclas
                  exclusivas.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  href: "/tipos-cafe/parainema",
                  alt: "parainema",
                  title: "Parainema",
                  description: [
                    { label: "Variedad", value: "Parainema" },
                    { label: "Proceso", value: "lavado" },
                    { label: "Altura", value: "1400 msnm" },
                    { label: "Puntuación SCA", value: "85 pts" },
                    {
                      value:
                        "Cultivado de forma completamente natural, sin intervención humana, sin pesticidas, fertilizantes ni modificaciones.",
                    },
                    {
                      value:
                        "La planta ha crecido libremente, permitiendo que sus sabores auténticos se desarrollen de manera pura y espontánea.",
                    },
                  ],
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col items-center space-y-4"
                >
                  <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                    <h3 className="text-xl font-bold text-[#5c3d2e] mb-4 text-center">
                      {item.title}
                    </h3>
                    <ImageWithSkeleton
                      fallback="Imagen no disponible"
                      className="rounded-xl object-cover"
                      alt={item.alt}
                      fill
                      src="/placeholder.svg?height=300&width=300"
                    />
                  </div>
                  <ul className="space-y-1 text-gray-700 p-5">
                    {item.description.map((desc, idx) => (
                      <li key={idx}>
                        {desc.label ? (
                          <span>
                            <strong>{desc.label}:</strong> {desc.value}
                          </span>
                        ) : (
                          desc.value
                        )}
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </div>
        </section>
          </div>
        </section>

        <section className="w-full py-12 bg-[#f8f3e9]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#5c3d2e]">
                  Proceso de selección
                </h2>
                <p className="max-w-[600px] text-gray-700 md:text-xl">
                  Cada grano de café pasa por un riguroso proceso de selección
                  para garantizar la máxima calidad en cada taza.
                </p>
                <ul className="space-y-2">
                  {[
                    "Selección de los mejores granos directamente de origen",
                    "Tueste artesanal en pequeños lotes",
                    "Control de calidad en cada etapa del proceso",
                    "Empaquetado inmediato para preservar el aroma y sabor",
                  ].map((text, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="h-2 w-2 mt-2 rounded-full bg-[#5c3d2e]" />
                      <p>{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mx-auto lg:ml-auto w-full max-w-lg">
                <ImageWithSkeleton
                  fallback="Imagen no disponible"
                  alt="Proceso de selección de café"
                  className="rounded-xl object-cover h-[70vh] "
                  height={400}
                  src="/seleccion-café.jpg"
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="servicio-tecnico"
          className="w-full py-24 md:py-24 lg:py-24"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto lg:mr-auto order-2 lg:order-1 w-full max-w-lg">
                <ImageWithSkeleton
                  fallback="Imagen no disponible"
                  className="rounded-xl object-cover h-[60vh] "
                  alt="Servicio técnico de máquinas de café"
                  src="/servicio-1.jpg"
                  width={600}
                  height={100}
                />
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#5c3d2e]">
                  Servicio Técnico Profesional
                </h2>
                <p className="max-w-[600px] text-gray-700 md:text-xl">
                  En Panda Café no solo nos especializamos en café de calidad,
                  también ofrecemos servicio técnico profesional para todo tipo
                  de máquinas de café.
                </p>
                <ul className="space-y-2">
                  {[
                    "Reparación y mantenimiento de máquinas de espresso",
                    "Instalación y configuración de equipos profesionales",
                    "Limpieza y descalcificación especializada",
                    "Diagnóstico y solución de problemas",
                    "Venta de repuestos originales",
                  ].map((text, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="h-2 w-2 mt-2 rounded-full bg-[#5c3d2e]" />
                      <p>{text}</p>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-[#5c3d2e] hover:bg-[#4a3121]">
                  <Link
                    href="https://wa.me/50433363825?text=Necesito%20ayuda%20con%20una%20máquina"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar servicio técnico
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Contacs />
      <Footer />
    </div>
  );
}
