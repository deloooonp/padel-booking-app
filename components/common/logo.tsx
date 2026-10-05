import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="PadelHub, ke beranda"
      className={cn(
        "font-heading flex items-center gap-1.5 text-2xl font-bold tracking-tight uppercase select-none",
        className,
      )}
    >
      <span className="text-white">
        Padel<span className="text-lime">Hub</span>
      </span>
    </Link>
  );
}
