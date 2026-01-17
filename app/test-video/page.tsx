import React from 'react';

const TestVideoPage = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center text-white">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/plants.jpg"
          className="w-full h-full object-cover"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        >
          <source
            src="/videos/plants.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Video Test
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          This page tests if the video is working properly
        </p>
      </div>
    </div>
  );
};

export default TestVideoPage;