import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04070e] py-16 text-sm text-gray-400">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link
              className="text-2xl font-black tracking-tight text-white"
              href="#"
            >
              Padel<span className="text-lime">Hub</span>
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-gray-500">
              The world&apos;s leading community and smart court booking
              platform for padel enthusiasts, clubs, and organizers.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wider text-white uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  className="transition-colors hover:text-white"
                  href="#book"
                >
                  Book Court
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-white"
                  href="#clubs"
                >
                  Explore Clubs
                </Link>
              </li>
              <li>
                <Link
                  className="transition-colors hover:text-white"
                  href="#tournaments"
                >
                  Active Tournaments
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-white" href="#">
                  Find Players
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wider text-white uppercase">
              For Clubs
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link className="transition-colors hover:text-white" href="#">
                  List Your Club
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-white" href="#">
                  Club Management Software
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-white" href="#">
                  Tournament Hosting
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-white" href="#">
                  Pricing &amp; Partner Plans
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wider text-white uppercase">
              Stay Connected
            </h4>
            <p className="mb-4 text-xs text-gray-500">
              Get the latest tournament updates and court offers.
            </p>
            <div className="flex items-center gap-2">
              <input
                className="bg-surface-card focus:border-lime w-full rounded-full border border-white/10 px-4 py-2 text-xs text-white focus:outline-none"
                placeholder="Enter your email"
                type="email"
              />
              <button className="bg-lime hover:bg-lime-hover rounded-full px-4 py-2 text-xs font-bold text-gray-950 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-t border-white/5 pt-8 text-xs text-gray-500 md:flex-row">
          <p>© 2026 PadelHub Inc. All rights reserved.</p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <Link className="transition-colors hover:text-white" href="#">
              Privacy Policy
            </Link>
            <Link className="transition-colors hover:text-white" href="#">
              Terms of Service
            </Link>
            <Link className="transition-colors hover:text-white" href="#">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
