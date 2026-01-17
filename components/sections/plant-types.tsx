"use client";

import { motion } from "framer-motion";

export default function PlantTypes() {
  const plantCategories = [
    {
      icon: "🏡",
      title: "Indoor Plants",
      description: "Decorative and vastu-friendly plants perfect for homes and offices",
      examples: "Snake Plant, Peace Lily, Money Plant, Pothos"
    },
    {
      icon: "🌳",
      title: "Outdoor Plants",
      description: "Garden and landscape plants for outdoor spaces",
      examples: "Hibiscus, Bougainvillea, Jasmine, Roses"
    },
    {
      icon: "🥭",
      title: "Fruit Plants",
      description: "Saplings for farms and home gardens",
      examples: "Mango, Papaya, Apple, Lemon"
    },
    {
      icon: "🌸",
      title: "Flowering Plants",
      description: "Seasonal and ornamental varieties",
      examples: "Marigold, Petunia, Gerbera, Chrysanthemum"
    },
    {
      icon: "🌿",
      title: "Medicinal Plants",
      description: "Traditionally valued plant types with healing properties",
      examples: "Aloe Vera, Tulsi, Neem, Ashwagandha"
    },
    {
      icon: "🌴",
      title: "Palm Plants",
      description: "Suitable for large outdoor spaces",
      examples: "Areca Palm, Date Palm, Fan Palm"
    },
    {
      icon: "🌱",
      title: "Lawn (Grass)",
      description: "For garden and landscape areas",
      examples: "Green Carpet Grass, Bermuda Grass"
    }
  ];

  return (
    <section id="plant-types" className="py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🌿 Types of Plants Grown / Sourced
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We work with a wide variety of plants to meet different gardening and landscaping needs, including:
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plantCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:border-green-200 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="text-3xl mb-4 text-center">{category.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{category.title}</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">{category.description}</p>
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-sm text-green-800 font-medium">Examples:</p>
                <p className="text-sm text-green-700">{category.examples}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">🌱 Our Plant Diversity Promise</h3>
            <p className="text-lg leading-relaxed">
              Whether you're looking for a small houseplant or planning a large landscape project, 
              our diverse collection ensures you'll find the perfect green companions for your space. 
              Each plant is carefully selected and nurtured to meet the highest quality standards.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}