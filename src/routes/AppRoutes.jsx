import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load all pages
const Home           = lazy(() => import('../pages/Home'));
const About          = lazy(() => import('../pages/About'));
const Products       = lazy(() => import('../pages/Products'));
const ProductDetail  = lazy(() => import('../pages/ProductDetail'));
const Gallery        = lazy(() => import('../pages/Gallery'));
const OurProcess     = lazy(() => import('../pages/OurProcess'));
const Testimonials   = lazy(() => import('../pages/Testimonials'));
const Blogs          = lazy(() => import('../pages/Blogs'));
const BlogDetail     = lazy(() => import('../pages/BlogDetail'));
const FAQ            = lazy(() => import('../pages/FAQ'));
const Materials      = lazy(() => import('../pages/Materials'));
const Brands         = lazy(() => import('../pages/Brands'));
const Contact        = lazy(() => import('../pages/Contact'));
const BookConsultation = lazy(() => import('../pages/BookConsultation'));
const NotFound       = lazy(() => import('../pages/NotFound'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-beige-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-beige-300 border-t-gold-500 rounded-full animate-spin" />
        <p className="text-muted text-sm">Loading...</p>
      </div>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/our-process" element={<OurProcess />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-consultation" element={<BookConsultation />} />

        {/* Category shortcuts */}
        <Route path="/modular-kitchen" element={<Products />} />
        <Route path="/luxury-furniture" element={<Products />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
