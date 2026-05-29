import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

type CTALinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  withArrow?: boolean;
  arrowSize?: number;
};

const BASE =
  "group inline-flex items-center gap-2 transition-colors duration-300 ease-out";
const ARROW =
  "transition-transform duration-300 ease-out group-hover:translate-x-1";

function isExternal(href: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(href);
}

export function CTALink({
  href,
  children,
  className,
  withArrow = true,
  arrowSize = 16,
}: CTALinkProps) {
  const merged = twMerge(BASE, className);
  const content = (
    <>
      {children}
      {withArrow && <ArrowRight size={arrowSize} className={ARROW} />}
    </>
  );

  if (isExternal(href)) {
    const isHttp = href.startsWith("http");
    return (
      <a
        href={href}
        target={isHttp ? "_blank" : undefined}
        rel={isHttp ? "noopener noreferrer" : undefined}
        className={merged}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={merged}>
      {content}
    </Link>
  );
}
