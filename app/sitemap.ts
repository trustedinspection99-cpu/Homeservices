import { MetadataRoute } from 'next';
import { getAllServices } from '@/lib/services';
import { getAllCities } from '@/lib/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://homeservicespro.ca';
  const services = getAllServices();
  const cities = getAllCities();

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/book`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  const servicePages = services.map(service => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const cityPages = cities.map(city => ({
    url: `${baseUrl}/locations/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Only include major location-service combinations
  const locationServicePages: MetadataRoute.Sitemap = [];
  const majorServices = ['deep-cleaning', 'tv-mounting', 'furniture-assembly', 'lawn-mowing', 'ac-tuneup', 'junk-removal'];
  
  cities.forEach(city => {
    majorServices.forEach(serviceSlug => {
      locationServicePages.push({
        url: `${baseUrl}/locations/${city.slug}/${serviceSlug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      });
    });
  });

  return [...staticPages, ...servicePages, ...cityPages, ...locationServicePages];
}
