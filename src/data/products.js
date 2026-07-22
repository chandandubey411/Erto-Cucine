// ===== PRODUCT DATA — 45 premium products for Erto Cucine India =====
// Images sourced from Unsplash (free, no attribution required for demos)

const baseKitchenImgs = [
  'https://i.pinimg.com/736x/b8/6f/23/b86f232f1d9dd325f9f9681e96298633.jpg',
  'https://i.pinimg.com/1200x/8a/81/84/8a8184edcb636adfe80c4eada148d744.jpg',
  'https://i.pinimg.com/1200x/40/72/be/4072be42c35411ef2a78c9e7ba761732.jpg',
  'https://i.pinimg.com/1200x/e7/19/1e/e7191e1c55928a10e00b4a56c524e2c3.jpg',
  'https://i.pinimg.com/736x/55/f2/5e/55f25e9c4f507fdf73de1b5bfa530414.jpg',
  'https://i.pinimg.com/736x/41/c8/d4/41c8d4a80108b265c9217ed7f756b28b.jpg',
  'https://i.pinimg.com/736x/62/58/8e/62588e30def191b5aa2d2ae6648290a6.jpg',
  'https://i.pinimg.com/1200x/bb/2e/5b/bb2e5b6d7f4b7bbb977d84c97d31a5b6.jpg',
  'https://i.pinimg.com/736x/8a/1e/9b/8a1e9b60b01c751c5bb144fde4f18073.jpg',
  'https://i.pinimg.com/736x/b8/c3/b2/b8c3b2b8500bafdc6800e21f61dc05d9.jpg',
];

const baseWardrobeImgs = [
  'https://i.pinimg.com/1200x/5c/a9/01/5ca9016d7b437ff28273d8033ac99ac0.jpg',
  'https://i.pinimg.com/736x/10/7f/fa/107ffa6ebcc988a352e1603dfa86f697.jpg',
  'https://i.pinimg.com/736x/2b/9a/39/2b9a391bb794b4f77a06f1193078875b.jpg',
  'https://i.pinimg.com/1200x/0e/a9/a1/0ea9a1744800bd4bd591b7e5099372e2.jpg',
  'https://i.pinimg.com/736x/43/50/d6/4350d693416d2e5b146cd0ba66f387a6.jpg',
  'https://i.pinimg.com/736x/05/91/cf/0591cf704b8e8fc89a21ed4a3ddc9b52.jpg',
  'https://i.pinimg.com/736x/77/cc/b9/77ccb9b556586a43c15154387811c083.jpg',
  'https://i.pinimg.com/736x/cb/b6/12/cbb6127663b71bcfaeb1e8255d88224c.jpg',
];

const baseFurnitureImgs = [
  'https://i.pinimg.com/1200x/90/c7/2a/90c72a68560fb150df1a9d3b56ada94e.jpg',
  'https://i.pinimg.com/736x/cc/ba/bb/ccbabbff8f3fde8791b33a57594d415d.jpg',
  'https://i.pinimg.com/736x/c3/bb/be/c3bbbe17440b3cb29440216d0c01be2c.jpg',
  'https://i.pinimg.com/736x/92/32/e9/9232e950319d7722b4a1b6541b0a7ac5.jpg',
  'https://i.pinimg.com/736x/f9/d8/94/f9d894465f43ed9eb9e71587b02cb69d.jpg',
  'https://i.pinimg.com/736x/37/3c/53/373c538360f19d578101aa32cbfb1a4e.jpg',
];

const baseVanityImgs = [
  'https://i.pinimg.com/736x/20/12/ca/2012cafa2cdeb1854fdd967c8f38c3cf.jpg',
 'https://i.pinimg.com/1200x/e2/c9/b2/e2c9b2aa5ca51d80ac2212a7278a30bc.jpg',
 'https://i.pinimg.com/736x/7c/d3/4b/7cd34bee344b284a2b1bc192f72f0ada.jpg',
 'https://i.pinimg.com/736x/4e/71/b9/4e71b94c082e44d33f9398a85bcc5dc1.jpg',
 'https://i.pinimg.com/736x/18/19/00/1819001902cc2a99770df99a495555d3.jpg'
];

