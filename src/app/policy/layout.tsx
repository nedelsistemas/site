export default function PolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article className="px-5 md:px-0 flex flex-col gap-3 max-w-4xl mx-auto mb-8">
      {children}
    </article>
  );
}
