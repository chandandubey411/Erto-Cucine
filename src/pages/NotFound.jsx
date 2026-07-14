import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiArrowRight } from 'react-icons/fi';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found | Erto Cucine India</title>
      </Helmet>
      <div className="min-h-screen bg-beige-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="font-playfair text-[120px] font-bold text-gold-400 leading-none mb-4">404</div>
          <h1 className="font-playfair text-3xl font-bold text-charcoal-900 mb-4">Page Not Found</h1>
          <p className="text-muted mb-8 text-sm leading-relaxed">
            The page you're looking for doesn't exist or may have been moved. Explore our premium wardrobe and kitchen collections instead.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="btn-primary">Back to Home <FiArrowRight className="w-4 h-4" /></Link>
            <Link to="/products" className="btn-secondary">Browse Products</Link>
          </div>
        </div>
      </div>
    </>
  );
}
