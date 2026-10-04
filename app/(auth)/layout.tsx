import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-navy flex min-h-screen flex-col">
      <header className="absolute top-0 right-0 left-0 z-50 p-6 sm:p-8">
        <Link
          href="/"
          className="font-heading flex items-center gap-1.5 text-2xl font-bold tracking-tight uppercase select-none"
        >
          <span className="text-white">
            Padel<span className="text-lime">Hub</span>
          </span>
        </Link>
      </header>
      <main className="flex grow items-center justify-center">{children}</main>
    </div>
  );
}
