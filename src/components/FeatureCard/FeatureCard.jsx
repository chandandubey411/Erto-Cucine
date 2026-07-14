export default function FeatureCard({ feature, index = 0 }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
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
    </div>
  );
}

