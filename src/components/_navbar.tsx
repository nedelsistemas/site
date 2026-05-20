import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="min-h-16 items-center z-10 absolute top-0 left-0 w-full">
      <div className="flex w-full max-w-4xl mx-auto items-center rounded-lg px-4 py-2 my-5 shadow-2xl">
        <Link href="/">
          <Image
            src="/nedel.png"
            alt="Nedel Sistemas"
            width={100}
            height={50}
          />
        </Link>
        <nav className="w-full">
          <ul className="flex gap-4 justify-center items-center h-full text-xs font-medium uppercase text-white">
            <li>
              <a href="/sobre">Downloads</a>
            </li>
            <li>
              <a href="/contato">Ajuda</a>
            </li>
          </ul>
        </nav>
        <Button variant="default" size="lg" className="ml-auto">
          Contato
        </Button>
      </div>
    </div>
  );
}
