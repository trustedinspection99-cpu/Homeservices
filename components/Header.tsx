import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            Home Services Pro
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/services" className="text-gray-700 hover:text-primary font-medium">
              Services
            </Link>
            <Link href="/#faq" className="text-gray-700 hover:text-primary font-medium">
              FAQ
            </Link>
            <Link
              href="/book"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold"
            >
              Book Now
            </Link>
          </div>
          <div className="md:hidden">
            <Link
              href="/book"
              className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
