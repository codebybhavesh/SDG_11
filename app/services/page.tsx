import { Scissors, Sprout, Shovel, Bug } from "lucide-react";
import ServicesHero from "@/components/sections/services-hero";

const services = [
  {
    id: 1,
    icon: Scissors,
    name: "Garden Maintenance",
    price: "₹1,999/month",
    description: "Regular pruning, weeding, and general garden upkeep",
    features: ["Weekly visits", "Pruning & trimming", "Weed removal", "Basic lawn care"],
  },
  {
    id: 2,
    icon: Sprout,
    name: "Lawn Care Service",
    price: "₹2,499/month",
    description: "Complete lawn maintenance and fertilization program",
    features: ["Mowing & edging", "Fertilization", "Aeration", "Seasonal treatments"],
  },
  {
    id: 3,
    icon: Shovel,
    name: "Landscape Design",
    price: "Starting at ₹5,999",
    description: "Custom garden design and installation services",
    features: ["Site consultation", "Design planning", "Plant selection", "Installation"],
  },
  {
    id: 4,
    icon: Bug,
    name: "Pest Control",
    price: "₹999/visit",
    description: "Organic pest management for healthy plants",
    features: ["Plant inspection", "Organic treatments", "Prevention tips", "Follow-up care"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServicesHero />

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-green-600 font-semibold text-xl mb-3">
                      {service.price}
                    </p>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors w-full md:w-auto">
                      Book Service
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
