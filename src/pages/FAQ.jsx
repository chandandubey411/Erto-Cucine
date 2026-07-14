import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import FAQAccordion from '../components/FAQ/FAQ';
import CTA from '../components/CTA/CTA';
import { faqs } from '../data/faqs';

const grouped = [
  { cat: 'Process', label: '🔄 Process' },
  { cat: 'Materials', label: '🪵 Materials' },
  { cat: 'Products', label: '📦 Products' },
  { cat: 'Pricing', label: '💰 Pricing' },
  { cat: 'Warranty', label: '🛡️ Warranty' },
  { cat: 'Service', label: '🤝 Service' },
];

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>FAQ | Erto Cucine India — Common Questions Answered</title>
        <meta name="description" content="Answers to the most common questions about Erto Cucine India's modular kitchens, wardrobes, materials, warranty, installation and pricing." />
      </Helmet>

      <div className="relative pt-32 pb-16 bg-charcoal-900">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: 'FAQ' }]} />
          <h1 className="font-playfair text-5xl lg:text-6xl text-white font-bold mt-6 mb-4">Frequently Asked Questions</h1>
          <p className="text-white/60 text-lg">Everything you need to know before starting your project.</p>
        </div>
      </div>

      <section className="py-16 bg-beige-50">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <div className="sticky top-24 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">Jump to Category</p>
                {grouped.map(g => (
                  <a
                    key={g.cat}
                    href={`#${g.cat}`}
                    className="flex items-center gap-3 px-4 py-3 bg-white border border-beige-200 hover:border-gold-400 text-charcoal-700 hover:text-gold-600 transition-all text-sm font-medium"
                  >
                    {g.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-12">
              {grouped.map(g => {
                const items = faqs.filter(f => f.category === g.cat);
                if (!items.length) return null;
                return (
                  <motion.div
                    key={g.cat}
                    id={g.cat}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white p-8 border border-beige-200">
                      <h2 className="font-playfair text-xl font-bold text-charcoal-900 mb-6">{g.label}</h2>
                      <FAQAccordion faqs={items} title="" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
