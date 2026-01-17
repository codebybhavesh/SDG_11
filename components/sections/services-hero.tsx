"use client";

import { useEffect, useRef } from 'react';

export default function ServicesHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <div className="relative w-full min-h-[70vh] flex items-center justify-center text-white overflow-hidden">
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
            height: '70vh',
            objectFit: 'cover',
            zIndex: 10,
          }}
          aria-label="Background video showing plants and gardening"
          tabIndex={-1}
        >
          <source
            src="https://res.cloudinary.com/dfgtpljtq/video/upload/v1768488681/plants_bidmer.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/plants.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 5,
            opacity: 0.7, // Lower opacity to let video show through when it loads
          }}
        ></div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Our Services
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in delay-100">
          Discover our wide range of professional gardening and nursery services tailored to your needs
        </p>
        <div className="animate-fade-in delay-200">
          <button className="bg-white text-green-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Explore Services
          </button>
        </div>
      </div>
    </div>
  );
}