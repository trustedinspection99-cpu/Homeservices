import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional Home Services at Unbeatable Prices
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Same quality service as Jiffy on Demand, but 20-30% cheaper. 
            Verified professionals ready to help with all your home needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition"
            >
              Browse Services
            </Link>
            <Link
              href="/book"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-primary transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
