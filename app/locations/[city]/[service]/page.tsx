import { getAllCities, getCityBySlug } from '@/lib/locations';
import { getAllServices, getServiceBySlug, generateLocationServicePaths } from '@/lib/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import BookingForm from '@/components/BookingForm';
import FAQSection from '@/components/FAQSection';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return generateLocationServicePaths();
}

export async function generateMetadata({ params }: { params: { city: string; service: string } }): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  const service = getServiceBySlug(params.service);
  
  if (!city || !service) {
    return { title: 'Not Found' };
  }

  return {
    title: `${service.name} in ${city.city}, ${city.province} - From $${service.price}`,
    description: `Professional ${service.name.toLowerCase()} service in ${city.city}, ${city.province}. ${service.description} Book verified professionals starting at just $${service.price}.`,
  };
}

export default function LocationServicePage({ params }: { params: { city: string; service: string } }) {
  const city = getCityBySlug(params.city);
  const service = getServiceBySlug(params.service);
  
  if (!city || !service) {
    notFound();
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} in ${city.city}`,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Home Services Pro',
    },
    areaServed: {
      '@type': 'City',
      name: city.city,
      containedIn: {
        '@type': 'State',
        name: city.province,
      },
    },
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'CAD',
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
            <div className="max-w-4xl mx-auto">
              <nav className="text-sm mb-4 opacity-90">
                <Link href="/" className="hover:underline">Home</Link>
                {' > '}
                <Link href={`/locations/${city.slug}`} className="hover:underline">{city.city}</Link>
                {' > '}
                <span>{service.name}</span>
              </nav>
              <h1 className="text-5xl font-bold mb-4">
                {service.name} in {city.city}, {city.province}
              </h1>
              <p className="text-2xl mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="bg-white text-primary px-6 py-3 rounded-lg">
                  <span className="text-sm font-semibold">Starting at</span>
                  <div className="text-3xl font-bold">${service.price}</div>
                </div>
                <div className="text-lg">
                  <span className="opacity-90">Duration:</span> <strong>{service.duration}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">
                      Professional {service.name} in {city.city}
                    </h2>
                    <div className="prose max-w-none">
                      <p className="text-lg mb-4">
                        Looking for reliable {service.name.toLowerCase()} in {city.city}, {city.province}? 
                        Home Services Pro connects you with verified professionals who deliver quality service at prices 
                        20-30% lower than major competitors.
                      </p>
                      <p className="text-lg mb-4">
                        Our {city.city} service providers are background-checked, insured, and committed to 
                        exceeding your expectations. Whether you need {service.name.toLowerCase()} for your home or business,
                        we have the right professional for the job.
                      </p>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">What's Included</h2>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-lg">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-12 bg-blue-50 rounded-lg p-8">
                    <h2 className="text-3xl font-bold mb-6">Serving {city.city} Residents</h2>
                    <p className="text-lg mb-4">
                      Our local professionals in {city.city} understand the unique needs of {city.province} residents. 
                      We're familiar with local building codes, weather conditions, and community standards.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h3 className="font-bold text-xl mb-2">Fast Response Times</h3>
                        <p className="text-gray-700">
                          Same-day and next-day appointments available throughout {city.city}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2">Local Expertise</h3>
                        <p className="text-gray-700">
                          Professionals who know {city.city} and serve your neighborhood
                        </p>
                      </div>
                    </div>
                  </div>

                  <FAQSection 
                    faqs={service.faqs} 
                    title={`${service.name} FAQ for ${city.city}`} 
                  />
                </div>

                <div className="lg:col-span-1">
                  <div className="sticky top-4">
                    <div className="bg-white border-2 border-primary rounded-lg p-6 shadow-lg">
                      <h3 className="text-2xl font-bold mb-4 text-center">
                        Book in {city.city}
                      </h3>
                      <BookingForm 
                        serviceName={`${service.name} - ${city.city}`}
                        defaultCity={city.city}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
