import Image from "next/image";

export function CourtBookingFeature() {
  return (
    <section
      className="relative overflow-hidden bg-surface py-24"
      data-purpose="features-overview"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left: Feature Description */}
          <div className="lg:col-span-5">
            <h2 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
              EVERYTHING YOU NEED TO PLAY PADEL
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-gray-400 md:text-base">
              PadelHub brings together all the tools players and clubs need in
              one simple platform.
            </p>
          </div>
          {/* Right: Feature Card */}
          <div className="lg:col-span-7">
            {/* Feature Card: Court Booking */}
            <div className="w-full rounded-2xl border border-white/10 bg-surface-card p-5 shadow-2xl">
              <div className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-300">
                Court Booking
              </div>
              <div className="relative mb-4 h-64 overflow-hidden rounded-xl">
                <Image
                  alt="Padel Court Net"
                  className="h-full w-full object-cover"
                  src="/placeholder-net.jpg"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <span className="absolute right-3 bottom-3 h-3 w-3 rounded-full bg-lime ring-4 ring-surface-card" />
              </div>
              <p className="text-xs leading-relaxed text-gray-400">
                Reserve courts instantly with our smart booking system and check
                real-time availability across partner clubs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}