interface CardProps {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export function Card({ title, description, icon }: CardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-green-200 group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}