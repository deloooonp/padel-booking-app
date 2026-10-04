import Link from "next/link";
import { Star, ArrowRight, Circle } from "lucide-react";

export function ClubsSection() {
  const clubs = [
    {
      name: "Padel Arena Barcelona",
      rating: 4.8,
      location: "Barcelona, Spain",
      courts: "8 courts",
    },
    {
      name: "Madrid Central Padel Club",
      rating: 4.7,
      location: "Madrid, Spain",
      courts: "10 courts",
    },
    {
      name: "Valencia Padel Center",
      rating: 4.6,
      location: "Valencia, Spain",
      courts: "6 courts",
    },
    {
      name: "Malaga Coast Padel",
      rating: 4.7,
      location: "Malaga, Spain",
      courts: "7 courts",
    },
    {
      name: "Seville Padel Club",
      rating: 4.5,
      location: "Seville, Spain",
      courts: "5 courts",
    },
  ];

  return (
    <section
      className="bg-navy border-t border-white/5 py-24"
      data-purpose="clubs-directory"
      id="clubs"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between border-b border-white/5 pb-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Explore Top Padel Clubs
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Find premium clubs, modern courts and vibrant padel communities.
            </p>
          </div>
          <Link
            className="hover:text-lime mt-4 flex items-center gap-1.5 text-sm font-semibold text-gray-300 transition-colors md:mt-0"
            href="#clubs"
          >
            <span>View all clubs</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        {/* Clubs Table List */}
        <div className="space-y-3.5">
          {clubs.map((club, index) => (
            <div
              key={index}
              className="flex flex-col justify-between gap-4 rounded-xl border border-white/5 bg-[#0b1222] px-6 py-4.5 transition-all duration-200 hover:bg-[#0f192f] md:flex-row md:items-center"
            >
              <div className="flex min-w-[260px] items-center gap-3">
                <h3 className="text-base font-bold text-white">{club.name}</h3>
                <span className="text-lime flex items-center gap-1 text-xs font-semibold">
                  <Star className="h-2.5 w-2.5 fill-current" /> {club.rating}
                </span>
              </div>
              <div className="min-w-[140px] text-xs text-gray-400">
                <span className="block text-[10px] font-bold text-gray-500 uppercase">
                  Location
                </span>
                {club.location}
              </div>
              <div className="min-w-[100px] text-xs text-gray-400">
                <span className="block text-[10px] font-bold text-gray-500 uppercase">
                  Courts
                </span>
                {club.courts}
              </div>
              <div className="flex items-center gap-3">
                <Link
                  className="flex items-center gap-1.5 rounded-full border border-gray-600 px-4 py-2 text-xs font-medium text-white transition-colors hover:border-white"
                  href="#"
                >
                  <span>Explore Club</span>
                  <ArrowRight className="h-2.5 w-2.5" />
                </Link>
                <Link
                  className="bg-lime hover:bg-lime-hover flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold text-gray-950 transition-all"
                  href="#"
                >
                  <span>Book a Court</span>
                  <Circle className="h-2.5 w-2.5 rotate-45" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
