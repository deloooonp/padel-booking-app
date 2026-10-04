import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clash = localFont({
  src: "../fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash",
  weight: "200 700",
});
const satoshi = localFont({
  src: "../fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
});

export const metadata: Metadata = {
  title: "PadelHub - Play Padel Anytime, Anywhere",
  description:
    "Book courts, discover clubs and join tournaments — all in one smart platform designed for the global padel community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${clash.variable} ${satoshi.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="bg-navy selection:bg-lime flex min-h-full flex-col text-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
