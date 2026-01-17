"use client";

import { useEffect, useRef, useState } from "react";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
}

interface StackingCardsProps {
  cards: Card[];
}

export function StackingCards({ cards }: StackingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardStates, setCardStates] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the container has scrolled into view
      const scrollProgress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + rect.height)
      ));

      // Update each card's state based on scroll progress
      const newStates = cards.map((_, index) => {
        const cardStart = index / cards.length;
        const cardEnd = (index + 1) / cards.length;
        const cardProgress = (scrollProgress - cardStart) / (cardEnd - cardStart);
        return Math.max(0, Math.min(1, cardProgress));
      });

      setCardStates(newStates);
    };

    handleScroll(); // Initial calculation
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [cards.length]);

  return (
    <div ref={containerRef} className="relative">
      {/* Spacer to allow scrolling - reduced height */}
      <div style={{ height: `${cards.length * 40}vh` }} />

      {/* Stacked cards container */}
      <div className="sticky top-32 flex items-center justify-center px-4">
        <div className="relative w-full max-w-2xl h-[400px]">
          {cards.map((card, index) => {
            const progress = cardStates[index] || 0;
            const scale = 1 - (cards.length - 1 - index) * 0.08 + progress * 0.08;
            const yOffset = (cards.length - 1 - index) * 30 - progress * 30;
            const opacity = 0.3 + progress * 0.7;

            return (
              <div
                key={card.id}
                className="absolute inset-0 transition-all duration-500 ease-out"
                style={{
                  transform: `translateY(${yOffset}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: index,
                }}
              >
                <a
                  href={card.href}
                  className="block bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow"
                >
                  <div className="relative h-[400px]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-3xl font-bold mb-2">{card.title}</h3>
                      <p className="text-lg text-gray-200">{card.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
