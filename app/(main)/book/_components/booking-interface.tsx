"use client";

import { useState } from "react";
import { MapPin, ChevronDown, Verified, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { COURTS, VENUES, DATES, FILTERS } from "@/lib/mock-data";
import Image from "next/image";
import Link from "next/link";

export function BookingInterface() {
  const [selectedVenue, setSelectedVenue] = useState(VENUES[0].id);
  const [selectedDate, setSelectedDate] = useState(DATES[0].value);
  const [activeFilter, setActiveFilter] = useState(FILTERS[0].label);

  return (
    <main className="bg-navy w-full pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Section: Titles & Venue Selector */}
        <div className="border-surface-border/60 flex flex-col justify-between gap-6 border-b pb-8 lg:flex-row lg:items-end">
          <div className="flex w-full flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="flex flex-col gap-1">
              <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Book a Court
              </h1>
              <p className="text-muted-foreground text-sm">
                Select your preferred court, date, and 60-minute match slot.
              </p>
            </div>
            <div className="border-surface-border bg-surface-card flex items-center gap-2.5 rounded-xl border px-3.5 py-2">
              <MapPin className="text-lime h-5 w-5" />
              <div className="flex-1">
                <select
                  className="cursor-pointer border-0 bg-transparent text-xs font-medium text-white focus:ring-0 focus:outline-hidden sm:text-sm"
                  id="venue-selector"
                  value={selectedVenue}
                  onChange={(e) => setSelectedVenue(e.target.value)}
                >
                  {VENUES.map((venue) => (
                    <option
                      key={venue.id}
                      className="bg-navy text-white"
                      value={venue.id}
                    >
                      {venue.name}
                    </option>
                  ))}
                </select>
              </div>
              <ChevronDown className="text-muted-foreground h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Date Strip Component */}
        <div className="flex flex-col gap-3 py-6">
          <div className="flex scrollbar-none items-center gap-2 overflow-x-auto pb-1">
            {DATES.map((date) => (
              <button
                key={date.value}
                onClick={() => setSelectedDate(date.value)}
                className={cn(
                  "rounded-xl px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all sm:text-sm",
                  selectedDate === date.value
                    ? "bg-lime text-black shadow-sm"
                    : "border-surface-border bg-surface-card text-muted-foreground border transition-all hover:border-slate-500 hover:text-white",
                )}
                type="button"
              >
                {date.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filters & Legend */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter.label}
                onClick={() => setActiveFilter(filter.label)}
                className={cn(
                  "rounded-lg px-3.5 py-1.5 text-xs transition-all",
                  activeFilter === filter.label
                    ? "bg-white font-semibold text-black"
                    : "border-surface-border bg-surface-card text-muted-foreground border font-medium hover:text-white",
                )}
                type="button"
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="text-muted-foreground flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <span className="border-surface-border bg-surface-card h-2.5 w-2.5 rounded-sm border"></span>
              <span>Available</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="bg-lime h-2.5 w-2.5 rounded-sm"></span>
              <span className="font-medium text-white">Selected</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="border-surface-border/60 bg-navy h-2.5 w-2.5 rounded-sm border opacity-60"></span>
              <span>Booked</span>
            </div>
          </div>
        </div>

        {/* Court Cards List */}
        <div className="flex flex-col gap-6">
          {COURTS.map((court) => (
            <CourtCard key={court.id} court={court} />
          ))}
        </div>
      </div>
    </main>
  );
}

function CourtCard({ court }: { court: (typeof COURTS)[0] }) {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(
    court.slots.find((s) => s.selected)?.time || null,
  );

  return (
    <div className="border-surface-border bg-surface-card flex flex-col items-stretch gap-5 rounded-2xl border p-4 shadow-sm transition-all sm:p-5 md:flex-row">
      <div className="bg-navy relative h-48 overflow-hidden rounded-xl md:h-auto md:min-h-[180px] md:w-5/12">
        <Image
          alt={court.name}
          className="h-full w-full object-cover"
          src={court.image}
          width={600}
          height={400}
          unoptimized // Stitch uses remote images that might not be in next.config.js
        />
        <div className="from-navy/90 via-navy/30 absolute inset-0 bg-linear-to-t to-transparent"></div>
        <div className="absolute top-3 left-3">
          <span className="border-surface-border/50 bg-navy/90 text-lime rounded-md border px-2.5 py-1 text-xs font-semibold backdrop-blur-md">
            {court.type}
          </span>
        </div>
        <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between">
          <span className="font-heading text-xl font-bold text-white">
            Rp {court.price.toLocaleString("id-ID")}
            <span className="font-satoshi text-muted-foreground text-xs font-normal">
              {" "}
              / hour
            </span>
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-4 md:w-7/12">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-lg font-bold text-white sm:text-xl">
              {court.name}
            </h2>
            {selectedSlot && (
              <span className="bg-lime/10 border-lime/20 text-lime rounded border px-2 py-0.5 text-xs font-medium">
                1 Selected
              </span>
            )}
          </div>
          <p className="font-satoshi text-muted-foreground mt-1 text-xs">
            {court.description}
          </p>
        </div>
        <div>
          <div className="font-satoshi grid grid-cols-3 gap-1.5 text-xs font-medium sm:grid-cols-4">
            {court.slots.map((slot) => (
              <button
                key={slot.time}
                disabled={!slot.available}
                onClick={() => setSelectedSlot(slot.time)}
                className={cn(
                  "rounded-lg px-1 py-2 text-center transition-all",
                  !slot.available
                    ? "border-surface-border/40 bg-navy/50 cursor-not-allowed border text-slate-500 line-through"
                    : selectedSlot === slot.time
                      ? "bg-lime font-bold text-black shadow-sm"
                      : "border-surface-border bg-navy border text-slate-300 hover:border-slate-400 hover:text-white",
                )}
                type="button"
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>
        <div className="border-surface-border mt-1 flex flex-col items-center justify-between gap-3 border-t pt-3.5 sm:flex-row">
          <div className="font-satoshi text-muted-foreground flex items-center gap-1.5 text-xs">
            <Verified className="text-lime h-4 w-4" />
            <span>
              Instant Confirmation • Free cancellation up to 6h before
            </span>
          </div>
          <Link
            className="bg-lime font-satoshi hover:bg-lime/90 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold tracking-wider text-black uppercase shadow-sm transition-all sm:w-auto"
            href="#"
          >
            <span>View Court Details & Book</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
