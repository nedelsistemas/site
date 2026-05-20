import { twMerge } from "tailwind-merge";

export function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={twMerge("my-16 py-16 w-full rounded-4xl", className)}>
      <div className="max-w-5xl mx-auto px-5 md:px-0 ">
        <div className="flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </section>
  );
}
