import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { BsQuote } from 'react-icons/bs';

export default function ReviewCard({ review, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white border border-beige-200 p-8 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
    >
      {/* Quote icon */}
      <BsQuote className="absolute top-4 right-4 w-12 h-12 text-gold-100" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <FiStar key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
        ))}
      </div>

      <p className="text-charcoal-700 text-sm leading-relaxed mb-6 italic">
        "{review.text}"
      </p>

      {/* Project tag */}
      <div className="inline-flex items-center px-3 py-1 bg-gold-50 border border-gold-200 text-gold-700 text-xs font-medium tracking-wider uppercase mb-5">
        {review.project}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-beige-200">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-10 h-10 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="text-charcoal-900 font-semibold text-sm">{review.name}</p>
          <p className="text-muted text-xs">{review.role} · {review.location}</p>
        </div>
      </div>
    </motion.div>
  );
}
