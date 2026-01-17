"use client";

import Image from "next/image";
import { Plant, plantsData } from "@/lib/types";
import { formatPrice, STAT_BADGES } from "@/lib/constants";

interface HeroSectionProps {
  selectedPlant: Plant | null;
}

export default function HeroSection({ selectedPlant }: HeroSectionProps) {
  // Use first plant as default if none selected
  const displayPlant = selectedPlant || plantsData[0];

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Plant Information */}
          <div className="order-2 lg:order-1">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {displayPlant.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-green-600">
                  {formatPrice(displayPlant.price)}
                </span>
                <span className="text-gray-500">
                  • {displayPlant.size} size
                </span>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {displayPlant.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  🌿 Air Purifying
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  🌱 Beginner Friendly
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  🏠 Indoor Safe
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl flex-1">
                  Add to Cart
                </button>
                <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg border-2 border-green-600 hover:bg-green-50 transition-colors flex-1">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Side - Plant Image with Floating Badges */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={displayPlant.image}
                  alt={displayPlant.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating Stat Badges */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 min-w-[140px]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{STAT_BADGES.atmosphere.icon}</span>
                  <span className="text-sm font-medium text-gray-600">Light</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {displayPlant.atmosphere}
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 min-w-[120px]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{STAT_BADGES.humidity.icon}</span>
                  <span className="text-sm font-medium text-gray-600">Humidity</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {displayPlant.humidity}%
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 min-w-[120px]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{STAT_BADGES.waterLevel.icon}</span>
                  <span className="text-sm font-medium text-gray-600">Water</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {displayPlant.waterLevel}ml
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 min-w-[100px]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{STAT_BADGES.size.icon}</span>
                  <span className="text-sm font-medium text-gray-600">Size</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {displayPlant.size}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}