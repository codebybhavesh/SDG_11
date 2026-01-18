"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure the video plays
      const handleCanPlay = () => {
        video.play().catch(e => {
          console.warn('Autoplay failed:', e);
          // If autoplay fails due to browser policies, try on first user interaction
          const handleInteraction = () => {
            video.play().catch(console.error);
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
          };
          document.addEventListener('click', handleInteraction);
          document.addEventListener('touchstart', handleInteraction);
        });
      };
      
      video.addEventListener('canplay', handleCanPlay);
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 10,
          }}
          aria-label="Background video showing plants and nature"
          tabIndex={-1}
        >
          <source
            src="https://res.cloudinary.com/dfgtpljtq/video/upload/v1768494025/gallery_herp_c0s2bd.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/img2.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 5,
            opacity: 0.7, // Lower opacity to let video show through when it loads
          }}
        ></div>
      </div>

      {/* img6.png overlay from right edge - Mobile responsive */}
      <div className="absolute inset-y-0 right-0 z-[20] flex items-center hidden sm:block" style={{ transform: 'translateY(7%) translateX(3%) rotate(7deg)' }}>
        <div className="relative h-full" style={{ width: '38vw' }}>
          <Image
            src="/images/img6.png"
            alt="Decorative overlay"
            fill
            className="object-contain object-right"
          />
        </div>
      </div>

      {/* Large glassmorphism panel - Mobile responsive */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className={`backdrop-blur-xl bg-green-800/30 rounded-[30px] sm:rounded-[40px] md:rounded-[60px] p-6 sm:p-8 md:p-12 lg:p-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
          }}
        >
          {/* Layout with content on left and image on right */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left side - Main content */}
            <div className="flex-1 w-full max-w-3xl">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-lg mb-3 sm:mb-4 leading-tight transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Shree Durvankur Greens
            </h1>

            <h2
              className={`text-xl sm:text-2xl md:text-3xl text-white/90 drop-shadow-md mb-4 sm:mb-6 transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Nursery | Wholesale & Retail
            </h2>

            <p
              className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 drop-shadow-md mb-6 sm:mb-8 italic transition-all duration-700 delay-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              "प्रत्येक रोपट्यात एक नवं स्वप्न…"<br />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-md">Every plant carries a new beginning.</span>
            </p>

            <p
              className={`text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-6 sm:mb-8 md:mb-10 transition-all duration-700 delay-700 drop-shadow-md ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Shree Durvankur Greens is a dedicated plant nursery offering a wide variety of plants and gardening essentials. We provide all types of plants for homes, gardens, farms, and landscapes, available in both wholesale and retail. From fruit and flower plants to medicinal and vastu plants, we focus on nurturing healthy greenery that brings freshness, balance, and natural beauty to every space.
            </p>

            <div
              className={`transition-all duration-700 delay-800 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                href="/plants/indoor"
                className="inline-block bg-green-700/50 text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium hover:bg-green-600/60 transition-all backdrop-blur-sm border border-white/20"
              >
                Explore Our Plants
              </Link>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
