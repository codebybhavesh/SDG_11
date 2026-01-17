"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const indoorPlants = [
  {
    id: 1,
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    price: "₹299",
    image: "/images/snake_plant.jpg",
    description: "Low maintenance, air-purifying plant perfect for beginners",
  },
  {
    id: 2,
    name: "Monstera Deliciosa",
    scientificName: "Monstera deliciosa",
    price: "₹699",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&q=80",
    description: "Stunning tropical plant with unique split leaves",
  },
  {
    id: 3,
    name: "Peace Lily",
    scientificName: "Spathiphyllum",
    price: "₹399",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=600&q=80",
    description: "Beautiful white blooms and excellent air purification",
  },
  {
    id: 4,
    name: "Pothos",
    scientificName: "Epipremnum aureum",
    price: "₹249",
    image: "https://images.unsplash.com/photo-1597689195340-9e1b3f38c8ac?w=600&q=80",
    description: "Fast-growing trailing vine, very easy to care for",
  },
  {
    id: 5,
    name: "ZZ Plant",
    scientificName: "Zamioculcas zamiifolia",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=600&q=80",
    description: "Drought-tolerant with glossy dark green leaves",
  },
  {
    id: 6,
    name: "Spider Plant",
    scientificName: "Chlorophytum comosum",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1572688484305-501e0c2d1e4a?w=600&q=80",
    description: "Easy care plant with arching striped leaves",
  },
];

export default function PlantsGrid() {
  return (
    <section id="plants" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Indoor Plant Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hand-selected healthy plants ready to transform your indoor spaces
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {indoorPlants.map((plant, index) => (
            <motion.div
              key={plant.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={plant.image}
                  alt={plant.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                  {plant.name}
                </h3>
                <p className="text-sm text-gray-500 italic mb-3">
                  {plant.scientificName}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {plant.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">
                    {plant.price}
                  </span>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
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