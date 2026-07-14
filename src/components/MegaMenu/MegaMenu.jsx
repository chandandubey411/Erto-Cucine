import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const megaData = {
  kitchens: {
    label: 'Modular Kitchens',
    icon: '🍳',
    items: [
      { label: 'L-Shape Kitchen', to: '/modular-kitchen?layout=l-shape' },
      { label: 'U-Shape Kitchen', to: '/modular-kitchen?layout=u-shape' },
      { label: 'Parallel Kitchen', to: '/modular-kitchen?layout=parallel' },
      { label: 'Island Kitchen', to: '/modular-kitchen?layout=island' },
      { label: 'Straight Kitchen', to: '/modular-kitchen?layout=straight' },
      { label: 'Luxury Kitchen', to: '/modular-kitchen?layout=luxury' },
    ],
  },
  wardrobes: {
    label: 'Wardrobes',
    icon: '🚪',
    items: [
      { label: 'Sliding Wardrobes', to: '/products?cat=sliding-wardrobes' },
      { label: 'Hinged Wardrobes', to: '/products?cat=hinged-wardrobes' },
      { label: 'Walk-In Wardrobes', to: '/products?cat=walk-in-wardrobes' },
      { label: 'Mirror Wardrobes', to: '/products?cat=mirror-wardrobes' },
      { label: 'Kids Wardrobes', to: '/products?cat=kids-wardrobes' },
      { label: 'Luxury Wardrobe', to: '/products?cat=sliding-wardrobes&badge=luxury' },
    ],
  },
  furniture: {
    label: 'Furniture',
    icon: '🛋️',
    items: [
      { label: 'TV Units', to: '/products?cat=tv-units' },
      { label: 'Vanity Units', to: '/products?cat=bathroom-vanity' },
      { label: 'Beds & Bedframes', to: '/products?cat=luxury-furniture&type=Bed' },
      { label: 'Side Tables', to: '/products?cat=luxury-furniture&type=Side+Table' },
      { label: 'Study Tables', to: '/products?cat=luxury-furniture&type=Study' },
      { label: 'Dining Units', to: '/products?cat=luxury-furniture&type=Dining' },
    ],
  },
  solutions: {
    label: 'Interior Solutions',
    icon: '🏠',
    items: [
      { label: 'Complete Home Interior', to: '/contact?service=home-interior' },
      { label: 'Office Interior', to: '/contact?service=office' },
      { label: 'Luxury Furniture', to: '/luxury-furniture' },
      { label: 'Modular Storage', to: '/products' },
    ],
  },
};

const HERO_IMG = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80';

export default function MegaMenu({ open }) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[960px] bg-white shadow-luxury border-t-2 border-gold-500 z-50 transition-all duration-300 origin-top ${
        open ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
      }`}
      style={{ transformOrigin: 'top center' }}
    >

      <div className="grid grid-cols-5 gap-0">
        {/* 4 Columns */}
        <div className="col-span-4 grid grid-cols-4 p-8 gap-8">
          {Object.values(megaData).map((col) => (
            <div key={col.label}>
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600 mb-4">
                <span>{col.icon}</span>
                {col.label}
              </h3>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="group flex items-center gap-2 text-sm text-charcoal-700 hover:text-gold-600 transition-colors py-0.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right panel */}
        <div className="col-span-1 bg-charcoal-900 p-6 flex flex-col justify-between">
          <div>
            <div className="relative h-40 rounded overflow-hidden mb-4">
              <img src={HERO_IMG} alt="Luxury Interior" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
            </div>
            <p className="text-white text-xs leading-relaxed text-white/70 mb-4">
              Experience luxury living with our premium modular solutions. Customised for your home.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              to="/book-consultation"
              className="btn-primary text-xs py-3 w-full text-center justify-center"
            >
              Book Consultation
            </Link>
            <Link
              to="/products"
              className="flex items-center justify-center gap-2 text-white/70 hover:text-gold-400 text-xs transition-colors py-2"
            >
              Explore All Products <FiArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
