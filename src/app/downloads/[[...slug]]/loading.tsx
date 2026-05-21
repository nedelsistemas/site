import { Skeleton } from "@/components/ui/skeleton";

export default function DownloadsLoading() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-12 md:py-16">
      <Skeleton className="h-5 w-40 mb-6" />
      <header className="mb-6">
        <Skeleton className="h-3 w-24 mb-3" />
        <Skeleton className="h-10 w-72" />
        <Skeleton className="h-5 w-full max-w-xl mt-4" />
      </header>
      <Skeleton className="h-5 w-64 mb-8" />
      <Skeleton className="h-10 w-full max-w-md mb-4" />
      <div className="rounded-2xl border border-nedel-highlight-gray/40 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-4 border-b border-nedel-highlight-gray/20 last:border-0"
          >
            <Skeleton className="size-10 rounded-lg shrink-0" />
            <Skeleton className="h-4 flex-1 max-w-xs" />
            <Skeleton className="h-4 w-20 hidden sm:block" />
            <Skeleton className="h-4 w-24 hidden md:block" />
            <Skeleton className="h-8 w-20" />
          </div>
        ))}
      </div>
    </div>
  );
}
