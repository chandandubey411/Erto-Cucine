// ===== PRODUCT DATA — 180+ products for Erto Cucine India =====
// Images sourced from Unsplash (free, no attribution required for demos)

const baseKitchenImgs = [
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80',
  'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
  'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
  'https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&q=80',
  'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&q=80',
];

const baseWardrobeImgs = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
  'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80',
  'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
  'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80',
  'https://images.unsplash.com/photo-1611269154421-4e27233ac5c5?w=800&q=80',
  'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=800&q=80',
];

const baseFurnitureImgs = [
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
  'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80',
  'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80',
  'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80',
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
  'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80',
  'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?w=800&q=80',
];

const baseVanityImgs = [
  'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
  'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80',
  'https://images.unsplash.com/photo-1564540574859-0dfb63985953?w=800&q=80',
  'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&q=80',
];

const baseTVImgs = [
  'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&q=80',
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
  'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80',
];

// Helper to pick image from array
const pick = (arr, i) => arr[i % arr.length];

// Common specs templates
const specs = {
  wardrobe: (size) => ({
    height:       size?.height  || '2400mm',
    width:        size?.width   || '1800mm',
    depth:        size?.depth   || '600mm',
    doorCount:    size?.doors   || 3,
    carcassBoard: '18mm Pre-laminated Particle Board (BWR Grade)',
    shutterBoard: '18mm MDF with PU Lacquer / Laminate Finish',
    edgeBanding:  '2mm ABS Edge Banding',
    hinges:       'Hettich / Ebco Soft-Close Hinges',
    channels:     'Hettich / Ebco Full-Extension Channels',
    handles:      'Gold Finish / Matte Black / Chrome Aluminium Handles',
    internalFit:  'Hanging Rod, Shelf, Drawer, Trouser Rack',
    warranty:     '10 Years Structural Warranty',
    delivery:     '25–35 Working Days',
    installation: '1–2 Days Professional Installation',
  }),
  slidingWardrobe: (size) => ({
    height:       size?.height  || '2400mm',
    width:        size?.width   || '2400mm',
    depth:        size?.depth   || '650mm',
    doorCount:    size?.doors   || 2,
    carcassBoard: '18mm Pre-laminated Particle Board (BWR Grade)',
    shutterBoard: '6mm MDF with Glass / Mirror / Fabric Insert',
    slidingSystem:'Hettich / Hafele Soft-Close Sliding System',
    handles:      'Handle-Free / Edge Profile Aluminium',
    channels:     'Floor-Mounted / Top-Hung Soft-Close Track',
    internalFit:  'Hanging Rod, Adjustable Shelves, Locking Drawers',
    warranty:     '10 Years Structural Warranty',
    delivery:     '25–35 Working Days',
    installation: '1–2 Days Professional Installation',
  }),
  kitchen: (shape) => ({
    layout:       shape || 'L-Shape',
    carcassBoard: '18mm BWR Grade Plywood (Century / Greenply)',
    shutterFinish:'PU Lacquer / Acrylic / Laminate / Veneer',
    countertop:   'Quartz / Granite / Corian',
    hinges:       'Hettich / Blum Soft-Close Hinges',
    channels:     'Hettich / Blum Full-Extension Soft-Close',
    handles:      'Stainless Steel / Aluminium / Handle-Free',
    sinkFaucet:   'Stainless Steel Sink + Chrome Faucet',
    warranty:     '10 Years Structural Warranty',
    delivery:     '30–45 Working Days',
    installation: '2–4 Days Professional Installation',
  }),
  tvUnit: () => ({
    height:       '600mm',
    width:        '1800–2400mm',
    depth:        '350mm',
    material:     '18mm Pre-laminated Particle Board',
    shutterFinish:'PU Lacquer / Laminate / Veneer',
    handles:      'Push-to-Open / Gold / Chrome',
    openUnits:    'Yes – Display Shelves Included',
    cableManagement:'Built-in Cable Management System',
    warranty:     '5 Years Structural Warranty',
    delivery:     '20–28 Working Days',
    installation: '1 Day Professional Installation',
  }),
  vanity: () => ({
    height:       '850mm (Counter Height)',
    width:        '750–1200mm',
    depth:        '500mm',
    material:     'Marine Plywood + Waterproof Laminate',
    shutterFinish:'Matte / Gloss Laminate / PU Lacquer',
    handles:      'Chrome / Matte Black / Gold',
    basin:        'Ceramic / Acrylic Counter-Top Basin',
    faucet:       'Chrome Single Lever / Dual Handle',
    mirror:       'Backlit LED Mirror Included',
    warranty:     '7 Years Structural Warranty',
    delivery:     '20–28 Working Days',
    installation: '1 Day Professional Installation',
  }),
};

// Features list
const features = {
  wardrobe: [
    'Soft-Close Hinges on All Doors',
    'Full-Extension Drawer Channels',
    'Anti-Warping BWR Grade Board',
    '2mm ABS Edge Banding',
    'Customisable Interior Layout',
    'Dust-Proof Base Panel',
    'Adjustable Shelf Heights',
    'Lifetime Technical Support',
  ],
  sliding: [
    'Premium Soft-Close Sliding System',
    'Anti-Jump Safety Mechanism',
    'Silent Glide Technology',
    'Mirror / Glass / Fabric Panel Options',
    'Handle-Free Profile',
    'Customisable Interior Layout',
    'Anti-Warp BWR Grade Board',
    'Lifetime Technical Support',
  ],
  kitchen: [
    'Soft-Close Hinges on All Cabinets',
    'Full-Extension Drawer Channels',
    'BWR Grade Plywood Carcass',
    'Water & Termite Resistant',
    'Quartz / Granite Countertop Options',
    'Integrated Wiring Channels',
    'Modular Design for Easy Upgrade',
    'Lifetime Technical Support',
  ],
};

// Colors palette
const colors = {
  warm:    ['White Oak', 'Walnut Brown', 'Ivory White', 'Cashmere Beige', 'Sand Dune'],
  dark:    ['Charcoal Black', 'Midnight Navy', 'Deep Espresso', 'Graphite Grey', 'Slate Blue'],
  neutral: ['Pearl White', 'Linen White', 'Light Grey', 'Off-White', 'Stone'],
  wood:    ['Natural Teak', 'Wenge', 'Burma Teak', 'Pine', 'Meranti'],
};

