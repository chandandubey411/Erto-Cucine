import { Helmet } from 'react-helmet-async';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import CTA from '../components/CTA/CTA';
import materials from '../data/materials';

export default function Materials() {
  return (
    <>
      <Helmet>
        <title>Materials We Use | Erto Cucine India — Premium Quality Guaranteed</title>
        <meta name="description" content="Discover the premium materials used in Erto Cucine India's modular kitchens and wardrobes — BWR plywood, Hettich hardware, German laminates, and Italian acrylic." />
      </Helmet>

      <div className="relative pt-32 pb-16 bg-charcoal-900">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: 'Materials' }]} />
          <h1 className="font-playfair text-5xl lg:text-6xl text-white font-bold mt-6 mb-4">Our Materials</h1>
          <p className="text-white/60 text-lg">We use only the finest materials. Here's what goes into every Erto Cucine product.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label justify-center">Premium Only</p>
            <h2 className="section-title">Materials We Trust</h2>
            <div className="gold-divider mx-auto" />
            <p className="section-subtitle mx-auto mt-4">
              Every board, every hinge, every finish is carefully selected for durability, beauty, and performance in the Indian climate.
            </p>
          </div>

          <div className="space-y-8">
            {materials.map((mat, i) => (
              <div
                key={mat.id}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden border border-beige-200 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img src={mat.image} alt={mat.name} className="w-full h-64 lg:h-full object-cover" loading="lazy" />
                </div>
                <div className={`p-10 flex flex-col justify-center bg-white ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="text-3xl mb-4">{mat.icon}</div>
                  <p className="text-gold-600 text-xs font-semibold uppercase tracking-widest mb-2">{mat.fullName}</p>
                  <h3 className="font-playfair text-2xl font-bold text-charcoal-900 mb-3">{mat.name}</h3>
                  <div className="gold-divider mb-5" />
                  <p className="text-muted text-sm leading-relaxed mb-5">{mat.description}</p>
                  <div className="mb-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-600 mb-2">Properties</p>
                    <div className="flex flex-wrap gap-2">
                      {mat.properties.map(p => (
                        <span key={p} className="px-3 py-1 bg-beige-100 border border-beige-200 text-charcoal-700 text-xs font-medium">✓ {p}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-600 mb-2">Used In</p>
                    <div className="flex flex-wrap gap-2">
                      {mat.uses.map(u => (
                        <span key={u} className="px-3 py-1 bg-gold-50 border border-gold-200 text-gold-700 text-xs font-medium">{u}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

