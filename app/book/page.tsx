import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { BookingInterface } from "@/components/sections/booking-interface";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Court - PadelHub",
  description: "Select your preferred court, date, and match slot.",
};

export default function BookPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <BookingInterface />
      <Footer />
    </div>
  );
}
