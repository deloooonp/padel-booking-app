import {
  Trophy,
  Monitor,
  Shirt,
  Waves,
  ShieldCheck,
  CheckCircle,
  MapPin,
  Star,
} from "lucide-react";
import type { CourtDetailData } from "@/lib/mock-data";

// Maps amenity icon names from mock data to lucide components
const AMENITY_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Trophy,
  Monitor,
  Shirt,
  Waves,
};

export function CourtSpecifications({ court }: { court: CourtDetailData }) {
  return (
    <>
      {/* Specs */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-lime text-[11px] font-bold tracking-widest uppercase">
            Spesifikasi & Fitur
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Spesifikasi Lapangan
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {court.specs.map((spec) => (
            <div
              key={spec.label}
              className="border-surface-border bg-surface-card flex flex-col gap-1 rounded-xl border p-4"
            >
              <span className="text-muted-foreground text-[11px] font-bold tracking-wider uppercase">
                {spec.label}
              </span>
              <span className="font-heading text-xl font-bold text-white">
                {spec.value}
              </span>
              <span className="text-muted-foreground text-xs">{spec.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div className="flex flex-col gap-4">
        <h3 className="font-heading text-xl font-bold text-white">
          Fasilitas Termasuk
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {court.amenities.map((amenity) => {
            const Icon = AMENITY_ICONS[amenity.icon] ?? Trophy;
            return (
              <div
                key={amenity.name}
                className="border-surface-border bg-surface-card hover:border-lime/40 flex flex-col items-center justify-center gap-2.5 rounded-xl border p-4 text-center transition-colors"
              >
                <div className="border-surface-border bg-navy flex size-11 items-center justify-center rounded-full border">
                  <Icon className="text-lime size-5.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">
                    {amenity.name}
                  </span>
                  <span className="text-muted-foreground text-[11px]">
                    {amenity.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Guidelines */}
      <div className="border-surface-border bg-surface-card flex flex-col gap-3 rounded-xl border p-5">
        <div className="flex items-center gap-2 text-white">
          <ShieldCheck className="text-lime size-5.5" />
          <span className="font-heading text-base font-bold tracking-tight">
            Panduan & Kebijakan Lapangan
          </span>
        </div>
        <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-3">
          {court.guidelines.map((g) => (
            <div
              key={g}
              className="border-surface-border bg-navy flex items-center gap-2 rounded-lg border p-3"
            >
              <CheckCircle className="text-lime size-4.5 shrink-0" />
              <span className="text-muted-foreground text-xs">{g}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Banner */}
      <div className="border-surface-border bg-surface-card flex flex-col items-center justify-between gap-4 rounded-xl border p-5 sm:flex-row">
        <div className="flex items-center gap-4">
          <div className="border-surface-border bg-navy flex size-12 shrink-0 items-center justify-center rounded-full border">
            <Star className="text-lime size-6.5 fill-current" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-heading text-lg font-bold text-white">
                {court.reviews.score} dari 5.0
              </span>
              <span className="text-lime text-xs font-semibold">
                ({court.reviews.total} pertandingan terverifikasi)
              </span>
            </div>
            <span className="text-muted-foreground text-xs">
              {court.reviews.label}
            </span>
          </div>
        </div>
        <div className="border-surface-border bg-navy text-muted-foreground flex shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-xs">
          <span className="bg-lime size-2 rounded-full" />
          100% Ulasan Tersertifikasi
        </div>
      </div>

      {/* Venue Card */}
      <div className="border-surface-border bg-surface-card flex items-center gap-3.5 rounded-xl border p-4">
        <div className="border-surface-border bg-navy flex size-11 shrink-0 items-center justify-center rounded-lg border">
          <MapPin className="text-lime size-6" />
        </div>
        <div className="flex flex-col">
          <span className="font-heading text-sm font-bold text-white">
            {court.venue.name}
          </span>
          <span className="text-muted-foreground text-xs">
            {court.venue.address}
          </span>
        </div>
      </div>
    </>
  );
}
