"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EquipmentHero() {
  return (
    <motion.section 
      className="min-h-screen flex items-center px-6 sm:px-8 lg:px-12 pt-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Dark green background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900" />
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />
      <div className="max-w-7xl mx-auto w-full px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Equipment Information */}
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Glass morphism container for main content */}
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl" style={{background: 'rgba(255, 255, 255, 0.1)'}}>
              <div className="max-w-lg">
                <motion.h1 
                  className="text-3xl md:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  🌿 Gardening Equipment
                </motion.h1>
                
                <motion.p 
                  className="text-base md:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl drop-shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Proper tools and equipment play an important role in maintaining healthy plants and well-organized green spaces. Our nursery provides essential gardening items that support daily plant care, garden setup, and outdoor landscaping needs. These tools are suitable for both beginners and experienced gardeners.
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-2 mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white/90 border border-white/30 backdrop-blur-sm">
                    🛠️ Essential Tools
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white/90 border border-white/30 backdrop-blur-sm">
                    🌱 For Beginners
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white/90 border border-white/30 backdrop-blur-sm">
                    🌿 Professional Grade
                  </span>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <button 
                    className="px-6 py-3.5 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-200 shadow-md hover:shadow-lg flex-1 text-center border border-white/30"
                    onClick={() => {
                      const equipmentSection = document.getElementById('equipment-grid');
                      if (equipmentSection) {
                        equipmentSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Browse Equipment
                  </button>
                  <button className="px-6 py-3.5 bg-transparent text-white font-semibold rounded-lg border border-white/50 hover:bg-white/10 transition-all duration-200 flex-1 text-center backdrop-blur-sm">
                    Learn More
                  </button>
                </motion.div>
              </div>
            </div> {/* End glass morphism container */}
          </motion.div>
                    
          {/* Right Side - Equipment Image */}
          <motion.div 
            className="order-1 md:order-2 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative">
              <div className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-xl border border-white/20 backdrop-blur-sm">
                <Image
                  src="/images/ss.png"
                  alt="Gardening Equipment Collection"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating Stat Badges */}
              <motion.div 
                className="absolute -top-3 -left-3 bg-white/30 backdrop-blur-sm rounded-xl shadow-lg p-3.5 min-w-[130px] border border-white/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">🔧</span>
                  <span className="text-xs font-medium text-white/80">Quality</span>
                </div>
                <div className="text-base font-semibold text-white">
                  Tools
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-3 -right-3 bg-white/30 backdrop-blur-sm rounded-xl shadow-lg p-3.5 min-w-[110px] border border-white/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">🌿</span>
                  <span className="text-xs font-medium text-white/80">Plant Care</span>
                </div>
                <div className="text-base font-semibold text-white">
                  Support
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-3 -left-3 bg-white/30 backdrop-blur-sm rounded-xl shadow-lg p-3.5 min-w-[110px] border border-white/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">🏠</span>
                  <span className="text-xs font-medium text-white/80">Indoor</span>
                </div>
                <div className="text-base font-semibold text-white">
                  Outdoor
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-3 -right-3 bg-white/30 backdrop-blur-sm rounded-xl shadow-lg p-3.5 min-w-[90px] border border-white/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">💪</span>
                  <span className="text-xs font-medium text-white/80">Durable</span>
                </div>
                <div className="text-base font-semibold text-white">
                  Build
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}