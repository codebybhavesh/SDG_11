import EquipmentHero from "@/components/sections/equipment-hero";
import EquipmentGrid from "@/components/sections/equipment-grid";

export default function EquipmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-800/20 via-emerald-700/15 to-teal-800/10">
      <EquipmentHero />
      <EquipmentGrid />
    </main>
  );
}