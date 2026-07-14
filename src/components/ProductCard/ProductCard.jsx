import { Link } from 'react-router-dom';
import { FiArrowRight, FiStar } from 'react-icons/fi';
import { formatPrice } from '../../data/products';

export default function ProductCard({ product, index = 0 }) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 70}
      className="group product-card"
    >
      <Link to={`/products/${product.slug}`}>
        {/* Image */}
        <div className="product-image-wrap h-64 relative bg-beige-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-charcoal-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="flex items-center gap-2 bg-gold-500 text-charcoal-900 px-5 py-2.5 text-xs font-bold uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              View Details <FiArrowRight className="w-4 h-4" />
            </span>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.badge && (
              <span className="luxury-badge text-[10px]">{product.badge}</span>
            )}
            {discount > 0 && (
              <span className="inline-flex items-center px-2.5 py-1 bg-charcoal-900 text-gold-400 text-[10px] font-bold tracking-wider">
                {discount}% OFF
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-[10px] text-muted uppercase tracking-widest mb-1.5 font-medium">
            {product.subcategory}
          </p>
          <h3 className="font-playfair text-base font-semibold text-charcoal-900 mb-2 line-clamp-2 group-hover:text-gold-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-muted text-xs leading-relaxed mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <FiStar
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? 'text-gold-500 fill-gold-500'
                      : 'text-beige-300 fill-beige-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-[10px] text-muted">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between pt-3 border-t border-beige-200">
            <div>
              <span className="text-lg font-bold text-charcoal-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="ml-2 text-xs text-muted line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-muted">{product.leadTime?.split(' ')[0]}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