const baseTVImgs = [
  'https://i.pinimg.com/1200x/1c/6b/1b/1c6b1b5b52154c3a7c0b68d280e27aa6.jpg',
  'https://i.pinimg.com/736x/ea/1c/1a/ea1c1a07b895ef28b4f77d7b3ad02f96.jpg',
  'https://i.pinimg.com/736x/34/98/b4/3498b4b0250b2591dcff14a718e7ab71.jpg',
  'https://i.pinimg.com/736x/60/31/1e/60311e0f5a0a55d1502bec57238a59f8.jpg',
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

// ===== SLIDING WARDROBES — 2 products (using baseWardrobeImgs[0..1]) =====
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
      'The Venetian is our flagship 3-panel sliding wardrobe featuring a premium glass-fronted centre panel, silky Hettich soft-close tracks, and a fully customisable interior.',
    longDescription:
      'Crafted for the modern Indian home, the Venetian Sliding Wardrobe combines European engineering with Indian craftsmanship. The 18mm BWR-grade particle board carcass is sealed with 2mm ABS edge banding for maximum durability.',
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
      'Full-length mirror panels on all doors create an illusion of space while delivering a luxurious aesthetic.',
    longDescription:
      'The Mirror Glide Sliding Wardrobe transforms any room with its floor-to-ceiling mirror doors. Each panel uses 5mm toughened float glass bonded to an 18mm MDF backing for safety and stability.',
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
];

