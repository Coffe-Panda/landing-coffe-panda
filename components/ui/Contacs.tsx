import React from 'react'
import { Coffee, Phone, Instagram } from "lucide-react";
export const Contacs = () => {
  return (
      <section id="contacto" className="w-full py-12">
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
                    +504 96816507
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
  )
}
