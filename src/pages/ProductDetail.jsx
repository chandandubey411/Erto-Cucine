import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  FiCheck, FiArrowRight, FiDownload, FiPhone, FiStar, FiChevronLeft, FiChevronRight,
} from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';

import { getProductBySlug, getRelatedProducts, formatPrice } from '../data/products';
import ProductCard from '../components/ProductCard/ProductCard';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import FAQAccordion from '../components/FAQ/FAQ';

const productFaqs = (name) => [
  { id:1, question:`What is the delivery timeline for ${name}?`, answer:'Manufacturing takes 25–45 working days depending on complexity and finish. Our team will confirm the exact timeline during your consultation and keep you updated at every stage.' },
  { id:2, question:'Can I customise the dimensions?', answer:'Yes! Every product is custom-manufactured to your exact dimensions. Share your wall measurements during the site visit and we\'ll design to fit perfectly.' },
  { id:3, question:'What warranty do you offer?', answer:'We offer a 10-year structural warranty on all our products. Hettich/Hafele hardware carries their own manufacturer warranty. Finish warranties vary by type.' },
  { id:4, question:'Do you provide installation?', answer:'Yes, professional installation by our trained team is included in every project. Installation typically takes 1–2 days for wardrobes and 2–4 days for kitchens.' },
  { id:5, question:'Can I visit a showroom to see the finishes?', answer:'Yes! Visit our showroom at B-17 Sector-2, Noida (Mon–Sat, 9AM–7PM) to see all finishes, laminates, hardware, and full-size display units.' },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!product) return <Navigate to="/products" replace />;

  const related = getRelatedProducts(product, 4);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const tabs = ['description', 'specifications', 'features', 'warranty', 'faqs'];

  const handleEnquiry = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>{product.name} | Erto Cucine India</title>
        <meta name="description" content={product.description} />
      </Helmet>

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-white border-b border-beige-200">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            { label: 'Products', to: '/products' },
            { label: product.subcategory, to: `/products?cat=${product.subcategory.toLowerCase().replace(/\s+/g, '-')}` },
            { label: product.name },
          ]} />
        </div>
      </div>

      {/* ===== PRODUCT DETAIL ===== */}
      <section className="py-10 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">

            {/* ===== LEFT — Gallery ===== */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative overflow-hidden bg-beige-100 aspect-[4/3]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    src={product.images?.[activeImage] || product.image}
                    alt={`${product.name} - view ${activeImage + 1}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Arrows */}
                {product.images?.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImage(i => (i - 1 + product.images.length) % product.images.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all"
                    >
                      <FiChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setActiveImage(i => (i + 1) % product.images.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all"
                    >
                      <FiChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.badge && <span className="luxury-badge">{product.badge}</span>}
                  {discount > 0 && (
                    <span className="inline-flex items-center px-3 py-1 bg-charcoal-900 text-gold-400 text-xs font-bold tracking-wider">
                      {discount}% OFF
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnails */}
              {product.images?.length > 1 && (
                <div className="flex gap-3 overflow-x-auto no-scrollbar">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`flex-shrink-0 w-20 h-20 overflow-hidden border-2 transition-all ${
                        activeImage === i ? 'border-gold-500' : 'border-beige-200 hover:border-gold-300'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* 360 Placeholder */}
              <div className="flex items-center justify-center h-14 bg-charcoal-50 border border-dashed border-charcoal-200 text-muted text-xs gap-2">
                <span>🔄</span> 360° View — Available on Request
              </div>
            </div>

            {/* ===== RIGHT — Product Info ===== */}
            <div>
              <p className="text-xs text-gold-600 font-semibold uppercase tracking-widest mb-2">
                {product.subcategory}
              </p>
              <h1 className="font-playfair text-3xl lg:text-4xl font-bold text-charcoal-900 mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold-500 fill-gold-500' : 'text-beige-300 fill-beige-300'}`}
                    />
                  ))}
                </div>
                <span className="text-muted text-sm">{product.rating} ({product.reviews} verified reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-playfair text-3xl font-bold text-charcoal-900">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-muted text-lg line-through">{formatPrice(product.originalPrice)}</span>
                )}
                {discount > 0 && (
                  <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-0.5">Save {discount}%</span>
                )}
              </div>

              <div className="gold-divider mb-6" />

              <p className="text-charcoal-700 text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Key Specs Quick View */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {product.specs && Object.entries(product.specs).slice(0, 4).map(([key, val]) => (
                  <div key={key} className="bg-beige-50 p-3 border border-beige-200">
                    <p className="text-xs text-muted uppercase tracking-wider mb-0.5">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <p className="text-sm font-semibold text-charcoal-800">{val}</p>
                  </div>
                ))}
              </div>

              {/* Colors */}
              {product.colors?.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-charcoal-600 mb-2">
                    Available Colours
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map(c => (
                      <span key={c} className="px-3 py-1 text-xs bg-beige-100 border border-beige-200 text-charcoal-700 hover:border-gold-400 cursor-pointer transition-colors">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Finishes */}
              {product.finishes?.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-charcoal-600 mb-2">
                    Available Finishes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.finishes.map(f => (
                      <span key={f} className="px-3 py-1 text-xs bg-white border border-beige-300 text-charcoal-700 hover:border-gold-400 cursor-pointer transition-colors">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-charcoal-600 mb-3">Key Features</p>
                <div className="grid grid-cols-1 gap-1.5">
                  {product.features?.slice(0, 5).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-charcoal-700">
                      <FiCheck className="w-4 h-4 text-gold-500 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Lead time */}
              <div className="flex items-center gap-4 p-4 bg-gold-50 border border-gold-200 mb-6">
                <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-600">⏱</div>
                <div>
                  <p className="text-xs text-gold-700 font-semibold uppercase tracking-wider">Delivery Timeline</p>
                  <p className="text-sm text-charcoal-800 font-medium">{product.specs?.delivery || product.leadTime}</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3 mb-6">
                <Link to="/book-consultation" className="btn-primary w-full justify-center text-sm">
                  Book Free Site Visit <FiArrowRight className="w-4 h-4" />
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/919810422279?text=Hi, I'm interested in the ${product.name}. Can you provide a quote?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition-colors"
                  >
                    <BsWhatsapp className="w-4 h-4" /> WhatsApp
                  </a>
                  <a
                    href="tel:+919810422279"
                    className="flex items-center justify-center gap-2 py-3 border border-charcoal-800 hover:border-gold-500 text-charcoal-800 hover:text-gold-600 text-sm font-semibold transition-colors"
                  >
                    <FiPhone className="w-4 h-4" /> Call Now
                  </a>
                </div>
                <button className="btn-ghost justify-center text-sm">
                  <FiDownload className="w-4 h-4" /> Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TABS ===== */}
      <section className="bg-beige-50 border-t border-beige-200 py-16">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          {/* Tab Bar */}
          <div className="flex gap-0 mb-10 overflow-x-auto no-scrollbar border-b border-beige-200">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-6 py-4 text-sm font-semibold uppercase tracking-wider transition-all border-b-2 -mb-px ${
                  activeTab === tab
                    ? 'border-gold-500 text-gold-600'
                    : 'border-transparent text-muted hover:text-charcoal-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'description' && (
                <div className="max-w-3xl">
                  <h2 className="font-playfair text-2xl font-semibold text-charcoal-900 mb-4">About {product.name}</h2>
                  <p className="text-charcoal-700 text-sm leading-loose">{product.longDescription}</p>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div className="max-w-2xl">
                  <h2 className="font-playfair text-2xl font-semibold text-charcoal-900 mb-6">Technical Specifications</h2>
                  <div className="divide-y divide-beige-200 border border-beige-200 bg-white">
                    {product.specs && Object.entries(product.specs).map(([key, val]) => (
                      <div key={key} className="flex items-start py-3.5 px-5">
                        <span className="w-48 flex-shrink-0 text-xs font-semibold uppercase tracking-wider text-muted">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-sm text-charcoal-800">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="max-w-2xl">
                  <h2 className="font-playfair text-2xl font-semibold text-charcoal-900 mb-6">Features & Benefits</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features?.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-white border border-beige-200">
                        <div className="w-8 h-8 rounded-full bg-gold-50 flex items-center justify-center flex-shrink-0">
                          <FiCheck className="w-4 h-4 text-gold-500" />
                        </div>
                        <span className="text-sm text-charcoal-700">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'warranty' && (
                <div className="max-w-2xl">
                  <h2 className="font-playfair text-2xl font-semibold text-charcoal-900 mb-6">Warranty & Support</h2>
                  <div className="space-y-4">
                    {[
                      { icon: '🛡️', title: '10-Year Structural Warranty', desc: 'Full structural warranty covering carcass integrity, delamination, and hardware mechanisms.' },
                      { icon: '🔧', title: 'Lifetime Technical Support', desc: 'Call or WhatsApp us for any adjustment needs. We\'ll send a technician within 48 hours.' },
                      { icon: '📦', title: 'Delivery & Installation', desc: 'We handle everything — from factory to your room. Professional assembly included.' },
                      { icon: '✨', title: 'Annual Maintenance Plans', desc: 'Optional AMC plans available for kitchen and wardrobe servicing, adjustments, and polish.' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-5 bg-white border border-beige-200">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h3 className="font-semibold text-charcoal-900 mb-1">{item.title}</h3>
                          <p className="text-muted text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'faqs' && (
                <div className="max-w-2xl">
                  <FAQAccordion faqs={productFaqs(product.name)} title={`FAQs about ${product.name}`} />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ===== ENQUIRY FORM ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="section-label">Get In Touch</p>
              <h2 className="font-playfair text-3xl font-bold text-charcoal-900 mb-4">
                Interested in {product.name}?
              </h2>
              <div className="gold-divider mb-6" />
              <p className="text-muted text-sm leading-relaxed mb-6">
                Send us your requirements and our design expert will contact you within 24 hours to discuss dimensions, customisation options, and pricing.
              </p>
              <div className="space-y-4">
                {[
                  { icon: '📍', text: 'B-17 Sector-2, Noida, UP 201301' },
                  { icon: '📞', text: '+91 9810422279' },
                  { icon: '📧', text: 'contact@ertocucine.com' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-charcoal-700">
                    <span>{item.icon}</span> {item.text}
                  </div>
                ))}
              </div>
            </div>

            <div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-8 bg-green-50 border border-green-200"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-playfair text-2xl font-bold text-green-700 mb-2">Enquiry Sent!</h3>
                  <p className="text-green-600 text-sm">Our team will contact you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleEnquiry} className="space-y-4">
                  <div>
                    <label className="form-label">Your Name *</label>
                    <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="form-input" placeholder="Enter your full name" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Phone *</label>
                      <input required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="form-input" placeholder="+91 XXXXXXXXXX" />
                    </div>
                    <div>
                      <label className="form-label">Email</label>
                      <input value={form.email} onChange={e => setForm({...form, email: e.target.value})} type="email" className="form-input" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Message</label>
                    <textarea rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="form-input resize-none" placeholder={`I'm interested in ${product.name}...`} />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Enquiry <FiArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== RELATED PRODUCTS ===== */}
      {related.length > 0 && (
        <section className="py-16 bg-beige-50">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="section-label">You May Also Like</p>
                <h2 className="font-playfair text-3xl font-bold text-charcoal-900">Related Products</h2>
              </div>
              <Link to={`/products?cat=${product.subcategory.toLowerCase().replace(/\s+/g, '-')}`} className="btn-ghost">
                View All <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
