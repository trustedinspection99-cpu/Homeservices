export interface Service {
  slug: string;
  name: string;
  category: string;
  description: string;
  price: number;
  duration: string;
  features: string[];
  faqs: { question: string; answer: string; }[];
}

export const serviceCategories = [
  'Cleaning',
  'Indoors',
  'Install',
  'Outdoors',
  'Repair',
  'Seasonal',
  'Moving',
  'Assembly',
];

export const services: Service[] = [
  // Cleaning Services
  {
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    category: 'Cleaning',
    description: 'Professional deep cleaning service for your entire home including bathrooms, kitchens, bedrooms, and living areas.',
    price: 149,
    duration: '3-4 hours',
    features: [
      'Complete home sanitization',
      'Kitchen and bathroom deep clean',
      'Baseboard and window cleaning',
      'Eco-friendly cleaning products',
      'Professional cleaning equipment'
    ],
    faqs: [
      { question: 'What is included in deep cleaning?', answer: 'Our deep cleaning service includes thorough cleaning of all rooms, scrubbing bathrooms and kitchens, baseboards, windows, and hard-to-reach areas.' },
      { question: 'How long does deep cleaning take?', answer: 'A typical deep cleaning takes 3-4 hours depending on home size and condition.' },
      { question: 'Do I need to provide cleaning supplies?', answer: 'No, we bring all professional-grade eco-friendly cleaning supplies and equipment.' }
    ]
  },
  {
    slug: 'regular-cleaning',
    name: 'Regular Cleaning',
    category: 'Cleaning',
    description: 'Routine cleaning service to keep your home fresh and tidy on a weekly or bi-weekly basis.',
    price: 99,
    duration: '2-3 hours',
    features: [
      'Dusting and vacuuming',
      'Kitchen cleaning',
      'Bathroom sanitization',
      'Floor mopping',
      'Trash removal'
    ],
    faqs: [
      { question: 'How often should I schedule regular cleaning?', answer: 'Most clients prefer weekly or bi-weekly cleaning schedules for optimal home maintenance.' },
      { question: 'Can I customize the cleaning checklist?', answer: 'Yes, we can customize our cleaning service to focus on your specific needs and preferences.' }
    ]
  },
  {
    slug: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    category: 'Cleaning',
    description: 'Professional carpet steam cleaning and stain removal service using industrial equipment.',
    price: 129,
    duration: '2-3 hours',
    features: [
      'Hot water extraction',
      'Stain treatment',
      'Deodorizing',
      'Fast drying technology',
      'Pet odor removal'
    ],
    faqs: [
      { question: 'Is carpet cleaning safe for pets and children?', answer: 'Yes, we use non-toxic, eco-friendly cleaning solutions that are safe for pets and children.' },
      { question: 'How long until carpets are dry?', answer: 'With our fast-drying technology, carpets are typically dry within 4-6 hours.' }
    ]
  },
  {
    slug: 'window-cleaning',
    name: 'Window Cleaning',
    category: 'Cleaning',
    description: 'Interior and exterior window cleaning for streak-free, crystal clear windows.',
    price: 89,
    duration: '1-2 hours',
    features: [
      'Interior and exterior cleaning',
      'Screen cleaning',
      'Track and sill cleaning',
      'Streak-free finish',
      'Hard water stain removal'
    ],
    faqs: [
      { question: 'Do you clean windows on second floors?', answer: 'Yes, we have the proper equipment and safety training to clean multi-story windows.' },
      { question: 'Do you clean window screens?', answer: 'Yes, screen cleaning is included in our window cleaning service.' }
    ]
  },
  {
    slug: 'move-in-out-cleaning',
    name: 'Move In/Out Cleaning',
    category: 'Cleaning',
    description: 'Comprehensive cleaning service for moving in or out of a property, ensuring it\'s spotless.',
    price: 199,
    duration: '4-5 hours',
    features: [
      'Complete property cleaning',
      'Inside cabinets and closets',
      'Appliance cleaning',
      'Wall spot cleaning',
      'Final inspection ready'
    ],
    faqs: [
      { question: 'When should I schedule move-out cleaning?', answer: 'Schedule after all furniture is removed but before your final walkthrough with the landlord.' },
      { question: 'Will this help me get my deposit back?', answer: 'Our thorough cleaning meets most landlord requirements and increases your chances of full deposit return.' }
    ]
  },

  // Indoors Services
  {
    slug: 'tv-mounting',
    name: 'TV Mounting',
    category: 'Indoors',
    description: 'Professional TV wall mounting service with cable management and level installation.',
    price: 79,
    duration: '1 hour',
    features: [
      'Wall stud finding',
      'Secure mounting',
      'Cable concealment',
      'Level installation',
      'All wall types supported'
    ],
    faqs: [
      { question: 'What size TVs can you mount?', answer: 'We can mount TVs from 32" to 85" on various wall types.' },
      { question: 'Do you provide the mounting bracket?', answer: 'You can provide your own bracket or we can recommend and install one for an additional fee.' },
      { question: 'Can you hide the cables?', answer: 'Yes, cable management and concealment is included in our service.' }
    ]
  },
  {
    slug: 'furniture-assembly',
    name: 'Furniture Assembly',
    category: 'Indoors',
    description: 'Expert assembly service for all types of furniture from IKEA, Wayfair, Amazon, and more.',
    price: 69,
    duration: '1-2 hours',
    features: [
      'All furniture brands',
      'Professional tools',
      'Secure assembly',
      'Cleanup included',
      'Assembly guarantee'
    ],
    faqs: [
      { question: 'What furniture do you assemble?', answer: 'We assemble beds, dressers, desks, bookcases, tables, chairs, and all major furniture items from any retailer.' },
      { question: 'How long does assembly take?', answer: 'Most single furniture pieces take 1-2 hours, larger items may take longer.' }
    ]
  },
  {
    slug: 'picture-hanging',
    name: 'Picture Hanging',
    category: 'Indoors',
    description: 'Professional picture and artwork hanging service with precise leveling and secure mounting.',
    price: 49,
    duration: '30 minutes - 1 hour',
    features: [
      'Precise leveling',
      'Wall protection',
      'Multiple hanging styles',
      'Gallery wall arrangement',
      'Heavy artwork supported'
    ],
    faqs: [
      { question: 'Can you hang heavy mirrors?', answer: 'Yes, we use appropriate hardware for heavy mirrors and artwork up to 100 lbs.' },
      { question: 'Do you arrange gallery walls?', answer: 'Yes, we can help design and hang multi-picture gallery wall arrangements.' }
    ]
  },
  {
    slug: 'shelf-installation',
    name: 'Shelf Installation',
    category: 'Indoors',
    description: 'Custom shelf installation for floating shelves, bookcases, and storage solutions.',
    price: 59,
    duration: '1 hour',
    features: [
      'Floating shelf installation',
      'Level mounting',
      'Stud finding',
      'Multiple shelf support',
      'Weight-rated installation'
    ],
    faqs: [
      { question: 'What weight can the shelves hold?', answer: 'Depending on wall type and hardware, shelves can typically hold 25-50 lbs per linear foot.' },
      { question: 'Can you install floating shelves?', answer: 'Yes, floating shelf installation is one of our most popular services.' }
    ]
  },
  {
    slug: 'smart-home-setup',
    name: 'Smart Home Setup',
    category: 'Indoors',
    description: 'Installation and configuration of smart home devices including thermostats, locks, cameras, and lighting.',
    price: 99,
    duration: '1-2 hours',
    features: [
      'Smart thermostat installation',
      'Smart lock setup',
      'Camera installation',
      'Voice assistant setup',
      'Device synchronization'
    ],
    faqs: [
      { question: 'Which smart home brands do you work with?', answer: 'We work with all major brands including Nest, Ring, Ecobee, August, Philips Hue, and more.' },
      { question: 'Do you configure the apps too?', answer: 'Yes, we handle complete setup including app configuration and device pairing.' }
    ]
  },

  // Install Services
  {
    slug: 'ceiling-fan-installation',
    name: 'Ceiling Fan Installation',
    category: 'Install',
    description: 'Professional ceiling fan installation with electrical connection and balancing.',
    price: 119,
    duration: '1-2 hours',
    features: [
      'Electrical wiring',
      'Fan balancing',
      'Old fan removal',
      'Ceiling box reinforcement',
      'Remote setup included'
    ],
    faqs: [
      { question: 'Do I need an existing electrical box?', answer: 'An electrical box is required, but we can reinforce or replace it if needed.' },
      { question: 'Can you remove my old fan?', answer: 'Yes, old fan removal is included in the service.' }
    ]
  },
  {
    slug: 'light-fixture-installation',
    name: 'Light Fixture Installation',
    category: 'Install',
    description: 'Installation of indoor and outdoor light fixtures including chandeliers, pendant lights, and recessed lighting.',
    price: 89,
    duration: '1 hour',
    features: [
      'All fixture types',
      'Electrical connection',
      'Old fixture removal',
      'Dimmer switch installation',
      'Safety inspection'
    ],
    faqs: [
      { question: 'Can you install chandeliers?', answer: 'Yes, we install all types of light fixtures including heavy chandeliers.' },
      { question: 'Do you install dimmer switches?', answer: 'Yes, dimmer switch installation is available for an additional fee.' }
    ]
  },
  {
    slug: 'doorbell-installation',
    name: 'Doorbell Installation',
    category: 'Install',
    description: 'Smart doorbell and traditional doorbell installation with electrical wiring.',
    price: 79,
    duration: '1 hour',
    features: [
      'Wired and wireless doorbells',
      'Smart doorbell setup',
      'Transformer installation',
      'App configuration',
      'Chime installation'
    ],
    faqs: [
      { question: 'Can you install Ring doorbells?', answer: 'Yes, we install all major smart doorbell brands including Ring, Nest, and Arlo.' },
      { question: 'Do I need existing wiring?', answer: 'We can work with existing wiring or install battery-powered wireless options.' }
    ]
  },
  {
    slug: 'garbage-disposal-installation',
    name: 'Garbage Disposal Installation',
    category: 'Install',
    description: 'Professional garbage disposal installation with plumbing and electrical connection.',
    price: 139,
    duration: '1-2 hours',
    features: [
      'Disposal mounting',
      'Plumbing connection',
      'Electrical wiring',
      'Old unit removal',
      'Leak testing'
    ],
    faqs: [
      { question: 'What size disposal do you recommend?', answer: 'We recommend 3/4 to 1 HP for most homes, depending on usage and family size.' },
      { question: 'Do you remove the old disposal?', answer: 'Yes, old garbage disposal removal is included in the service.' }
    ]
  },
  {
    slug: 'toilet-installation',
    name: 'Toilet Installation',
    category: 'Install',
    description: 'Complete toilet installation including removal of old toilet and proper sealing.',
    price: 159,
    duration: '2 hours',
    features: [
      'Old toilet removal',
      'Wax ring replacement',
      'Water line connection',
      'Proper sealing',
      'Leak testing'
    ],
    faqs: [
      { question: 'Do you haul away the old toilet?', answer: 'Yes, old toilet removal and disposal is included.' },
      { question: 'What if there are leaks after installation?', answer: 'We test for leaks and guarantee our installation work.' }
    ]
  },

  // Outdoors Services
  {
    slug: 'lawn-mowing',
    name: 'Lawn Mowing',
    category: 'Outdoors',
    description: 'Professional lawn mowing and edging service for a perfectly manicured yard.',
    price: 59,
    duration: '30 minutes - 1 hour',
    features: [
      'Precision mowing',
      'Edging and trimming',
      'Grass clipping removal',
      'Pattern mowing available',
      'Scheduled maintenance'
    ],
    faqs: [
      { question: 'How often should I mow my lawn?', answer: 'Weekly mowing during growing season maintains optimal lawn health and appearance.' },
      { question: 'Do you remove grass clippings?', answer: 'Yes, we can bag and remove clippings or mulch them back into the lawn.' }
    ]
  },
  {
    slug: 'gutter-cleaning',
    name: 'Gutter Cleaning',
    category: 'Outdoors',
    description: 'Complete gutter cleaning and debris removal to prevent water damage and clogs.',
    price: 99,
    duration: '1-2 hours',
    features: [
      'Debris removal',
      'Downspout flushing',
      'Roof debris cleanup',
      'Minor repair identification',
      'Before/after photos'
    ],
    faqs: [
      { question: 'How often should gutters be cleaned?', answer: 'Gutters should be cleaned at least twice per year, in spring and fall.' },
      { question: 'Do you check for leaks?', answer: 'Yes, we inspect gutters during cleaning and report any issues found.' }
    ]
  },
  {
    slug: 'pressure-washing',
    name: 'Pressure Washing',
    category: 'Outdoors',
    description: 'High-pressure washing for driveways, sidewalks, decks, siding, and patios.',
    price: 129,
    duration: '2-3 hours',
    features: [
      'Driveway cleaning',
      'Deck and patio washing',
      'Siding cleaning',
      'Fence washing',
      'Eco-friendly detergents'
    ],
    faqs: [
      { question: 'Will pressure washing damage my surfaces?', answer: 'We use appropriate pressure settings for each surface type to prevent damage.' },
      { question: 'How long before surfaces are dry?', answer: 'Most surfaces dry within 24 hours depending on weather conditions.' }
    ]
  },
  {
    slug: 'snow-removal',
    name: 'Snow Removal',
    category: 'Outdoors',
    description: 'Professional snow plowing and shoveling service for driveways, walkways, and parking areas.',
    price: 79,
    duration: '30 minutes - 1 hour',
    features: [
      'Driveway plowing',
      'Walkway clearing',
      'Salt/sand application',
      'Emergency service available',
      'Seasonal contracts'
    ],
    faqs: [
      { question: 'Do you offer seasonal snow removal contracts?', answer: 'Yes, we offer seasonal contracts with guaranteed response times.' },
      { question: 'When do you start snow removal?', answer: 'We typically start clearing after 2 inches of accumulation or per your contract terms.' }
    ]
  },
  {
    slug: 'junk-removal',
    name: 'Junk Removal',
    category: 'Outdoors',
    description: 'Full-service junk removal and hauling for furniture, appliances, yard waste, and debris.',
    price: 149,
    duration: '1-2 hours',
    features: [
      'Furniture removal',
      'Appliance hauling',
      'Yard waste removal',
      'Same-day service',
      'Eco-friendly disposal'
    ],
    faqs: [
      { question: 'What items can you remove?', answer: 'We remove furniture, appliances, electronics, yard waste, and most household items.' },
      { question: 'Do you recycle items?', answer: 'Yes, we prioritize recycling and donation over landfill disposal.' }
    ]
  },

  // Repair Services
  {
    slug: 'drywall-repair',
    name: 'Drywall Repair',
    category: 'Repair',
    description: 'Professional drywall hole repair, crack patching, and texture matching.',
    price: 89,
    duration: '1-2 hours',
    features: [
      'Hole patching',
      'Crack repair',
      'Texture matching',
      'Sanding and priming',
      'Paint touch-up'
    ],
    faqs: [
      { question: 'Can you match existing wall texture?', answer: 'Yes, we match common wall textures including orange peel, knockdown, and smooth finishes.' },
      { question: 'Do you paint after repair?', answer: 'We prime repairs and can paint for an additional fee, or you can paint yourself.' }
    ]
  },
  {
    slug: 'door-repair',
    name: 'Door Repair',
    category: 'Repair',
    description: 'Door adjustment, hinge repair, lock repair, and weatherstripping replacement.',
    price: 79,
    duration: '1 hour',
    features: [
      'Door alignment',
      'Hinge repair/replacement',
      'Lock repair',
      'Weatherstripping',
      'Door closer adjustment'
    ],
    faqs: [
      { question: 'Can you fix doors that stick?', answer: 'Yes, we adjust doors that stick, drag, or don\'t close properly.' },
      { question: 'Do you rekey locks?', answer: 'Basic lock repair is included; rekeying requires a locksmith specialist.' }
    ]
  },
  {
    slug: 'faucet-repair',
    name: 'Faucet Repair',
    category: 'Repair',
    description: 'Leaky faucet repair, cartridge replacement, and handle fixes for all faucet types.',
    price: 99,
    duration: '1 hour',
    features: [
      'Leak repair',
      'Cartridge replacement',
      'Handle repair',
      'Aerator cleaning',
      'Supply line check'
    ],
    faqs: [
      { question: 'How do I know if my faucet needs repair or replacement?', answer: 'We assess the faucet condition and recommend repair when cost-effective or replacement when necessary.' },
      { question: 'Do you work on all faucet brands?', answer: 'Yes, we repair all major faucet brands including Moen, Delta, Kohler, and more.' }
    ]
  },
  {
    slug: 'electrical-repair',
    name: 'Electrical Repair',
    category: 'Repair',
    description: 'Outlet repair, switch replacement, and minor electrical troubleshooting.',
    price: 109,
    duration: '1 hour',
    features: [
      'Outlet replacement',
      'Switch repair',
      'GFCI installation',
      'Circuit testing',
      'Safety inspection'
    ],
    faqs: [
      { question: 'Are your technicians licensed electricians?', answer: 'Yes, all electrical work is performed by licensed electricians.' },
      { question: 'Can you add new outlets?', answer: 'Yes, new outlet installation is available for an additional fee.' }
    ]
  },
  {
    slug: 'hvac-maintenance',
    name: 'HVAC Maintenance',
    category: 'Repair',
    description: 'Furnace and AC tune-up, filter replacement, and seasonal maintenance service.',
    price: 129,
    duration: '1-2 hours',
    features: [
      'Filter replacement',
      'System inspection',
      'Coil cleaning',
      'Thermostat calibration',
      'Performance testing'
    ],
    faqs: [
      { question: 'How often should I service my HVAC?', answer: 'HVAC systems should be serviced twice per year - once before cooling season and once before heating season.' },
      { question: 'What is included in the tune-up?', answer: 'We inspect, clean, and test all major components and replace filters.' }
    ]
  },

  // Seasonal Services
  {
    slug: 'ac-tuneup',
    name: 'AC Tune-Up',
    category: 'Seasonal',
    description: 'Complete air conditioning system tune-up and maintenance for optimal summer performance.',
    price: 119,
    duration: '1-2 hours',
    features: [
      'Refrigerant check',
      'Coil cleaning',
      'Filter replacement',
      'Condensate drain cleaning',
      'Performance testing'
    ],
    faqs: [
      { question: 'When should I schedule AC tune-up?', answer: 'Schedule in early spring before cooling season begins for best availability.' },
      { question: 'Will this lower my energy bills?', answer: 'Yes, a well-maintained AC runs more efficiently and can reduce energy costs.' }
    ]
  },
  {
    slug: 'furnace-tuneup',
    name: 'Furnace Tune-Up',
    category: 'Seasonal',
    description: 'Comprehensive furnace inspection and maintenance for safe, efficient winter heating.',
    price: 119,
    duration: '1-2 hours',
    features: [
      'Safety inspection',
      'Filter replacement',
      'Burner cleaning',
      'Thermostat testing',
      'Carbon monoxide check'
    ],
    faqs: [
      { question: 'When should I service my furnace?', answer: 'Schedule furnace maintenance in early fall before heating season starts.' },
      { question: 'Do you test for carbon monoxide?', answer: 'Yes, carbon monoxide safety testing is included in every furnace tune-up.' }
    ]
  },
  {
    slug: 'christmas-light-installation',
    name: 'Christmas Light Installation',
    category: 'Seasonal',
    description: 'Professional holiday light installation and removal service for homes and businesses.',
    price: 199,
    duration: '2-4 hours',
    features: [
      'Design consultation',
      'Professional installation',
      'Quality light strings',
      'Timer setup',
      'Post-season removal'
    ],
    faqs: [
      { question: 'When should I book Christmas light installation?', answer: 'Book in early November for best availability during the holiday season.' },
      { question: 'Do you provide the lights?', answer: 'We can install your lights or provide commercial-grade lights for an additional fee.' }
    ]
  },
  {
    slug: 'spring-yard-cleanup',
    name: 'Spring Yard Cleanup',
    category: 'Seasonal',
    description: 'Complete spring yard cleanup including debris removal, bed preparation, and lawn dethatching.',
    price: 159,
    duration: '3-4 hours',
    features: [
      'Debris removal',
      'Bed cleanup',
      'Dethatching',
      'Mulch spreading',
      'Lawn fertilization'
    ],
    faqs: [
      { question: 'When is the best time for spring cleanup?', answer: 'Late March to early May is ideal, once ground thaws and before new growth.' },
      { question: 'Do you haul away debris?', answer: 'Yes, all yard waste and debris removal is included in the service.' }
    ]
  },
  {
    slug: 'fall-yard-cleanup',
    name: 'Fall Yard Cleanup',
    category: 'Seasonal',
    description: 'Autumn leaf removal, bed preparation, and winterization service for your property.',
    price: 159,
    duration: '3-4 hours',
    features: [
      'Leaf removal',
      'Gutter cleaning',
      'Bed winterization',
      'Final mowing',
      'Yard debris removal'
    ],
    faqs: [
      { question: 'How many times do you clean leaves?', answer: 'Most properties need 2-3 leaf cleanups throughout fall season for complete removal.' },
      { question: 'Do you mulch leaves?', answer: 'We can mulch leaves into the lawn or remove them completely, per your preference.' }
    ]
  },

  // Moving Services
  {
    slug: 'local-moving',
    name: 'Local Moving',
    category: 'Moving',
    description: 'Professional local moving service for residential and small commercial moves within the city.',
    price: 299,
    duration: '4-6 hours',
    features: [
      'Professional movers',
      'Furniture protection',
      'Loading and unloading',
      'Truck included',
      'Basic insurance'
    ],
    faqs: [
      { question: 'How far in advance should I book?', answer: 'Book 2-4 weeks in advance, especially for weekend moves.' },
      { question: 'Do you provide packing materials?', answer: 'Basic furniture protection is included; packing services available for additional fee.' }
    ]
  },
  {
    slug: 'packing-service',
    name: 'Packing Service',
    category: 'Moving',
    description: 'Professional packing service with quality materials to protect your belongings during the move.',
    price: 199,
    duration: '3-4 hours',
    features: [
      'Quality packing materials',
      'Fragile item protection',
      'Labeling system',
      'Room organization',
      'Unpacking available'
    ],
    faqs: [
      { question: 'Do you provide packing materials?', answer: 'Yes, all boxes, tape, bubble wrap, and packing materials are included.' },
      { question: 'Can you pack just fragile items?', answer: 'Yes, we offer partial packing services for specific items or rooms.' }
    ]
  },

  // Assembly Services
  {
    slug: 'ikea-assembly',
    name: 'IKEA Assembly',
    category: 'Assembly',
    description: 'Expert IKEA furniture assembly service for all products with guaranteed quality.',
    price: 69,
    duration: '1-2 hours',
    features: [
      'All IKEA products',
      'Professional tools',
      'Secure assembly',
      'Packaging removal',
      'Assembly guarantee'
    ],
    faqs: [
      { question: 'How long does IKEA assembly take?', answer: 'Most single items take 1-2 hours; larger pieces like PAX wardrobes may take longer.' },
      { question: 'Do you assemble kitchen cabinets?', answer: 'Yes, we assemble all IKEA products including kitchen cabinet systems.' }
    ]
  },
  {
    slug: 'exercise-equipment-assembly',
    name: 'Exercise Equipment Assembly',
    category: 'Assembly',
    description: 'Professional assembly of treadmills, ellipticals, weight benches, and home gym equipment.',
    price: 99,
    duration: '2-3 hours',
    features: [
      'All equipment brands',
      'Proper calibration',
      'Safety inspection',
      'Debris removal',
      'Function testing'
    ],
    faqs: [
      { question: 'What equipment do you assemble?', answer: 'We assemble treadmills, ellipticals, bikes, weight benches, and all home gym equipment.' },
      { question: 'Do you move equipment after assembly?', answer: 'Yes, we can help position equipment in your desired location.' }
    ]
  },
  {
    slug: 'office-furniture-assembly',
    name: 'Office Furniture Assembly',
    category: 'Assembly',
    description: 'Professional assembly of office desks, chairs, filing cabinets, and workstations.',
    price: 79,
    duration: '1-2 hours',
    features: [
      'Desk assembly',
      'Chair assembly',
      'Filing cabinet setup',
      'Cable management',
      'Ergonomic adjustment'
    ],
    faqs: [
      { question: 'Can you assemble multiple workstations?', answer: 'Yes, we offer commercial rates for multiple furniture assemblies.' },
      { question: 'Do you remove packaging?', answer: 'Yes, packaging and cardboard removal is included in our service.' }
    ]
  },
  {
    slug: 'playground-assembly',
    name: 'Playground Assembly',
    category: 'Assembly',
    description: 'Safe and secure assembly of backyard playground sets, swing sets, and play structures.',
    price: 249,
    duration: '4-6 hours',
    features: [
      'Swing set assembly',
      'Ground anchoring',
      'Safety inspection',
      'Level installation',
      'Warranty compliance'
    ],
    faqs: [
      { question: 'Do you level the ground for playgrounds?', answer: 'We install on existing level ground; ground preparation is an additional service.' },
      { question: 'Is the assembly safe for children?', answer: 'Yes, we follow all manufacturer specifications and safety guidelines.' }
    ]
  }
];

export function getAllServices(): Service[] {
  return services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter(s => s.category === category);
}

export function generateServicePaths() {
  return services.map(service => ({
    slug: service.slug,
  }));
  }
