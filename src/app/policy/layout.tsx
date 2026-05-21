export default function PolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-3xl mx-auto px-5 py-12 md:py-16">{children}</div>
  );
}
