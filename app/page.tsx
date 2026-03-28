import { Navbar } from "@/components/layout/Navbar";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { ModernDoors } from "@/components/sections/ModernDoors";
import { WoodDoors } from "@/components/sections/WoodDoors";
import { Baseboards } from "@/components/sections/Baseboards";
import { WindowFrames } from "@/components/sections/WindowFrames";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroBanner />
      <ModernDoors />
      <WoodDoors />
      <Baseboards />
      <WindowFrames />
    </main>
  );
}
