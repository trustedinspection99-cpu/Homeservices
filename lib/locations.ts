export interface Location {
  city: string;
  slug: string;
  province: string;
  population: number;
}

export const canadianCities: Location[] = [
  { city: 'Toronto', slug: 'toronto', province: 'Ontario', population: 2930000 },
  { city: 'Montreal', slug: 'montreal', province: 'Quebec', population: 1780000 },
  { city: 'Vancouver', slug: 'vancouver', province: 'British Columbia', population: 675000 },
  { city: 'Calgary', slug: 'calgary', province: 'Alberta', population: 1306000 },
  { city: 'Edmonton', slug: 'edmonton', province: 'Alberta', population: 981000 },
  { city: 'Ottawa', slug: 'ottawa', province: 'Ontario', population: 994000 },
  { city: 'Mississauga', slug: 'mississauga', province: 'Ontario', population: 721000 },
  { city: 'Winnipeg', slug: 'winnipeg', province: 'Manitoba', population: 749000 },
  { city: 'Quebec City', slug: 'quebec-city', province: 'Quebec', population: 542000 },
  { city: 'Hamilton', slug: 'hamilton', province: 'Ontario', population: 569000 },
  { city: 'Brampton', slug: 'brampton', province: 'Ontario', population: 656000 },
  { city: 'Surrey', slug: 'surrey', province: 'British Columbia', population: 568000 },
  { city: 'Kitchener', slug: 'kitchener', province: 'Ontario', population: 256000 },
  { city: 'Halifax', slug: 'halifax', province: 'Nova Scotia', population: 439000 },
  { city: 'London', slug: 'london', province: 'Ontario', population: 422000 },
  { city: 'Victoria', slug: 'victoria', province: 'British Columbia', population: 367000 },
  { city: 'Markham', slug: 'markham', province: 'Ontario', population: 338000 },
  { city: 'St. Catharines', slug: 'st-catharines', province: 'Ontario', population: 136000 },
  { city: 'Niagara Falls', slug: 'niagara-falls', province: 'Ontario', population: 94000 },
  { city: 'Vaughan', slug: 'vaughan', province: 'Ontario', population: 323000 },
  { city: 'Gatineau', slug: 'gatineau', province: 'Quebec', population: 285000 },
  { city: 'Windsor', slug: 'windsor', province: 'Ontario', population: 229000 },
  { city: 'Saskatoon', slug: 'saskatoon', province: 'Saskatchewan', population: 266000 },
  { city: 'Regina', slug: 'regina', province: 'Saskatchewan', population: 226000 },
  { city: 'Richmond', slug: 'richmond', province: 'British Columbia', population: 209000 },
  { city: 'Burnaby', slug: 'burnaby', province: 'British Columbia', population: 232000 },
  { city: 'Laval', slug: 'laval', province: 'Quebec', population: 438000 },
];

export function getAllCities(): Location[] {
  return canadianCities;
}

export function getCityBySlug(slug: string): Location | undefined {
  return canadianCities.find(c => c.slug === slug);
}

export function generateLocationPaths() {
  const paths: { city: string; service?: string }[] = [];
  
  canadianCities.forEach(city => {
    paths.push({ city: city.slug });
  });
  
  return paths;
}

export function generateLocationServicePaths() {
  const paths: { city: string; service: string }[] = [];
  
  canadianCities.forEach(city => {
    // Generate paths for major services only to keep build reasonable
    const majorServices = ['deep-cleaning', 'tv-mounting', 'furniture-assembly', 'lawn-mowing', 'ac-tuneup', 'junk-removal'];
    majorServices.forEach(serviceSlug => {
      paths.push({ 
        city: city.slug,
        service: serviceSlug
      });
    });
  });
  
  return paths;
}
