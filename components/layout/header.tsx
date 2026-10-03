import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-surface-border/50 bg-navy/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          className="group flex items-center gap-1.5 text-2xl font-black tracking-tight text-white"
          href="#"
        >
          <span>
            Padel<span className="text-lime transition-colors group-hover:text-white">Hub</span>
          </span>
        </Link>
        {/* Desktop Nav Links */}
        <nav className="hidden items-center space-x-8 text-sm font-medium text-gray-300 md:flex">
          <Link className="text-white transition-colors hover:text-lime" href="#book">
            Book a Court
          </Link>
          <Link className="transition-colors hover:text-lime" href="#clubs">
            Clubs
          </Link>
          <Link className="transition-colors hover:text-lime" href="#tournaments">
            Tournaments
          </Link>
          <Link className="transition-colors hover:text-lime" href="#membership">
            Membership
          </Link>
          <Link className="transition-colors hover:text-lime" href="#contact">
            Contact
          </Link>
        </nav>
        {/* Auth Actions */}
        <div className="flex items-center gap-5">
          <Link
            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            href="#login"
          >
            Sign Up
          </Link>
          <Link
            className="rounded-full border border-gray-600 px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:border-white"
            href="#login"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}