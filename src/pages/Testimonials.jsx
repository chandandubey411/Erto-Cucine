import { Helmet } from 'react-helmet-async';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ReviewCard from '../components/ReviewCard/ReviewCard';
import CTA from '../components/CTA/CTA';
import testimonials from '../data/testimonials';
import AnimatedCounter from '../components/AnimatedCounter/AnimatedCounter';

export default function Testimonials() {
  return (
    <>
      <Helmet>
        <title>Customer Reviews & Testimonials | Erto Cucine India</title>
        <meta name="description" content="Read verified reviews from 5000+ happy customers who chose Erto Cucine India for their modular kitchen and wardrobe projects across Delhi NCR." />
      </Helmet>

      <div className="relative pt-32 pb-16 bg-charcoal-900">
        <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&q=80" alt="Reviews" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: 'Testimonials' }]} />
          <h1 className="font-playfair text-5xl lg:text-6xl text-white font-bold mt-6 mb-4">Customer Stories</h1>
          <p className="text-white/60 text-lg">5,000+ families trust Erto Cucine. Here's what they have to say.</p>
        </div>
      </div>

      {/* Stats */}
      <section className="py-12 bg-gold-500">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: 5000, suf: '+', label: 'Happy Customers' },
              { val: 4.9, suf: '/5', label: 'Average Rating' },
              { val: 98, suf: '%', label: 'Satisfaction Rate' },
              { val: 10, suf: ' Yr', label: 'Warranty' },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-playfair text-4xl font-bold text-charcoal-900">
                  {s.label === 'Average Rating' ? '4.9' : <AnimatedCounter target={s.val} suffix={s.suf} />}
                </p>
                <p className="text-charcoal-700 text-sm uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-beige-50">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((r, i) => <ReviewCard key={r.id} review={r} index={i} />)}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
