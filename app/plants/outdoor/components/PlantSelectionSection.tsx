"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { outdoorPlantsData, Plant } from "../../../../lib/types";
import { formatPrice } from "../../../../lib/constants";

interface PlantSelectionSectionProps {
  onPlantSelect: (plant: Plant) => void;
}

export default function PlantSelectionSection({ onPlantSelect }: PlantSelectionSectionProps) {
  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Choose Your Perfect Plant
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {outdoorPlantsData.map((plant) => (
            <motion.div 
              key={plant.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={plant.image}
                  alt={plant.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{plant.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{plant.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-green-700">{formatPrice(plant.price)}</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {plant.size}
                  </span>
                </div>
                
                <div className="flex gap-2">
                  <button 
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
                    onClick={() => onPlantSelect(plant)}
                  >
                    Add to Cart
                  </button>
                  <button 
                    className="flex-1 bg-white border border-green-600 text-green-700 hover:bg-green-50 font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
                    onClick={() => onPlantSelect(plant)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}