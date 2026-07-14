import { Link } from 'react-router-dom';
import {
  FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiYoutube,
} from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';

const footerLinks = {
  products: [
    { label: 'Sliding Wardrobes', to: '/products?cat=sliding-wardrobes' },
    { label: 'Hinged Wardrobes', to: '/products?cat=hinged-wardrobes' },
    { label: 'Walk-In Wardrobes', to: '/products?cat=walk-in-wardrobes' },
    { label: 'Mirror Wardrobes', to: '/products?cat=mirror-wardrobes' },
    { label: 'Kids Wardrobes', to: '/products?cat=kids-wardrobes' },
    { label: 'Modular Kitchens', to: '/modular-kitchen' },
    { label: 'TV Units', to: '/products?cat=tv-units' },
    { label: 'Bathroom Vanity', to: '/products?cat=bathroom-vanity' },
  ],
  company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Process', to: '/our-process' },
    { label: 'Materials', to: '/materials' },
    { label: 'Brands', to: '/brands' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Testimonials', to: '/testimonials' },
    { label: 'Blogs', to: '/blogs' },
    { label: 'FAQ', to: '/faq' },
  ],
  contact: [
    { label: 'Contact Us', to: '/contact' },
    { label: 'Book Consultation', to: '/book-consultation' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms of Service', to: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-5">
              <img src="/logo.png" alt="Erto Cucine India" className="h-12 w-auto object-contain rounded-lg" />
            </Link>


            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Premium Modular Kitchens, Wardrobes & Complete Interior Solutions for discerning Indian homes. Serving Delhi, Noida, Greater Noida & Gurugram.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="tel:+919810422279" className="flex items-center gap-3 text-sm text-white/70 hover:text-gold-400 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                  <FiPhone className="w-3.5 h-3.5" />
                </div>
                +91 9810422279
              </a>
              <a href="mailto:contact@ertocucine.com" className="flex items-center gap-3 text-sm text-white/70 hover:text-gold-400 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                  <FiMail className="w-3.5 h-3.5" />
                </div>
                contact@ertocucine.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiMapPin className="w-3.5 h-3.5" />
                </div>
                B-17 Sector-2, Noida,<br />Uttar Pradesh — 201301
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: FiInstagram, href: '#', label: 'Instagram' },
                { icon: FiFacebook, href: '#', label: 'Facebook' },
                { icon: FiYoutube, href: '#', label: 'YouTube' },
                { icon: BsWhatsapp, href: 'https://wa.me/919810422279', label: 'WhatsApp' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold-500 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-5">Products</h3>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-white/60 hover:text-gold-300 transition-colors hover-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-5">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-white/60 hover:text-gold-300 transition-colors hover-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA + Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-5">Get In Touch</h3>
            <ul className="space-y-2.5 mb-6">
              {footerLinks.contact.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-white/60 hover:text-gold-300 transition-colors hover-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/book-consultation"
              className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-gold-500 hover:bg-gold-600 text-charcoal-900 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-gold"
            >
              Book Free Consultation
            </Link>

            <div className="mt-4 p-4 bg-white/5 rounded">
              <p className="text-xs text-white/50 mb-1">Working Hours</p>
              <p className="text-sm text-white/80">Mon–Sat: 9 AM – 7 PM</p>
              <p className="text-xs text-white/50 mt-1">Sunday: By Appointment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Erto Cucine India. All Rights Reserved.
          </p>
          <p className="text-white/30 text-xs">
            B-17 Sector-2, Noida, UP 201301 · Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
