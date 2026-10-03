import {
  Calendar,
  MapPin,
  Shield,
  Clock,
  Circle,
  CheckCircle,
} from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="hero-court-bg relative flex min-h-[92vh] flex-col justify-between pt-32 pb-24"
      data-purpose="hero-banner"
    >
      <div className="hero-overlay absolute inset-0" />
      <div className="relative mx-auto my-auto w-full max-w-7xl px-6 text-center">
        {/* Hero Headings */}
        <h1 className="font-heading mx-auto max-w-4xl text-4xl leading-[1.1] font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
          Play Padel Anytime, Anywhere.
          <br />
          <span className="text-white">All In One Place</span>
        </h1>
        <p className="font-satoshi mx-auto mt-6 max-w-2xl text-base leading-relaxed font-normal text-gray-300 md:text-lg">
          Book courts, discover clubs and join tournaments — all in one smart
          platform designed for the global padel community.
        </p>
        {/* Booking Search Bar Pill */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="glass-pill flex flex-col items-center justify-between gap-3 rounded-full p-2.5 text-slate-800 shadow-2xl sm:p-3 lg:flex-row">
            {/* Location field */}
            <div className="flex w-full items-center gap-3 border-b border-gray-200 px-5 py-2 text-left lg:w-auto lg:border-r lg:border-b-0">
              <MapPin className="h-4 w-4 text-gray-400" />
              <div>
                <span className="block text-xs font-bold tracking-wider text-gray-400 uppercase">
                  Location
                </span>
                <span className="text-sm font-semibold text-gray-900">
                  Barcelona, Spain
                </span>
              </div>
            </div>
            {/* Club field */}
            <div className="flex w-full items-center gap-3 border-b border-gray-200 px-5 py-2 text-left lg:w-auto lg:border-r lg:border-b-0">
              <Shield className="h-4 w-4 text-gray-400" />
              <div>
                <span className="block text-xs font-bold tracking-wider text-gray-400 uppercase">
                  Club
                </span>
                <span className="text-sm font-medium text-gray-500">
                  Pick a Club
                </span>
              </div>
            </div>
            {/* Date field */}
            <div className="flex w-full items-center gap-3 border-b border-gray-200 px-5 py-2 text-left lg:w-auto lg:border-r lg:border-b-0">
              <Calendar className="h-4 w-4 text-gray-400" />
              <div>
                <span className="block text-xs font-bold tracking-wider text-gray-400 uppercase">
                  Date
                </span>
                <span className="text-sm font-medium text-gray-500">
                  Add Date
                </span>
              </div>
            </div>
            {/* Time field */}
            <div className="flex w-full items-center gap-3 px-5 py-2 text-left lg:w-auto">
              <Clock className="h-4 w-4 text-gray-400" />
              <div>
                <span className="block text-xs font-bold tracking-wider text-gray-400 uppercase">
                  Time
                </span>
                <span className="text-sm font-medium text-gray-500">
                  Pick a Time
                </span>
              </div>
            </div>
            {/* CTA Button */}
            <button className="bg-lime hover:bg-lime-hover flex w-full items-center justify-center gap-2.5 rounded-full px-7 py-3.5 font-bold whitespace-nowrap text-gray-950 shadow-md transition-all active:scale-95 lg:w-auto">
              <span>Book a Court</span>
              <Circle className="h-4 w-4 rotate-45" />
            </button>
          </div>
        </div>
      </div>
      {/* Trust Badge */}
      <div className="relative mx-auto mt-8 flex w-full max-w-7xl items-center justify-end px-6">
        <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-medium tracking-wide text-gray-300 backdrop-blur-md">
          <CheckCircle className="text-lime h-4 w-4" />
          <span>Trusted by thousands of padel players worldwide</span>
        </div>
      </div>
    </section>
  );
}
