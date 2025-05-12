import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

import { Button } from "@/components/ui/button";
import { cafeData } from "@/lib/cafe-data";

export default function CafeDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const cafe = cafeData.find((c) => c.slug === params.slug);

  if (!cafe) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold text-[#5c3d2e] mb-4">
          Café no encontrado
        </h1>
        <p className="mb-8">
          Lo sentimos, no pudimos encontrar el café que estás buscando.
        </p>
        <Button asChild className="bg-[#5c3d2e] hover:bg-[#4a3121]">
          <Link href="/">Volver a la página principal</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-6 md:py-6 lg:py-6 bg-[#f8f3e9] pt-1">
          <div className="container px-4 md:px-6">
            <Link
              href="/#tipos-cafe"
              className="inline-flex items-center text-[#5c3d2e] hover:underline mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a todos los cafés
            </Link>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#5c3d2e]">
                  {cafe.name}
                </h1>
                <p className="max-w-[600px] text-gray-700 md:text-xl">
                  {cafe.description}
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#5c3d2e]">
                    Características
                  </h3>
                  <ul className="space-y-2">
                    {cafe.characteristics.map((characteristic, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-2 w-2 mt-2 rounded-full bg-[#5c3d2e]" />
                        <p>{characteristic}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#5c3d2e]">
                    Origen
                  </h3>
                  <p>{cafe.origin}</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#5c3d2e]">
                    Perfil de sabor
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cafe.flavorProfile.map((flavor, index) => (
                      <span
                        key={index}
                        className="fw-bold px-3 py-1 bg-[#e6d7c3] text-[#5c3d2e] rounded-full text-sm "
                      >
                        {flavor}
                      </span>
                    ))}
                  </div>
                </div>
                <Button className="bg-[#5c3d2e] hover:bg-[#4a3121] mt-4">
                  Comprar ahora
                </Button>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  alt={`Imagen de ${cafe.name}`}
                  className="rounded-xl object-cover"
                  height={500}
                  src={cafe.image || "/placeholder.svg"}
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#5c3d2e]">
                  Métodos de preparación recomendados
                </h2>
                <p className="max-w-[700px] text-gray-700 md:text-xl">
                  Descubre las mejores formas de preparar nuestro {cafe.name}{" "}
                  para disfrutar de todo su sabor.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {cafe.brewingMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-bold text-[#5c3d2e]">
                    {method.name}
                  </h3>
                  <p className="text-gray-700 text-center">
                    {method.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f3e9]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#5c3d2e]">
                  Cafés relacionados
                </h2>
                <p className="max-w-[700px] text-gray-700 md:text-xl">
                  Si te gusta nuestro {cafe.name}, también podrían interesarte
                  estos cafés.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {cafeData
                .filter((c) => c.slug !== cafe.slug)
                .slice(0, 3)
                .map((relatedCafe) => (
                  <Link
                    key={relatedCafe.slug}
                    href={`/tipos-cafe/${relatedCafe.slug}`}
                    className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                      <Image
                        alt={`Imagen de ${relatedCafe.name}`}
                        className="object-cover"
                        fill
                        src={relatedCafe.image || "/placeholder.svg"}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#5c3d2e]">
                      {relatedCafe.name}
                    </h3>
                    <p className="text-gray-700 text-center line-clamp-2">
                      {relatedCafe.shortDescription}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
