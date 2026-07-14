import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiArrowRight } from 'react-icons/fi';
import CTA from '../components/CTA/CTA';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const galleryImages = [
  // Kitchen
  { src: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Kitchen', label: 'White Marble Island Kitchen' },
  { src: 'https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Kitchen', label: 'Modern Grey Kitchen' },
  { src: 'https://images.pexels.com/photos/6489103/pexels-photo-6489103.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Kitchen', label: 'Open Concept Kitchen' },
  { src: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Kitchen', label: 'Luxury Pendant Kitchen' },
  { src: 'https://images.pexels.com/photos/6314342/pexels-photo-6314342.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Kitchen', label: 'Beige Handleless Kitchen' },
  { src: 'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Kitchen', label: 'Contemporary Kitchen Design' },

  // Wardrobes
  { src: 'https://images.pexels.com/photos/6585601/pexels-photo-6585601.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Wardrobes', label: 'Walk-In Wardrobe' },
  { src: 'https://images.pexels.com/photos/6186812/pexels-photo-6186812.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Wardrobes', label: 'Sliding Wardrobe Interior' },
  { src: 'https://images.pexels.com/photos/7534561/pexels-photo-7534561.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Wardrobes', label: 'Built-In Wardrobe' },
  { src: 'https://images.pexels.com/photos/6489111/pexels-photo-6489111.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Wardrobes', label: 'Luxury Walk-In Closet' },

  // Bathroom Vanity
  { src: 'https://images.pexels.com/photos/6585756/pexels-photo-6585756.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Vanity', label: 'Floating Bathroom Vanity' },
  { src: 'https://images.pexels.com/photos/6186811/pexels-photo-6186811.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Vanity', label: 'Double Sink Vanity' },
  { src: 'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Vanity', label: 'Luxury Bathroom' },
  { src: 'https://images.pexels.com/photos/6585604/pexels-photo-6585604.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Vanity', label: 'Modern Bathroom Vanity' },

  // Bedroom
  { src: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Bedroom', label: 'Luxury Master Bedroom' },
  { src: 'https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Bedroom', label: 'Contemporary Bedroom' },
  { src: 'https://images.pexels.com/photos/6685062/pexels-photo-6685062.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Bedroom', label: 'Minimal Bedroom Design' },
  { src: 'https://images.pexels.com/photos/3316924/pexels-photo-3316924.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Bedroom', label: 'Cosy Guest Bedroom' },

  // Living Room
  { src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Living Room', label: 'Open Plan Living Room' },
  { src: 'https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Living Room', label: 'Modern Living Area' },
  { src: 'https://images.pexels.com/photos/6489142/pexels-photo-6489142.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Living Room', label: 'Luxury Living Space' },

  // TV Units
  { src: 'https://images.pexels.com/photos/6782354/pexels-photo-6782354.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'TV Units', label: 'Floating TV Unit' },
  { src: 'https://images.pexels.com/photos/7045728/pexels-photo-7045728.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'TV Units', label: 'Wall-Mounted TV Panel' },
  { src: 'https://images.pexels.com/photos/6585596/pexels-photo-6585596.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'TV Units', label: 'Entertainment Unit' },

  // Additional
  { src: 'https://images.pexels.com/photos/6710527/pexels-photo-6710527.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Kitchen', label: 'Dark Luxury Kitchen' },
  { src: 'https://images.pexels.com/photos/7045696/pexels-photo-7045696.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Bedroom', label: 'Premium Bedroom Suite' },
  { src: 'https://images.pexels.com/photos/6489086/pexels-photo-6489086.jpeg?auto=compress&cs=tinysrgb&w=800', cat: 'Vanity', label: 'Spa-Style Bathroom' },
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
