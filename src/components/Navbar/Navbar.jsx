import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  HiOutlinePhone, HiOutlineMail, HiOutlineSearch,
  HiOutlineMenu, HiX,
} from 'react-icons/hi';
import { BsWhatsapp } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import MegaMenu from '../MegaMenu/MegaMenu';

const COMPANY = {
  phone: '+91 9810422279',
  email: 'contact@ertocucine.com',
};

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', hasMega: true },
  { label: 'Products', to: '/products' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const megaTimeout = useRef(null);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location]);

  const handleMegaEnter = () => {
    clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };
  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200);
  };

  const navBg = scrolled
    ? 'bg-white/95 shadow-luxury-sm backdrop-blur-md border-b border-beige-200'
    : isHome
      ? 'bg-transparent'
      : 'bg-charcoal-900 border-b border-charcoal-800';

  const textColor = scrolled
    ? 'text-charcoal-800'
    : isHome
      ? 'text-white'
      : 'text-white';

  const logoColor = scrolled ? 'text-charcoal-900' : 'text-white';

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:flex items-center justify-between px-8 py-2 text-xs bg-black text-white">
        <div className="flex items-center gap-6">
          <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
            <HiOutlinePhone className="w-3.5 h-3.5" />
            {COMPANY.phone}
          </a>
          <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
            <HiOutlineMail className="w-3.5 h-3.5" />
            {COMPANY.email}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/60">Serving: Delhi | Noida | Greater Noida | Gurugram</span>
          <a
            href="https://wa.me/919810422279"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-green-400 hover:text-green-300 transition-colors font-medium"
          >
            <BsWhatsapp className="w-3.5 h-3.5" />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed top-0 lg:top-8 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img
                src="/logo.png"
                alt="Erto Cucine India"
                className="h-10 lg:h-12 w-auto object-contain rounded-lg"
              />
            </Link>


            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.hasMega ? (
                  <div
                    key="services"
                    className="relative"
                    onMouseEnter={handleMegaEnter}
                    onMouseLeave={handleMegaLeave}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide hover:text-gold-500 transition-colors ${textColor}`}
                      onClick={() => setMegaOpen((o) => !o)}
                    >
                      Services
                      <FiChevronDown className={`w-4 h-4 transition-transform duration-300 ${megaOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div
                      onMouseEnter={handleMegaEnter}
                      onMouseLeave={handleMegaLeave}
                    >
                      <MegaMenu open={megaOpen} />
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `relative px-4 py-2 text-sm font-medium tracking-wide transition-colors hover:text-gold-500 ${
                        isActive ? 'text-gold-500' : textColor
                      } hover-underline`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 lg:gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className={`p-2 rounded-full hover:text-gold-500 transition-colors ${textColor}`}
                aria-label="Search"
              >
                <HiOutlineSearch className="w-5 h-5" />
              </button>

              <Link
                to="/book-consultation"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-charcoal-900 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold"
              >
                Book Free Consultation
              </Link>

              {/* Mobile menu button */}
              <button
                className={`lg:hidden p-2 transition-colors ${textColor}`}
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <HiX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal-900 text-white overflow-y-auto transition-all duration-300 ease-in-out lg:hidden ${
          mobileOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="p-6 pt-20">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.hasMega ? (
                <div key="services-mobile">
                  <p className="text-xs uppercase tracking-widest text-muted font-semibold mt-6 mb-3">Services</p>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      ['Modular Kitchens', '/modular-kitchen'],
                      ['Sliding Wardrobes', '/products?cat=sliding-wardrobes'],
                      ['Hinged Wardrobes', '/products?cat=hinged-wardrobes'],
                      ['Walk-In Wardrobes', '/products?cat=walk-in-wardrobes'],
                      ['TV Units', '/products?cat=tv-units'],
                      ['Bathroom Vanity', '/products?cat=bathroom-vanity'],
                    ].map(([label, to]) => (
                      <Link
                        key={to}
                        to={to}
                        className="px-4 py-3 bg-charcoal-800 rounded text-sm hover:bg-gold-500 hover:text-charcoal-900 transition-colors"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-xl font-playfair py-3 border-b border-charcoal-700 hover:text-gold-400 transition-colors"
                >
                  {link.label}
                </NavLink>
              )
            )}
          </div>

          <div className="mt-8 space-y-3">
            <Link to="/book-consultation" className="btn-primary w-full justify-center">
              Book Free Consultation
            </Link>
            <a href={`tel:${COMPANY.phone}`} className="btn-outline-white w-full justify-center">
              <HiOutlinePhone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-charcoal-900/95 backdrop-blur-md flex items-center justify-center p-6 transition-all duration-300 ease-out ${
          searchOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        onClick={(e) => e.target === e.currentTarget && setSearchOpen(false)}
      >
        <div className="w-full max-w-2xl">
          <div className="flex items-center gap-4 border-b-2 border-gold-500 pb-4">
            <HiOutlineSearch className="w-6 h-6 text-gold-500 flex-shrink-0" />
            <input
              autoFocus
              type="text"
              placeholder="Search wardrobes, kitchens, furniture..."
              className="flex-1 bg-transparent text-white text-xl placeholder-white/40 outline-none"
            />
            <button onClick={() => setSearchOpen(false)} className="text-white/60 hover:text-white">
              <HiX className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-6">
            <p className="text-white/40 text-sm">Try: Sliding Wardrobe, L-Shape Kitchen, TV Unit</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {['Sliding Wardrobes', 'Modular Kitchen', 'Walk-In Wardrobe', 'TV Unit', 'Bathroom Vanity'].map((tag) => (
                <Link
                  key={tag}
                  to={`/products?q=${encodeURIComponent(tag)}`}
                  onClick={() => setSearchOpen(false)}
                  className="px-4 py-2 bg-charcoal-800 hover:bg-gold-500 hover:text-charcoal-900 text-white/80 text-sm rounded-full transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
