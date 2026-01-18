"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Particles } from "@/components/ui/particles";

const categories = [
  {
    id: 1,
    title: "Indoor Plants",
    description: "Beautiful plants perfect for your home and office spaces",
    image: "/images/indoor.jpg",
    href: "/plants/indoor",
  },
  {
    id: 2,
    title: "Outdoor Plants",
    description: "Hardy plants designed to thrive in your garden",
    image: "/images/outdoor.jpg",
    href: "/plants/outdoor",
  },
  {
    id: 3,
    title: "Gardening Services",
    description: "Expert care and maintenance for your green spaces",
    image: "/images/services.jpg",
    href: "/services",
  },
  {
    id: 4,
    title: "Gardening Equipment",
    description: "Premium tools and supplies for every gardener",
    image: "/images/equip.jpg",
    href: "/equipment",
  },
];

export default function CategoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const cardStackRef = useRef<HTMLDivElement>(null);
  const n = categories.length;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNavigation(1);
      }
    }, 2000); // Change card every 2 seconds
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, isAnimating]);

  const handleNavigation = (direction: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + direction + n) % n);
    setTimeout(() => setIsAnimating(false), 700);
  };



  // Touch handling for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      handleNavigation(1); // Next card
    } else if (isRightSwipe) {
      handleNavigation(-1); // Previous card
    }
  };

  const getCardTransform = (index: number) => {
    const offset = (index - currentIndex + n) % n;
    
    if (offset === 0) {
      // Top card - centered and prominent
      return {
        transform: 'translateX(0) translateY(0) rotate(0deg) scale(1)',
        zIndex: n,
        opacity: 1,
      };
    } else if (offset === 1) {
      // First card behind - slightly offset and rotated
      return {
        transform: 'translateX(20px) translateY(15px) rotate(5deg) scale(0.95)',
        zIndex: n - 1,
        opacity: 0.9,
      };
    } else if (offset === 2) {
      // Second card behind - more offset and rotated
      return {
        transform: 'translateX(40px) translateY(30px) rotate(10deg) scale(0.9)',
        zIndex: n - 2,
        opacity: 0.8,
      };
    } else {
      // Hidden cards
      return {
        transform: 'translateX(60px) translateY(45px) rotate(15deg) scale(0.85)',
        zIndex: n - 3,
        opacity: 0,
      };
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        ease={80}
        color="#10b981"
        size={0.8}
        staticity={50}
        refresh
      />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From lush indoor plants to outdoor gardening solutions, find
            everything you need to create your perfect green space.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20 z-10">
          {/* Card Stack - Centered with Rotation Effect */}
          <div 
            ref={cardStackRef}
            className="relative w-full max-w-lg h-[400px] sm:h-[480px] md:h-[520px] flex items-center justify-center touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >

            {categories.map((category, index) => {
              const cardStyle = getCardTransform(index);
              const isTop = index === currentIndex;
              const isHovered = hoveredIndex === index;
              
              return (
                <div
                  key={category.id}
                  className="absolute transition-all duration-700 ease-out-back origin-center"
                  style={cardStyle}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link
                    href={category.href}
                    className="block relative overflow-hidden rounded-2xl sm:rounded-3xl h-[320px] sm:h-[380px] md:h-[420px] w-[260px] sm:w-[290px] md:w-[320px] group"
                    style={{
                      boxShadow: isTop 
                        ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
                        : '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                      transform: isHovered && isTop ? 'translateY(-10px) scale(1.02)' : 'none',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                  >
                    {/* Premium Card Container */}
                    <div className="relative h-full w-full bg-gradient-to-br from-white to-gray-50 border border-white/20">
                      {/* Image with Overlay */}
                      <div className="relative h-full w-full overflow-hidden">
                        <Image
                          src={category.image}
                          alt={category.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 320px"
                        />
                        
                        {/* Gradient Overlay for Depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        
                        {/* Subtle Light Reflection */}
                        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/10 to-transparent" />
                        
                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white">
                          <div 
                            className="transition-all duration-500"
                            style={{
                              opacity: isTop ? 1 : 0,
                              transform: isTop ? 'translateY(0)' : 'translateY(20px)',
                            }}
                          >
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 tracking-tight group-hover:text-green-300 transition-colors duration-300">
                              {category.title}
                            </h3>
                            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                              {category.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Corner Highlight */}
                        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Info Panel with Controls */}
          <div className="w-full lg:w-80">
            <div className="space-y-4 sm:space-y-6 sticky top-24 sm:top-32">

              
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {categories[currentIndex].title}
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  {categories[currentIndex].description}
                </p>
                
                {/* Navigation Controls - Desktop */}
                <div className="hidden lg:flex gap-4">
                  <button
                    onClick={() => handleNavigation(-1)}
                    disabled={isAnimating}
                    className="group flex items-center justify-center w-12 h-12 rounded-full bg-green-100/20 hover:bg-green-500/20 text-green-700 hover:text-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleNavigation(1)}
                    disabled={isAnimating}
                    className="group flex items-center justify-center w-12 h-12 rounded-full bg-green-100/20 hover:bg-green-500/20 text-green-700 hover:text-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Navigation Controls - Mobile - Always Visible */}
                <div className="lg:hidden flex gap-3 sm:gap-4 justify-center pt-2">
                  <button
                    onClick={() => handleNavigation(-1)}
                    disabled={isAnimating}
                    className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100/20 hover:bg-green-500/20 text-green-700 hover:text-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed touch-control"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={() => handleNavigation(1)}
                    disabled={isAnimating}
                    className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100/20 hover:bg-green-500/20 text-green-700 hover:text-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed touch-control"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
