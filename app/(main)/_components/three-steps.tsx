import Image from "next/image";

export function ThreeStepsSection() {
  return (
    <section
      className="light border-t border-gray-100 bg-white py-24"
      data-purpose="how-it-works"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-gray-950 md:text-4xl">
            Start Playing in 3 Simple Steps
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Booking your next padel match has never been easier.
          </p>
        </div>
        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Step 1 */}
          <div className="group relative h-[480px] overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <Image
              alt="Padel Court Outdoors"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              src="/placeholder-court.jpg"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/20" />
            <div className="absolute top-6 right-6 left-6">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Find a Club
              </h3>
            </div>
            <div className="absolute right-6 bottom-6 left-6">
              <span className="bg-lime mb-2 inline-block rounded px-3 py-1.5 text-xs font-semibold text-gray-950">
                Browse nearby clubs and discover courts available in your area.
              </span>
            </div>
          </div>
          {/* Step 2 */}
          <div className="group bg-lime relative h-[480px] overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <Image
              alt="Padel Tennis Ball"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              src="/placeholder-ball.jpg"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-black/20" />
            <div className="absolute top-6 right-6 left-6">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Book Your Court
              </h3>
            </div>
            <div className="absolute right-6 bottom-6 left-6">
              <span className="bg-lime mb-2 inline-block rounded px-3 py-1.5 text-xs font-semibold text-gray-950">
                Choose the date and time that works best for you.
              </span>
            </div>
          </div>
          {/* Step 3 */}
          <div className="group relative h-[480px] overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <Image
              alt="Padel Racket on Court"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              src="/placeholder-racket.jpg"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/20" />
            <div className="absolute top-6 right-6 left-6">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Play and Connect
              </h3>
            </div>
            <div className="absolute right-6 bottom-6 left-6">
              <span className="bg-lime mb-2 inline-block rounded px-3 py-1.5 text-xs font-semibold text-gray-950">
                Invite friends, meet new players and enjoy the game.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
