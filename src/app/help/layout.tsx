"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import HelpSidebar from "@/components/help-sidebar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function HelpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-6 pb-16 md:pb-24">
      <div className="md:hidden sticky top-0 z-10 -mx-4 px-4 py-3 bg-background/95 backdrop-blur-md border-b border-nedel-highlight-gray/40">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-medium text-nedel-black-blue cursor-pointer"
              aria-label="Abrir tópicos da ajuda"
            >
              <Menu size={18} />
              Tópicos da ajuda
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="sr-only">Tópicos da ajuda</SheetTitle>
            </SheetHeader>
            <div className="px-4 pb-6">
              <HelpSidebar onNavigate={() => setOpen(false)} />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid md:grid-cols-[260px_1fr] gap-8 lg:gap-16 pt-8 md:pt-12">
        <aside className="hidden md:block">
          <div className="sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto pr-2">
            <HelpSidebar />
          </div>
        </aside>
        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}
