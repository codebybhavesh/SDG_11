'use client';

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offsetTop = element.offsetTop - 80; // Account for fixed navbar height
    
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};