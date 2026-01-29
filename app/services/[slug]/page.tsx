import { getAllServices, getServiceBySlug, generateServicePaths } from '@/lib/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import BookingForm from '@/components/BookingForm';
import FAQSection from '@/components/FAQSection';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return generateServicePaths();
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.name} - Starting at $${service.price}`,
    description: `${service.description} Book professional ${service.name.toLowerCase()} service starting at just $${service.price}. Lower prices than competitors with verified professionals.`,
    openGraph: {
      title: `${service.name} - $${service.price}`,
      description: service.description,
      type: 'website',
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  const allServices = getAllServices();
  
  if (!service) {
    notFound();
  }

  const relatedServices = allServices
    .filter(s => s.category === service.category && s.slug !== service.slug)
    .slice(0, 4);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Home Services Pro',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Canada'
    },
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'CAD',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen">
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <nav className="text-sm mb-4 opacity-90">
                <Link href="/" className="hover:underline">Home</Link>
                {' > '}
                <Link href="/services" className="hover:underline">Services</Link>
                {' > '}
                <span>{service.name}</span>
              </nav>
              <h1 className="text-5xl font-bold mb-4">{service.name}</h1>
              <p className="text-2xl mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="bg-white text-primary px-6 py-3 rounded-lg">
                  <span className="text-sm font-semibold">Starting at</span>
                  <div className="text-3xl font-bold">${service.price}</div>
                </div>
                <div className="text-lg">
                  <span className="opacity-90">Duration:</span> <strong>{service.duration}</strong>
                </div>
                <div className="text-lg">
                  <span className="opacity-90">Category:</span> <strong>{service.category}</strong>
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

                  <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="font-bold text-xl mb-2">Lower Prices</h3>
                        <p className="text-gray-700">Save 20-30% compared to Jiffy and other competitors without sacrificing quality or service.</p>
                      </div>
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="font-bold text-xl mb-2">Verified Professionals</h3>
                        <p className="text-gray-700">All service providers are background-checked, insured, and highly rated by customers.</p>
                      </div>
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="font-bold text-xl mb-2">Flexible Scheduling</h3>
                        <p className="text-gray-700">Book appointments that work with your schedule, including evenings and weekends.</p>
                      </div>
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="font-bold text-xl mb-2">Satisfaction Guarantee</h3>
                        <p className="text-gray-700">We stand behind our work with a 100% satisfaction guarantee on all services.</p>
                      </div>
                    </div>
                  </div>

                  <FAQSection faqs={service.faqs} title={`${service.name} FAQ`} />

                  {relatedServices.length > 0 && (
                    <div className="mt-12">
                      <h2 className="text-3xl font-bold mb-6">Related Services</h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        {relatedServices.map(related => (
                          <Link
                            key={related.slug}
                            href={`/services/${related.slug}`}
                            className="border rounded-lg p-6 hover:shadow-lg transition"
                          >
                            <h3 className="text-xl font-bold mb-2">{related.name}</h3>
                            <p className="text-gray-600 mb-3 line-clamp-2">{related.description}</p>
                            <div className="text-primary font-bold">From ${related.price}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-1">
                  <div className="sticky top-4">
                    <div className="bg-white border-2 border-primary rounded-lg p-6 shadow-lg">
                      <h3 className="text-2xl font-bold mb-4 text-center">Book This Service</h3>
                      <BookingForm serviceName={service.name} />
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