// ===== SLIDING WARDROBES — 25 products =====
export const slidingWardrobes = [
  {
    id: 'sw-001',
    slug: 'venetian-sliding-wardrobe',
    name: 'Venetian Sliding Wardrobe',
    category: 'Wardrobes',
    subcategory: 'Sliding Wardrobes',
    price: 85000,
    originalPrice: 105000,
    rating: 4.8,
    reviews: 127,
    badge: 'Bestseller',
    description:
      'The Venetian is our flagship 3-panel sliding wardrobe featuring a premium glass-fronted centre panel, silky Hettich soft-close tracks, and a fully customisable interior. Elegant and functional — a statement piece for any master bedroom.',
    longDescription:
      'Crafted for the modern Indian home, the Venetian Sliding Wardrobe combines European engineering with Indian craftsmanship. The 18mm BWR-grade particle board carcass is sealed with 2mm ABS edge banding for maximum durability. The sliding system uses Hettich premium floor-mounted track with anti-jump safety clips, ensuring decades of smooth operation. Inside, choose from hanging rod, adjustable shelves, lockable drawers, and trouser racks. The centre panel can be fitted with clear glass, frosted glass, or a full-length mirror.',
    image:   pick(baseWardrobeImgs, 0),
    images:  [pick(baseWardrobeImgs, 0), pick(baseWardrobeImgs, 1), pick(baseWardrobeImgs, 2), pick(baseWardrobeImgs, 3)],
    specs:   specs.slidingWardrobe({ width: '2400mm', height: '2400mm', depth: '650mm', doors: 3 }),
    features: features.sliding,
    colors:  colors.warm,
    finishes: ['PU Lacquer', 'Acrylic', 'Laminate', 'Veneer'],
    tags:    ['sliding', 'glass', 'premium', 'bestseller'],
    inStock: true,
    leadTime: '25–35 Working Days',
  },
  {
    id: 'sw-002',
    slug: 'mirror-glide-sliding-wardrobe',
    name: 'Mirror Glide Sliding Wardrobe',
    category: 'Wardrobes',
    subcategory: 'Sliding Wardrobes',
    price: 72000,
    originalPrice: 90000,
    rating: 4.7,
    reviews: 98,
    badge: 'Popular',
    description:
      'Full-length mirror panels on all doors create an illusion of space while delivering a luxurious aesthetic. Perfect for smaller bedrooms and studio apartments.',
    longDescription:
      'The Mirror Glide Sliding Wardrobe transforms any room with its floor-to-ceiling mirror doors. Each panel uses 5mm toughened float glass bonded to an 18mm MDF backing for safety and stability. The Ebco top-hung sliding system requires no floor track, making cleaning effortless. The carcass is built with 18mm BWR-grade particle board and features our premium internal fitment package.',
    image:   pick(baseWardrobeImgs, 1),
    images:  [pick(baseWardrobeImgs, 1), pick(baseWardrobeImgs, 2), pick(baseWardrobeImgs, 3), pick(baseWardrobeImgs, 0)],
    specs:   specs.slidingWardrobe({ width: '2100mm', height: '2400mm', depth: '600mm', doors: 2 }),
    features: features.sliding,
    colors:  colors.neutral,
    finishes: ['Mirror', 'Frosted Glass', 'Tinted Glass'],
    tags:    ['sliding', 'mirror', 'space-saving'],
    inStock: true,
    leadTime: '25–35 Working Days',
  },
  {
    id: 'sw-003',
    slug: 'alpine-premium-sliding-wardrobe',
    name: 'Alpine Premium Sliding Wardrobe',
    category: 'Wardrobes',
    subcategory: 'Sliding Wardrobes',
    price: 95000,
    originalPrice: 120000,
    rating: 4.9,
    reviews: 64,
    badge: 'Luxury',
    description:
      'Our most premium sliding wardrobe with integrated LED lighting, velvet-lined drawers, and a dedicated shoe cabinet module.',
    longDescription:
      'The Alpine represents the pinnacle of wardrobe craftsmanship. Featuring integrated motion-sensor LED strip lighting, velvet-lined jewellery drawers, and a 12-pair rotating shoe carousel, it combines the functionality of a walk-in closet in a compact sliding wardrobe footprint. The frame is constructed from 18mm BWR plywood for superior stability.',
    image:   pick(baseWardrobeImgs, 2),
    images:  [pick(baseWardrobeImgs, 2), pick(baseWardrobeImgs, 3), pick(baseWardrobeImgs, 0), pick(baseWardrobeImgs, 1)],
    specs:   specs.slidingWardrobe({ width: '2700mm', height: '2400mm', depth: '650mm', doors: 3 }),
    features: [...features.sliding, 'Integrated LED Motion-Sensor Lighting', 'Velvet-Lined Jewellery Drawers'],
    colors:  colors.dark,
    finishes: ['Veneer', 'PU Lacquer', 'Acrylic High Gloss'],
    tags:    ['sliding', 'luxury', 'LED', 'premium'],
    inStock: true,
    leadTime: '30–40 Working Days',
  },
  {
    id: 'sw-004', slug: 'minimal-edge-sliding-wardrobe', name: 'Minimal Edge Sliding Wardrobe',
    category: 'Wardrobes', subcategory: 'Sliding Wardrobes',
    price: 62000, originalPrice: 78000, rating: 4.6, reviews: 83, badge: null,
    description: 'Handle-free aluminium profile edges give this wardrobe a contemporary industrial aesthetic that pairs beautifully with minimalist bedroom decor.',
    longDescription: 'Clean lines, zero handles, and a flush profile define the Minimal Edge. The aluminium J-pull profile runs the full height of each door, providing a comfortable grip while maintaining the seamless aesthetic. Available in pearl white, graphite grey, and natural oak finish.',
    image: pick(baseWardrobeImgs, 3), images: [pick(baseWardrobeImgs, 3), pick(baseWardrobeImgs, 0), pick(baseWardrobeImgs, 1), pick(baseWardrobeImgs, 2)],
    specs: specs.slidingWardrobe({ width: '2100mm', height: '2400mm', depth: '600mm', doors: 2 }),
    features: features.sliding, colors: colors.neutral, finishes: ['Laminate Matt', 'Acrylic Matt'],
    tags: ['sliding', 'minimalist', 'handle-free'], inStock: true, leadTime: '25–35 Working Days',
  },
  {
    id: 'sw-005', slug: 'walnut-wood-sliding-wardrobe', name: 'Walnut Wood Sliding Wardrobe',
    category: 'Wardrobes', subcategory: 'Sliding Wardrobes',
    price: 88000, originalPrice: 110000, rating: 4.8, reviews: 55, badge: 'New',
    description: 'Natural walnut veneer panels bring warmth and organic luxury to any master bedroom. Pairs beautifully with tan leather and brass accents.',
    longDescription: 'The Walnut Wood Sliding Wardrobe features real walnut veneer bonded to 18mm MDF shutters, giving you the warmth and texture of solid wood at a fraction of the cost. Each panel is lacquered in a satin finish for easy maintenance. The interior is fully fitted with solid wood-look laminate shelves and a dedicated suit section.',
    image: pick(baseWardrobeImgs, 4), images: [pick(baseWardrobeImgs, 4), pick(baseWardrobeImgs, 0), pick(baseWardrobeImgs, 1), pick(baseWardrobeImgs, 5)],
    specs: specs.slidingWardrobe({ width: '2400mm', height: '2400mm', depth: '650mm', doors: 3 }),
    features: features.sliding, colors: colors.wood, finishes: ['Natural Veneer', 'Veneer with Lacquer'],
    tags: ['sliding', 'walnut', 'veneer', 'luxury'], inStock: true, leadTime: '30–40 Working Days',
  },
  {
    id: 'sw-006', slug: 'frosted-glass-sliding-wardrobe', name: 'Frosted Glass Sliding Wardrobe',
    category: 'Wardrobes', subcategory: 'Sliding Wardrobes',
    price: 75000, originalPrice: 92000, rating: 4.7, reviews: 47, badge: null,
    description: 'Elegant frosted glass panels diffuse light beautifully, creating a soft luminous aesthetic while keeping contents private.',
    longDescription: 'The Frosted Glass Sliding Wardrobe uses 5mm acid-etched frosted glass panels framed in a slim aluminium profile. The diffused transparency gives depth to the design without fully revealing the interior. Ideal for modern homes with an airy, light-filled aesthetic.',
    image: pick(baseWardrobeImgs, 5), images: [pick(baseWardrobeImgs, 5), pick(baseWardrobeImgs, 0), pick(baseWardrobeImgs, 3), pick(baseWardrobeImgs, 2)],
    specs: specs.slidingWardrobe({ width: '2100mm', height: '2400mm', depth: '600mm', doors: 2 }),
    features: features.sliding, colors: colors.neutral, finishes: ['Frosted Glass', 'Fluted Glass'],
    tags: ['sliding', 'frosted glass', 'modern'], inStock: true, leadTime: '25–35 Working Days',
  },
  {
    id: 'sw-007', slug: 'charcoal-oak-sliding-wardrobe', name: 'Charcoal Oak Sliding Wardrobe',
    category: 'Wardrobes', subcategory: 'Sliding Wardrobes',
    price: 80000, originalPrice: 98000, rating: 4.6, reviews: 39, badge: null,
    description: 'Bold charcoal finish with a subtle oak wood grain texture — a dramatic statement piece for contemporary interiors.',
    longDescription: 'Deep charcoal meets the natural beauty of oak grain in this bold sliding wardrobe. The 18mm MDF shutters are wrapped in a premium German-import foil that faithfully replicates the texture and depth of real oak wood, finished in a dark charcoal stain. The result is a sophisticated, masculine aesthetic.',
    image: pick(baseWardrobeImgs, 6), images: [pick(baseWardrobeImgs, 6), pick(baseWardrobeImgs, 1), pick(baseWardrobeImgs, 3), pick(baseWardrobeImgs, 5)],
    specs: specs.slidingWardrobe({ width: '2400mm', height: '2400mm', depth: '650mm', doors: 3 }),
    features: features.sliding, colors: colors.dark, finishes: ['Charcoal Oak Foil', 'PU Lacquer Dark'],
    tags: ['sliding', 'charcoal', 'dark', 'bold'], inStock: true, leadTime: '25–35 Working Days',
  },
  {
    id: 'sw-008', slug: 'ivory-lacquer-sliding-wardrobe', name: 'Ivory Lacquer Sliding Wardrobe',
    category: 'Wardrobes', subcategory: 'Sliding Wardrobes',
    price: 70000, originalPrice: 87000, rating: 4.7, reviews: 62, badge: 'Popular',
    description: 'The timeless ivory PU lacquer finish suits traditional and modern bedrooms alike. A classic choice that never goes out of style.',
    longDescription: 'Our Ivory Lacquer Sliding Wardrobe is the most versatile option in our collection. The smooth, dust-resistant PU lacquer finish is applied in 5 coats for a depth of colour that catches light beautifully. Handles are optional — choose from concealed J-pull, gold bar, or chrome ring styles.',
    image: pick(baseWardrobeImgs, 7), images: [pick(baseWardrobeImgs, 7), pick(baseWardrobeImgs, 0), pick(baseWardrobeImgs, 2), pick(baseWardrobeImgs, 4)],
    specs: specs.slidingWardrobe({ width: '2100mm', height: '2400mm', depth: '600mm', doors: 2 }),
    features: features.sliding, colors: ['Ivory White', 'Cream', 'Off-White', 'Warm White'], finishes: ['PU Lacquer Gloss', 'PU Lacquer Satin'],
    tags: ['sliding', 'white', 'classic', 'lacquer'], inStock: true, leadTime: '25–35 Working Days',
  },
  {
    id: 'sw-009', slug: 'leather-panel-sliding-wardrobe', name: 'Leather Panel Sliding Wardrobe',
    category: 'Wardrobes', subcategory: 'Sliding Wardrobes',
    price: 115000, originalPrice: 145000, rating: 4.9, reviews: 28, badge: 'Luxury',
    description: 'Faux leather-upholstered door panels with contrast stitching add a hotel-suite luxuriousness to your bedroom.',
    longDescription: 'Inspired by boutique hotel suites, our Leather Panel Sliding Wardrobe features high-quality faux leather panels in a quilted stitch pattern. The leather is bonded to 18mm MDF and framed in a polished gold aluminium profile. Available in cognac, midnight black, and ivory cream.',
    image: pick(baseWardrobeImgs, 0), images: [pick(baseWardrobeImgs, 0), pick(baseWardrobeImgs, 5), pick(baseWardrobeImgs, 6), pick(baseWardrobeImgs, 7)],
    specs: specs.slidingWardrobe({ width: '2700mm', height: '2400mm', depth: '650mm', doors: 3 }),
    features: [...features.sliding, 'Faux Leather Quilted Panel', 'Gold Aluminium Trim'],
    colors: ['Cognac Brown', 'Midnight Black', 'Ivory Cream'], finishes: ['Faux Leather Quilted'],
    tags: ['sliding', 'leather', 'luxury', 'hotel'], inStock: true, leadTime: '35–45 Working Days',
  },
  {
    id: 'sw-010', slug: 'cedar-collection-sliding-wardrobe', name: 'Cedar Collection Sliding Wardrobe',
    category: 'Wardrobes', subcategory: 'Sliding Wardrobes',
    price: 78000, originalPrice: 97000, rating: 4.6, reviews: 51, badge: null,
    description: 'Cedar-lined interior with natural insect-repellent properties. Keep moths and pests away naturally while enjoying a beautiful aromatic wardrobe.',
    longDescription: 'The Cedar Collection is designed for those who prioritise both aesthetics and functionality. The interior lining is real cedar wood — natural, aromatic, and a known moth repellent. The exterior panels are available in warm neutral finishes that complement the natural cedar interior.',
    image: pick(baseWardrobeImgs, 1), images: [pick(baseWardrobeImgs, 1), pick(baseWardrobeImgs, 3), pick(baseWardrobeImgs, 5), pick(baseWardrobeImgs, 7)],
    specs: { ...specs.slidingWardrobe({ width: '2400mm', height: '2400mm', depth: '650mm', doors: 3 }), internalFit: 'Cedar Wood Lining, Hanging Rod, Adjustable Shelves' },
    features: [...features.sliding, 'Real Cedar Wood Interior Lining', 'Natural Moth Repellent'],
    colors: colors.warm, finishes: ['Laminate', 'Veneer'],
    tags: ['sliding', 'cedar', 'natural', 'aromatic'], inStock: true, leadTime: '30–40 Working Days',
  },
  // 11-25 sliding wardrobes (condensed)
  { id:'sw-011', slug:'nordic-light-sliding-wardrobe', name:'Nordic Light Sliding Wardrobe', category:'Wardrobes', subcategory:'Sliding Wardrobes', price:66000, originalPrice:82000, rating:4.5, reviews:44, badge:null, description:'Scandinavian-inspired birch effect panels with black metal handles for a clean modern look.', longDescription:'Light birch-effect laminate combined with matte black aluminium handles creates a fresh, Scandinavian aesthetic. The interior is fully fitted with our standard white laminate shelving package.', image:pick(baseWardrobeImgs,2), images:[pick(baseWardrobeImgs,2), pick(baseWardrobeImgs,0), pick(baseWardrobeImgs,4), pick(baseWardrobeImgs,6)], specs:specs.slidingWardrobe({width:'2100mm', height:'2400mm', depth:'600mm', doors:2}), features:features.sliding, colors:['Birch Light', 'Linen White', 'Sand'], finishes:['Laminate Matt', 'Foil'], tags:['sliding','nordic','birch','scandinavian'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'sw-012', slug:'graphite-glass-sliding-wardrobe', name:'Graphite Glass Sliding Wardrobe', category:'Wardrobes', subcategory:'Sliding Wardrobes', price:89000, originalPrice:108000, rating:4.8, reviews:36, badge:'New', description:'Smoked graphite glass panels for an ultra-contemporary look.', longDescription:'Tinted graphite glass panels reduce glare and add a dark, sophisticated aesthetic. The glass is 5mm toughened for safety, framed in a slim black aluminium profile.', image:pick(baseWardrobeImgs,3), images:[pick(baseWardrobeImgs,3), pick(baseWardrobeImgs,1), pick(baseWardrobeImgs,5), pick(baseWardrobeImgs,7)], specs:specs.slidingWardrobe({width:'2400mm', height:'2400mm', depth:'650mm', doors:3}), features:features.sliding, colors:colors.dark, finishes:['Tinted Glass','Smoked Glass'], tags:['sliding','graphite','dark glass'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'sw-013', slug:'boutique-rose-sliding-wardrobe', name:'Boutique Rose Sliding Wardrobe', category:'Wardrobes', subcategory:'Sliding Wardrobes', price:74000, originalPrice:91000, rating:4.6, reviews:29, badge:null, description:'Blush rose high-gloss acrylic panels with gold bar handles — a feminine luxury statement.', longDescription:'For the bedroom that deserves a touch of glamour. High-gloss blush rose acrylic panels reflect light beautifully, and the gold bar handles add a couture touch.', image:pick(baseWardrobeImgs,4), images:[pick(baseWardrobeImgs,4), pick(baseWardrobeImgs,2), pick(baseWardrobeImgs,6), pick(baseWardrobeImgs,0)], specs:specs.slidingWardrobe({width:'2100mm', height:'2400mm', depth:'600mm', doors:2}), features:features.sliding, colors:['Blush Rose', 'Dusty Pink', 'Champagne'], finishes:['Acrylic High Gloss'], tags:['sliding','rose','gloss','feminine'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'sw-014', slug:'heritage-teak-sliding-wardrobe', name:'Heritage Teak Sliding Wardrobe', category:'Wardrobes', subcategory:'Sliding Wardrobes', price:97000, originalPrice:122000, rating:4.9, reviews:22, badge:'Luxury', description:'Premium Burma teak veneer with antique brass handles — a tribute to classic Indian craftsmanship.', longDescription:'The Heritage Teak celebrates India\'s love of warm wood tones. Burma teak veneer panels are finished in a natural oil that enhances the grain. Antique brass handles complete the traditional aesthetic.', image:pick(baseWardrobeImgs,5), images:[pick(baseWardrobeImgs,5), pick(baseWardrobeImgs,3), pick(baseWardrobeImgs,7), pick(baseWardrobeImgs,1)], specs:specs.slidingWardrobe({width:'2700mm', height:'2400mm', depth:'650mm', doors:3}), features:[...features.sliding,'Burma Teak Veneer','Antique Brass Hardware'], colors:colors.wood, finishes:['Natural Teak Oil','Teak Lacquer'], tags:['sliding','teak','heritage','luxury'], inStock:true, leadTime:'35–45 Working Days' },
  { id:'sw-015', slug:'cobalt-accent-sliding-wardrobe', name:'Cobalt Accent Sliding Wardrobe', category:'Wardrobes', subcategory:'Sliding Wardrobes', price:71000, originalPrice:88000, rating:4.5, reviews:33, badge:null, description:'Bold cobalt blue accent panel flanked by neutral linen panels for an artistic pop of colour.', longDescription:'Make a statement with the Cobalt Accent. The central door features a bold cobalt blue lacquer panel, while the flanking doors are finished in natural linen. A bold interior design choice.', image:pick(baseWardrobeImgs,6), images:[pick(baseWardrobeImgs,6), pick(baseWardrobeImgs,0), pick(baseWardrobeImgs,4), pick(baseWardrobeImgs,2)], specs:specs.slidingWardrobe({width:'2100mm', height:'2400mm', depth:'600mm', doors:3}), features:features.sliding, colors:['Cobalt Blue', 'Navy', 'Midnight'], finishes:['PU Lacquer Matt'], tags:['sliding','blue','accent','bold'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'sw-016', slug:'sage-green-sliding-wardrobe', name:'Sage Green Sliding Wardrobe', category:'Wardrobes', subcategory:'Sliding Wardrobes', price:69000, originalPrice:86000, rating:4.6, reviews:41, badge:'Popular', description:'Earthy sage green matte finish — a nature-inspired palette that calms and soothes any bedroom.', longDescription:'Sage green is among the most popular colour trends in bedroom interiors. Our sage green sliding wardrobe uses a premium German-import matte laminate that is scratch and fingerprint resistant.', image:pick(baseWardrobeImgs,7), images:[pick(baseWardrobeImgs,7), pick(baseWardrobeImgs,2), pick(baseWardrobeImgs,5), pick(baseWardrobeImgs,0)], specs:specs.slidingWardrobe({width:'2100mm', height:'2400mm', depth:'600mm', doors:2}), features:features.sliding, colors:['Sage Green', 'Olive', 'Forest'], finishes:['Laminate Matt'], tags:['sliding','sage','green','nature'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'sw-017', slug:'eclipse-two-tone-sliding-wardrobe', name:'Eclipse Two-Tone Sliding Wardrobe', category:'Wardrobes', subcategory:'Sliding Wardrobes', price:83000, originalPrice:103000, rating:4.7, reviews:26, badge:null, description:'Two-tone design with white upper and charcoal lower panels for a sophisticated split-level look.', longDescription:'The Eclipse contrasts pure white upper panels with a deep charcoal lower section, creating a sophisticated focal point in any room. The split is emphasised by a thin gold dividing profile.', image:pick(baseWardrobeImgs,0), images:[pick(baseWardrobeImgs,0), pick(baseWardrobeImgs,6), pick(baseWardrobeImgs,3), pick(baseWardrobeImgs,7)], specs:specs.slidingWardrobe({width:'2400mm', height:'2400mm', depth:'650mm', doors:3}), features:features.sliding, colors:['White + Charcoal', 'Ivory + Walnut', 'Cream + Grey'], finishes:['PU Lacquer', 'Laminate'], tags:['sliding','two-tone','charcoal','white'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'sw-018', slug:'coastal-white-sliding-wardrobe', name:'Coastal White Sliding Wardrobe', category:'Wardrobes', subcategory:'Sliding Wardrobes', price:63000, originalPrice:79000, rating:4.5, reviews:57, badge:null, description:'Crisp white high-gloss panels with chrome handles — clean, bright, and timeless.', longDescription:'The Coastal White is the perfect all-rounder. Pure white high-gloss panels keep rooms feeling bright and spacious. Paired with our standard chrome handles, this is a classic that works in any bedroom.', image:pick(baseWardrobeImgs,1), images:[pick(baseWardrobeImgs,1), pick(baseWardrobeImgs,3), pick(baseWardrobeImgs,5), pick(baseWardrobeImgs,7)], specs:specs.slidingWardrobe({width:'2100mm', height:'2400mm', depth:'600mm', doors:2}), features:features.sliding, colors:['White', 'Linen', 'Cream'], finishes:['Acrylic High Gloss'], tags:['sliding','white','gloss','classic'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'sw-019', slug:'amber-glow-sliding-wardrobe', name:'Amber Glow Sliding Wardrobe', category:'Wardrobes', subcategory:'Sliding Wardrobes', price:91000, originalPrice:114000, rating:4.8, reviews:19, badge:'New', description:'Honey amber glass panels backlit with optional integrated LED strip for a warm glowing effect at night.', longDescription:'The Amber Glow features translucent amber tinted glass panels that, when backlit with the optional integrated LED strip lighting, create a warm, golden glow in your bedroom. Spectacular at night.', image:pick(baseWardrobeImgs,2), images:[pick(baseWardrobeImgs,2), pick(baseWardrobeImgs,4), pick(baseWardrobeImgs,0), pick(baseWardrobeImgs,6)], specs:specs.slidingWardrobe({width:'2400mm', height:'2400mm', depth:'650mm', doors:3}), features:[...features.sliding,'Amber Tinted Glass','Optional Integrated LED'], colors:['Amber', 'Honey Gold', 'Bronze'], finishes:['Amber Glass'], tags:['sliding','amber','LED','glow'], inStock:true, leadTime:'30–40 Working Days' },
  { id:'sw-020', slug: 'arched-panel-sliding-wardrobe', name: 'Arched Panel Sliding Wardrobe', category:'Wardrobes', subcategory:'Sliding Wardrobes', price: 86000, originalPrice:107000, rating:4.7, reviews:31, badge:null, description:'Arched top panel insert adds architectural elegance to a contemporary sliding wardrobe.', longDescription:'A nod to classic architecture, the Arched Panel Sliding Wardrobe features an elliptical arched mirror or glass insert in the upper section of each door. The combination of modern sliding function and classic arched detail is uniquely elegant.', image:pick(baseWardrobeImgs,3), images:[pick(baseWardrobeImgs,3), pick(baseWardrobeImgs,5), pick(baseWardrobeImgs,1), pick(baseWardrobeImgs,7)], specs:specs.slidingWardrobe({width:'2100mm', height:'2400mm', depth:'650mm', doors:2}), features:features.sliding, colors:colors.neutral, finishes:['Laminate','Mirror Insert'], tags:['sliding','arched','classic','architectural'], inStock:true, leadTime:'30–40 Working Days' },
  { id:'sw-021', slug:'gold-trim-sliding-wardrobe', name:'Gold Trim Sliding Wardrobe', category:'Wardrobes', subcategory:'Sliding Wardrobes', price:105000, originalPrice:132000, rating:4.9, reviews:17, badge:'Luxury', description:'Ivory lacquer panels framed in polished gold aluminium trim — pure opulence.', longDescription:'Gold Trim takes our iconic ivory lacquer panel and encases it in polished gold aluminium frame profiles. Every edge, every joint, every handle glints in gold. The ultimate luxury statement wardrobe.', image:pick(baseWardrobeImgs,4), images:[pick(baseWardrobeImgs,4), pick(baseWardrobeImgs,6), pick(baseWardrobeImgs,0), pick(baseWardrobeImgs,2)], specs:specs.slidingWardrobe({width:'2700mm', height:'2400mm', depth:'650mm', doors:3}), features:[...features.sliding,'Polished Gold Aluminium Frame','Velvet Drawers'], colors:['Ivory Gold', 'Cream Gold', 'Pearl Gold'], finishes:['PU Lacquer Satin','Gold Trim'], tags:['sliding','gold','luxury','opulent'], inStock:true, leadTime:'35–45 Working Days' },
  { id:'sw-022', slug:'mid-century-teak-sliding-wardrobe', name:'Mid-Century Teak Sliding Wardrobe', category:'Wardrobes', subcategory:'Sliding Wardrobes', price:79000, originalPrice:99000, rating:4.6, reviews:24, badge:null, description:'Mid-century modern lines with teak veneer panels and tapered leg plinth detail.', longDescription:'Inspired by 1960s Scandinavian design, the Mid-Century Teak combines teak veneer panels with a tapered solid wood plinth base. The horizontal grain orientation and warm teak tones evoke a golden era of design.', image:pick(baseWardrobeImgs,5), images:[pick(baseWardrobeImgs,5), pick(baseWardrobeImgs,1), pick(baseWardrobeImgs,3), pick(baseWardrobeImgs,7)], specs:specs.slidingWardrobe({width:'2100mm', height:'2400mm', depth:'650mm', doors:2}), features:features.sliding, colors:colors.wood, finishes:['Teak Veneer Satin'], tags:['sliding','teak','mid-century','vintage'], inStock:true, leadTime:'30–40 Working Days' },
  { id:'sw-023', slug:'terracotta-clay-sliding-wardrobe', name:'Terracotta Clay Sliding Wardrobe', category:'Wardrobes', subcategory:'Sliding Wardrobes', price:67000, originalPrice:84000, rating:4.5, reviews:38, badge:null, description:'Warm terracotta clay matte finish inspired by earth tones — pairs beautifully with rattan and natural textures.', longDescription:'Terracotta is having a design moment, and our Clay Sliding Wardrobe embraces it fully. The deep terracotta matte laminate is applied to 18mm MDF panels and paired with brushed brass bar handles.', image:pick(baseWardrobeImgs,6), images:[pick(baseWardrobeImgs,6), pick(baseWardrobeImgs,2), pick(baseWardrobeImgs,4), pick(baseWardrobeImgs,0)], specs:specs.slidingWardrobe({width:'2100mm', height:'2400mm', depth:'600mm', doors:2}), features:features.sliding, colors:['Terracotta', 'Clay', 'Rust', 'Ochre'], finishes:['Laminate Matt'], tags:['sliding','terracotta','earthy','warm'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'sw-024', slug:'onyx-black-sliding-wardrobe', name:'Onyx Black Sliding Wardrobe', category:'Wardrobes', subcategory:'Sliding Wardrobes', price:92000, originalPrice:115000, rating:4.8, reviews:45, badge:'Bestseller', description:'High-gloss onyx black acrylic panels with gold handles — dramatic and unforgettable.', longDescription:'The Onyx Black is our most dramatic offering. Mirror-polished black acrylic panels reflect the room like a black mirror, creating a striking visual effect. Paired with polished gold handles, it is the wardrobe of choice for luxury master suites.', image:pick(baseWardrobeImgs,7), images:[pick(baseWardrobeImgs,7), pick(baseWardrobeImgs,5), pick(baseWardrobeImgs,1), pick(baseWardrobeImgs,3)], specs:specs.slidingWardrobe({width:'2400mm', height:'2400mm', depth:'650mm', doors:3}), features:features.sliding, colors:['Onyx Black', 'Jet Black', 'Midnight Black'], finishes:['Acrylic High Gloss'], tags:['sliding','black','gloss','dramatic','luxury'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'sw-025', slug:'blush-linen-sliding-wardrobe', name:'Blush Linen Sliding Wardrobe', category:'Wardrobes', subcategory:'Sliding Wardrobes', price:65000, originalPrice:81000, rating:4.6, reviews:52, badge:null, description:'Soft linen-textured laminate in blush tones — a gentle, sophisticated feminine aesthetic.', longDescription:'The Blush Linen Sliding Wardrobe uses a linen-texture embossed laminate in soft blush pink, lending tactile depth to the surface. The fabric-like texture is scratch and moisture resistant, making it ideal for Indian climates.', image:pick(baseWardrobeImgs,0), images:[pick(baseWardrobeImgs,0), pick(baseWardrobeImgs,4), pick(baseWardrobeImgs,2), pick(baseWardrobeImgs,6)], specs:specs.slidingWardrobe({width:'2100mm', height:'2400mm', depth:'600mm', doors:2}), features:features.sliding, colors:['Blush Pink', 'Dusty Rose', 'Nude'], finishes:['Linen Texture Laminate'], tags:['sliding','blush','linen','feminine'], inStock:true, leadTime:'25–35 Working Days' },
];

// ===== HINGED WARDROBES — 25 products =====
export const hingedWardrobes = [
  { id:'hw-001', slug:'royal-oak-hinged-wardrobe', name:'Royal Oak Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:78000, originalPrice:97000, rating:4.8, reviews:89, badge:'Bestseller', description:'Classic 4-door hinged wardrobe in rich oak veneer with bronze-finished handles. Timeless and majestic.', longDescription:'The Royal Oak Hinged Wardrobe is a testament to enduring craftsmanship. The rich oak veneer panels are finished in a warm amber stain, accented by antique bronze bar handles. Inside, find a generous hanging section, shelves, and three deep drawers. Built on an 18mm BWR-grade particle board carcass with Hettich soft-close hinges throughout.', image:pick(baseWardrobeImgs,1), images:[pick(baseWardrobeImgs,1), pick(baseWardrobeImgs,3), pick(baseWardrobeImgs,5), pick(baseWardrobeImgs,7)], specs:specs.wardrobe({height:'2200mm', width:'1800mm', depth:'580mm', doors:4}), features:features.wardrobe, colors:colors.wood, finishes:['Oak Veneer', 'Veneer with Stain'], tags:['hinged','oak','classic','veneer'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'hw-002', slug:'palace-white-hinged-wardrobe', name:'Palace White Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:65000, originalPrice:81000, rating:4.7, reviews:112, badge:'Popular', description:'Bright white 3-door wardrobe with gold handles — classic, bright, and beautifully functional.', longDescription:'The Palace White is one of our most popular hinged wardrobes, bringing brightness and elegance to any bedroom. The white PU lacquer finish is applied to 18mm MDF shutters, and the gold bar handles add a luxurious touch. The interior is customisable with hanging rod, shelves, and drawer configurations.', image:pick(baseWardrobeImgs,2), images:[pick(baseWardrobeImgs,2), pick(baseWardrobeImgs,0), pick(baseWardrobeImgs,4), pick(baseWardrobeImgs,6)], specs:specs.wardrobe({height:'2200mm', width:'1500mm', depth:'580mm', doors:3}), features:features.wardrobe, colors:['White', 'Ivory', 'Off-White'], finishes:['PU Lacquer Gloss', 'PU Lacquer Satin'], tags:['hinged','white','gold','popular'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'hw-003', slug:'presidio-wenge-hinged-wardrobe', name:'Presidio Wenge Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:88000, originalPrice:110000, rating:4.8, reviews:47, badge:'Luxury', description:'Deep wenge wood finish with stainless steel bar handles — powerful, commanding presence.', longDescription:'The Presidio is designed for those who want a bold, masculine wardrobe. The dark wenge wood-look laminate creates a commanding, almost architectural presence. Inside, a suit section, tie rack, and lockable drawers provide all the storage a modern professional needs.', image:pick(baseWardrobeImgs,3), images:[pick(baseWardrobeImgs,3), pick(baseWardrobeImgs,1), pick(baseWardrobeImgs,5), pick(baseWardrobeImgs,7)], specs:specs.wardrobe({height:'2200mm', width:'1800mm', depth:'580mm', doors:4}), features:features.wardrobe, colors:['Wenge', 'Dark Espresso', 'Ebony'], finishes:['Laminate Matt Dark'], tags:['hinged','wenge','dark','masculine','luxury'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'hw-004', slug:'garden-sage-hinged-wardrobe', name:'Garden Sage Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:62000, originalPrice:78000, rating:4.5, reviews:63, badge:null, description:'Sage green matte laminate with brass handles — a nature-inspired wardrobe that brings calm to any bedroom.', longDescription:'Sage green has become the go-to bedroom colour for mindful living. Our Garden Sage Hinged Wardrobe pairs a premium sage green matte laminate with delicate brushed brass handles. The interior uses our standard white laminate fitment.', image:pick(baseWardrobeImgs,4), images:[pick(baseWardrobeImgs,4), pick(baseWardrobeImgs,2), pick(baseWardrobeImgs,0), pick(baseWardrobeImgs,6)], specs:specs.wardrobe({height:'2200mm', width:'1500mm', depth:'580mm', doors:3}), features:features.wardrobe, colors:['Sage Green', 'Olive', 'Moss'], finishes:['Laminate Matt'], tags:['hinged','sage','green','nature'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'hw-005', slug:'shimmer-grey-hinged-wardrobe', name:'Shimmer Grey Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:70000, originalPrice:87000, rating:4.6, reviews:55, badge:null, description:'Pearl grey high-gloss acrylic shutters that shimmer and reflect light beautifully.', longDescription:'The Shimmer Grey uses high-gloss pearl grey acrylic shutters that catch and reflect ambient light, creating a soft shimmer effect throughout the day. Chrome bar handles and a white interior complete the contemporary look.', image:pick(baseWardrobeImgs,5), images:[pick(baseWardrobeImgs,5), pick(baseWardrobeImgs,3), pick(baseWardrobeImgs,7), pick(baseWardrobeImgs,1)], specs:specs.wardrobe({height:'2200mm', width:'1500mm', depth:'580mm', doors:3}), features:features.wardrobe, colors:['Pearl Grey', 'Silver', 'Champagne Grey'], finishes:['Acrylic High Gloss'], tags:['hinged','grey','gloss','shimmer'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'hw-006', slug:'tuscan-clay-hinged-wardrobe', name:'Tuscan Clay Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:67000, originalPrice:84000, rating:4.6, reviews:41, badge:null, description:'Warm clay terracotta with rattan-look insert panels — a bohemian luxury wardrobe.', longDescription:'Inspired by Tuscany\'s earthy palette, this wardrobe combines warm terracotta lacquer panels with rattan-effect woven insets in the upper half of each door. Gold ring handles complete the artisanal aesthetic.', image:pick(baseWardrobeImgs,6), images:[pick(baseWardrobeImgs,6), pick(baseWardrobeImgs,4), pick(baseWardrobeImgs,0), pick(baseWardrobeImgs,2)], specs:specs.wardrobe({height:'2200mm', width:'1800mm', depth:'580mm', doors:4}), features:features.wardrobe, colors:['Terracotta', 'Clay', 'Ochre'], finishes:['PU Lacquer Matt', 'Rattan Insert'], tags:['hinged','terracotta','rattan','bohemian'], inStock:true, leadTime:'30–40 Working Days' },
  { id:'hw-007', slug:'empire-gold-hinged-wardrobe', name:'Empire Gold Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:125000, originalPrice:155000, rating:4.9, reviews:21, badge:'Luxury', description:'Champagne gold acrylic shutters with integrated LED pelmet lighting and velvet-lined accessory drawers.', longDescription:'The Empire Gold is our most opulent hinged wardrobe. Champagne gold acrylic shutters catch light from all angles, and the integrated LED pelmet lighting illuminates the hanging space dramatically. Velvet-lined accessory drawers, a rotating tie rack, and a built-in safe compartment complete the luxury package.', image:pick(baseWardrobeImgs,7), images:[pick(baseWardrobeImgs,7), pick(baseWardrobeImgs,5), pick(baseWardrobeImgs,1), pick(baseWardrobeImgs,3)], specs:{...specs.wardrobe({height:'2400mm', width:'2400mm', depth:'600mm', doors:6}), internalFit:'Velvet Drawers, LED Lighting, Rotating Tie Rack, Hidden Safe'}, features:[...features.wardrobe,'Integrated LED Pelmet', 'Velvet-Lined Drawers','Hidden Safe'], colors:['Champagne Gold', 'Ivory Gold', 'Pearl'], finishes:['Acrylic High Gloss Gold'], tags:['hinged','gold','luxury','LED','opulent'], inStock:true, leadTime:'40–50 Working Days' },
  { id:'hw-008', slug:'milan-navy-hinged-wardrobe', name:'Milan Navy Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:72000, originalPrice:90000, rating:4.7, reviews:36, badge:'New', description:'Deep navy blue matte with polished chrome handles — a sophisticated continental feel.', longDescription:'Navy blue is the new classic. Our Milan Navy hinged wardrobe uses a premium deep navy matte laminate that is resistant to fingerprints and scratches. Polished chrome bar handles add a cool metallic contrast.', image:pick(baseWardrobeImgs,0), images:[pick(baseWardrobeImgs,0), pick(baseWardrobeImgs,6), pick(baseWardrobeImgs,4), pick(baseWardrobeImgs,2)], specs:specs.wardrobe({height:'2200mm', width:'1500mm', depth:'580mm', doors:3}), features:features.wardrobe, colors:['Navy Blue', 'Midnight', 'Cobalt'], finishes:['Laminate Matt'], tags:['hinged','navy','blue','continental'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'hw-009', slug:'plantation-shutter-hinged-wardrobe', name:'Plantation Shutter Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:82000, originalPrice:102000, rating:4.7, reviews:28, badge:null, description:'Louvred plantation shutter-style doors for a coastal colonial aesthetic with premium hardware.', longDescription:'The Plantation Shutter wardrobe features adjustable louvred slat doors in painted white MDF, evoking the colonial coastal aesthetic of heritage Indian bungalows. Available in white, cream, and sage green.', image:pick(baseWardrobeImgs,1), images:[pick(baseWardrobeImgs,1), pick(baseWardrobeImgs,5), pick(baseWardrobeImgs,7), pick(baseWardrobeImgs,3)], specs:specs.wardrobe({height:'2200mm', width:'1800mm', depth:'580mm', doors:4}), features:features.wardrobe, colors:['White', 'Cream', 'Sage Green'], finishes:['Painted MDF Louvred'], tags:['hinged','louvred','plantation','colonial'], inStock:true, leadTime:'30–40 Working Days' },
  { id:'hw-010', slug:'matte-black-hinged-wardrobe', name:'Matte Black Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:76000, originalPrice:95000, rating:4.8, reviews:53, badge:'Bestseller', description:'Flat matte black shutters with black bar handles — a dramatic, contemporary minimalist statement.', longDescription:'The Matte Black Hinged Wardrobe is for those who embrace bold simplicity. The charcoal black matte laminate shutters are paired with matching matte black bar handles, creating a seamless, all-black monochromatic aesthetic.', image:pick(baseWardrobeImgs,2), images:[pick(baseWardrobeImgs,2), pick(baseWardrobeImgs,6), pick(baseWardrobeImgs,0), pick(baseWardrobeImgs,4)], specs:specs.wardrobe({height:'2200mm', width:'1800mm', depth:'580mm', doors:4}), features:features.wardrobe, colors:['Matte Black', 'Charcoal', 'Slate'], finishes:['Laminate Matt'], tags:['hinged','black','matte','minimalist','bold'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'hw-011', slug:'ivory-rose-hinged-wardrobe', name:'Ivory Rose Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:68000, originalPrice:85000, rating:4.6, reviews:44, badge:null, description:'Soft ivory with blush rose inlay panels and gold hardware — gentle feminine luxury.', longDescription:'Ivory Rose combines an ivory PU lacquer main shutter with a blush rose acrylic inlay panel, framed in gold aluminium trim. A romantic, feminine wardrobe for the discerning homemaker.', image:pick(baseWardrobeImgs,3), images:[pick(baseWardrobeImgs,3), pick(baseWardrobeImgs,1), pick(baseWardrobeImgs,5), pick(baseWardrobeImgs,7)], specs:specs.wardrobe({height:'2200mm', width:'1500mm', depth:'580mm', doors:3}), features:features.wardrobe, colors:['Ivory + Rose', 'Cream + Blush', 'White + Pink'], finishes:['PU Lacquer + Acrylic'], tags:['hinged','ivory','rose','feminine','luxury'], inStock:true, leadTime:'30–40 Working Days' },
  { id:'hw-012', slug:'latte-brown-hinged-wardrobe', name:'Latte Brown Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:64000, originalPrice:80000, rating:4.5, reviews:67, badge:null, description:'Warm latte brown laminate — a versatile neutral that suits every bedroom style.', longDescription:'The Latte Brown is our most versatile hinged wardrobe. The warm brown matte laminate works with almost any interior palette — from boho to contemporary. Paired with brass cup handles, it has a warm, inviting feel.', image:pick(baseWardrobeImgs,4), images:[pick(baseWardrobeImgs,4), pick(baseWardrobeImgs,0), pick(baseWardrobeImgs,2), pick(baseWardrobeImgs,6)], specs:specs.wardrobe({height:'2200mm', width:'1500mm', depth:'580mm', doors:3}), features:features.wardrobe, colors:['Latte Brown', 'Hazelnut', 'Caramel'], finishes:['Laminate Matt'], tags:['hinged','brown','neutral','versatile'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'hw-013', slug:'silver-pine-hinged-wardrobe', name:'Silver Pine Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:71000, originalPrice:89000, rating:4.6, reviews:38, badge:null, description:'Silver pine wood grain with white shelving interior — a bright and airy Scandinavian look.', longDescription:'Silver pine is a light, cool-toned wood grain that gives rooms an airy, Scandinavian feel. Paired with chrome handles and a bright white interior, the Silver Pine Hinged Wardrobe is a favourite for children\'s rooms and guest bedrooms.', image:pick(baseWardrobeImgs,5), images:[pick(baseWardrobeImgs,5), pick(baseWardrobeImgs,1), pick(baseWardrobeImgs,3), pick(baseWardrobeImgs,7)], specs:specs.wardrobe({height:'2200mm', width:'1500mm', depth:'580mm', doors:3}), features:features.wardrobe, colors:['Silver Pine', 'Light Grey Wood', 'Ash'], finishes:['Laminate Wood Grain'], tags:['hinged','pine','silver','scandinavian'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'hw-014', slug:'luxury-panel-groove-hinged-wardrobe', name:'Panel Groove Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:84000, originalPrice:105000, rating:4.7, reviews:29, badge:null, description:'Shaker-style panel groove doors in white with polished chrome — a timeless kitchen-to-bedroom crossover.', longDescription:'Shaker styling comes to the wardrobe with our Panel Groove Hinged Wardrobe. The recessed panel doors in white MDF with a soft-close mechanism bring a classic, quality feel that works in traditional and transitional homes.', image:pick(baseWardrobeImgs,6), images:[pick(baseWardrobeImgs,6), pick(baseWardrobeImgs,0), pick(baseWardrobeImgs,4), pick(baseWardrobeImgs,2)], specs:specs.wardrobe({height:'2200mm', width:'1800mm', depth:'580mm', doors:4}), features:features.wardrobe, colors:['White', 'Cream', 'Sage'], finishes:['Painted MDF Shaker'], tags:['hinged','shaker','panel','classic'], inStock:true, leadTime:'30–40 Working Days' },
  { id:'hw-015', slug:'blush-velvet-hinged-wardrobe', name:'Blush Velvet Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:98000, originalPrice:122000, rating:4.8, reviews:18, badge:'Luxury', description:'Upholstered blush velvet door panels with gold nail-head trim — a glamorous, couture wardrobe.', longDescription:'The Blush Velvet Hinged Wardrobe is our most glamorous design. Each door panel is upholstered in soft-touch blush velvet with gold nail-head trim detail, framed in a gold aluminium profile. The interior is lined in ivory faux suede. A true couture piece.', image:pick(baseWardrobeImgs,7), images:[pick(baseWardrobeImgs,7), pick(baseWardrobeImgs,3), pick(baseWardrobeImgs,1), pick(baseWardrobeImgs,5)], specs:{...specs.wardrobe({height:'2200mm', width:'1800mm', depth:'580mm', doors:4}), internalFit:'Ivory Suede Interior, Velvet Drawers, Gold Hardware'}, features:[...features.wardrobe,'Velvet Upholstered Doors','Nail-Head Trim Detail'], colors:['Blush Pink', 'Dusty Mauve', 'Ivory'], finishes:['Velvet Upholstered'], tags:['hinged','velvet','blush','couture','luxury'], inStock:true, leadTime:'40–50 Working Days' },
  { id:'hw-016', slug:'mono-charcoal-hinged-wardrobe', name:'Mono Charcoal Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:74000, originalPrice:92000, rating:4.6, reviews:42, badge:null, description:'Monolithic charcoal grey with flush handle-free profile — brutalist minimalism at its finest.', longDescription:'The Mono Charcoal is a statement in restraint. Flush charcoal grey MDF doors with a push-to-open mechanism require no handles, creating a seamless monolithic facade. For those who believe less is more.', image:pick(baseWardrobeImgs,0), images:[pick(baseWardrobeImgs,0), pick(baseWardrobeImgs,6), pick(baseWardrobeImgs,4), pick(baseWardrobeImgs,2)], specs:{...specs.wardrobe({height:'2200mm', width:'1800mm', depth:'580mm', doors:4}), handles:'Push-to-Open (Handle-Free)'}, features:features.wardrobe, colors:['Charcoal Grey', 'Dark Grey', 'Slate'], finishes:['Laminate Matt'], tags:['hinged','charcoal','handle-free','minimalist'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'hw-017', slug:'pastel-mint-hinged-wardrobe', name:'Pastel Mint Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:61000, originalPrice:76000, rating:4.5, reviews:59, badge:null, description:'Refreshing mint green matte panels — cheerful and modern, ideal for contemporary homes.', longDescription:'Mint green brings freshness and energy to any bedroom. The Pastel Mint Hinged Wardrobe uses a premium mint green matte laminate paired with white porcelain knob handles for a charming, contemporary look.', image:pick(baseWardrobeImgs,1), images:[pick(baseWardrobeImgs,1), pick(baseWardrobeImgs,3), pick(baseWardrobeImgs,5), pick(baseWardrobeImgs,7)], specs:specs.wardrobe({height:'2200mm', width:'1500mm', depth:'580mm', doors:3}), features:features.wardrobe, colors:['Mint Green', 'Seafoam', 'Aqua Mint'], finishes:['Laminate Matt'], tags:['hinged','mint','green','cheerful','modern'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'hw-018', slug:'colonial-mahogany-hinged-wardrobe', name:'Colonial Mahogany Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:91000, originalPrice:114000, rating:4.8, reviews:31, badge:null, description:'Rich mahogany veneer with carved cornice and brass cup handles — a collector\'s piece.', longDescription:'The Colonial Mahogany is inspired by the grandeur of British colonial furniture. Deep mahogany veneer panels are topped with a carved crown cornice, and the brass cup handles add authentic period detail. A true heirloom wardrobe.', image:pick(baseWardrobeImgs,2), images:[pick(baseWardrobeImgs,2), pick(baseWardrobeImgs,4), pick(baseWardrobeImgs,0), pick(baseWardrobeImgs,6)], specs:specs.wardrobe({height:'2400mm', width:'2100mm', depth:'600mm', doors:5}), features:[...features.wardrobe,'Carved Crown Cornice','Antique Brass Hardware'], colors:['Mahogany', 'Cherry', 'Rosewood'], finishes:['Mahogany Veneer Oil'], tags:['hinged','mahogany','colonial','heritage'], inStock:true, leadTime:'40–50 Working Days' },
  { id:'hw-019', slug:'stone-grey-hinged-wardrobe', name:'Stone Grey Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:66000, originalPrice:83000, rating:4.6, reviews:48, badge:null, description:'Medium stone grey laminate — the most universally flattering wardrobe colour for Indian bedrooms.', longDescription:'Stone grey is the safe bet for Indian homes, working with almost any wall colour and bedroom style. The medium grey matte laminate is complemented by simple chrome bar handles and a clean white interior.', image:pick(baseWardrobeImgs,3), images:[pick(baseWardrobeImgs,3), pick(baseWardrobeImgs,7), pick(baseWardrobeImgs,1), pick(baseWardrobeImgs,5)], specs:specs.wardrobe({height:'2200mm', width:'1500mm', depth:'580mm', doors:3}), features:features.wardrobe, colors:['Stone Grey', 'Mid Grey', 'Pebble'], finishes:['Laminate Matt'], tags:['hinged','grey','stone','versatile'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'hw-020', slug:'butterscotch-gloss-hinged-wardrobe', name:'Butterscotch Gloss Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:73000, originalPrice:91000, rating:4.6, reviews:33, badge:null, description:'Warm butterscotch yellow high-gloss acrylic — playful and vibrant for the modern home.', longDescription:'The Butterscotch Gloss adds a bold, playful energy to the bedroom. The warm amber-yellow high-gloss acrylic panels bring a joyful vibrancy that pairs well with natural textures and houseplants.', image:pick(baseWardrobeImgs,4), images:[pick(baseWardrobeImgs,4), pick(baseWardrobeImgs,0), pick(baseWardrobeImgs,6), pick(baseWardrobeImgs,2)], specs:specs.wardrobe({height:'2200mm', width:'1500mm', depth:'580mm', doors:3}), features:features.wardrobe, colors:['Butterscotch', 'Honey', 'Amber Yellow'], finishes:['Acrylic High Gloss'], tags:['hinged','yellow','gloss','vibrant','playful'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'hw-021', slug:'midnight-forest-hinged-wardrobe', name:'Midnight Forest Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:79000, originalPrice:99000, rating:4.7, reviews:26, badge:null, description:'Dark forest green matte with antique brass hardware — a moody, sophisticated aesthetic.', longDescription:'Forest green and brass is the colour combination of the season. The Midnight Forest wardrobe uses a deep British racing green matte laminate with antique brass D-handles for a sophisticated, library-inspired look.', image:pick(baseWardrobeImgs,5), images:[pick(baseWardrobeImgs,5), pick(baseWardrobeImgs,1), pick(baseWardrobeImgs,3), pick(baseWardrobeImgs,7)], specs:specs.wardrobe({height:'2200mm', width:'1800mm', depth:'580mm', doors:4}), features:features.wardrobe, colors:['Forest Green', 'Hunter Green', 'Deep Green'], finishes:['Laminate Matt'], tags:['hinged','green','forest','brass','moody'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'hw-022', slug:'almond-panel-hinged-wardrobe', name:'Almond Panel Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:63000, originalPrice:79000, rating:4.5, reviews:71, badge:null, description:'Warm almond laminate with simple chrome handles — a versatile, timeless option.', longDescription:'Almond is a classic warm neutral that bridges the gap between white and brown. The Almond Panel Hinged Wardrobe is our best-value hinged option, using a premium almond laminate and chrome handles.', image:pick(baseWardrobeImgs,6), images:[pick(baseWardrobeImgs,6), pick(baseWardrobeImgs,2), pick(baseWardrobeImgs,4), pick(baseWardrobeImgs,0)], specs:specs.wardrobe({height:'2200mm', width:'1500mm', depth:'580mm', doors:3}), features:features.wardrobe, colors:['Almond', 'Cream', 'Warm White'], finishes:['Laminate Matt'], tags:['hinged','almond','neutral','value'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'hw-023', slug:'petrol-blue-hinged-wardrobe', name:'Petrol Blue Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:75000, originalPrice:94000, rating:4.6, reviews:32, badge:null, description:'Deep petrol blue-green matte — a rare, distinctive colour that makes any room unforgettable.', longDescription:'Petrol blue is a unique blue-green-grey that is sophisticated and completely unexpected in a wardrobe. The Petrol Blue Hinged Wardrobe uses a deep, rich matte laminate in this distinctive shade, paired with polished nickel handles.', image:pick(baseWardrobeImgs,7), images:[pick(baseWardrobeImgs,7), pick(baseWardrobeImgs,5), pick(baseWardrobeImgs,3), pick(baseWardrobeImgs,1)], specs:specs.wardrobe({height:'2200mm', width:'1800mm', depth:'580mm', doors:4}), features:features.wardrobe, colors:['Petrol Blue', 'Teal', 'Aegean'], finishes:['Laminate Matt'], tags:['hinged','petrol','teal','distinctive','modern'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'hw-024', slug:'jade-gloss-hinged-wardrobe', name:'Jade Gloss Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:77000, originalPrice:96000, rating:4.7, reviews:22, badge:'New', description:'Luminous jade green high-gloss acrylic — a striking colour that channels jade gemstone luxury.', longDescription:'Jade green acrylic shutters have a depth of colour that genuinely resembles the precious gemstone. Under different lighting, the colour shifts from deep emerald to warm yellow-green. Gold bar handles complete the gemstone-inspired look.', image:pick(baseWardrobeImgs,0), images:[pick(baseWardrobeImgs,0), pick(baseWardrobeImgs,4), pick(baseWardrobeImgs,6), pick(baseWardrobeImgs,2)], specs:specs.wardrobe({height:'2200mm', width:'1800mm', depth:'580mm', doors:4}), features:features.wardrobe, colors:['Jade Green', 'Emerald', 'Malachite'], finishes:['Acrylic High Gloss'], tags:['hinged','jade','green','gloss','gemstone'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'hw-025', slug:'carved-cream-hinged-wardrobe', name:'Carved Cream Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:95000, originalPrice:119000, rating:4.8, reviews:14, badge:'Luxury', description:'CNC-carved arabesque pattern on cream MDF doors — artisanal handcraft meets modern manufacturing.', longDescription:'The Carved Cream Hinged Wardrobe is produced using precision CNC routing to carve an intricate arabesque pattern into the door face of each 18mm MDF shutter. Painted in warm cream, this wardrobe is as much a piece of art as it is storage.', image:pick(baseWardrobeImgs,1), images:[pick(baseWardrobeImgs,1), pick(baseWardrobeImgs,3), pick(baseWardrobeImgs,5), pick(baseWardrobeImgs,7)], specs:specs.wardrobe({height:'2200mm', width:'1800mm', depth:'580mm', doors:4}), features:[...features.wardrobe,'CNC-Carved Arabesque Pattern','Artisanal Handpaint Finish'], colors:['Cream', 'Antique White', 'Ivory'], finishes:['Carved Painted MDF'], tags:['hinged','carved','arabesque','artisanal','luxury'], inStock:true, leadTime:'40–50 Working Days' },
];

// ===== WALK-IN WARDROBES — 20 products =====
export const walkInWardrobes = Array.from({ length: 20 }, (_, i) => {
  const names = ['Grand Suite Walk-In','Penthouse Closet','Boulevard Walk-In','Couture Closet','Executive Walk-In','Palazzo Walk-In','Dressing Room Elite','Royal Walk-In','Prestige Closet','Hollywood Closet','Celebrity Walk-In','Boudoir Walk-In','Boutique Closet','Maison Walk-In','Atelier Closet','Signature Walk-In','Premium Dressing Room','Designer Closet','Island Walk-In','Luxury Capsule Walk-In'];
  const prices = [180000,250000,165000,310000,195000,275000,145000,290000,160000,320000,215000,185000,230000,270000,195000,240000,170000,255000,300000,175000];
  const descShort = ['Expansive walk-in wardrobe with island dresser and chandelier.','Ultra-luxury penthouse closet with LED ribbon lighting.','Boulevard-inspired layout with custom shoe wall display.','Floor-to-ceiling display cases and velvet-lined accessories drawers.','Executive walk-in with built-in safe and suit section.','Italian-inspired palace walk-in with marble-effect shelving.','Elegant dressing room with vanity table and mirror.','Royal design with ornate detailing and velvet upholstery.','Streamlined premium walk-in with modular adjustable shelving.','Glam Hollywood-style walk-in with neon accent and mirror island.','Celebrity-grade closet with automated rail system.','French boudoir walk-in with pink velvet and gold hardware.','Boutique-style walk-in with display island and glass shelving.','Maison-inspired French country walk-in closet.','Designer studio closet with open display and valet stand.','Signature series with customizable layout and premium finishes.','Premium dressing room with natural veneer and brass hardware.','Minimalist designer walk-in with handleless integrated units.','Island-centred walk-in with 360° mirror and seating bench.','Compact luxury walk-in with maximised vertical storage.'];
  return {
    id: `wi-${String(i+1).padStart(3,'0')}`,
    slug: names[i].toLowerCase().replace(/\s+/g,'-').replace(/[^\w-]/g,''),
    name: names[i],
    category: 'Wardrobes',
    subcategory: 'Walk-In Wardrobes',
    price: prices[i],
    originalPrice: Math.round(prices[i] * 1.25),
    rating: (4.5 + Math.random() * 0.45).toFixed(1),
    reviews: 10 + Math.floor(Math.random() * 100),
    badge: i === 0 ? 'Bestseller' : i === 3 ? 'Luxury' : i === 9 ? 'Popular' : null,
    description: descShort[i],
    longDescription: `${descShort[i]} Crafted with 18mm BWR-grade carcass boards and premium finishes. Each walk-in wardrobe is fully customisable to your space, with our team conducting a dedicated site visit, 3D design, and personalised layout planning. Includes Hettich or Hafele hardware throughout.`,
    image: pick(baseWardrobeImgs, i),
    images: [pick(baseWardrobeImgs, i), pick(baseWardrobeImgs, (i+1)%8), pick(baseWardrobeImgs, (i+2)%8), pick(baseWardrobeImgs, (i+3)%8)],
    specs: { ...specs.wardrobe({ height:'2400mm', width:'Custom', depth:'600mm' }), carcassBoard:'18mm BWR Plywood (Greenply / Century)', layout:'Walk-In — L/U/Straight Configuration Available' },
    features: [...features.wardrobe, 'Custom Island Dresser Available', 'Integrated LED Lighting', 'Full Site-Visit & 3D Design'],
    colors: [...colors.warm, ...colors.neutral],
    finishes: ['Veneer', 'PU Lacquer', 'Acrylic', 'Laminate'],
    tags: ['walk-in', 'luxury', 'custom', 'dressing room'],
    inStock: true,
    leadTime: '45–60 Working Days',
  };
});

// ===== MIRROR WARDROBES — 20 products =====
export const mirrorWardrobes = Array.from({ length: 20 }, (_, i) => {
  const names = ['Full Mirror Sliding','Mirrored Hinged Classic','Venetian Mirror Wardrobe','Smoked Mirror Wardrobe','Gold Frame Mirror Wardrobe','Antique Mirror Wardrobe','Panel Mirror Wardrobe','Double Mirror Wardrobe','Bronze Mirror Wardrobe','Crystal Mirror Wardrobe','Tinted Rose Mirror','Silver Edge Mirror','Arched Mirror Wardrobe','Oval Insert Mirror','Art Deco Mirror Wardrobe','Frosted Edge Mirror','Baroque Mirror Wardrobe','Contemporary Mirror Wardrobe','Luxury Mirror Suite','Minimalist Mirror Wardrobe'];
  const prices = [72000,58000,85000,79000,105000,88000,65000,71000,92000,115000,68000,62000,87000,74000,110000,69000,125000,76000,135000,59000];
  return {
    id: `mw-${String(i+1).padStart(3,'0')}`,
    slug: names[i].toLowerCase().replace(/\s+/g,'-').replace(/[^\w-]/g,''),
    name: names[i],
    category: 'Wardrobes',
    subcategory: 'Mirror Wardrobes',
    price: prices[i],
    originalPrice: Math.round(prices[i] * 1.25),
    rating: (4.5 + Math.random() * 0.45).toFixed(1),
    reviews: 10 + Math.floor(Math.random() * 100),
    badge: i === 0 ? 'Bestseller' : i === 9 ? 'Luxury' : i === 16 ? 'Luxury' : null,
    description: `${names[i]} — premium wardrobe featuring full or partial mirror panels. Adds depth, light, and elegance to any bedroom.`,
    longDescription: `The ${names[i]} combines the practicality of a full-length mirror with premium wardrobe storage. Mirror panels are 5mm toughened float glass, bonded to MDF backing for safety. Available in sliding or hinged door configurations, with various frame and trim options.`,
    image: pick(baseWardrobeImgs, i%8),
    images: [pick(baseWardrobeImgs, i%8), pick(baseWardrobeImgs, (i+1)%8), pick(baseWardrobeImgs, (i+2)%8), pick(baseWardrobeImgs, (i+3)%8)],
    specs: specs.wardrobe({ height:'2400mm', width:'1800mm', depth:'600mm', doors: 2 + (i%3) }),
    features: [...features.wardrobe, '5mm Toughened Mirror Glass', 'Mirror Options: Clear / Smoked / Bronze / Antique'],
    colors: colors.neutral,
    finishes: ['Mirror Glass', 'Smoked Glass', 'Bronze Tint', 'Frosted'],
    tags: ['mirror', 'wardrobe', 'glass', 'space-enhancing'],
    inStock: true,
    leadTime: '25–35 Working Days',
  };
});

// ===== KIDS WARDROBES — 15 products =====
export const kidsWardrobes = Array.from({ length: 15 }, (_, i) => {
  const names = ['Rainbow Kids Wardrobe','Bunny Hop Wardrobe','Space Explorer Wardrobe','Princess Pink Wardrobe','Jungle Safari Wardrobe','Dino World Wardrobe','Ocean Blue Kids Wardrobe','Superhero Wardrobe','Fairy Tale Wardrobe','Little Chef Wardrobe','Star Gazer Wardrobe','Treehouse Kids Wardrobe','Candy Stripe Wardrobe','Arctic Adventure Wardrobe','Garden Bloom Kids Wardrobe'];
  const prices = [45000,42000,48000,44000,46000,43000,41000,47000,49000,40000,45000,44000,38000,42000,46000];
  const themes = ['Rainbow','Bunny','Space','Princess','Jungle','Dinosaur','Ocean','Superhero','Fairy Tale','Little Chef','Stars','Treehouse','Candy','Arctic','Garden'];
  return {
    id: `kw-${String(i+1).padStart(3,'0')}`,
    slug: names[i].toLowerCase().replace(/\s+/g,'-').replace(/[^\w-]/g,''),
    name: names[i],
    category: 'Wardrobes',
    subcategory: 'Kids Wardrobes',
    price: prices[i],
    originalPrice: Math.round(prices[i] * 1.25),
    rating: (4.4 + Math.random() * 0.55).toFixed(1),
    reviews: 15 + Math.floor(Math.random() * 80),
    badge: i === 0 ? 'Popular' : i === 3 ? 'Bestseller' : null,
    description: `${themes[i]}-themed kids wardrobe with child-safe hardware, colourful design, and smart storage. Safe, durable, and delightful.`,
    longDescription: `The ${names[i]} is designed with your child's imagination and safety in mind. All hardware is rounded and child-safe (no sharp corners), and the soft-close mechanism prevents finger-pinch accidents. The wardrobe features a low hanging rod for easy access, a toy shelf, a dedicated school bag hook, and colourful drawer fronts in the ${themes[i]} theme.`,
    image: pick(baseWardrobeImgs, i%8),
    images: [pick(baseWardrobeImgs, i%8), pick(baseWardrobeImgs, (i+1)%8), pick(baseWardrobeImgs, (i+2)%8), pick(baseWardrobeImgs, (i+3)%8)],
    specs: { ...specs.wardrobe({height:'1800mm', width:'1200mm', depth:'550mm', doors:2}), hinges:'Child-Safe Rounded Soft-Close Hinges', internalFit:'Low Hanging Rod, Toy Shelf, Colourful Drawers, Hook Panel' },
    features: [...features.wardrobe.slice(0,4), 'Child-Safe Rounded Hardware', 'Low Hanging Rod for Easy Access', 'Themed Colour Palette', 'Non-Toxic Finish (GREENGUARD Compliant)'],
    colors: ['Rainbow Multi', 'Pastel Pink', 'Sky Blue', 'Lime Green', 'Sunshine Yellow'],
    finishes: ['Non-Toxic Painted MDF', 'Laminate'],
    tags: ['kids', 'children', 'themed', 'colourful', 'safe'],
    inStock: true,
    leadTime: '20–28 Working Days',
  };
});

// ===== MODULAR KITCHENS — 30 products =====
export const modularKitchens = [
  { id:'mk-001', slug:'grand-italian-l-shape-kitchen', name:'Grand Italian L-Shape Kitchen', category:'Kitchens', subcategory:'Modular Kitchens', price:350000, originalPrice:435000, rating:4.9, reviews:87, badge:'Bestseller', description:'European-style L-shaped kitchen with Italian acrylic shutters, quartz countertop, and full Hettich hardware package.', longDescription:'The Grand Italian L-Shape is our flagship kitchen. Featuring premium Italian acrylic high-gloss shutters in pure white, a 30mm Italian Calacatta quartz countertop, and a complete Hettich soft-close hardware package. The L-shaped layout is ideal for medium to large kitchens and offers excellent workflow efficiency.', image:pick(baseKitchenImgs,0), images:[pick(baseKitchenImgs,0), pick(baseKitchenImgs,1), pick(baseKitchenImgs,2), pick(baseKitchenImgs,3)], specs:{...specs.kitchen('L-Shape'), countertop:'30mm Calacatta Quartz', shutterFinish:'Italian Acrylic High Gloss'}, features:features.kitchen, colors:['Pure White', 'Ivory', 'Cream'], finishes:['Acrylic High Gloss', 'Matte Acrylic'], tags:['kitchen','L-shape','italian','acrylic','quartz'], inStock:true, leadTime:'35–45 Working Days' },
  { id:'mk-002', slug:'charcoal-handleless-parallel-kitchen', name:'Charcoal Handleless Parallel Kitchen', category:'Kitchens', subcategory:'Modular Kitchens', price:285000, originalPrice:355000, rating:4.8, reviews:63, badge:'Popular', description:'Sleek charcoal grey handleless parallel kitchen with J-pull profile, black granite countertop, and built-in appliance housing.', longDescription:'The Charcoal Handleless is a designer favourite. The parallel layout maximises workflow in narrow kitchens. Charcoal grey matte laminate shutters with J-pull aluminium profile handle eliminate the need for visible hardware, creating a seamless facade. The black galaxy granite countertop adds depth and drama.', image:pick(baseKitchenImgs,1), images:[pick(baseKitchenImgs,1), pick(baseKitchenImgs,0), pick(baseKitchenImgs,3), pick(baseKitchenImgs,4)], specs:{...specs.kitchen('Parallel'), countertop:'Black Galaxy Granite', shutterFinish:'Matte Laminate', handles:'J-Pull Aluminium Profile'}, features:features.kitchen, colors:['Charcoal', 'Dark Grey', 'Graphite'], finishes:['Laminate Matt'], tags:['kitchen','parallel','handleless','charcoal','granite'], inStock:true, leadTime:'35–45 Working Days' },
  { id:'mk-003', slug:'island-luxury-kitchen', name:'Island Luxury Kitchen', category:'Kitchens', subcategory:'Modular Kitchens', price:550000, originalPrice:688000, rating:4.9, reviews:41, badge:'Luxury', description:'Grand island kitchen with marble countertop, PU lacquer shutters, integrated wine rack, and pendant lighting provision.', longDescription:'The Island Luxury Kitchen is the pinnacle of modular kitchen design. A central island counter with waterfall marble edge creates a dramatic focal point, while the perimeter cabinetry in PU lacquer white provides generous storage. An integrated wine rack, appliance tower, and tall pantry unit complete the package.', image:pick(baseKitchenImgs,2), images:[pick(baseKitchenImgs,2), pick(baseKitchenImgs,0), pick(baseKitchenImgs,1), pick(baseKitchenImgs,5)], specs:{...specs.kitchen('Island'), countertop:'Statuario Marble / Quartz', shutterFinish:'PU Lacquer White / Veneer', internalFit:'Wine Rack, Appliance Tower, Pantry, Tall Units'}, features:[...features.kitchen,'Island Counter with Seating','Integrated Wine Rack','Appliance Tower','Pendant Lighting Provision'], colors:['White + Marble', 'Ivory + Veneer', 'Grey + Quartz'], finishes:['PU Lacquer', 'Veneer', 'Acrylic'], tags:['kitchen','island','marble','luxury','premium'], inStock:true, leadTime:'45–60 Working Days' },
  { id:'mk-004', slug:'u-shape-scandinavian-kitchen', name:'U-Shape Scandinavian Kitchen', category:'Kitchens', subcategory:'Modular Kitchens', price:320000, originalPrice:400000, rating:4.7, reviews:55, badge:null, description:'Birch-effect U-shape kitchen with black hardware and white quartz countertop — clean Nordic design.', longDescription:'The U-Shape Scandinavian Kitchen wraps three walls with storage and workspace, making it the most efficient layout for medium to large kitchens. Light birch-effect laminate shutters are paired with matte black handles and a white quartz countertop for a fresh, Nordic aesthetic.', image:pick(baseKitchenImgs,3), images:[pick(baseKitchenImgs,3), pick(baseKitchenImgs,1), pick(baseKitchenImgs,5), pick(baseKitchenImgs,7)], specs:{...specs.kitchen('U-Shape'), countertop:'Pure White Quartz', shutterFinish:'Birch Effect Laminate', handles:'Matte Black'}, features:features.kitchen, colors:['Birch + Black', 'Linen + Chrome', 'Grey + Black'], finishes:['Laminate Matt', 'Laminate Wood Grain'], tags:['kitchen','U-shape','scandinavian','birch','nordic'], inStock:true, leadTime:'35–45 Working Days' },
  { id:'mk-005', slug:'sage-green-shaker-kitchen', name:'Sage Green Shaker Kitchen', category:'Kitchens', subcategory:'Modular Kitchens', price:295000, originalPrice:369000, rating:4.8, reviews:72, badge:'Popular', description:'Classic shaker-style sage green kitchen with brass hardware and Carrara marble-look quartz — timeless British design.', longDescription:'Shaker kitchens are the ultimate classic, and sage green is the colour of the decade. Our Sage Green Shaker Kitchen uses 18mm MDF shaker-profile shutters in sage green with brass cup handles and bar pulls. The Carrara marble-look quartz countertop completes the timeless look. Suitable for L-shape, parallel, or U-shape layouts.', image:pick(baseKitchenImgs,4), images:[pick(baseKitchenImgs,4), pick(baseKitchenImgs,2), pick(baseKitchenImgs,6), pick(baseKitchenImgs,8)], specs:{...specs.kitchen('L-Shape / U-Shape / Parallel'), countertop:'Carrara Marble-Look Quartz', shutterFinish:'Painted MDF Shaker', handles:'Antique Brass'}, features:features.kitchen, colors:['Sage Green', 'Olive', 'Pistachio'], finishes:['Painted Shaker MDF'], tags:['kitchen','shaker','sage','british','timeless'], inStock:true, leadTime:'35–45 Working Days' },
  { id:'mk-006', slug:'navy-gold-l-shape-kitchen', name:'Navy Gold L-Shape Kitchen', category:'Kitchens', subcategory:'Modular Kitchens', price:380000, originalPrice:475000, rating:4.8, reviews:38, badge:null, description:'Deep navy blue lower cabinets with gold handles and white upper cabinets — a bold two-tone masterpiece.', longDescription:'Two-tone kitchens are at the forefront of modern kitchen design. The Navy Gold combines deep navy blue PU lacquer lower cabinets with crisp white upper cabinets and polished gold bar handles. The visual contrast is striking and sophisticated.', image:pick(baseKitchenImgs,5), images:[pick(baseKitchenImgs,5), pick(baseKitchenImgs,3), pick(baseKitchenImgs,0), pick(baseKitchenImgs,7)], specs:{...specs.kitchen('L-Shape'), countertop:'White Quartz + Navy Island', shutterFinish:'PU Lacquer Navy + White', handles:'Polished Gold'}, features:features.kitchen, colors:['Navy + White', 'Midnight + Ivory', 'Cobalt + Cream'], finishes:['PU Lacquer Matt'], tags:['kitchen','navy','two-tone','gold','bold'], inStock:true, leadTime:'35–45 Working Days' },
  { id:'mk-007', slug:'all-white-acrylic-kitchen', name:'All White Acrylic Kitchen', category:'Kitchens', subcategory:'Modular Kitchens', price:260000, originalPrice:325000, rating:4.7, reviews:94, badge:'Bestseller', description:'Timeless all-white high-gloss acrylic kitchen — clean, bright, and eternally modern.', longDescription:'The All White Acrylic Kitchen is our best-seller for a reason: it works in every home, brightens every space, and never goes out of style. Premium high-gloss white acrylic shutters are paired with a white quartz countertop and chrome hardware for a seamlessly white, light-filled kitchen.', image:pick(baseKitchenImgs,6), images:[pick(baseKitchenImgs,6), pick(baseKitchenImgs,0), pick(baseKitchenImgs,4), pick(baseKitchenImgs,8)], specs:{...specs.kitchen('L-Shape'), countertop:'White Quartz', shutterFinish:'Acrylic High Gloss White', handles:'Chrome'}, features:features.kitchen, colors:['Pure White', 'Snow White', 'Polar White'], finishes:['Acrylic High Gloss'], tags:['kitchen','white','acrylic','gloss','timeless'], inStock:true, leadTime:'30–45 Working Days' },
  { id:'mk-008', slug:'walnut-veneer-modern-kitchen', name:'Walnut Veneer Modern Kitchen', category:'Kitchens', subcategory:'Modular Kitchens', price:420000, originalPrice:525000, rating:4.9, reviews:29, badge:'Luxury', description:'Real walnut veneer kitchen shutters with quartz countertop and gold fixtures — warmth and luxury combined.', longDescription:'The Walnut Veneer Modern Kitchen brings the warmth of real wood into the contemporary kitchen. Natural walnut veneer shutters in a satin oil finish are paired with a warm grey quartz countertop and gold fixtures. The result is a kitchen that feels both luxurious and inviting — a true centrepiece.', image:pick(baseKitchenImgs,7), images:[pick(baseKitchenImgs,7), pick(baseKitchenImgs,1), pick(baseKitchenImgs,5), pick(baseKitchenImgs,9)], specs:{...specs.kitchen('L-Shape'), countertop:'Warm Grey Quartz', shutterFinish:'Natural Walnut Veneer Satin', handles:'Gold / Brushed Brass'}, features:features.kitchen, colors:['Walnut Natural', 'Dark Walnut', 'Light Walnut'], finishes:['Natural Veneer Oil', 'Veneer Lacquer'], tags:['kitchen','walnut','veneer','luxury','warm'], inStock:true, leadTime:'40–55 Working Days' },
  { id:'mk-009', slug:'terracotta-rustic-kitchen', name:'Terracotta Rustic Kitchen', category:'Kitchens', subcategory:'Modular Kitchens', price:275000, originalPrice:344000, rating:4.6, reviews:46, badge:'New', description:'Earthy terracotta shutters with exposed brick-effect tiles and brass hardware — a rustic Mediterranean vibe.', longDescription:'Terracotta and brass is one of the most inviting combinations in kitchen design. The Terracotta Rustic Kitchen uses deep terracotta matte laminate shutters with antique brass handles. Paired with suggested brick-effect tiles (not included), this kitchen evokes a sun-drenched Mediterranean home.', image:pick(baseKitchenImgs,8), images:[pick(baseKitchenImgs,8), pick(baseKitchenImgs,4), pick(baseKitchenImgs,6), pick(baseKitchenImgs,0)], specs:{...specs.kitchen('L-Shape'), countertop:'Granite / Butcher Block', shutterFinish:'Matte Laminate Terracotta', handles:'Antique Brass'}, features:features.kitchen, colors:['Terracotta', 'Clay', 'Rust Red'], finishes:['Laminate Matt'], tags:['kitchen','terracotta','rustic','mediterranean','earthy'], inStock:true, leadTime:'35–45 Working Days' },
  { id:'mk-010', slug:'midnight-black-island-kitchen', name:'Midnight Black Island Kitchen', category:'Kitchens', subcategory:'Modular Kitchens', price:490000, originalPrice:612000, rating:4.9, reviews:33, badge:'Luxury', description:'All-black island kitchen with matte black shutters, black countertop, and brass fixtures — pure dramatic luxury.', longDescription:'The Midnight Black Island Kitchen is for those who want a kitchen that makes a statement. Matte black laminate shutters, a black granite countertop, and black island counter are contrasted by polished brass fixtures. Integrated LED lighting under the cabinets creates a dramatic effect at night.', image:pick(baseKitchenImgs,9), images:[pick(baseKitchenImgs,9), pick(baseKitchenImgs,7), pick(baseKitchenImgs,5), pick(baseKitchenImgs,3)], specs:{...specs.kitchen('Island'), countertop:'Black Granite / Black Quartz', shutterFinish:'Matte Laminate Black', handles:'Polished Brass', internalFit:'Island Counter, Appliance Tower, Wine Rack, LED Under-Cabinet'}, features:[...features.kitchen,'Integrated LED Under-Cabinet Lighting','Island Seating for 4'], colors:['Midnight Black', 'Jet Black', 'Onyx'], finishes:['Laminate Matt Black'], tags:['kitchen','black','island','brass','dramatic','luxury'], inStock:true, leadTime:'45–60 Working Days' },
  // mk-011 to mk-030 (condensed)
  ...Array.from({length:20}, (_,i) => {
    const kNames = ['Pastel Blue Parallel Kitchen','Ivory Shaker L-Shape Kitchen','Forest Green Kitchen','Rose Gold Kitchen','Concrete Grey Kitchen','Champagne Gloss Kitchen','Oak Effect Kitchen','Burgundy Kitchen','Cobalt Blue Kitchen','Pistachio Slim Kitchen','Mineral White Kitchen','Latte Beige Kitchen','Storm Grey Modular Kitchen','Jade Green Island Kitchen','Blush Pink Kitchen','Arctic White U-Shape Kitchen','Teak Wood Island Kitchen','Classic Cream Shaker Kitchen','Burnt Orange Kitchen','Matte Olive Kitchen'];
    const kPrices = [245000,310000,340000,460000,265000,395000,285000,375000,320000,230000,250000,295000,330000,520000,270000,365000,440000,280000,310000,255000];
    return {
      id: `mk-${String(11+i).padStart(3,'0')}`,
      slug: kNames[i].toLowerCase().replace(/\s+/g,'-').replace(/[^\w-]/g,''),
      name: kNames[i],
      category:'Kitchens', subcategory:'Modular Kitchens',
      price:kPrices[i], originalPrice:Math.round(kPrices[i]*1.25),
      rating:(4.4+Math.random()*0.55).toFixed(1), reviews:10+Math.floor(Math.random()*90),
      badge: i===3?'Luxury':i===13?'Luxury':i===0?'Popular':null,
      description:`${kNames[i]} — premium modular kitchen with soft-close hardware, quartz countertop, and fully customisable layout.`,
      longDescription:`The ${kNames[i]} is a beautiful modular kitchen solution crafted with 18mm BWR-grade plywood carcass, premium finish shutters, and Hettich or Blum soft-close hardware. Available in L-shape, parallel, U-shape, or island configuration depending on your kitchen space. Our design team will visit your site, take precise measurements, and create a 3D layout for your approval before manufacturing begins.`,
      image:pick(baseKitchenImgs,i%10), images:[pick(baseKitchenImgs,i%10), pick(baseKitchenImgs,(i+1)%10), pick(baseKitchenImgs,(i+2)%10), pick(baseKitchenImgs,(i+3)%10)],
      specs:specs.kitchen(['L-Shape','U-Shape','Parallel','Island'][i%4]),
      features:features.kitchen, colors:colors.warm, finishes:['Laminate','PU Lacquer','Acrylic','Veneer'],
      tags:['kitchen','modular','premium'], inStock:true, leadTime:'35–45 Working Days',
    };
  }),
];

// ===== TV UNITS — 15 products =====
export const tvUnits = Array.from({ length: 15 }, (_, i) => {
  const names = ['Floating Walnut TV Unit','White Gloss Entertainment Unit','Charcoal Wall Panel TV Unit','Teak Open Shelf Unit','Handleless Grey TV Console','Gold Accent Media Unit','Industrial Pipe TV Unit','Minimalist White TV Unit','Luxury Wood Panel Unit','Modern Black TV Wall','Classic Cream TV Unit','Oak Entertainment Hub','Marble Top TV Console','Two-Tone TV Wall Unit','Rattan Accent TV Unit'];
  const prices = [42000,35000,55000,48000,38000,68000,32000,28000,75000,52000,30000,44000,62000,46000,36000];
  return {
    id: `tv-${String(i+1).padStart(3,'0')}`,
    slug: names[i].toLowerCase().replace(/\s+/g,'-').replace(/[^\w-]/g,''),
    name: names[i], category:'Furniture', subcategory:'TV Units',
    price: prices[i], originalPrice: Math.round(prices[i]*1.25),
    rating:(4.4+Math.random()*0.55).toFixed(1), reviews:10+Math.floor(Math.random()*100),
    badge: i===0?'Bestseller':i===8?'Luxury':null,
    description:`${names[i]} — premium TV unit with smart cable management, soft-close drawers, and premium finish.`,
    longDescription:`The ${names[i]} is designed for the modern living room. Built with 18mm pre-laminated particle board, it features integrated cable management channels, soft-close drawers, and open display shelves. Available in wall-mounted (floating) or floor-standing configurations. Supports TVs up to 85 inches.`,
    image:pick(baseTVImgs,i%4), images:[pick(baseTVImgs,i%4), pick(baseTVImgs,(i+1)%4), pick(baseTVImgs,(i+2)%4), pick(baseTVImgs,(i+3)%4)],
    specs: specs.tvUnit(),
    features:['Built-in Cable Management','Soft-Close Drawers & Cabinets','Open Display Shelving','LED Under-Mount Lighting (Optional)','Wall-Mounted / Floor Configuration','Compatible up to 85" TV'],
    colors:[...colors.warm,...colors.neutral], finishes:['Laminate','PU Lacquer','Veneer'],
    tags:['TV unit','media','living room','entertainment'], inStock:true, leadTime:'20–28 Working Days',
  };
});

// ===== BATHROOM VANITY — 10 products =====
export const bathroomVanities = Array.from({ length: 10 }, (_, i) => {
  const names = ['Floating White Vanity','Teak Double Vanity','Black Marble Vanity','Rosewood Luxury Vanity','Minimalist Grey Vanity','Gold Trim Vanity Unit','Coastal Blue Vanity','Onyx Black Vanity','Ivory Gloss Vanity','Walnut Bronze Vanity'];
  const prices = [38000,72000,85000,95000,42000,78000,44000,88000,36000,68000];
  return {
    id: `bv-${String(i+1).padStart(3,'0')}`,
    slug: names[i].toLowerCase().replace(/\s+/g,'-').replace(/[^\w-]/g,''),
    name: names[i], category:'Furniture', subcategory:'Bathroom Vanity',
    price: prices[i], originalPrice: Math.round(prices[i]*1.25),
    rating:(4.5+Math.random()*0.45).toFixed(1), reviews:8+Math.floor(Math.random()*70),
    badge: i===3?'Luxury':i===0?'Popular':null,
    description:`${names[i]} — waterproof, premium bathroom vanity with LED mirror and soft-close hardware.`,
    longDescription:`The ${names[i]} is engineered for the Indian bathroom environment. Built with marine-grade plywood and 100% waterproof laminate, it resists moisture, warping, and termites. Each unit includes a ceramic or acrylic basin, chrome faucet provision, and a backlit LED mirror. Soft-close hinges and undermount drawers complete the premium package.`,
    image:pick(baseVanityImgs,i%5), images:[pick(baseVanityImgs,i%5), pick(baseVanityImgs,(i+1)%5), pick(baseVanityImgs,(i+2)%5), pick(baseVanityImgs,(i+3)%5)],
    specs:specs.vanity(),
    features:['100% Waterproof Marine Plywood','Waterproof Laminate Finish','Ceramic / Acrylic Counter Basin','Backlit LED Mirror Included','Soft-Close Hinges & Drawers','Anti-Rust Chrome Hardware','Termite & Moisture Resistant'],
    colors:[...colors.neutral,...colors.warm], finishes:['Waterproof Laminate','PU Lacquer'],
    tags:['vanity','bathroom','waterproof','premium'], inStock:true, leadTime:'20–28 Working Days',
  };
});

// ===== LUXURY FURNITURE — 20 products =====
export const luxuryFurniture = Array.from({ length: 20 }, (_, i) => {
  const names = ['King Upholstered Bed','Queen Platform Bed','Luxury Bedside Table','Walnut Wardrobe Chest','Designer Study Table','L-Shape Office Desk','Luxury Dining Table','Premium Bookshelf','Velvet Ottoman','Gold Console Table','Marble Coffee Table','Rattan Accent Chair','Luxury Sofa Unit','Boudoir Dressing Table','Floating Bookcase','Rattan Bar Cabinet','Teak Sideboard','Brass Étagère','Upholstered Bench','Curved Reading Chair'];
  const prices = [85000,65000,18000,55000,38000,72000,95000,42000,22000,35000,68000,28000,125000,45000,32000,58000,88000,48000,24000,36000];
  const categories = ['Bed','Bed','Side Table','Storage','Study','Study','Dining','Storage','Seating','Accent','Coffee Table','Seating','Sofa','Vanity','Bookcase','Bar','Sideboard','Display','Seating','Seating'];
  return {
    id: `lf-${String(i+1).padStart(3,'0')}`,
    slug: names[i].toLowerCase().replace(/\s+/g,'-').replace(/[^\w-]/g,''),
    name: names[i], category:'Furniture', subcategory:'Luxury Furniture',
    price: prices[i], originalPrice: Math.round(prices[i]*1.25),
    rating:(4.5+Math.random()*0.45).toFixed(1), reviews:5+Math.floor(Math.random()*80),
    badge: i===0?'Bestseller':i===12?'Luxury':i===10?'Popular':null,
    furnitureType: categories[i],
    description:`Premium ${categories[i]} — ${names[i]}. Crafted with luxury materials, premium hardware, and exceptional attention to detail.`,
    longDescription:`The ${names[i]} is a premium furniture piece crafted for the luxury Indian home. Using only the finest solid wood frames, premium upholstery fabrics, and metal accents, this piece is built to be a focal point in any room. Available in multiple configurations and finishes; our team will work with you to match your existing decor.`,
    image:pick(baseFurnitureImgs,i%7), images:[pick(baseFurnitureImgs,i%7), pick(baseFurnitureImgs,(i+1)%7), pick(baseFurnitureImgs,(i+2)%7), pick(baseFurnitureImgs,(i+3)%7)],
    specs:{ material:'Solid Teak / Sheesham / Plywood Frame', upholstery:'Premium Velvet / Linen / Faux Leather', finish:'PU Lacquer / Natural Oil / Painted', hardware:'Gold / Chrome / Matte Black', warranty:'5 Years Structural Warranty', delivery:'20–30 Working Days', installation:'1 Day Assembly Service' },
    features:['Premium Solid Wood Frame','High-Density Foam Cushioning','Premium Upholstery Fabric','Anti-Tarnish Metal Hardware','Customisable Dimensions','Professional Assembly Included'],
    colors:[...colors.warm,...colors.neutral,...colors.dark],
    finishes:['PU Lacquer','Natural Oil','Painted'],
    tags:['luxury','furniture','premium','bespoke'], inStock:true, leadTime:'20–30 Working Days',
  };
});

// ===== COMBINED ALL PRODUCTS =====
export const allProducts = [
  ...slidingWardrobes,
  ...hingedWardrobes,
  ...walkInWardrobes,
  ...mirrorWardrobes,
  ...kidsWardrobes,
  ...modularKitchens,
  ...tvUnits,
  ...bathroomVanities,
  ...luxuryFurniture,
];

// ===== CATEGORY MAP =====
export const categories = [
  { id:'sliding-wardrobes', name:'Sliding Wardrobes', slug:'sliding-wardrobes', count:25, image:pick(baseWardrobeImgs,0), description:'Space-saving sliding door wardrobes with premium soft-close systems.' },
  { id:'hinged-wardrobes', name:'Hinged Wardrobes', slug:'hinged-wardrobes', count:25, image:pick(baseWardrobeImgs,1), description:'Classic hinged door wardrobes with customisable interiors.' },
  { id:'walk-in-wardrobes', name:'Walk-In Wardrobes', slug:'walk-in-wardrobes', count:20, image:pick(baseWardrobeImgs,2), description:'Bespoke walk-in closets and dressing rooms.' },
  { id:'mirror-wardrobes', name:'Mirror Wardrobes', slug:'mirror-wardrobes', count:20, image:pick(baseWardrobeImgs,3), description:'Full-length mirror wardrobe panels that enhance space.' },
  { id:'kids-wardrobes', name:'Kids Wardrobes', slug:'kids-wardrobes', count:15, image:pick(baseWardrobeImgs,4), description:'Safe, colourful, child-friendly wardrobe solutions.' },
  { id:'modular-kitchens', name:'Modular Kitchens', slug:'modular-kitchens', count:30, image:pick(baseKitchenImgs,0), description:'Premium modular kitchens in all layouts and finishes.' },
  { id:'tv-units', name:'TV Units', slug:'tv-units', count:15, image:pick(baseTVImgs,0), description:'Contemporary TV units and entertainment wall panels.' },
  { id:'bathroom-vanity', name:'Bathroom Vanity', slug:'bathroom-vanity', count:10, image:pick(baseVanityImgs,0), description:'Waterproof luxury bathroom vanity units.' },
  { id:'luxury-furniture', name:'Luxury Furniture', slug:'luxury-furniture', count:20, image:pick(baseFurnitureImgs,0), description:'Bespoke luxury furniture for every room.' },
];

// Helper to get product by slug
export const getProductBySlug = (slug) => allProducts.find(p => p.slug === slug);

// Helper to get products by subcategory
export const getProductsBySubcategory = (subcategory) => allProducts.filter(p => p.subcategory === subcategory);

// Helper to get related products
export const getRelatedProducts = (product, limit = 4) =>
  allProducts.filter(p => p.subcategory === product.subcategory && p.id !== product.id).slice(0, limit);

// Format price in INR
export const formatPrice = (price) => new Intl.NumberFormat('en-IN', { style:'currency', currency:'INR', maximumFractionDigits:0 }).format(price);
