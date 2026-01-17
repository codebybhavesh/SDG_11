"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Define the Equipment type
interface Equipment {
  id: number;
  name: string;
  image: string;
  description: string;
  suitableFor: string[];
  price?: string;
}

// Sample equipment data
const equipmentList: Equipment[] = [
  {
    id: 1,
    name: "🪴 Plastic Pots",
    image: "/images/plastic_pots.webp",
    description: "Used for growing and displaying plants in homes, balconies, and gardens.",
    suitableFor: ["Indoor", "Outdoor"],
    price: "₹199 - ₹599"
  },
  {
    id: 2,
    name: "🌿 Planters",
    image: "/images/planters.jpg",
    description: "Ideal for decorative planting and organized plant arrangement in different spaces.",
    suitableFor: ["Indoor", "Outdoor"],
    price: "₹299 - ₹1,299"
  },
  {
    id: 3,
    name: "🌱 Lawn (Grass)",
    image: "/images/Lawn_Grass.jpg",
    description: "Used for creating green lawn areas in gardens, open spaces, and landscapes.",
    suitableFor: ["Outdoor"],
    price: "₹99/sqm"
  },
  {
    id: 4,
    name: "🧤 Basic Gardening Tools",
    image: "/images/gardning_tools.jpg",
    description: "Supports everyday gardening tasks such as planting, soil handling, and plant care.",
    suitableFor: ["Outdoor"],
    price: "₹149 - ₹899"
  },
  {
    id: 5,
    name: "🪴 Ceramic Pots",
    image: "/images/plants.jpg",
    description: "Elegant ceramic containers for decorative plant display with drainage systems.",
    suitableFor: ["Indoor", "Outdoor"],
    price: "₹399 - ₹1,499"
  },
  {
    id: 6,
    name: "🌿 Hanging Planters",
    image: "/images/hanging_planters.webp",
    description: "Perfect for vertical gardening and space-saving plant arrangements.",
    suitableFor: ["Indoor", "Outdoor"],
    price: "₹249 - ₹799"
  },
  {
    id: 7,
    name: "🌱 Seeds & Saplings",
    image: "/images/seed_saplings.webp",
    description: "Quality seeds and healthy saplings for your gardening projects.",
    suitableFor: ["Indoor", "Outdoor"],
    price: "₹49 - ₹299"
  },
  {
    id: 8,
    name: "🌿 Fertilizers",
    image: "/images/fertilizers.jpg",
    description: "Organic and chemical fertilizers for optimal plant growth and health.",
    suitableFor: ["Indoor", "Outdoor"],
    price: "₹99 - ₹599"
  }
];

export default function EquipmentGrid() {
  return (
    <section id="equipment-grid" className="py-16 px-6 sm:px-8 lg:px-12 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          🧰 Equipment Collection
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipmentList.map((equipment) => (
            <motion.div 
              key={equipment.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 cursor-pointer"
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={equipment.image}
                  alt={equipment.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{equipment.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{equipment.description}</p>
                
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-700 mb-1">Suitable For:</p>
                  <div className="flex flex-wrap gap-1">
                    {equipment.suitableFor.map((type, idx) => (
                      <span 
                        key={idx} 
                        className={`text-xs px-2 py-1 rounded-full ${
                          type === "Indoor" 
                            ? "bg-blue-100 text-blue-800" 
                            : type === "Outdoor" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                
                {equipment.price && (
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-green-700">{equipment.price}</span>
                  </div>
                )}
                
                <div className="flex gap-2">
                  <button 
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
                  >
                    View Details
                  </button>
                  <button 
                    className="flex-1 bg-white border border-green-600 text-green-700 hover:bg-green-50 font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
                  >
                    Add to Cart
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