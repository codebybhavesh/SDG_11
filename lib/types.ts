// Plant data structure for e-commerce landing page
export interface Plant {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  atmosphere: string;
  humidity: number;  // percentage (0-100)
  waterLevel: number; // ml
  size: 'Small' | 'Medium' | 'Large';
}

// Utility type for plant statistics display
export type PlantStats = Pick<Plant, 'atmosphere' | 'humidity' | 'waterLevel' | 'size'>;

// Plant data array - single source of truth
export const plantsData: Plant[] = [
  {
    id: 'areca-palm',
    name: 'Areca Palm',
    price: 499,
    description: 'Air-purifying palm that adds tropical vibes to any space.',
    image: '/images/Areca_Palm_Plant.png',
    atmosphere: 'Bright Indirect',
    humidity: 60,
    waterLevel: 300,
    size: 'Medium'
  },
  {
    id: 'chamendora',
    name: 'Chamendora',
    price: 349,
    description: 'Beautiful ornamental plant with attractive foliage.',
    image: '/images/Chamendora.png',
    atmosphere: 'Moderate Light',
    humidity: 50,
    waterLevel: 250,
    size: 'Small'
  },
  {
    id: 'cinnamon',
    name: 'Cinnamon Plant',
    price: 599,
    description: 'Aromatic plant with cinnamon-scented leaves.',
    image: '/images/Cinnamon.png',
    atmosphere: 'Bright Light',
    humidity: 55,
    waterLevel: 350,
    size: 'Medium'
  },
  {
    id: 'coriander',
    name: 'Coriander',
    price: 149,
    description: 'Herbaceous plant with culinary uses and fresh aroma.',
    image: '/images/coriander.png',
    atmosphere: 'Full Sun',
    humidity: 45,
    waterLevel: 200,
    size: 'Small'
  },
  {
    id: 'asafoetida',
    name: 'Asafoetida',
    price: 399,
    description: 'Aromatic spice plant with culinary and medicinal uses.',
    image: '/images/asafoetida.png',
    atmosphere: 'Bright Light',
    humidity: 40,
    waterLevel: 150,
    size: 'Small'
  },
  {
    id: 'black-pepper',
    name: 'Black Pepper',
    price: 349,
    description: 'Climbing vine plant producing peppercorns.',
    image: '/images/Black_Pepper.png',
    atmosphere: 'Bright Indirect',
    humidity: 60,
    waterLevel: 250,
    size: 'Medium'
  },
  {
    id: 'clove',
    name: 'Clove',
    price: 449,
    description: 'Aromatic flower buds with strong fragrance.',
    image: '/images/clove.png',
    atmosphere: 'Bright Light',
    humidity: 50,
    waterLevel: 200,
    size: 'Small'
  },
  {
    id: 'ficus-lyrata',
    name: 'Ficus Lyrata',
    price: 699,
    description: 'Large-leafed fig plant, also known as fiddle leaf fig.',
    image: '/images/Ficus_Lyrata.png',
    atmosphere: 'Bright Indirect',
    humidity: 55,
    waterLevel: 350,
    size: 'Large'
  },
  {
    id: 'gk-money-plant',
    name: 'GK Money Plant',
    price: 299,
    description: 'Lucky money plant with round leaves.',
    image: '/images/GK_Money_Plant.png',
    atmosphere: 'Moderate Light',
    humidity: 45,
    waterLevel: 150,
    size: 'Small'
  },
  {
    id: 'golden-money-plant',
    name: 'Golden Money Plant',
    price: 329,
    description: 'Variegated money plant with golden accents.',
    image: '/images/Golden_Money_Plant.png',
    atmosphere: 'Moderate Light',
    humidity: 45,
    waterLevel: 150,
    size: 'Small'
  },
  {
    id: 'money-plant',
    name: 'Money Plant',
    price: 249,
    description: 'Traditional money plant, symbol of prosperity.',
    image: '/images/zz_plant.jpg',
    atmosphere: 'Moderate Light',
    humidity: 40,
    waterLevel: 150,
    size: 'Small'
  },

  {
    id: 'aloe-vera',
    name: 'Aloe Vera',
    price: 199,
    description: 'Medicinal succulent with healing properties. Requires bright light and minimal watering.',
    image: '/images/aloe_vera.jpg',
    atmosphere: 'Bright Direct',
    humidity: 30,
    waterLevel: 100,
    size: 'Small'
  }
];

