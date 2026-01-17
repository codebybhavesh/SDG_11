"use client";

import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🌼 Mission & Vision
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-500"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To grow and provide healthy plants that support greener living and well-balanced outdoor and indoor environments. We are committed to nurturing each plant with the care and expertise it deserves, ensuring that every customer receives quality greenery that thrives in their space.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Vision Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-500"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👁️</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be a trusted local nursery known for plant quality, honest guidance, and a strong connection to nature and the community. We envision a future where every home and garden flourishes with healthy plants, and where our nursery serves as a cornerstone for environmental consciousness in our local area.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}