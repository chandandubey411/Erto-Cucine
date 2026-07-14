import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';

const BG = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80';

export default function CTA({
  title = 'Transform Your Home with Erto Cucine',
  subtitle = 'Get a FREE consultation with our expert designers. We\'ll visit your home, take precise measurements, and create a custom 3D design — completely free, no obligation.',
  cta1 = { label: 'Book Free Consultation', to: '/book-consultation' },
  cta2 = { label: 'Call Us Now', href: 'tel:+919810422279' },
  dark = true,
}) {
  return (
    <section className="relative overflow-hidden py-24">
      {/* BG */}
      {dark && (
        <>
          <img
            src={BG}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal-900/85" />
        </>
      )}
      {!dark && <div className="absolute inset-0 bg-beige-100 bg-texture-light" />}

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="section-label justify-center mb-4">
            <span className={dark ? 'text-gold-400' : 'text-gold-600'}>
              {dark && '—'} Get Started Today
            </span>
          </div>
          <h2 className={`section-title mb-4 ${dark ? 'text-white' : 'text-charcoal-900'}`}>
            {title}
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className={`text-sm lg:text-base leading-relaxed mb-10 max-w-2xl mx-auto ${
            dark ? 'text-white/70' : 'text-muted'
          }`}>
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={cta1.to} className={dark ? 'btn-primary' : 'btn-primary'}>
              {cta1.label} <FiArrowRight className="w-4 h-4" />
            </Link>

            {cta2.href && (
              <a href={cta2.href} className={dark ? 'btn-outline-white' : 'btn-secondary'}>
                <FiPhone className="w-4 h-4" />
                {cta2.label}
              </a>
            )}
          </div>

          {/* WhatsApp */}
          <div className="mt-8">
            <a
              href="https://wa.me/919810422279?text=Hi, I want a free consultation for my home interior project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
            >
              <BsWhatsapp className="w-5 h-5" />
              Or WhatsApp us instantly
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
