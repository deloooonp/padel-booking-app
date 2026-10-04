import { ClubsSection } from "./_components/clubs";
import { CourtBookingFeature } from "./_components/court-booking-feature";
import { HeroSection } from "./_components/hero";
import { StatsSection } from "./_components/stats";
import { ThreeStepsSection } from "./_components/three-steps";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ThreeStepsSection />
      <CourtBookingFeature />
      <ClubsSection />
    </main>
  );
}
