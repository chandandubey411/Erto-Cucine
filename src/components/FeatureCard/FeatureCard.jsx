import { motion } from 'framer-motion';

export default function FeatureCard({ feature, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group p-8 bg-white border border-beige-200 hover:border-gold-300 hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
    >
      <div className="w-14 h-14 flex items-center justify-center bg-gold-50 text-gold-600 text-2xl rounded mb-6 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
        {feature.icon}
      </div>
      <h3 className="font-playfair text-xl font-semibold text-charcoal-900 mb-3">
        {feature.title}
      </h3>
      <div className="gold-divider" />
      <p className="text-muted text-sm leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}
