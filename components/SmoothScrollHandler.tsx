'use client';

import { useEffect } from 'react';
import { scrollToSection } from '@/lib/smooth-scroll';

export default function SmoothScrollHandler() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if clicked element or its parent is an anchor link with hash
      let linkElement: HTMLAnchorElement | null = null;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        linkElement = target as HTMLAnchorElement;
      } else {
        linkElement = target.closest('a[href^="#"]');
      }

      if (linkElement) {
        e.preventDefault();
        const href = linkElement.getAttribute('href');
        if (href) {
          const id = href.substring(1); // Remove the '#' character
          scrollToSection(id);
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null; // This component doesn't render anything
}