// ===== HINGED WARDROBES — 2 products (using baseWardrobeImgs[2..3]) =====
export const hingedWardrobes = [
  { id:'hw-001', slug:'royal-oak-hinged-wardrobe', name:'Royal Oak Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:78000, originalPrice:97000, rating:4.8, reviews:89, badge:'Bestseller', description:'Classic 4-door hinged wardrobe in rich oak veneer with bronze-finished handles.', longDescription:'The Royal Oak Hinged Wardrobe is a testament to enduring craftsmanship. The rich oak veneer panels are finished in a warm amber stain.', image:pick(baseWardrobeImgs,2), images:[pick(baseWardrobeImgs,2), pick(baseWardrobeImgs,3), pick(baseWardrobeImgs,4), pick(baseWardrobeImgs,5)], specs:specs.wardrobe({height:'2200mm', width:'1800mm', depth:'580mm', doors:4}), features:features.wardrobe, colors:colors.wood, finishes:['Oak Veneer', 'Veneer with Stain'], tags:['hinged','oak','classic','veneer'], inStock:true, leadTime:'25–35 Working Days' },
  { id:'hw-002', slug:'palace-white-hinged-wardrobe', name:'Palace White Hinged Wardrobe', category:'Wardrobes', subcategory:'Hinged Wardrobes', price:65000, originalPrice:81000, rating:4.7, reviews:112, badge:'Popular', description:'Bright white 3-door wardrobe with gold handles — classic and functional.', longDescription:'The Palace White brings brightness and elegance to any bedroom. The white PU lacquer finish is applied to 18mm MDF shutters with gold bar handles.', image:pick(baseWardrobeImgs,3), images:[pick(baseWardrobeImgs,3), pick(baseWardrobeImgs,4), pick(baseWardrobeImgs,5), pick(baseWardrobeImgs,6)], specs:specs.wardrobe({height:'2200mm', width:'1500mm', depth:'580mm', doors:3}), features:features.wardrobe, colors:['White', 'Ivory'], finishes:['PU Lacquer Gloss'], tags:['hinged','white','gold'], inStock:true, leadTime:'25–35 Working Days' },
];

// ===== WALK-IN WARDROBES — 2 products (using baseWardrobeImgs[4..5]) =====
export const walkInWardrobes = Array.from({ length: 2 }, (_, i) => {
  const names = ['Grand Suite Walk-In', 'Penthouse Closet'];
  const prices = [180000, 250000];
  const descShort = ['Expansive walk-in wardrobe with island dresser and chandelier.', 'Ultra-luxury penthouse closet with LED ribbon lighting.'];
  const imgIdx = 4 + i;
  return {
    id: `wi-${String(i+1).padStart(3,'0')}`,
    slug: names[i].toLowerCase().replace(/\s+/g,'-').replace(/[^\w-]/g,''),
    name: names[i],
    category: 'Wardrobes',
    subcategory: 'Walk-In Wardrobes',
    price: prices[i],
    originalPrice: Math.round(prices[i] * 1.25),
    rating: (4.7 + i * 0.1).toFixed(1),
    reviews: 45 + i * 20,
    badge: i === 0 ? 'Bestseller' : 'Luxury',
    description: descShort[i],
    longDescription: `${descShort[i]} Crafted with 18mm BWR-grade carcass boards and premium finishes.`,
    image: pick(baseWardrobeImgs, imgIdx),
    images: [pick(baseWardrobeImgs, imgIdx), pick(baseWardrobeImgs, (imgIdx+1)%8), pick(baseWardrobeImgs, (imgIdx+2)%8), pick(baseWardrobeImgs, (imgIdx+3)%8)],
    specs: { ...specs.wardrobe({ height:'2400mm', width:'Custom', depth:'600mm' }), carcassBoard:'18mm BWR Plywood' },
    features: [...features.wardrobe, 'Custom Island Dresser Available', 'Integrated LED Lighting'],
    colors: [...colors.warm, ...colors.neutral],
    finishes: ['Veneer', 'PU Lacquer'],
    tags: ['walk-in', 'luxury', 'custom'],
    inStock: true,
    leadTime: '45–60 Working Days',
  };
});

// ===== MIRROR WARDROBES — 1 product (using baseWardrobeImgs[6]) =====
export const mirrorWardrobes = Array.from({ length: 1 }, (_, i) => {
  const names = ['Full Mirror Sliding Wardrobe'];
  const prices = [72000];
  return {
    id: `mw-001`,
    slug: 'full-mirror-sliding-wardrobe',
    name: names[0],
    category: 'Wardrobes',
    subcategory: 'Mirror Wardrobes',
    price: prices[0],
    originalPrice: Math.round(prices[0] * 1.25),
    rating: '4.8',
    reviews: 64,
    badge: 'Bestseller',
    description: 'Full Mirror Sliding Wardrobe — premium wardrobe featuring full length mirror panels.',
    longDescription: 'Combines full-length mirrors with premium wardrobe storage. Mirror panels are 5mm toughened float glass.',
    image: pick(baseWardrobeImgs, 6),
    images: [pick(baseWardrobeImgs, 6), pick(baseWardrobeImgs, 7), pick(baseWardrobeImgs, 0), pick(baseWardrobeImgs, 1)],
    specs: specs.wardrobe({ height:'2400mm', width:'1800mm', depth:'600mm', doors: 3 }),
    features: [...features.wardrobe, '5mm Toughened Mirror Glass'],
    colors: colors.neutral,
    finishes: ['Mirror Glass'],
    tags: ['mirror', 'wardrobe', 'glass'],
    inStock: true,
    leadTime: '25–35 Working Days',
  };
});

// ===== KIDS WARDROBES — 1 product (using baseWardrobeImgs[7]) =====
export const kidsWardrobes = Array.from({ length: 1 }, (_, i) => {
  return {
    id: `kw-001`,
    slug: 'rainbow-kids-wardrobe',
    name: 'Rainbow Kids Wardrobe',
    category: 'Wardrobes',
    subcategory: 'Kids Wardrobes',
    price: 45000,
    originalPrice: 56000,
    rating: '4.8',
    reviews: 52,
    badge: 'Popular',
    description: 'Rainbow-themed kids wardrobe with child-safe hardware and smart storage.',
    longDescription: 'Designed with child safety in mind. Rounded hardware and soft-close mechanism prevent accidents.',
    image: pick(baseWardrobeImgs, 7),
    images: [pick(baseWardrobeImgs, 7), pick(baseWardrobeImgs, 0), pick(baseWardrobeImgs, 1), pick(baseWardrobeImgs, 2)],
    specs: { ...specs.wardrobe({height:'1800mm', width:'1200mm', depth:'550mm', doors:2}), hinges:'Child-Safe Soft-Close' },
    features: [...features.wardrobe.slice(0,4), 'Child-Safe Rounded Hardware', 'Low Hanging Rod'],
    colors: ['Rainbow Multi', 'Pastel Pink', 'Sky Blue'],
    finishes: ['Non-Toxic Painted MDF'],
    tags: ['kids', 'children', 'safe'],
    inStock: true,
    leadTime: '20–28 Working Days',
  };
});

// ===== MODULAR KITCHENS — 10 products =====
export const modularKitchens = [
  { id:'mk-001', slug:'grand-italian-l-shape-kitchen', name:'Grand Italian L-Shape Kitchen', category:'Kitchens', subcategory:'Modular Kitchens', price:350000, originalPrice:435000, rating:4.9, reviews:87, badge:'Bestseller', description:'European-style L-shaped kitchen with Italian acrylic shutters, quartz countertop, and full Hettich hardware package.', longDescription:'The Grand Italian L-Shape is our flagship kitchen. Featuring premium Italian acrylic high-gloss shutters in pure white, a 30mm Italian Calacatta quartz countertop, and a complete Hettich soft-close hardware package.', image:pick(baseKitchenImgs,0), images:[pick(baseKitchenImgs,0), pick(baseKitchenImgs,1), pick(baseKitchenImgs,2), pick(baseKitchenImgs,3)], specs:{...specs.kitchen('L-Shape'), countertop:'30mm Calacatta Quartz', shutterFinish:'Italian Acrylic High Gloss'}, features:features.kitchen, colors:['Pure White', 'Ivory', 'Cream'], finishes:['Acrylic High Gloss', 'Matte Acrylic'], tags:['kitchen','L-shape','italian','acrylic','quartz'], inStock:true, leadTime:'35–45 Working Days' },
  { id:'mk-002', slug:'charcoal-handleless-parallel-kitchen', name:'Charcoal Handleless Parallel Kitchen', category:'Kitchens', subcategory:'Modular Kitchens', price:285000, originalPrice:355000, rating:4.8, reviews:63, badge:'Popular', description:'Sleek charcoal grey handleless parallel kitchen with J-pull profile, black granite countertop, and built-in appliance housing.', longDescription:'The Charcoal Handleless is a designer favourite. The parallel layout maximises workflow in narrow kitchens. Charcoal grey matte laminate shutters with J-pull aluminium profile handle eliminate the need for visible hardware.', image:pick(baseKitchenImgs,1), images:[pick(baseKitchenImgs,1), pick(baseKitchenImgs,0), pick(baseKitchenImgs,3), pick(baseKitchenImgs,4)], specs:{...specs.kitchen('Parallel'), countertop:'Black Galaxy Granite', shutterFinish:'Matte Laminate', handles:'J-Pull Aluminium Profile'}, features:features.kitchen, colors:['Charcoal', 'Dark Grey', 'Graphite'], finishes:['Laminate Matt'], tags:['kitchen','parallel','handleless','charcoal','granite'], inStock:true, leadTime:'35–45 Working Days' },
  { id:'mk-003', slug:'island-luxury-kitchen', name:'Island Luxury Kitchen', category:'Kitchens', subcategory:'Modular Kitchens', price:550000, originalPrice:688000, rating:4.9, reviews:41, badge:'Luxury', description:'Grand island kitchen with marble countertop, PU lacquer shutters, integrated wine rack, and pendant lighting provision.', longDescription:'The Island Luxury Kitchen is the pinnacle of modular kitchen design. A central island counter with waterfall marble edge creates a dramatic focal point.', image:pick(baseKitchenImgs,2), images:[pick(baseKitchenImgs,2), pick(baseKitchenImgs,0), pick(baseKitchenImgs,1), pick(baseKitchenImgs,5)], specs:{...specs.kitchen('Island'), countertop:'Statuario Marble / Quartz', shutterFinish:'PU Lacquer White / Veneer', internalFit:'Wine Rack, Appliance Tower, Pantry, Tall Units'}, features:[...features.kitchen,'Island Counter with Seating','Integrated Wine Rack','Appliance Tower','Pendant Lighting Provision'], colors:['White + Marble', 'Ivory + Veneer', 'Grey + Quartz'], finishes:['PU Lacquer', 'Veneer', 'Acrylic'], tags:['kitchen','island','marble','luxury','premium'], inStock:true, leadTime:'45–60 Working Days' },
  { id:'mk-004', slug:'u-shape-scandinavian-kitchen', name:'U-Shape Scandinavian Kitchen', category:'Kitchens', subcategory:'Modular Kitchens', price:320000, originalPrice:400000, rating:4.7, reviews:55, badge:null, description:'Birch-effect U-shape kitchen with black hardware and white quartz countertop — clean Nordic design.', longDescription:'The U-Shape Scandinavian Kitchen wraps three walls with storage and workspace. Light birch-effect laminate shutters are paired with matte black handles.', image:pick(baseKitchenImgs,3), images:[pick(baseKitchenImgs,3), pick(baseKitchenImgs,1), pick(baseKitchenImgs,5), pick(baseKitchenImgs,7)], specs:{...specs.kitchen('U-Shape'), countertop:'Pure White Quartz', shutterFinish:'Birch Effect Laminate', handles:'Matte Black'}, features:features.kitchen, colors:['Birch + Black', 'Linen + Chrome', 'Grey + Black'], finishes:['Laminate Matt', 'Laminate Wood Grain'], tags:['kitchen','U-shape','scandinavian','birch','nordic'], inStock:true, leadTime:'35–45 Working Days' },
  { id:'mk-005', slug:'sage-green-shaker-kitchen', name:'Sage Green Shaker Kitchen', category:'Kitchens', subcategory:'Modular Kitchens', price:295000, originalPrice:369000, rating:4.8, reviews:72, badge:'Popular', description:'Classic shaker-style sage green kitchen with brass hardware and Carrara marble-look quartz — timeless British design.', longDescription:'Shaker kitchens are the ultimate classic. Our Sage Green Shaker Kitchen uses 18mm MDF shaker-profile shutters in sage green with brass cup handles.', image:pick(baseKitchenImgs,4), images:[pick(baseKitchenImgs,4), pick(baseKitchenImgs,2), pick(baseKitchenImgs,6), pick(baseKitchenImgs,8)], specs:{...specs.kitchen('L-Shape / U-Shape / Parallel'), countertop:'Carrara Marble-Look Quartz', shutterFinish:'Painted MDF Shaker', handles:'Antique Brass'}, features:features.kitchen, colors:['Sage Green', 'Olive', 'Pistachio'], finishes:['Painted Shaker MDF'], tags:['kitchen','shaker','sage','british','timeless'], inStock:true, leadTime:'35–45 Working Days' },
  { id:'mk-006', slug:'emerald-green-lacquer-kitchen', name:'Emerald Green Lacquer Kitchen', category:'Kitchens', subcategory:'Modular Kitchens', price:340000, originalPrice:425000, rating:4.8, reviews:48, badge:'New', description:'Vibrant emerald green high-gloss lacquer kitchen with warm brass accents and quartz top.', longDescription:'Deep emerald green high-gloss lacquer finish paired with brass hardware and white quartz countertop.', image:pick(baseKitchenImgs,5), images:[pick(baseKitchenImgs,5), pick(baseKitchenImgs,6), pick(baseKitchenImgs,7), pick(baseKitchenImgs,8)], specs:{...specs.kitchen('L-Shape'), countertop:'White Quartz', shutterFinish:'High Gloss Emerald PU'}, features:features.kitchen, colors:['Emerald Green', 'Gold'], finishes:['PU High Gloss'], tags:['kitchen','emerald','lacquer'], inStock:true, leadTime:'35–45 Working Days' },
  { id:'mk-007', slug:'classic-white-shaker-kitchen', name:'Classic White Shaker Kitchen', category:'Kitchens', subcategory:'Modular Kitchens', price:310000, originalPrice:385000, rating:4.7, reviews:59, badge:null, description:'Timeless white shaker kitchen with cup handles and solid granite worktops.', longDescription:'Enduring white shaker cabinetry with soft-closing drawers and durable granite countertop.', image:pick(baseKitchenImgs,6), images:[pick(baseKitchenImgs,6), pick(baseKitchenImgs,7), pick(baseKitchenImgs,8), pick(baseKitchenImgs,9)], specs:{...specs.kitchen('U-Shape'), countertop:'Black Granite', shutterFinish:'White Shaker MDF'}, features:features.kitchen, colors:['White', 'Off-White'], finishes:['Matte Lacquer'], tags:['kitchen','shaker','white'], inStock:true, leadTime:'35–45 Working Days' },
  { id:'mk-008', slug:'contemporary-wood-grain-kitchen', name:'Contemporary Wood Grain Kitchen', category:'Kitchens', subcategory:'Modular Kitchens', price:290000, originalPrice:360000, rating:4.6, reviews:35, badge:null, description:'Natural tactile wood grain finishes blended with modern grey quartz counters.', longDescription:'Brings nature indoors with warm wood-grain textured laminate shutters and full extension soft-close drawers.', image:pick(baseKitchenImgs,7), images:[pick(baseKitchenImgs,7), pick(baseKitchenImgs,8), pick(baseKitchenImgs,9), pick(baseKitchenImgs,0)], specs:{...specs.kitchen('Parallel'), countertop:'Grey Quartz', shutterFinish:'Textured Wood Laminate'}, features:features.kitchen, colors:['Teak Wood', 'Natural Oak'], finishes:['Textured Laminate'], tags:['kitchen','wood','natural'], inStock:true, leadTime:'35–45 Working Days' },
  { id:'mk-009', slug:'matte-black-industrial-kitchen', name:'Matte Black Industrial Kitchen', category:'Kitchens', subcategory:'Modular Kitchens', price:380000, originalPrice:470000, rating:4.9, reviews:64, badge:'Luxury', description:'Bold matte black handleless kitchen with concrete-look quartz countertop.', longDescription:'Industrial chic aesthetic featuring fingerprint-resistant matte black shutters, dark quartz, and integrated accent LED lighting.', image:pick(baseKitchenImgs,8), images:[pick(baseKitchenImgs,8), pick(baseKitchenImgs,9), pick(baseKitchenImgs,0), pick(baseKitchenImgs,1)], specs:{...specs.kitchen('Island'), countertop:'Concrete Grey Quartz', shutterFinish:'Super Matt Black'}, features:features.kitchen, colors:['Matte Black', 'Dark Grey'], finishes:['Super Matt Acrylic'], tags:['kitchen','black','industrial'], inStock:true, leadTime:'35–45 Working Days' },
  { id:'mk-010', slug:'terracotta-warm-minimal-kitchen', name:'Terracotta Warm Minimal Kitchen', category:'Kitchens', subcategory:'Modular Kitchens', price:330000, originalPrice:410000, rating:4.8, reviews:40, badge:'Popular', description:'Warm terracotta tones combined with travertine quartz for a Mediterranean touch.', longDescription:'Earth-inspired terracotta matte finish paired with soft stone quartz surfaces and seamless profile handles.', image:pick(baseKitchenImgs,9), images:[pick(baseKitchenImgs,9), pick(baseKitchenImgs,0), pick(baseKitchenImgs,1), pick(baseKitchenImgs,2)], specs:{...specs.kitchen('L-Shape'), countertop:'Travertine Quartz', shutterFinish:'Matte Terracotta Lacquer'}, features:features.kitchen, colors:['Terracotta', 'Warm Beige'], finishes:['Matte PU Lacquer'], tags:['kitchen','terracotta','warm'], inStock:true, leadTime:'35–45 Working Days' },
];

// ===== TV UNITS — 4 products =====
export const tvUnits = Array.from({ length: 4 }, (_, i) => {
  const names = ['Floating Walnut TV Unit','White Gloss Entertainment Unit','Charcoal Wall Panel TV Unit','Teak Open Shelf Unit'];
  const prices = [42000,35000,55000,48000];
  return {
    id: `tv-${String(i+1).padStart(3,'0')}`,
    slug: names[i].toLowerCase().replace(/\s+/g,'-').replace(/[^\w-]/g,''),
    name: names[i], category:'Furniture', subcategory:'TV Units',
    price: prices[i], originalPrice: Math.round(prices[i]*1.25),
    rating:(4.4+Math.random()*0.55).toFixed(1), reviews:10+Math.floor(Math.random()*100),
    badge: i===0?'Bestseller':i===2?'Popular':null,
    description:`${names[i]} — premium TV unit with smart cable management, soft-close drawers, and premium finish.`,
    longDescription:`The ${names[i]} is designed for the modern living room. Built with 18mm pre-laminated particle board, it features integrated cable management channels and soft-close drawers.`,
    image:pick(baseTVImgs,i%4), images:[pick(baseTVImgs,i%4), pick(baseTVImgs,(i+1)%4), pick(baseTVImgs,(i+2)%4), pick(baseTVImgs,(i+3)%4)],
    specs: specs.tvUnit(),
    features:['Built-in Cable Management','Soft-Close Drawers & Cabinets','Open Display Shelving','Wall-Mounted / Floor Configuration'],
    colors:[...colors.warm,...colors.neutral], finishes:['Laminate','PU Lacquer','Veneer'],
    tags:['TV unit','media','living room','entertainment'], inStock:true, leadTime:'20–28 Working Days',
  };
});

// ===== BATHROOM VANITY — 5 products =====
export const bathroomVanities = Array.from({ length: 5 }, (_, i) => {
  const names = ['Floating White Vanity','Teak Double Vanity','Black Marble Vanity','Rosewood Luxury Vanity','Minimalist Grey Vanity'];
  const prices = [38000,72000,85000,95000,42000];
  return {
    id: `bv-${String(i+1).padStart(3,'0')}`,
    slug: names[i].toLowerCase().replace(/\s+/g,'-').replace(/[^\w-]/g,''),
    name: names[i], category:'Furniture', subcategory:'Bathroom Vanity',
    price: prices[i], originalPrice: Math.round(prices[i]*1.25),
    rating:(4.5+Math.random()*0.45).toFixed(1), reviews:8+Math.floor(Math.random()*70),
    badge: i===3?'Luxury':i===0?'Popular':null,
    description:`${names[i]} — waterproof, premium bathroom vanity with LED mirror and soft-close hardware.`,
    longDescription:`The ${names[i]} is engineered for the Indian bathroom environment. Built with marine-grade plywood and 100% waterproof laminate.`,
    image:pick(baseVanityImgs,i%5), images:[pick(baseVanityImgs,i%5), pick(baseVanityImgs,(i+1)%5), pick(baseVanityImgs,(i+2)%5), pick(baseVanityImgs,(i+3)%5)],
    specs:specs.vanity(),
    features:['100% Waterproof Marine Plywood','Waterproof Laminate Finish','Ceramic / Acrylic Counter Basin','Backlit LED Mirror Included'],
    colors:[...colors.neutral,...colors.warm], finishes:['Waterproof Laminate','PU Lacquer'],
    tags:['vanity','bathroom','waterproof','premium'], inStock:true, leadTime:'20–28 Working Days',
  };
});

// ===== LUXURY FURNITURE — 6 products =====
export const luxuryFurniture = Array.from({ length: 6 }, (_, i) => {
  const names = ['King Upholstered Bed','Queen Platform Bed','Luxury Bedside Table','Walnut Wardrobe Chest','Designer Study Table','L-Shape Office Desk'];
  const prices = [85000,65000,18000,55000,38000,72000];
  const categories = ['Bed','Bed','Side Table','Storage','Study','Study'];
  return {
    id: `lf-${String(i+1).padStart(3,'0')}`,
    slug: names[i].toLowerCase().replace(/\s+/g,'-').replace(/[^\w-]/g,''),
    name: names[i], category:'Furniture', subcategory:'Luxury Furniture',
    price: prices[i], originalPrice: Math.round(prices[i]*1.25),
    rating:(4.5+Math.random()*0.45).toFixed(1), reviews:5+Math.floor(Math.random()*80),
    badge: i===0?'Bestseller':i===4?'Popular':null,
    furnitureType: categories[i],
    description:`Premium ${categories[i]} — ${names[i]}. Crafted with luxury materials and premium hardware.`,
    longDescription:`The ${names[i]} is a premium furniture piece crafted for the luxury Indian home using solid wood frames and high quality finishes.`,
    image:pick(baseFurnitureImgs,i%6), images:[pick(baseFurnitureImgs,i%6), pick(baseFurnitureImgs,(i+1)%6), pick(baseFurnitureImgs,(i+2)%6), pick(baseFurnitureImgs,(i+3)%6)],
    specs:{ material:'Solid Teak / Sheesham / Plywood Frame', upholstery:'Premium Velvet / Linen / Faux Leather', finish:'PU Lacquer / Natural Oil / Painted', hardware:'Gold / Chrome / Matte Black', warranty:'5 Years Structural Warranty', delivery:'20–30 Working Days', installation:'1 Day Assembly Service' },
    features:['Premium Solid Wood Frame','High-Density Foam Cushioning','Premium Upholstery Fabric','Anti-Tarnish Metal Hardware'],
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
  { id:'sliding-wardrobes', name:'Sliding Wardrobes', slug:'sliding-wardrobes', count: slidingWardrobes.length, image:pick(baseWardrobeImgs,0), description:'Space-saving sliding door wardrobes with premium soft-close systems.' },
  { id:'hinged-wardrobes', name:'Hinged Wardrobes', slug:'hinged-wardrobes', count: hingedWardrobes.length, image:pick(baseWardrobeImgs,1), description:'Classic hinged door wardrobes with customisable interiors.' },
  { id:'walk-in-wardrobes', name:'Walk-In Wardrobes', slug:'walk-in-wardrobes', count: walkInWardrobes.length, image:pick(baseWardrobeImgs,2), description:'Bespoke walk-in closets and dressing rooms.' },
  { id:'mirror-wardrobes', name:'Mirror Wardrobes', slug:'mirror-wardrobes', count: mirrorWardrobes.length, image:pick(baseWardrobeImgs,3), description:'Full-length mirror wardrobe panels that enhance space.' },
  { id:'kids-wardrobes', name:'Kids Wardrobes', slug:'kids-wardrobes', count: kidsWardrobes.length, image:pick(baseWardrobeImgs,4), description:'Safe, colourful, child-friendly wardrobe solutions.' },
  { id:'modular-kitchens', name:'Modular Kitchens', slug:'modular-kitchens', count: modularKitchens.length, image:pick(baseKitchenImgs,0), description:'Premium modular kitchens in all layouts and finishes.' },
  { id:'tv-units', name:'TV Units', slug:'tv-units', count: tvUnits.length, image:pick(baseTVImgs,0), description:'Contemporary TV units and entertainment wall panels.' },
  { id:'bathroom-vanity', name:'Bathroom Vanity', slug:'bathroom-vanity', count: bathroomVanities.length, image:pick(baseVanityImgs,0), description:'Waterproof luxury bathroom vanity units.' },
  { id:'luxury-furniture', name:'Luxury Furniture', slug:'luxury-furniture', count: luxuryFurniture.length, image:pick(baseFurnitureImgs,0), description:'Bespoke luxury furniture for every room.' },
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
