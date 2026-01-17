// Constants for plant e-commerce UI

// UI Configuration
export const UI_CONFIG = {
  // Animation durations
  TRANSITION_DURATION: 300, // ms
  HOVER_SCALE: 1.05,
  
  // Spacing values (Tailwind classes)
  SECTION_PADDING: 'py-16 px-4 sm:px-6 lg:px-8',
  CARD_SPACING: 'gap-8',
  
  // Breakpoints
  MOBILE_BREAKPOINT: 768,
  TABLET_BREAKPOINT: 1024,
  
  // Colors (matching your green theme)
  PRIMARY_GREEN: 'green-600',
  SECONDARY_GREEN: 'green-100',
  ACCENT_GREEN: 'emerald-500'
} as const;

// Stat badge configuration
export const STAT_BADGES = {
  atmosphere: {
    icon: '☀️',
    label: 'Light',
    color: 'bg-yellow-100 text-yellow-800'
  },
  humidity: {
    icon: '💧',
    label: 'Humidity',
    color: 'bg-blue-100 text-blue-800'
  },
  waterLevel: {
    icon: '🚰',
    label: 'Water',
    color: 'bg-cyan-100 text-cyan-800'
  },
  size: {
    icon: '📏',
    label: 'Size',
    color: 'bg-purple-100 text-purple-800'
  }
} as const;

// Size mapping for display
export const SIZE_DISPLAY: Record<'Small' | 'Medium' | 'Large', string> = {
  Small: 'S',
  Medium: 'M',
  Large: 'L'
};

// Currency formatter
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0
  }).format(price);
};

// Humidity level indicators
export const HUMIDITY_LEVELS = {
  LOW: { min: 0, max: 30, label: 'Low', color: 'text-red-500' },
  MODERATE: { min: 31, max: 60, label: 'Moderate', color: 'text-yellow-500' },
  HIGH: { min: 61, max: 100, label: 'High', color: 'text-green-500' }
};

export const getHumidityLevel = (humidity: number) => {
  if (humidity <= 30) return HUMIDITY_LEVELS.LOW;
  if (humidity <= 60) return HUMIDITY_LEVELS.MODERATE;
  return HUMIDITY_LEVELS.HIGH;
};