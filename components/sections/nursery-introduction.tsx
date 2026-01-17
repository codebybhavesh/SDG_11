"use client";

import { motion } from "framer-motion";

export default function NurseryIntroduction() {
  return (
    <section id="nursery-story" className="py-16 px-6 sm:px-8 lg:px-12 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            🌿 Nursery Introduction
          </h2>
          
          <div className="prose max-w-none text-gray-700 space-y-6">
            <motion.p 
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Shree Durvankur Greens is a plant nursery dedicated to growing and supplying healthy plants for homes, gardens, farms, and landscaped spaces. We serve both retail and wholesale needs, offering a natural environment where plants are nurtured with care, patience, and responsibility.
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our nursery is designed to help visitors explore greenery, understand plant varieties, and choose plants that suit their space and purpose. We focus on providing a wide variety of plants for homes, gardens, farms, and landscaping needs, serving both retail and wholesale visitors.
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Along with plants, we support greenery through essential gardening items and practical guidance, helping people make informed choices for their green spaces. As a local nursery, trust is built through consistency, quality, and genuine care for nature.
            </motion.p>
            
            <motion.div 
              className="mt-8 p-6 bg-green-50 rounded-xl border border-green-100"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-green-800 mb-3">Our Commitment</h3>
              <p className="text-green-700">
                Our goal is not just to supply plants, but to encourage greener environments and lasting relationships with plant lovers and gardeners. Every plant that leaves our nursery carries with it our dedication to quality and sustainable growth.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}