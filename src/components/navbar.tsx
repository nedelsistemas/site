"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, House, Menu, Moon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type NavLink = { href: string; label: string; Icon?: LucideIcon };

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Início", Icon: House },
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
          src="/brand/nedel.svg"
          alt="Nedel"
          width={100}
          height={100}
          priority
        />
      </Link>

      {/* Desktop nav links */}
      <ul className="hidden md:flex gap-1 font-medium text-sm items-center">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-label={link.Icon ? link.label : undefined}
              className={`inline-flex items-center px-3 py-2 rounded-3xl transition-colors ${
                isActive(link.href)
                  ? "text-nedel-blue bg-nedel-blue/10"
                  : "hover:bg-[#f5f5f5]"
              }`}
            >
              {link.Icon ? <link.Icon size={18} /> : link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <Link
        href="/contact"
        className="group hidden md:inline-flex items-center border border-nedel-black-blue text-nedel-black-blue px-4 py-2 rounded-xl text-sm font-medium hover:bg-nedel-black-blue hover:text-white transition-colors duration-300 ease-out"
      >
        Começar
        <ArrowRight
          size={16}
          className="ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1"
        />
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
              <Image src="/brand/nedel.svg" alt="Nedel" width={100} height={100} />
            </Link>
          </SheetHeader>

          <ul className="flex flex-col gap-1 px-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 text-base font-medium px-4 py-3 rounded-xl transition-colors ${
                    isActive(link.href)
                      ? "text-nedel-blue bg-nedel-blue/10"
                      : "text-nedel-black-blue hover:bg-[#f5f5f5]"
                  }`}
                >
                  {link.Icon && <link.Icon size={18} />}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto p-4 space-y-3">
            <a
              href="tel:+5549991013275"
              onClick={() => setOpen(false)}
              className="w-full inline-flex items-center gap-3 px-3 py-3 rounded-xl bg-nedel-blue/5 border border-nedel-blue/30 hover:bg-nedel-blue/10 transition-colors"
            >
              <span className="shrink-0 inline-flex p-2 rounded-lg bg-nedel-blue/15">
                <Moon size={16} className="text-nedel-blue" />
              </span>
              <span className="flex-1 text-left">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-nedel-blue">
                  Plantão
                </span>
                <span className="block text-sm font-semibold text-nedel-black-blue">
                  (49) 99101-3275
                </span>
              </span>
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="group w-full inline-flex items-center justify-center gap-2 bg-nedel-black-blue text-white px-4 py-3 rounded-xl text-sm font-semibold hover:bg-nedel-black-blue/85 transition-colors duration-300 ease-out"
            >
              Começar
              <ArrowRight
                size={16}
                className="transition-transform duration-300 ease-out group-hover:translate-x-1"
              />
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
