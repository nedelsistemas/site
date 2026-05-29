import { twMerge } from "tailwind-merge";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={twMerge(
        "text-xs font-semibold uppercase tracking-[0.2em] text-nedel-blue",
        className,
      )}
    >
      {children}
    </p>
  );
}
