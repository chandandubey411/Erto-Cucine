import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiArrowRight } from 'react-icons/fi';
import CTA from '../components/CTA/CTA';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const galleryImages = [
  // Kitchen
  { src: 'https://i.pinimg.com/1200x/83/45/74/834574df7a3ec5bfa9d0e925496a226c.jpg', cat: 'Kitchen', label: 'White Marble Island Kitchen' },
  { src: 'https://i.pinimg.com/736x/d3/e8/e0/d3e8e02b23dd47caed4f57d8333ede2b.jpg', cat: 'Kitchen', label: 'Modern Grey Kitchen' },
  { src: 'https://i.pinimg.com/1200x/35/76/11/35761137a5e9c7873f6dd1a8cac3f999.jpg', cat: 'Kitchen', label: 'Open Concept Kitchen' },
  { src: 'https://i.pinimg.com/736x/ca/b4/5c/cab45c7c4af985c9eef84af2e179adcd.jpg', cat: 'Kitchen', label: 'Luxury Pendant Kitchen' },
  { src: 'https://i.pinimg.com/736x/c7/38/df/c738df757f48f5a9a22cd6115ba4ef8f.jpg', cat: 'Kitchen', label: 'Beige Handleless Kitchen' },
  { src: 'https://i.pinimg.com/736x/1a/0b/78/1a0b78c951a780a08ce448fcaa7028f6.jpg', cat: 'Kitchen', label: 'Contemporary Kitchen Design' },

  // Wardrobes
  { src: 'https://i.pinimg.com/736x/04/fc/ef/04fcefeff745e3df092dc840bdb49783.jpg', cat: 'Wardrobes', label: 'Walk-In Wardrobe' },
  { src: 'https://i.pinimg.com/1200x/67/72/b6/6772b6f8d4cc97f0aa88a305a9e266e5.jpg', cat: 'Wardrobes', label: 'Sliding Wardrobe Interior' },
  { src: 'https://i.pinimg.com/736x/25/a6/ee/25a6ee1ecceb26f823ea5e0c39cfaf68.jpg', cat: 'Wardrobes', label: 'Built-In Wardrobe' },
  { src: 'https://i.pinimg.com/736x/1b/0e/98/1b0e98940e2e8655f5cea811b803363b.jpg', cat: 'Wardrobes', label: 'Luxury Walk-In Closet' },

  // Bathroom Vanity
  { src: 'https://i.pinimg.com/736x/c8/2d/f1/c82df1f92074055b10945cbecb3ff737.jpg', cat: 'Vanity', label: 'Floating Bathroom Vanity' },
  { src: 'https://i.pinimg.com/1200x/0b/71/59/0b715949b81cb78693706c987d2ecca8.jpg', cat: 'Vanity', label: 'Double Sink Vanity' },
  { src: 'https://i.pinimg.com/736x/5d/f3/76/5df376ada20703d5bb94cbb529d21a20.jpg', cat: 'Vanity', label: 'Luxury Bathroom' },
  { src: 'https://i.pinimg.com/1200x/e4/aa/6e/e4aa6e8387b928feb8fb9101c8d2531c.jpg', cat: 'Vanity', label: 'Modern Bathroom Vanity' },

  // Bedroom
  { src: 'https://i.pinimg.com/736x/0a/fc/0e/0afc0ec3095c5f2f8eef4eb23f382425.jpg', cat: 'Bedroom', label: 'Luxury Master Bedroom' },
  { src: 'https://i.pinimg.com/736x/eb/76/57/eb7657f6d9b64ee13acc7419f99e0a4d.jpg', cat: 'Bedroom', label: 'Contemporary Bedroom' },
  { src: 'https://i.pinimg.com/736x/7e/4d/61/7e4d6180d76735555cd4741e2df5f553.jpg', cat: 'Bedroom', label: 'Minimal Bedroom Design' },
  { src: 'https://i.pinimg.com/1200x/4f/2a/3e/4f2a3ef0b33a03763e989beec1645f26.jpg', cat: 'Bedroom', label: 'Cosy Guest Bedroom' },

  // Living Room
  { src: 'https://i.pinimg.com/736x/ae/ac/3e/aeac3ea759cc35792286ffab3946bdc4.jpg', cat: 'Living Room', label: 'Open Plan Living Room' },
  { src: 'https://i.pinimg.com/1200x/4f/aa/63/4faa636775399a5396c4d7f3823aa0d1.jpg', cat: 'Living Room', label: 'Modern Living Area' },
  { src: 'https://i.pinimg.com/1200x/0d/37/f9/0d37f9116388a6b2640baf4768c7c8ef.jpg', cat: 'Living Room', label: 'Luxury Living Space' },

  // TV Units
  { src: 'https://i.pinimg.com/736x/ca/f3/6c/caf36c6e9f567a0799b0770cf904cd7c.jpg', cat: 'TV Units', label: 'Floating TV Unit' },
  { src: 'https://i.pinimg.com/736x/e6/25/d6/e625d65e60270cd38866b0b863e41345.jpg', cat: 'TV Units', label: 'Wall-Mounted TV Panel' },
  { src: 'https://i.pinimg.com/736x/01/3b/d9/013bd94ad8f0e03b801867d35b09385c.jpg', cat: 'TV Units', label: 'Entertainment Unit' },

  // Additional
  { src: 'https://i.pinimg.com/1200x/10/24/5d/10245da100c365bdc3e76b8d023ae586.jpg', cat: 'Kitchen', label: 'Dark Luxury Kitchen' },
  { src: 'https://i.pinimg.com/736x/91/ca/7e/91ca7eecfea0142a5144cd674c6b424d.jpg', cat: 'Bedroom', label: 'Premium Bedroom Suite' },
  { src: 'https://i.pinimg.com/1200x/a3/23/00/a32300796dbd6440e231a31360e5d376.jpg', cat: 'Vanity', label: 'Spa-Style Bathroom' },
];

