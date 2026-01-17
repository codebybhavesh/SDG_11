"use client";

import { useState } from "react";
import { outdoorPlantsData } from "../../../lib/types";
import HeroPlantView from "./components/HeroPlantView";
import PlantSelectionSection from "./components/PlantSelectionSection";

export default function OutdoorPlantsPage() {
  const [selectedPlant, setSelectedPlant] = useState(outdoorPlantsData[0]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-800/20 via-emerald-700/15 to-teal-800/10">
      <HeroPlantView 
        plant={selectedPlant} 
        onPlantSelect={setSelectedPlant}
      />
      <PlantSelectionSection onPlantSelect={setSelectedPlant} />
    </main>
  );
}
