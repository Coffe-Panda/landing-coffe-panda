"use client";
import { useState } from "react";
import { Coffee, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 lg:px-6 h-16 flex items-center border-b bg-white">
      <Link className="flex items-center gap-2 font-semibold" href="#">
        <Coffee className="h-6 w-6" />
        <span className="font-bold">Panda Café</span>
      </Link>
      {/* Botón de hamburguesa para móviles */}
      <button
        className="ml-auto lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Abrir menú"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      {/* Menú de navegación */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-white lg:static lg:flex lg:gap-4 lg:justify-end sm:gap-6`}
      >
        <Link
          className="block px-4 py-2 text-sm font-medium hover:underline underline-offset-4 lg:inline"
          href="#"
        >
          Inicio
        </Link>
        <Link
          className="block px-4 py-2 text-sm font-medium hover:underline underline-offset-4 lg:inline"
          href="#tipos-cafe"
        >
          Nuestros Cafés
        </Link>
        <Link
          className="block px-4 py-2 text-sm font-medium hover:underline underline-offset-4 lg:inline"
          href="#servicio-tecnico"
        >
          Servicio Técnico
        </Link>
        <Link
          className="block px-4 py-2 text-sm font-medium hover:underline underline-offset-4 lg:inline"
          href="#contacto"
        >
          Contacto
        </Link>
      </nav>
    </header>
  );
}
