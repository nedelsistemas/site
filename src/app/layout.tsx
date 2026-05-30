import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const interHeading = Inter({ subsets: ["latin"], variable: "--font-heading" });

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  variable: "--font-inter",
});

const helveticaNeue = localFont({
  src: "../assets/fonts/helvetica-neue/HelveticaNeueRoman.otf",
  variable: "--font-helvetica-neue",
});

const dongraScript = localFont({
  src: "../assets/fonts/dongra-script/DongraScript.ttf",
  variable: "--font-dongra",
});

const SITE_URL = "https://sistemas.nedel.inf.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nedel Sistemas — O sistema da nossa cidade",
    template: "%s — Nedel Sistemas",
  },
  description:
    "Há mais de 30 anos desenvolvendo sistemas de gestão (ERP, PDV, vendas externas, logística) para empresas em todo o Brasil.",
  keywords: [
    "Nedel Sistemas",
    "ERP Brasil",
    "Digiadm",
    "Diginfc-e",
    "Digivendas",
    "PDV NFC-e",
    "sistema de gestão",
    "Itapiranga",
  ],
  authors: [{ name: "Nedel Sistemas" }],
  creator: "Nedel Sistemas",
  publisher: "Nedel Sistemas LTDA",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Nedel Sistemas",
    title: "Nedel Sistemas — O sistema da nossa cidade",
    description:
      "Sistemas de gestão para empresas em todo o Brasil. 147+ clientes ativos, atualização mensal e suporte humano sem fila.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nedel Sistemas — O sistema da nossa cidade",
    description:
      "Sistemas de gestão para empresas em todo o Brasil. 147+ clientes ativos, atualização mensal e suporte humano sem fila.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn("font-sans", geist.variable, interHeading.variable)}
    >
      <body
        className={`${inter.variable} ${helveticaNeue.variable} ${dongraScript.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
