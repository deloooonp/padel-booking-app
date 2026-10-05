"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "../common/logo";

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Book a Court", href: "/book" },
    { name: "Clubs", href: "#" },
    { name: "Tournaments", href: "#" },
    { name: "Membership", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="border-surface-border/70 bg-navy/95 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="border-surface-border bg-surface-card hidden items-center gap-1 rounded-full border px-2 py-1.5 text-sm font-medium lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-1.5 transition-all",
                  isActive
                    ? "bg-lime font-semibold text-black shadow-sm"
                    : "text-muted-foreground hover:bg-lime/80 hover:text-black",
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition-colors hover:text-white"
            href="/login"
          >
            Log In
          </Link>
          <Link
            className="bg-lime font-heading hover:bg-lime/90 rounded-full px-5 py-2 text-sm font-semibold tracking-tight text-black shadow-[0_0_20px_rgba(200,241,53,0.2)] transition-all"
            href="#"
          >
            Sign Up
          </Link>
          <div className="border-surface-border bg-surface-card text-muted-foreground ml-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border transition-colors hover:text-white">
            <User className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
