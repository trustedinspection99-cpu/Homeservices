import HeroSection from '@/components/HeroSection';
import SearchBar from '@/components/SearchBar';
import ServiceCard from '@/components/ServiceCard';
import FAQSection from '@/components/FAQSection';
import { getAllServices, serviceCategories } from '@/lib/services';
import Link from 'next/link';

export default function HomePage() {
  const services = getAllServices();
  const featuredServices = services.slice(0, 12);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Home Services Pro',
    description: 'Professional home services at affordable prices across Canada',
    url: 'https://homeservicespro.ca',
    telephone: '+1-800-HOME-PRO',
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Canada'
    },
    serviceType: serviceCategories,
  };

  const generalFAQs = [
    {
      question: 'What areas do you serve?',
      answer: 'We provide services across all major Canadian cities including Toronto, Vancouver, Montreal, Calgary, Edmonton, Ottawa, and more.'
    },
    {
      question: 'How do I book a service?',
      answer: 'You can book any service through our website by clicking the "Book Now" button on the service page and filling out the booking form. We\'ll contact you within 24 hours to confirm your appointment.'
    },
    {
      question: 'Are your prices really lower than competitors?',
      answer: 'Yes! We offer the same quality professional services at prices 20-30% lower than major competitors like Jiffy on Demand. Check our service pages for detailed pricing.'
    },
    {
      question: 'Are your service providers insured?',
      answer: 'Yes, all our service professionals are fully insured and background-checked for your safety and peace of mind.'
    },
    {
      question: 'What if I need to cancel or reschedule?',
      answer: 'You can cancel or reschedule up to 24 hours before your appointment without any fees. Contact us as soon as possible if your plans change.'
    },
    {
      question: 'Do you offer same-day service?',
      answer: 'Same-day service is available for select services based on technician availability. Contact us to check availability in your area.'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <HeroSection />
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Professional Home Services at Unbeatable Prices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the same quality services as major competitors but at 20-30% lower prices. 
              All our professionals are verified, insured, and ready to help.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Browse by Category</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {serviceCategories.map(category => (
                <Link
                  key={category}
                  href={`/services#${category.toLowerCase()}`}
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-8 text-center">Featured Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredServices.map(service => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-secondary text-white rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Why Choose Home Services Pro?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">Lower Prices</h3>
                <p>Save 20-30% compared to major competitors without compromising quality</p>
              </div>
              <div>
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-xl font-bold mb-2">Verified Pros</h3>
                <p>All service providers are background-checked, insured, and highly rated</p>
              </div>
              <div>
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Fast Booking</h3>
                <p>Easy online booking with flexible scheduling and same-day options</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={generalFAQs} title="Frequently Asked Questions" />
    </>
  );
}
