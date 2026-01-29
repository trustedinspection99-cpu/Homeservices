import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Home Services Pro</h3>
            <p className="text-gray-400 mb-4">
              Professional home services at affordable prices across Canada.
            </p>
            <div className="space-y-2">
              <a href={`tel:${siteConfig.phoneRaw}`} className="block text-gray-400 hover:text-white">
                📞 {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="block text-gray-400 hover:text-white">
                ✉️ {siteConfig.email}
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Popular Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/deep-cleaning" className="text-gray-400 hover:text-white">Deep Cleaning</Link></li>
              <li><Link href="/services/tv-mounting" className="text-gray-400 hover:text-white">TV Mounting</Link></li>
              <li><Link href="/services/furniture-assembly" className="text-gray-400 hover:text-white">Furniture Assembly</Link></li>
              <li><Link href="/services/lawn-mowing" className="text-gray-400 hover:text-white">Lawn Mowing</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">View All →</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Cities We Serve</h4>
            <ul className="space-y-2">
              <li><Link href="/locations/toronto" className="text-gray-400 hover:text-white">Toronto</Link></li>
              <li><Link href="/locations/vancouver" className="text-gray-400 hover:text-white">Vancouver</Link></li>
              <li><Link href="/locations/montreal" className="text-gray-400 hover:text-white">Montreal</Link></li>
              <li><Link href="/locations/calgary" className="text-gray-400 hover:text-white">Calgary</Link></li>
              <li><Link href="/locations/edmonton" className="text-gray-400 hover:text-white">Edmonton</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white">All Services</Link></li>
              <li><Link href="/book" className="text-gray-400 hover:text-white">Book Now</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="mb-2">&copy; {currentYear} Home Services Pro. All rights reserved.</p>
          <p className="text-sm">
            * Pricing claims based on competitive analysis as of January 2026. Actual savings may vary. 
            All services subject to availability and terms.
          </p>
        </div>
      </div>
    </footer>
  );
}
