import { Logo } from "@/components/common/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-navy flex min-h-screen flex-col">
      <header className="absolute top-0 right-0 left-0 z-50 p-6 sm:p-8">
        <Logo />
      </header>
      <main className="flex grow items-center justify-center">{children}</main>
    </div>
  );
}
