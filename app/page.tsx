import { Navbar } from "@/components/layout/Navbar";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { ModernDoors } from "@/components/sections/ModernDoors";
import { WoodDoors } from "@/components/sections/WoodDoors";
import { Baseboards } from "@/components/sections/Baseboards";
import { WindowFrames } from "@/components/sections/WindowFrames";
import { AboutUs } from "@/components/sections/AboutUs";
import { WhyVetta } from "@/components/sections/WhyVetta";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <ModernDoors />
        <WoodDoors />
        <Baseboards />
        <WindowFrames />
        <AboutUs />
        <WhyVetta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
