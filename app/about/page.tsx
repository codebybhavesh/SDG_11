import AboutHero from "@/components/sections/about-hero";
import NurseryIntroduction from "@/components/sections/nursery-introduction";
import MissionVision from "@/components/sections/mission-vision";
import PlantCareExperience from "@/components/sections/plant-care-experience";
import PlantTypes from "@/components/sections/plant-types";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-800/20 via-emerald-700/15 to-teal-800/10">
      <AboutHero />
      <NurseryIntroduction />
      <MissionVision />
      <PlantCareExperience />
      <PlantTypes />
    </main>
  );
}