import { getAllCities, getCityBySlug } from '@/lib/locations';
import { getAllServices, serviceCategories } from '@/lib/services';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const cities = getAllCities();
  return cities.map(city => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  
  if (!city) {
    return { title: 'City Not Found' };
  }

  return {
    title: `Home Services in ${city.city}, ${city.province}`,
    description: `Professional home services in ${city.city}, ${city.province}. Cleaning, repairs, installation, outdoor maintenance, and more at prices 20-30% lower than competitors. Book verified professionals today.`,
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = getCityBySlug(params.city);
  const services = getAllServices();
  
  if (!city) {
    notFound();
  }

  const featuredServices = services.slice(0, 12);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Home Services Pro - ${city.city}`,
    description: `Professional home services in ${city.city}, ${city.province}`,
    areaServed: {
      '@type': 'City',
      name: city.city,
      containedIn: {
        '@type': 'State',
        name: city.province,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="min-h-screen">
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-4">
                Home Services in {city.city}, {city.province}
              </h1>
              <p className="text-xl">
                Trusted professionals serving {city.city} with affordable rates and guaranteed satisfaction
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-blue-50 rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Choose Us in {city.city}?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-bold text-xl mb-2">Local Professionals</h3>
                    <p className="text-gray-700">Verified service providers who know {city.city} and serve your neighborhood</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Best Prices</h3>
                    <p className="text-gray-700">Save 20-30% compared to major competitors while getting the same quality service</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Fast Response</h3>
                    <p className="text-gray-700">Same-day and next-day appointments available for most services in {city.city}</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Popular Services in {city.city}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredServices.map(service => (
                    <ServiceCard 
                      key={service.slug} 
                      service={service}
                      cityContext={city.city}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Browse by Category</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {serviceCategories.map(category => (
                    <Link
                      key={category}
                      href="/services"
                      className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-primary hover:shadow-lg transition"
                    >
                      <h3 className="font-bold text-xl">{category}</h3>
                      <p className="text-sm text-gray-600 mt-2">
                        {services.filter(s => s.category === category).length} services
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Book a Service in {city.city}?</h2>
                <p className="text-xl mb-6">Get started with our easy online booking system</p>
                <Link
                  href="/services"
                  className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
