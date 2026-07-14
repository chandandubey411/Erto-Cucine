import { Link } from 'react-router-dom';
import { FiChevronRight, FiHome } from 'react-icons/fi';

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="breadcrumb" className="flex items-center gap-1.5 text-xs text-muted">
      <Link to="/" className="hover:text-gold-500 transition-colors flex items-center gap-1">
        <FiHome className="w-3.5 h-3.5" />
        Home
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <FiChevronRight className="w-3.5 h-3.5 text-beige-400 flex-shrink-0" />
          {item.to ? (
            <Link to={item.to} className="hover:text-gold-500 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-charcoal-700 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
