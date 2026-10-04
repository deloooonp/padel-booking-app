import Image from "next/image";
import { MapPin, Star, BadgeCheck } from "lucide-react";
import { Camera } from "lucide-react";
import type { CourtDetailData } from "@/lib/mock-data";

export function CourtDetailHero({ court }: { court: CourtDetailData }) {
  const formatted = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(court.price);

  return (
    <>
      {/* Title & Pricing Bar */}
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <span className="text-muted-foreground flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase">
              <span className="bg-lime size-1.5 rounded-full" />
              {court.type}
            </span>
          </div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {court.name}
          </h1>
          <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center gap-1.5 text-white">
              <MapPin className="text-lime size-4.5" />
              {court.venue.name}, {court.venue.address.split(",")[0]}
            </span>
            <span className="text-border">•</span>
            <span className="flex items-center gap-1.5">
              <Star className="text-lime size-4.5 fill-current" />
              <strong className="font-semibold text-white">
                {court.rating}
              </strong>{" "}
              ({court.reviewCount} ulasan)
            </span>
            <span className="text-border">•</span>
            <span className="text-muted-foreground flex items-center gap-1">
              <BadgeCheck className="text-lime size-4.5" />
              {court.certification}
            </span>
          </div>
        </div>
        <div className="border-surface-border bg-surface-card self-start rounded-2xl border px-5 py-3 shadow-lg lg:self-end">
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-lime text-3xl leading-none font-bold lg:text-4xl">
              {formatted}
            </span>
            <span className="text-muted-foreground text-sm font-medium">
              / jam
            </span>
          </div>
        </div>
      </div>

      {/* Gallery Mosaic */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* Main Image */}
        <div className="border-surface-border relative h-[360px] overflow-hidden rounded-2xl border bg-black shadow-2xl md:h-[480px] lg:col-span-8">
          <Image
            src={court.mainImage.src}
            alt={court.mainImage.alt}
            fill
            className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          <div className="from-navy/90 pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
          <div className="absolute right-5 bottom-5 left-5 flex items-end justify-between">
            <div className="flex flex-col">
              <span className="text-lime text-[11px] font-bold tracking-widest uppercase">
                Turf Surface
              </span>
              <span className="font-heading text-lg font-bold text-white md:text-xl">
                {court.mainImage.surface}
              </span>
            </div>
            <div className="border-surface-border bg-navy/85 flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              <Camera className="text-lime size-4" />
              {court.galleryImages.length + 1} Perspectives
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid h-auto grid-cols-3 gap-4 lg:col-span-4 lg:h-[480px] lg:grid-cols-1">
          {court.galleryImages.map((img) => (
            <div
              key={img.label}
              className="border-surface-border bg-surface-card group relative h-28 cursor-pointer overflow-hidden rounded-2xl border lg:h-auto"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 33vw, 22vw"
              />
              <div className="bg-navy/30 absolute inset-0 transition-colors group-hover:bg-transparent" />
              <span className="border-surface-border bg-navy/90 text-lime absolute bottom-2.5 left-2.5 rounded-md border px-2.5 py-0.5 text-[11px] font-semibold tracking-wider uppercase backdrop-blur">
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
