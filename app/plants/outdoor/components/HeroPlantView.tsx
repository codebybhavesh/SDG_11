"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plant, outdoorPlantsData } from "../../../../lib/types";
import { formatPrice, STAT_BADGES } from "../../../../lib/constants";

interface HeroPlantViewProps {
  plant: Plant;
  onPlantSelect: (plant: Plant) => void;
}

export default function HeroPlantView({ plant, onPlantSelect }: HeroPlantViewProps) {
  const [direction, setDirection] = useState(0);
  
  // Function to handle plant selection with direction
  const handlePlantSelect = (selectedPlant: Plant) => {
    const currentIndex = outdoorPlantsData.filter(p => !['lavender', 'jasmine'].includes(p.id)).findIndex(p => p.id === plant.id);
    const newIndex = outdoorPlantsData.filter(p => !['lavender', 'jasmine'].includes(p.id)).findIndex(p => p.id === selectedPlant.id);
    
    setDirection(newIndex > currentIndex ? 1 : -1); // 1 for right, -1 for left
    onPlantSelect(selectedPlant);
  };
  
  // Animation variants for vertical sliding
  const slideVariants = {
    hiddenUp: { opacity: 0, y: '-100vh', scale: 0.8 },
    hiddenDown: { opacity: 0, y: '100vh', scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: '100vh', scale: 0.8 }
  };
  
  return (
    <motion.section 
      className="min-h-screen flex items-center px-6 sm:px-8 lg:px-12 pt-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      key={plant.id}
    >
      {/* Dark green background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900" />
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />
      <div className="max-w-7xl mx-auto w-full px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Plant Information */}
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            {/* Glass morphism container for main content */}
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl" style={{background: 'rgba(255, 255, 255, 0.1)'}}>
            <div className="max-w-lg">
              <motion.h1 
                className="text-3xl md:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                key={plant.name}
              >
                {plant.name}
              </motion.h1>
              
              <motion.div 
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.span 
                  className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg"
                  key={plant.price}
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {formatPrice(plant.price)}
                </motion.span>
                <span className="text-gray-500 text-sm lg:text-base">
                  • {plant.size} size
                </span>
              </motion.div>
              
              <motion.p 
                className="text-base md:text-lg text-white/90 mb-10 leading-relaxed max-w-2xl drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {plant.description}
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-2 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white/90 border border-white/30 backdrop-blur-sm">
                  🌿 Air Purifying
                </span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white/90 border border-white/30 backdrop-blur-sm">
                  🌱 Beginner Friendly
                </span>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white/90 border border-white/30 backdrop-blur-sm">
                  🏠 Indoor Safe
                </span>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <button className="px-6 py-3.5 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-200 shadow-md hover:shadow-lg flex-1 text-center border border-white/30">
                  Add to Cart
                </button>
                <button className="px-6 py-3.5 bg-transparent text-white font-semibold rounded-lg border border-white/50 hover:bg-white/10 transition-all duration-200 flex-1 text-center backdrop-blur-sm">
                  Buy Now
                </button>
              </motion.div>
            </div>
          </div> {/* End glass morphism container */}
          </motion.div>
                    
          {/* Right Side - Plant Image with Floating Badges */}
          <motion.div 
            className="order-1 md:order-2 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div 
                  className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-white/20 backdrop-blur-sm"
                  variants={slideVariants}
                  initial={direction === 1 ? 'hiddenDown' : 'hiddenUp'}
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  key={plant.image}
                >
                <Image
                  src={plant.image}
                  alt={plant.name}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
                        
              {/* Floating Stat Badges with individual animations */}
              <motion.div 
                className="absolute -top-3 -left-3 bg-white/30 backdrop-blur-sm rounded-xl shadow-lg p-3.5 min-w-[130px] border border-white/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                key={`${plant.id}-atmosphere`}>
                          
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">{STAT_BADGES.atmosphere.icon}</span>
                  <span className="text-xs font-medium text-white/80">Light</span>
                </div>
                <motion.div 
                  className="text-base font-semibold text-white"
                  key={plant.atmosphere}
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {plant.atmosphere}
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-3 -right-3 bg-white/30 backdrop-blur-sm rounded-xl shadow-lg p-3.5 min-w-[110px] border border-white/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                key={`${plant.id}-humidity`}>
              
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">{STAT_BADGES.humidity.icon}</span>
                  <span className="text-xs font-medium text-white/80">Humidity</span>
                </div>
                <motion.div 
                  className="text-base font-semibold text-white"
                  key={plant.humidity}
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {plant.humidity}%
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-3 -left-3 bg-white/30 backdrop-blur-sm rounded-xl shadow-lg p-3.5 min-w-[110px] border border-white/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                key={`${plant.id}-water`}>
              
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">{STAT_BADGES.waterLevel.icon}</span>
                  <span className="text-xs font-medium text-white/80">Water</span>
                </div>
                <motion.div 
                  className="text-base font-semibold text-white"
                  key={plant.waterLevel}
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {plant.waterLevel}ml
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-3 -right-3 bg-white/30 backdrop-blur-sm rounded-xl shadow-lg p-3.5 min-w-[90px] border border-white/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                key={`${plant.id}-size`}>
              
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">{STAT_BADGES.size.icon}</span>
                  <span className="text-xs font-medium text-white/80">Size</span>
                </div>
                <motion.div 
                  className="text-base font-semibold text-white"
                  key={plant.size}
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {plant.size}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Plant Selection Cards - Integrated into Hero Section */}
        <div className="mt-20">
          {/* Glass morphism container for plant selection */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl" style={{background: 'rgba(255, 255, 255, 0.1)'}}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outdoorPlantsData.filter(plantItem => !['lavender', 'jasmine'].includes(plantItem.id)).slice(0, 4).map((plantItem) => (
              <motion.div
                key={plantItem.id}
                className={`
                  bg-white/20 backdrop-blur-sm rounded-2xl shadow-md cursor-pointer transition-all duration-200 p-4 border border-white/30
                  ${plantItem.id === plant.id 
                    ? 'ring-2 ring-green-400 shadow-lg bg-white/30' 
                    : 'hover:shadow-lg hover:bg-white/25'}
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handlePlantSelect(plantItem)}
              >
                <div className="relative h-32 overflow-hidden rounded-xl mb-3">
                  <Image
                    src={plantItem.image}
                    alt={plantItem.name}
                    fill
                    className="object-cover"
                  />
                  {plantItem.id === plant.id && (
                    <div className="absolute inset-0 bg-green-600/15 flex items-center justify-center">
                      <div className="bg-green-600 text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                        Selected
                      </div>
                    </div>
                  )}
                </div>
                <h3 className={`
                  font-semibold text-gray-900 mb-1 text-sm
                  ${plantItem.id === plant.id 
                    ? 'text-green-700' 
                    : ''}
                `}>
                  {plantItem.name}
                </h3>
                <p className="text-xs text-gray-500 mb-2">
                  {plantItem.size} • {plantItem.atmosphere}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold text-green-700">
                    {formatPrice(plantItem.price)}
                  </span>
                  <button className={`
                    text-xs px-2 py-1 rounded-md font-medium transition-colors duration-200
                    ${plantItem.id === plant.id
                      ? 'bg-green-600 text-white'
                      : 'bg-green-50 text-green-700 hover:bg-green-100 border border-green-200'
                    }
                  `}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlantSelect(plantItem);
                  }}>
                    {plantItem.id === plant.id ? 'Selected' : 'Select'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}