import Image from "next/image";
import Link from "next/link";
import { Coffee, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
     <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-20 bg-[#f8f3e9]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#5c3d2e]">
                  Descubre el auténtico sabor del café
                </h1>
                <p className="max-w-[600px] text-gray-700 md:text-xl">
                  En Panda Café seleccionamos los mejores granos de café de todo
                  el mundo para ofrecerte una experiencia única en cada taza.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button className="bg-[#5c3d2e] hover:bg-[#4a3121]" asChild>
                    <Link href="#tipos-cafe">Explorar nuestros cafés</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#5c3d2e] text-[#5c3d2e]"
                  >
                    Visitar nuestra tienda
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  alt="Taza de café con granos alrededor"
                  className="rounded-xl object-cover"
                  height={400}
                  src="/cafe-grano.jpg?height=300&width=500"
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="tipos-cafe" className="w-full py-12 md:py-24 lg:py-24">
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
              <Link
                href="/tipos-cafe/blend-pardo"
                className="flex flex-col items-center space-y-4"
              >
                <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                  <Image
                    alt="Café Arábica"
                    className="object-cover"
                    fill
                    src="/placeholder.svg?height=300&width=300"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-[#5c3d2e]">
                    Blend Pardo
                  </h3>
                  <p className="text-gray-700">
                    Nuestro café Arábica se caracteriza por su sabor suave y
                    aromático, con notas frutales y un toque de acidez.
                  </p>
                </div>
              </Link>
              <Link
                href="/tipos-cafe/blend-panda"
                className="flex flex-col items-center space-y-4"
              >
                <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                  <Image
                    alt="Café Robusta"
                    className="object-cover"
                    fill
                    src="/placeholder.svg?height=300&width=300"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-[#5c3d2e]">
                    Blend Panda
                  </h3>
                  <p className="text-gray-700">
                    El café Robusta tiene un sabor más intenso y amargo, con
                    mayor contenido de cafeína y un cuerpo más denso.
                  </p>
                </div>
              </Link>
              <Link
                href="/tipos-cafe/geisha"
                className="flex flex-col items-center space-y-4"
              >
                <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                  <Image
                    alt="Café Colombiano"
                    className="object-cover"
                    fill
                    src="/placeholder.svg?height=300&width=300"
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-[#5c3d2e]">Geisha</h3>
                  <p className="text-gray-700">
                    El café de Colombia es reconocido mundialmente por su
                    equilibrio perfecto entre acidez, cuerpo y aroma.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f3e9]">
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
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-[#5c3d2e]" />
                    <p>
                      Selección de los mejores granos directamente de origen
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-[#5c3d2e]" />
                    <p>Tueste artesanal en pequeños lotes</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-[#5c3d2e]" />
                    <p>Control de calidad en cada etapa del proceso</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-[#5c3d2e]" />
                    <p>Empaquetado inmediato para preservar el aroma y sabor</p>
                  </li>
                </ul>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  alt="Proceso de selección de café"
                  className="rounded-xl object-cover"
                  height={400}
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="servicio-tecnico"
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto lg:mr-auto order-2 lg:order-1">
                <Image
                  alt="Servicio técnico de máquinas de café"
                  className="rounded-xl "
                  height={100}
                  src="/servicio-1.jpg"
                  width={600}
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
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-[#5c3d2e]" />
                    <p>Reparación y mantenimiento de máquinas de espresso</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-[#5c3d2e]" />
                    <p>Instalación y configuración de equipos profesionales</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-[#5c3d2e]" />
                    <p>Limpieza y descalcificación especializada</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-[#5c3d2e]" />
                    <p>Diagnóstico y solución de problemas</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-[#5c3d2e]" />
                    <p>Venta de repuestos originales</p>
                  </li>
                </ul>
                <Button className="bg-[#5c3d2e] hover:bg-[#4a3121]">
                  Solicitar servicio técnico
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#5c3d2e] mb-5">
                  Contáctanos
                </h2>
                <p className="max-w-[700px] text-gray-700 md:text-xl">
                  ¿Tienes alguna pregunta sobre nuestros cafés? Estamos aquí
                  para ayudarte.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-sm">
                <a
                  href="https://wa.me/50433363825"
                  className="flex flex-col items-center space-y-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-10 w-10 text-[#5c3d2e]" />
                  <h3 className="text-xl font-bold text-[#5c3d2e]">Whatsapp</h3>
                  <p className="text-gray-700 hover:underline">
                    +504 3336-3825
                  </p>
                </a>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-sm">
                <a
                  href="https://www.instagram.com/panda_cafe_hn/"
                  className="flex flex-col items-center space-y-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-10 w-10 text-[#5c3d2e]" />
                  <h3 className="text-xl font-bold text-[#5c3d2e]">
                    Instagram
                  </h3>
                  <p className="text-gray-700 hover:underline">
                    @panda_cafe_hn
                  </p>
                </a>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-sm">
                <Coffee className="h-10 w-10 text-[#5c3d2e]" />
                <h3 className="text-xl font-bold text-[#5c3d2e]">Horario</h3>
                <p className="text-gray-700">Lunes a Sábados: 8:00 AM - 5:00 PM</p>
                <p className="text-gray-700">Domingos: Cerrado</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-gray-700">
          © 2025 Panda Café. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Política de Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  );
}
