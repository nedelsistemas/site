import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const interHeading = Inter({subsets:['latin'],variable:'--font-heading'});

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
});

const helveticaNeue = localFont({
  src: "../assets/fonts/helvetica-neue/HelveticaNeueRoman.otf",
  variable: "--font-helvetica-neue",
});

const dongraScript = localFont({
  src: "../assets/fonts/DongraScript.ttf",
  variable: "--font-dongra-script",
});

export const metadata: Metadata = {
  title: "Nedel Sistemas",
  description: "O sistema da nossa cidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable, interHeading.variable)}>
      <body
        className={`${inter.variable} ${helveticaNeue.variable} ${dongraScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
