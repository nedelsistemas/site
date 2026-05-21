"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/products", label: "Produtos" },
  { href: "/about", label: "Sobre" },
  { href: "/downloads", label: "Downloads" },
  { href: "/help", label: "Ajuda" },
  { href: "/contact", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="flex justify-between w-full min-h-16 items-center px-4 md:px-2 max-w-6xl mx-auto">
      <Link href="/" className="flex-shrink-0">
        <Image
          src="/nedel.svg"
          alt="Nedel"
          width={100}
          height={100}
          priority
        />
      </Link>

      {/* Desktop nav links */}
      <ul className="hidden md:flex gap-1 font-medium text-sm">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`block px-3 py-2 rounded-3xl transition-colors ${
                isActive(link.href)
                  ? "text-nedel-blue bg-nedel-blue/10"
                  : "hover:bg-[#f5f5f5]"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <Link
        href="/contact"
        className="hidden md:inline-flex items-center border border-nedel-black-blue px-4 py-2 rounded-xl hover:bg-nedel-black-blue hover:text-white transition-colors hover:translate-x-0.5 text-sm font-medium"
      >
        Começar
        <ArrowRight className="ml-2" size={16} />
      </Link>

      {/* Mobile hamburger */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-[#f5f5f5] transition-colors cursor-pointer"
            aria-label="Abrir menu de navegação"
          >
            <Menu size={24} />
          </button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="inline-block w-fit"
            >
              <Image src="/nedel.svg" alt="Nedel" width={100} height={100} />
            </Link>
          </SheetHeader>

          <ul className="flex flex-col gap-1 px-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block text-base font-medium px-4 py-3 rounded-xl transition-colors ${
                    isActive(link.href)
                      ? "text-nedel-blue bg-nedel-blue/10"
                      : "text-nedel-black-blue hover:bg-[#f5f5f5]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto p-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-nedel-black-blue text-white px-4 py-3 rounded-xl text-sm font-semibold hover:bg-nedel-black-blue/80 transition-colors"
            >
              Começar
              <ArrowRight size={16} />
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
