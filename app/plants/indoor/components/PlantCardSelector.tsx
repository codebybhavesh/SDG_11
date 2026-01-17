"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plant, plantsData } from "../../../../lib/types";
import { formatPrice } from "../../../../lib/constants";

interface PlantCardSelectorProps {
  selectedPlantId: string | null;
  onPlantSelect: (plant: Plant) => void;
}

export default function PlantCardSelector({ 
  selectedPlantId, 
  onPlantSelect 
}: PlantCardSelectorProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePlantClick = (plant: Plant) => {
    onPlantSelect(plant);
    // Scroll to top to show the updated hero view
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-white/50 to-emerald-50/40">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-12 text-center">
          Choose Your Perfect Plant
        </h2>
        
        <motion.div 
          ref={containerRef}
          onScroll={handleScroll}
          className="flex gap-5 overflow-x-auto pb-6 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {plantsData.map((plant, index) => (
            <motion.div
              key={plant.id}
              onClick={() => handlePlantClick(plant)}
              className={`
                flex-shrink-0 w-60 bg-white rounded-2xl shadow-md cursor-pointer group transition-all duration-200
                ${selectedPlantId === plant.id 
                  ? 'ring-2 ring-green-500 shadow-lg' 
                  : 'hover:shadow-lg border border-gray-100'
                }
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-44 overflow-hidden rounded-t-2xl">
                <Image
                  src={plant.image}
                  alt={plant.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <motion.div
                  className="absolute inset-0 bg-green-600/15 flex items-center justify-center"
                  initial={false}
                  animate={{ 
                    opacity: selectedPlantId === plant.id ? 1 : 0,
                    scale: selectedPlantId === plant.id ? 1 : 0.8
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-green-600 text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                    Selected
                  </div>
                </motion.div>
              </div>
              <div className="p-5">
                <motion.h3 
                  className={`
                    font-semibold text-gray-900 mb-2 text-base
                    ${selectedPlantId === plant.id 
                      ? 'text-green-700' 
                      : 'group-hover:text-green-700'
                    }
                  `}
                  animate={{ 
                    color: selectedPlantId === plant.id ? "#15803d" : "#111827" 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {plant.name}
                </motion.h3>
                <p className="text-xs text-gray-500 mb-3">
                  {plant.size} • {plant.atmosphere}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-700">
                    {formatPrice(plant.price)}
                  </span>
                  <motion.button 
                    className={`
                      text-xs px-2.5 py-1.5 rounded-md font-medium transition-colors duration-200
                      ${selectedPlantId === plant.id
                        ? 'bg-green-600 text-white'
                        : 'bg-green-50 text-green-700 hover:bg-green-100 border border-green-200'
                      }
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {selectedPlantId === plant.id ? 'Selected' : 'Select'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Scroll indicators for desktop */}
        <div className="hidden md:flex justify-center mt-6 gap-2">
          {plantsData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (containerRef.current) {
                  const cardWidth = 256 + 24; // w-64 (16rem) + gap-6 (1.5rem)
                  containerRef.current.scrollTo({
                    left: index * cardWidth,
                    behavior: "smooth"
                  });
                }
              }}
              className={`
                w-3 h-3 rounded-full transition-all
                ${Math.round(scrollPosition / (256 + 24)) === index
                  ? 'bg-green-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
                }
              `}
              aria-label={`Scroll to plant ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}