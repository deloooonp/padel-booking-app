import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { ThreeStepsSection } from "@/components/sections/three-steps";
import { CourtBookingFeature } from "@/components/sections/court-booking-feature";
import { ClubsSection } from "@/components/sections/clubs";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ThreeStepsSection />
        <CourtBookingFeature />
        <ClubsSection />
        <Button>Hello!</Button>
      </main>
      <Footer />
    </>
  );
}
