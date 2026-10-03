export function StatsSection() {
  return (
    <section
      className="light relative overflow-hidden bg-white py-24 text-gray-950"
      data-purpose="statistics"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
          PadelHub in Numbers
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-500 md:text-base">
          PadelHub connects players, clubs and courts in one seamless platform
          that makes discovering venues, booking matches and playing padel
          easier than ever.
        </p>
        {/* Stat Infographic Graphic & Counters */}
        <div className="mt-16 flex flex-col items-center justify-center gap-10 md:flex-row md:gap-20">
          {/* Clubs Count */}
          <div className="order-2 w-64 text-center md:order-1 md:text-right">
            <p className="text-xl font-bold text-gray-800">Clubs</p>
            <p className="mt-1 text-5xl font-black tracking-tight text-gray-950 md:text-6xl">
              50+
            </p>
            <p className="mt-2 text-xs text-gray-500">
              Partner clubs across major cities
            </p>
          </div>
          {/* Pillar Tennis Ball Animation Visual */}
          <div className="relative order-1 flex h-72 w-28 flex-col items-center justify-end md:order-2">
            <div className="h-56 w-16 rounded-full bg-linear-to-t from-lime via-lime/50 to-transparent opacity-90 blur-[1px]" />
            {/* Animated bouncing visual padel ball */}
            <div className="relative z-10 -mt-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-lime shadow-[0_10px_30px_rgba(200,241,53,0.6)]">
              <svg
                className="h-14 w-14 fill-none stroke-white/80 stroke-[6]"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  fill="#c8f135"
                  r="45"
                  stroke="#c8f135"
                />
                <path d="M 22,22 A 40,40 0 0,1 22,78" />
                <path d="M 78,22 A 40,40 0 0,0 78,78" />
              </svg>
            </div>
          </div>
          {/* Players Count */}
          <div className="order-3 w-64 text-center md:text-left">
            <p className="text-xl font-bold text-gray-800">Players</p>
            <p className="mt-1 text-5xl font-black tracking-tight text-gray-950 md:text-6xl">
              10k
            </p>
            <p className="mt-2 text-xs text-gray-500">
              Active players using the platform every week
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}