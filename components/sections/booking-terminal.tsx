"use client";

import { useState } from "react";
import { ArrowRight, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CourtDetailData } from "@/lib/mock-data";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function today() {
  return new Date();
}

function buildDatePills() {
  const base = today();
  const day = base.getDay();
  const date = base.getDate();
  const month = base.getMonth();

  return Array.from({ length: 6 }, (_, i) => {
    const d = (date + i) % 30; // simplified
    const m = date + i > 30 ? (month + 1) % 12 : month;
    return {
      label: i === 0 ? "Today" : DAYS[(day + i) % 7],
      day: d,
      month: MONTHS[m],
      value: `${2024}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`,
    };
  });
}

export function BookingTerminal({ court }: { court: CourtDetailData }) {
  const dates = buildDatePills();
  const [selectedDate, setSelectedDate] = useState(dates[0].value);
  const [selectedSlot, setSelectedSlot] = useState<string | null>("18:00");
  const [checkedAddons, setCheckedAddons] = useState<Set<string>>(new Set());

  const toggleAddon = (id: string) =>
    setCheckedAddons((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });

  const addonsTotal = court.addOns
    .filter((a) => checkedAddons.has(a.id))
    .reduce((sum, a) => sum + a.price, 0);

  const grandTotal = court.price + addonsTotal;

  const slotObj = court.slots.find((s) => s.time === selectedSlot);
  const timeDisplay = slotObj ? `${slotObj.range} (60 menit)` : "–";

  const fmt = (n: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(n);

  return (
    <div className="border-surface-border bg-surface-card flex flex-col gap-5 rounded-2xl border p-6 shadow-2xl">
      {/* Header */}
      <div className="border-surface-border flex flex-col border-b pb-4">
        <span className="text-lime text-[11px] font-bold tracking-widest uppercase">
          Booking Terminal
        </span>
        <h2 className="font-heading text-2xl font-bold text-white">
          Pilih Jadwal
        </h2>
      </div>

      {/* 1. Date */}
      <div className="flex flex-col gap-2">
        <label className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
          1. Tanggal Main
        </label>
        <div className="grid grid-cols-6 gap-2">
          {dates.map((d) => {
            const active = selectedDate === d.value;
            return (
              <button
                key={d.value}
                type="button"
                onClick={() => setSelectedDate(d.value)}
                className={cn(
                  "flex flex-col items-center justify-center rounded-xl py-2.5 transition-all",
                  active
                    ? "bg-lime text-navy font-clash shadow-xs"
                    : "border-surface-border bg-navy text-muted-foreground hover:border-lime/50 border hover:text-white",
                )}
              >
                <span className="text-[10px] font-bold tracking-wider uppercase">
                  {d.label}
                </span>
                <span
                  className={cn(
                    "text-lg leading-tight font-bold",
                    !active && "text-white",
                  )}
                >
                  {d.day}
                </span>
                <span className="font-mono text-[9px] uppercase">
                  {d.month}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Slot */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
            2. Jam Mulai (60 Menit)
          </label>
          <div className="text-muted-foreground flex items-center gap-3 text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="bg-lime size-2.5 rounded" /> Dipilih
            </span>
            <span className="flex items-center gap-1.5">
              <span className="border-surface-border bg-navy size-2.5 rounded border" />{" "}
              Tersedia
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-2.5 rounded bg-black/50 opacity-50" /> Penuh
            </span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 pt-1">
          {court.slots.map((slot) => {
            const active = selectedSlot === slot.time;
            if (!slot.available) {
              return (
                <button
                  key={slot.time}
                  disabled
                  className="border-surface-border/40 text-muted-foreground/40 cursor-not-allowed rounded-lg border bg-black/60 px-2 py-2.5 text-xs font-semibold line-through"
                >
                  {slot.time}
                </button>
              );
            }
            return (
              <button
                key={slot.time}
                type="button"
                onClick={() => setSelectedSlot(slot.time)}
                className={cn(
                  "rounded-lg border px-2 py-2.5 text-xs font-semibold transition-all",
                  active
                    ? "border-lime bg-lime text-navy font-bold shadow-[0_0_14px_rgba(200,241,53,0.35)]"
                    : "border-surface-border bg-navy hover:bg-surface-card text-white",
                )}
              >
                {slot.time}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Add-ons */}
      <div className="flex flex-col gap-2">
        <label className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
          3. Add-on Opsional
        </label>
        <div className="flex flex-col gap-2">
          {court.addOns.map((addon) => (
            <label
              key={addon.id}
              className="border-surface-border bg-navy hover:border-lime/40 flex cursor-pointer items-center justify-between rounded-xl border p-3 transition-colors select-none"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={checkedAddons.has(addon.id)}
                  onChange={() => toggleAddon(addon.id)}
                  className="accent-lime size-4 cursor-pointer rounded"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">
                    {addon.name}
                  </span>
                  <span className="text-muted-foreground text-[11px]">
                    {addon.description}
                  </span>
                </div>
              </div>
              <span className="text-lime text-xs font-bold">
                +{fmt(addon.price)}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* 4. Pricing Ledger */}
      <div className="border-surface-border bg-navy flex flex-col gap-2 rounded-xl border p-4">
        <div className="text-muted-foreground flex items-center justify-between text-xs">
          <span>Biaya Lapangan 60 menit</span>
          <span className="font-mono font-medium text-white">
            {fmt(court.price)}
          </span>
        </div>
        {court.includedLineItems.map((item) => (
          <div
            key={item.label}
            className="text-muted-foreground flex items-center justify-between text-xs"
          >
            <span>{item.label}</span>
            <span className="text-lime text-[11px] font-bold tracking-wider uppercase">
              {item.value}
            </span>
          </div>
        ))}
        {addonsTotal > 0 && (
          <div className="text-muted-foreground flex items-center justify-between text-xs">
            <span>Add-on Dipilih</span>
            <span className="font-mono font-medium text-white">
              {fmt(addonsTotal)}
            </span>
          </div>
        )}
        <div className="border-surface-border/60 mt-1 flex items-center justify-between border-t pt-2">
          <div className="flex flex-col">
            <span className="font-heading text-sm font-bold text-white">
              Total
            </span>
            <span className="text-muted-foreground text-[11px]">
              {timeDisplay}
            </span>
          </div>
          <span className="font-heading text-lime text-2xl font-bold">
            {fmt(grandTotal)}
          </span>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col gap-2">
        <button
          type="button"
          className="bg-lime hover:bg-lime-hover text-navy font-heading flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-bold tracking-tight shadow-[0_0_24px_rgba(200,241,53,0.35)] transition-all active:scale-[0.99]"
        >
          <span>Lanjut ke Checkout</span>
          <ArrowRight className="size-5" />
        </button>
        <div className="text-muted-foreground flex items-center justify-center gap-2 pt-1 text-[11px]">
          <Lock className="text-lime size-3.5" />
          <span>Ditahan 10 Menit • Checkout Terenkripsi 256-Bit</span>
        </div>
      </div>
    </div>
  );
}
