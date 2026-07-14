import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import ProductCard from '../components/ProductCard/ProductCard';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import ReviewCard from '../components/ReviewCard/ReviewCard';
import FeatureCard from '../components/FeatureCard/FeatureCard';
import FAQAccordion from '../components/FAQ/FAQ';
import CTA from '../components/CTA/CTA';
import AnimatedCounter from '../components/AnimatedCounter/AnimatedCounter';

import { categories, slidingWardrobes, modularKitchens, allProducts } from '../data/products';
import testimonials from '../data/testimonials';
import brands from '../data/brands';
import { faqs } from '../data/faqs';

// Hero slides
const heroSlides = [
  {
    image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1920',
    label: 'Premium Modular Kitchens',
    title: 'Where Culinary Dreams\nBecome Reality',
    subtitle: 'Handcrafted modular kitchens with European hardware, quartz countertops, and seamless design — tailored to your home.',
  },
  {
    image: 'https://images.pexels.com/photos/6585601/pexels-photo-6585601.jpeg?auto=compress&cs=tinysrgb&w=1920',
    label: 'Luxury Wardrobes',
    title: 'Storage That Elevates\nYour Bedroom',
    subtitle: 'Premium sliding, hinged, and walk-in wardrobes with Hettich hardware, custom interiors, and stunning finishes.',
  },
  {
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920',
    label: 'Complete Interior Solutions',
    title: 'Transform Every Room\nInto a Masterpiece',
    subtitle: 'From modular kitchens to luxury furniture — complete home interior solutions under one roof.',
  },
];

const stats = [
  { value: 5000, suffix: '+', label: 'Happy Families' },
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 180, suffix: '+', label: 'Premium Products' },
  { value: 10, suffix: ' Yr', label: 'Structural Warranty' },
];

const features = [
  {
    icon: '🏆',
    title: 'Premium Quality Materials',
    description: '18mm BWR-grade plywood and MDF, Hettich/Hafele hardware, German-import laminates — only the best for your home.',
  },
  {
    icon: '📐',
    title: 'Custom Fit for Your Space',
    description: 'Every product is custom-manufactured to your exact dimensions. No off-the-shelf compromises.',
  },
  {
    icon: '🎨',
    title: '3D Design Before Manufacturing',
    description: 'See your exact kitchen or wardrobe in photorealistic 3D before a single board is cut.',
  },
  {
    icon: '🔧',
    title: 'Professional Installation',
    description: 'Our trained installers handle the complete process — delivery, assembly, and finishing — with zero mess.',
  },
  {
    icon: '🛡️',
    title: '10-Year Structural Warranty',
    description: 'We stand behind our craftsmanship with a decade-long structural warranty and lifetime technical support.',
  },
  {
    icon: '⚡',
    title: 'On-Time Delivery',
    description: 'We respect your time. Our manufacturing timelines are strict, and we notify you at every stage.',
  },
];

