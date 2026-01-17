"use client";

import { motion } from "framer-motion";

export default function PlantCareExperience() {
  const carePoints = [
    {
      icon: "🌱",
      title: "Proper Nurturing and Maintenance",
      description: "From seedling to mature plant, we provide consistent care including watering, pruning, and monitoring for optimal growth conditions."
    },
    {
      icon: "☀️",
      title: "Natural Growing Conditions",
      description: "Our plants are grown in natural sunlight with organic soil and environmentally friendly practices to ensure healthy development."
    },
    {
      icon: "💚",
      title: "Ensuring Plant Health",
      description: "Each plant undergoes thorough health checks before leaving our nursery to guarantee it will thrive in your home or garden."
    }
  ];

  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🌳 Experience in Plant Care
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Plant care is at the heart of everything we do. From early growth stages to mature plants, we focus on:
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {carePoints.map((point, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
              <p className="text-gray-700 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Our Promise to You</h3>
            <p className="text-green-700 text-lg leading-relaxed">
              Our extensive experience in plant care helps visitors feel confident while selecting plants and understanding basic care requirements. We're here to guide you every step of the way in your gardening journey.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}