const cats = ['All', 'Kitchen', 'Wardrobes', 'Bedroom', 'Living Room', 'TV Units', 'Vanity'];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'All' ? galleryImages : galleryImages.filter(g => g.cat === active);

  return (
    <>
      <Helmet>
        <title>Gallery | Erto Cucine India Premium Interior Projects</title>
        <meta name="description" content="Browse our luxury interior design gallery — modular kitchens, wardrobes, living rooms, bathrooms and more from completed projects across Delhi NCR." />
      </Helmet>

      <div className="relative pt-32 pb-16 bg-charcoal-900">
        <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&q=80" alt="Gallery" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: 'Gallery' }]} />
          <h1 className="font-playfair text-5xl lg:text-6xl text-white font-bold mt-6 mb-4">Our Gallery</h1>
          <p className="text-white/60 text-lg">Real projects. Real homes. Real transformations across Delhi NCR.</p>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="flex gap-3 flex-wrap mb-10 pb-4 border-b border-beige-200">
            {cats.map(cat => (
              <button key={cat} onClick={() => setActive(cat)} className={`px-5 py-2 text-sm font-medium border transition-all rounded-full ${active === cat ? 'bg-gold-500 border-gold-500 text-charcoal-900' : 'bg-white border-beige-300 text-charcoal-600 hover:border-gold-400'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="masonry-grid">
            {filtered.map((img, i) => (
              <div
                key={`${active}-${i}`}
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 60}
                className="masonry-item group cursor-pointer"
                onClick={() => setLightbox(img)}
              >
                <div className="bg-white border border-beige-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-xl">
                  {/* Image with hover zoom + overlay */}
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={img.src}
                      alt={img.label}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Hover overlay with zoom icon */}
                    <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/40 transition-all duration-300 flex items-center justify-center rounded-t-xl">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-3xl">⊕</span>
                    </div>
                  </div>
                  {/* Always-visible label + category */}
                  <div className="px-3 py-2.5 flex items-center justify-between">
                    <p className="text-charcoal-800 font-medium text-xs leading-snug">{img.label}</p>
                    <span className="text-[10px] font-semibold text-gold-600 uppercase tracking-wider flex-shrink-0 ml-2">{img.cat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[80] bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="relative max-w-4xl w-full">
            <img src={lightbox.src} alt={lightbox.label} className="w-full max-h-[80vh] object-contain rounded-2xl" />
            <p className="text-white text-center mt-4 font-playfair text-xl">{lightbox.label}</p>
            <button onClick={() => setLightbox(null)} className="absolute -top-4 -right-4 w-10 h-10 bg-gold-500 text-charcoal-900 text-xl font-bold flex items-center justify-center hover:bg-gold-400 rounded-full">×</button>
          </div>
        </div>
      )}

      <CTA />
    </>
  );
}