// Helper function to get plant by ID
export const getPlantById = (id: string): Plant | undefined => {
  return plantsData.find(plant => plant.id === id);
};

// Outdoor plants data array
export const outdoorPlantsData: Plant[] = [
  {
    id: 'apple',
    name: 'Apple',
    price: 399,
    description: 'Fresh and delicious apples from our orchard.',
    image: '/images/apple.png',
    atmosphere: 'Full Sun',
    humidity: 60,
    waterLevel: 300,
    size: 'Medium'
  },
  {
    id: 'black-jamun',
    name: 'Black Jamun',
    price: 349,
    description: 'Antioxidant-rich berries with a unique taste.',
    image: '/images/BlackJamun.png',
    atmosphere: 'Full Sun',
    humidity: 45,
    waterLevel: 250,
    size: 'Medium'
  },
  {
    id: 'chickoo',
    name: 'Chickoo',
    price: 599,
    description: 'Sweet and nutritious fruit with a creamy texture.',
    image: '/images/Chickoo.png',
    atmosphere: 'Full Sun',
    humidity: 55,
    waterLevel: 350,
    size: 'Medium'
  },
  {
    id: 'papaya',
    name: 'Papaya',
    price: 499,
    description: 'Tropical fruit rich in vitamins and enzymes.',
    image: '/images/papaya.png',
    atmosphere: 'Full Sun',
    humidity: 50,
    waterLevel: 300,
    size: 'Large'
  },
  {
    id: 'fanas',
    name: 'Fanas',
    price: 349,
    description: 'Delicious jackfruit with sweet, aromatic flesh.',
    image: '/images/fanas.png',
    atmosphere: 'Full Sun',
    humidity: 60,
    waterLevel: 350,
    size: 'Large'
  },
  {
    id: 'kokam',
    name: 'Kokam',
    price: 299,
    description: 'Tangy fruit used for refreshing drinks and culinary purposes.',
    image: '/images/kokam.png',
    atmosphere: 'Full Sun',
    humidity: 55,
    waterLevel: 300,
    size: 'Small'
  },
  {
    id: 'lemon',
    name: 'Lemon',
    price: 199,
    description: 'Citrus fruit rich in vitamin C with versatile uses.',
    image: '/images/lemon.png',
    atmosphere: 'Full Sun',
    humidity: 45,
    waterLevel: 200,
    size: 'Small'
  },
  {
    id: 'mango-alphonso',
    name: 'Mango Alphonso',
    price: 599,
    description: 'Premium variety of mango known as the king of mangoes.',
    image: '/images/Mango_Alphonso.png',
    atmosphere: 'Full Sun',
    humidity: 65,
    waterLevel: 400,
    size: 'Medium'
  },
  {
    id: 'mango-dasheri',
    name: 'Mango Dasheri',
    price: 549,
    description: 'Popular mango variety with sweet and fiberless pulp.',
    image: '/images/Mango_Dasheri.png',
    atmosphere: 'Full Sun',
    humidity: 60,
    waterLevel: 350,
    size: 'Medium'
  },
  {
    id: 'mango-kesar',
    name: 'Mango Kesar',
    price: 579,
    description: 'Distinctive saffron-colored mango with rich flavor.',
    image: '/images/mango_kesar.png',
    atmosphere: 'Full Sun',
    humidity: 60,
    waterLevel: 375,
    size: 'Medium'
  }
];

// Helper function to get all plant IDs
export const getPlantIds = (): string[] => {
  return plantsData.map(plant => plant.id);
};

// Helper function to get outdoor plant by ID
export const getOutdoorPlantById = (id: string): Plant | undefined => {
  return outdoorPlantsData.find(plant => plant.id === id);
};

// Helper function to get all outdoor plant IDs
export const getOutdoorPlantIds = (): string[] => {
  return outdoorPlantsData.map(plant => plant.id);
};
