import { BookingInterface } from "./_components/booking-interface";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Court - PadelHub",
  description: "Select your preferred court, date, and match slot.",
};

export default function BookPage() {
  return <BookingInterface />;
}
