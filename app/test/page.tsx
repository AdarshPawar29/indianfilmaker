import ParallaxCard from "@/components/ui/ParallaxCard";
import { Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="grid h-screen place-items-center bg-gray-300">
      <ParallaxCard
        foregroundImage="/assets/imgs/do-not-copy-osaka-tower.png"
        backgroundImage="/assets/imgs/do-not-copy-osaka-sky.jpeg"
        heroTitle="Osaka"
        subtitle="Osaka Castle"
        details="Osaka, Japan"
        width="600px"
        height="300px"
        icon={<Globe size={20} />}
      />
      <ParallaxCard
        foregroundImage="/assets/imgs/do-not-copy-osaka-tower.png"
        backgroundImage="/assets/imgs/do-not-copy-osaka-sky.jpeg"
        heroTitle="Osaka"
        subtitle="Osaka Castle"
        details="Osaka, Japan"
        width="400px"
        height="400px"
        icon={<Globe size={20} />}
      />
    </div>
  );
}
