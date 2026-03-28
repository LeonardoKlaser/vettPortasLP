import { Navbar } from "@/components/layout/Navbar";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { ModernDoors } from "@/components/sections/ModernDoors";
import { WoodDoors } from "@/components/sections/WoodDoors";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroBanner />
      <ModernDoors />
      <WoodDoors />
    </main>
  );
}
