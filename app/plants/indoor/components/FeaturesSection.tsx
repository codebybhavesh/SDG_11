"use client";

import { motion } from "framer-motion";
import { Card } from "./Card";

const features = [
  {
    id: 1,
    title: "Air Purification",
    description: "Natural air filters that remove toxins and improve indoor air quality",
    icon: "🌿"
  },
  {
    id: 2,
    title: "Stress Reduction",
    description: "Studies show plants reduce stress and promote mental wellbeing",
    icon: "🧘"
  },
  {
    id: 3,
    title: "Low Maintenance",
    description: "Easy-care varieties perfect for busy lifestyles and beginners",
    icon: "⏱️"
  },
  {
    id: 4,
    title: "Aesthetic Appeal",
    description: "Enhance your decor with beautiful, natural focal points",
    icon: "🎨"
  },
  {
    id: 5,
    title: "Health Benefits",
    description: "Increase humidity and reduce airborne bacteria naturally",
    icon: "💚"
  },
  {
    id: 6,
    title: "Year-Round Beauty",
    description: "Evergreen companions that thrive indoors all seasons",
    icon: "🌞"
  }
];

export default function FeaturesSection() {
  return (
    <section 
      id="features" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Indoor Plants?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the transformative benefits of bringing nature into your living spaces
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}