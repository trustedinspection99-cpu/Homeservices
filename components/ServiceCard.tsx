import Link from 'next/link';
import { Service } from '@/lib/services';

interface ServiceCardProps {
  service: Service;
  cityContext?: string;
}

export default function ServiceCard({ service, cityContext }: ServiceCardProps) {
  const href = cityContext 
    ? `/locations/${cityContext.toLowerCase().replace(/\s+/g, '-')}/${service.slug}`
    : `/services/${service.slug}`;

  return (
    <Link href={href} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 h-full flex flex-col">
        <div className="flex-grow">
          <div className="text-4xl mb-3">{service.icon}</div>
          <div className="text-sm text-gray-500 mb-2">{service.category}</div>
          <h3 className="text-xl font-bold mb-3">{service.name}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
        </div>
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-gray-500">Starting at</span>
              <div className="text-2xl font-bold text-primary">${service.price}</div>
            </div>
            <div className="text-sm text-gray-500">{service.duration}</div>
          </div>
          <button className="w-full mt-4 bg-primary text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}
