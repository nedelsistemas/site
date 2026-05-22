import { cn } from "@/lib/utils";

type MockupFrameProps = {
  children: React.ReactNode;
  className?: string;
  glow?: "blue" | "green" | "none";
  glowIntensity?: "subtle" | "strong";
};

const GLOW_COLORS = {
  blue: "from-nedel-blue/40 via-nedel-blue/10 to-transparent",
  green: "from-nedel-green/40 via-nedel-green/10 to-transparent",
  none: "",
} as const;

const GLOW_SIZES = {
  subtle: "-inset-4",
  strong: "-inset-8",
} as const;

export function MockupFrame({
  children,
  className,
  glow = "blue",
  glowIntensity = "strong",
}: MockupFrameProps) {
  return (
    <div className={cn("relative", className)}>
      {glow !== "none" && (
        <div
          aria-hidden
          className={cn(
            "absolute bg-gradient-to-br blur-3xl pointer-events-none",
            GLOW_COLORS[glow],
            GLOW_SIZES[glowIntensity],
          )}
        />
      )}
      <div className="relative rounded-xl shadow-2xl overflow-hidden bg-white border border-black/5">
        {children}
      </div>
    </div>
  );
}
