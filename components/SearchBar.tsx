import { useState, useEffect } from 'react';
import { getAllServices } from '@/lib/services';
import Link from 'next/link';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ReturnType<typeof getAllServices>>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setShowResults(false);
      return;
    }

    const allServices = getAllServices();
    const filtered = allServices.filter(service => 
      service.name.toLowerCase().includes(query.toLowerCase()) ||
      service.description.toLowerCase().includes(query.toLowerCase()) ||
      service.category.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered.slice(0, 8));
    setShowResults(true);
  }, [query]);

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for services (e.g., cleaning, TV mounting, lawn care)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setShowResults(true)}
          className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
        />
        <svg
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {showResults && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-xl max-h-96 overflow-y-auto">
          {results.map(service => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              onClick={() => setShowResults(false)}
              className="block px-6 py-4 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-lg">{service.name}</div>
                  <div className="text-sm text-gray-500">{service.category}</div>
                </div>
                <div className="text-primary font-bold">${service.price}</div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {showResults && query.length >= 2 && results.length === 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-xl px-6 py-4">
          <p className="text-gray-500">No services found. Try a different search term.</p>
        </div>
      )}
    </div>
  );
}
