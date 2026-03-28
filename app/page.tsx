import { Navbar } from "@/components/layout/Navbar";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { ModernDoors } from "@/components/sections/ModernDoors";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroBanner />
      <ModernDoors />
    </main>
  );
}
