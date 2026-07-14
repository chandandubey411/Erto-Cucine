import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function CategoryCard({ category, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group relative overflow-hidden rounded-none cursor-pointer"
    >
      <Link to={`/products?cat=${category.slug}`}>
        {/* Image */}
        <div className="relative h-72 lg:h-80 overflow-hidden bg-charcoal-200">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent" />

          {/* Count badge */}
          <div className="absolute top-4 right-4 glass-dark px-3 py-1.5 rounded">
            <span className="text-gold-400 text-xs font-bold">{category.count}</span>
            <span className="text-white/70 text-xs ml-1">Products</span>
          </div>
        </div>

        {/* Text overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-playfair text-white text-xl font-semibold mb-1 group-hover:text-gold-300 transition-colors">
            {category.name}
          </h3>
          <p className="text-white/60 text-xs leading-relaxed line-clamp-2 mb-3">
            {category.description}
          </p>
          <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            Explore <FiArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