const galleryImgs = [
  { src: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'White Marble Kitchen', span: 'row-span-2' },
  { src: 'https://images.pexels.com/photos/6585601/pexels-photo-6585601.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Walk-In Wardrobe', span: '' },
  { src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Modern Living Room', span: '' },
  { src: 'https://images.pexels.com/photos/6186812/pexels-photo-6186812.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Luxury Wardrobe', span: 'row-span-2' },
  { src: 'https://images.pexels.com/photos/6782354/pexels-photo-6782354.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'TV Entertainment Unit', span: '' },
  { src: 'https://images.pexels.com/photos/6585756/pexels-photo-6585756.jpeg?auto=compress&cs=tinysrgb&w=800', label: 'Bathroom Vanity', span: '' },
];

const processSteps = [
  { step: '01', label: 'Consultation', desc: 'Free site visit & needs assessment' },
  { step: '02', label: 'Measurement', desc: 'Precise site measurements taken' },
  { step: '03', label: '3D Design', desc: 'Photorealistic design presentation' },
  { step: '04', label: 'Material Selection', desc: 'Choose finishes, colours & hardware' },
  { step: '05', label: 'Manufacturing', desc: 'Custom made in our facility' },
  { step: '06', label: 'Installation', desc: 'Professional on-site installation' },
];

export default function Home() {
  const featuredProducts = [...slidingWardrobes.slice(0, 3), ...modularKitchens.slice(0, 3)];
  const trendingProducts = allProducts.filter(p => p.badge).slice(0, 8);

  return (
    <>
      <Helmet>
        <title>Erto Cucine India | Premium Modular Kitchen, Wardrobe & Interior Solutions</title>
        <meta name="description" content="Erto Cucine India — Premium Modular Kitchens, Sliding Wardrobes, Walk-In Closets, Luxury Furniture & Interior Solutions in Delhi, Noida, Greater Noida & Gurugram. Book a FREE consultation today." />
      </Helmet>

      {/* ===== HERO ===== */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="w-full h-full"
          >
            {heroSlides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-full">
                  <img
                    src={slide.image}
                    alt={slide.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-hero-overlay" />
                  {/* Slide content */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="max-w-[1400px] mx-auto px-4 lg:px-8 w-full">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="200"
                        className="max-w-2xl"
                      >
                        <p className="section-label text-gold-400 mb-6">{slide.label}</p>
                        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6" style={{ whiteSpace: 'pre-line' }}>
                          {slide.title}
                        </h1>
                        <p className="text-white/75 text-base lg:text-lg leading-relaxed mb-10 max-w-xl">
                          {slide.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <Link to="/book-consultation" className="btn-primary">
                            Book Free Consultation <FiArrowRight className="w-4 h-4" />
                          </Link>
                          <Link to="/products" className="btn-outline-white">
                            Explore Products
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-scroll-line" />
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="glass-dark border-t border-gold-500/30 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="py-5 px-6 text-center">
                  <p className="font-playfair text-2xl lg:text-3xl font-bold text-gold-400">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-white/60 text-xs uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SHOP BY CATEGORY ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="section-label">Browse Our Range</p>
              <h2 className="section-title">Shop By Category</h2>
              <div className="gold-divider" />
            </div>
            <Link to="/products" className="btn-ghost mt-4 md:mt-0">
              View All Products <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.id} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED COLLECTIONS ===== */}
      <section className="py-20 lg:py-28 bg-beige-50 bg-texture-light">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label justify-center">Hand-Picked For You</p>
            <h2 className="section-title">Featured Collections</h2>
            <div className="gold-divider mx-auto" />
            <p className="section-subtitle mx-auto mt-4">
              Our most celebrated designs, crafted with exceptional materials and refined aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/products" className="btn-primary">
              View All Products <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TRENDING PRODUCTS ===== */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="section-label">Most Loved</p>
              <h2 className="section-title">Trending Products</h2>
              <div className="gold-divider" />
            </div>
            <Link to="/products" className="btn-ghost mt-4 md:mt-0">
              View All <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trendingProducts.slice(0, 8).map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== LUXURY GALLERY ===== */}
      <section className="py-20 lg:py-28 bg-charcoal-900">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label justify-center text-gold-400">Our Work</p>
            <h2 className="section-title text-white">Luxury Interior Gallery</h2>
            <div className="gold-divider mx-auto" />
            <p className="section-subtitle mx-auto mt-4 text-white/60">
              A glimpse into the beautiful homes we've transformed across Delhi NCR.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
            {galleryImgs.map((img, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className={`group relative overflow-hidden ${img.span} ${i === 0 || i === 3 ? 'md:row-span-2' : ''}`}
              >
                <div className={`relative overflow-hidden ${i === 0 || i === 3 ? 'h-full min-h-[400px]' : 'h-48 lg:h-56'}`}>
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-playfair text-lg font-semibold text-center px-4">
                      {img.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/gallery" className="btn-outline-white">
              Explore Full Gallery <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 lg:py-28 bg-beige-50">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label justify-center">Our Promise</p>
            <h2 className="section-title">Why Choose Erto Cucine?</h2>
            <div className="gold-divider mx-auto" />
            <p className="section-subtitle mx-auto mt-4">
              We combine European design sensibility with Indian craftsmanship to deliver interiors that last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FeatureCard key={i} feature={f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR PROCESS ===== */}
      <section className="py-20 lg:py-28 bg-charcoal-900">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label justify-center text-gold-400">How We Work</p>
            <h2 className="section-title text-white">Manufacturing Process</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
            {processSteps.map((step, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gold-500/30 group-hover:border-gold-500 flex items-center justify-center text-gold-400 font-playfair text-xl font-bold transition-colors">
                  {step.step}
                </div>
                <div className="w-px h-4 bg-gold-500/30 mx-auto mb-3 hidden lg:block" />
                <h3 className="text-white font-semibold text-sm mb-1">{step.label}</h3>
                <p className="text-white/50 text-xs">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/our-process" className="btn-outline-white">
              Learn More About Our Process <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BRANDS ===== */}
      <section className="py-16 bg-white border-y border-beige-200">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <p className="text-center text-xs uppercase tracking-widest text-muted mb-8 font-semibold">
            Trusted Brands We Partner With
          </p>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 items-center">
            {brands.map((b) => (
              <div
                key={b.id}
                data-aos="fade"
                className="flex items-center justify-center opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="text-center">
                  <p className="font-playfair text-sm font-bold text-charcoal-700 whitespace-nowrap">{b.name}</p>
                  <p className="text-[10px] text-muted">{b.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CUSTOMER REVIEWS ===== */}
      <section className="py-20 lg:py-28 bg-beige-50">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label justify-center">What They Say</p>
            <h2 className="section-title">Customer Reviews</h2>
            <div className="gold-divider mx-auto" />
            <p className="section-subtitle mx-auto mt-4">
              5,000+ happy families across Delhi NCR trust Erto Cucine with their homes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.slice(0, 4).map((r, i) => (
              <ReviewCard key={r.id} review={r} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/testimonials" className="btn-ghost">
              View All Reviews <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label">Common Questions</p>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <div className="gold-divider" />
              <p className="section-subtitle mt-4 mb-8">
                Everything you need to know before starting your home interior project.
              </p>
              <Link to="/faq" className="btn-primary">
                View All FAQs <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <FAQAccordion faqs={faqs.slice(0, 6)} title="" />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CTA />
    </>
  );
}
