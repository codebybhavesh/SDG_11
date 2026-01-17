"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Plant, plantsData } from "@/lib/types";
import { formatPrice } from "@/lib/constants";

interface ProductCardsProps {
  onPlantSelect: (plant: Plant) => void;
}

export default function ProductCards({ onPlantSelect }: ProductCardsProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePlantClick = (plant: Plant) => {
    onPlantSelect(plant);
    // Scroll to top to show the updated hero section
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Indoor Plant Collection
        </h2>
        
        <div 
          ref={containerRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {plantsData.map((plant) => (
            <div
              key={plant.id}
              onClick={() => handlePlantClick(plant)}
              className="flex-shrink-0 w-64 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image
                  src={plant.image}
                  alt={plant.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                  {plant.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {plant.size} • {plant.atmosphere}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-600">
                    {formatPrice(plant.price)}
                  </span>
                  <button className="text-sm bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}