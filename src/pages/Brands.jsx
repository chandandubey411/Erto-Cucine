import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import CTA from '../components/CTA/CTA';
import brands from '../data/brands';

export default function Brands() {
  return (
    <>
      <Helmet>
        <title>Brands We Trust | Erto Cucine India — Hettich, Hafele, Century Ply & More</title>
        <meta name="description" content="Erto Cucine India partners with the world's best hardware and material brands — Hettich, Hafele, Greenlam, Century Ply, Merino, Ebco, and more." />
      </Helmet>

      <div className="relative pt-32 pb-16 bg-charcoal-900">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: 'Brands' }]} />
          <h1 className="font-playfair text-5xl lg:text-6xl text-white font-bold mt-6 mb-4">Brands We Trust</h1>
          <p className="text-white/60 text-lg">We partner exclusively with the world's best hardware and material brands.</p>
        </div>
      </div>

      <section className="py-20 bg-beige-50">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label justify-center">Our Partners</p>
            <h2 className="section-title">Brand Partners</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand, i) => (
              <div
                key={brand.id}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-white border border-beige-200 p-8 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="h-16 flex items-center justify-center mb-5">
                  <span className="font-playfair text-2xl font-bold text-charcoal-800 group-hover:text-gold-600 transition-colors">
                    {brand.name}
                  </span>
                </div>
                <div className="inline-flex items-center px-3 py-1 bg-gold-50 border border-gold-200 text-gold-700 text-xs font-semibold uppercase tracking-wider mb-4">
                  {brand.category}
                </div>
                <p className="text-muted text-sm leading-relaxed">{brand.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-10 bg-charcoal-900 text-white text-center">
            <h2 className="font-playfair text-2xl font-bold mb-4">Experience These Brands in Our Products</h2>
            <p className="text-white/60 text-sm mb-6 max-w-xl mx-auto">
              Every wardrobe and kitchen we build uses genuine, certified hardware and materials from our brand partners — never imitations.
            </p>
            <Link to="/book-consultation" className="btn-primary">
              Book Free Consultation <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

