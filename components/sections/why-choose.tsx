import { Leaf, Heart, Wrench, Shield } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Healthy Plants",
    description:
      "We provide only the healthiest, disease-free plants sourced from trusted growers.",
  },
  {
    icon: Heart,
    title: "Expert Care Guidance",
    description:
      "Get personalized advice from our experienced horticulturists to keep your plants thriving.",
  },
  {
    icon: Wrench,
    title: "Quality Tools",
    description:
      "Premium gardening equipment and supplies to make your gardening journey easier.",
  },
  {
    icon: Shield,
    title: "Local Nursery Trust",
    description:
      "Family-owned business serving the community with passion and dedication for years.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Nursery?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to providing the best plants, services, and
            expertise to help you create beautiful green spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
