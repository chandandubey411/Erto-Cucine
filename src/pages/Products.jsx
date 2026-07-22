import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiFilter, FiX, FiGrid, FiList } from 'react-icons/fi';

import ProductCard from '../components/ProductCard/ProductCard';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import CTA from '../components/CTA/CTA';
import { allProducts, categories } from '../data/products';

const SUBCATEGORIES = [...new Set(allProducts.map(p => p.subcategory))];
const FINISHES = ['PU Lacquer', 'Acrylic', 'Laminate', 'Veneer', 'Mirror', 'Painted MDF'];
const SORT_OPTIONS = [
  { label: 'Default', value: 'default' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
  { label: 'Most Reviews', value: 'reviews' },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sort, setSort] = useState('default');

  const catFilter = searchParams.get('cat') || '';
  const qFilter = searchParams.get('q') || '';

  const selectedCat = categories.find(c => c.slug === catFilter);

  const filtered = useMemo(() => {
    let list = allProducts;

    if (catFilter) {
      list = list.filter(p =>
        p.subcategory.toLowerCase().replace(/\s+/g, '-') === catFilter ||
        p.category.toLowerCase().replace(/\s+/g, '-') === catFilter
      );
    }
    if (qFilter) {
      const q = qFilter.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q) ||
        p.tags?.some(t => t.toLowerCase().includes(q))
      );
    }

    switch (sort) {
      case 'price-asc':  list = [...list].sort((a, b) => a.price - b.price); break;
      case 'price-desc': list = [...list].sort((a, b) => b.price - a.price); break;
      case 'rating':     list = [...list].sort((a, b) => b.rating - a.rating); break;
      case 'reviews':    list = [...list].sort((a, b) => b.reviews - a.reviews); break;
      default: break;
    }
    return list;
  }, [catFilter, qFilter, sort]);

  const setFilter = (key, val) => {
    const next = new URLSearchParams(searchParams);
    if (val) next.set(key, val); else next.delete(key);
    setSearchParams(next);
  };

  return (
    <>
      <Helmet>
        <title>{selectedCat ? `${selectedCat.name} — ` : ''}All Products | Erto Cucine India</title>
        <meta name="description" content="Browse 45+ premium modular wardrobes, kitchens, TV units, vanities, and luxury furniture from Erto Cucine India." />
      </Helmet>

      {/* Page Hero */}
      <div className="relative pt-24 pb-16 bg-charcoal-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
          alt="Products"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[
            ...(selectedCat ? [{ label: selectedCat.name }] : [{ label: 'All Products' }]),
          ]} />
          <h1 className="font-playfair text-4xl lg:text-5xl text-white font-bold mt-4">
            {selectedCat ? selectedCat.name : 'All Products'}
          </h1>
          <p className="text-white/60 mt-2">
            {filtered.length} premium products available
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-10">
        {/* Category Pills */}
        <div className="flex gap-2 flex-wrap mb-8 no-scrollbar overflow-x-auto pb-2">
          <button
            onClick={() => setFilter('cat', '')}
            className={`flex-shrink-0 px-5 py-2.5 text-sm font-medium border transition-all ${
              !catFilter
                ? 'bg-charcoal-900 text-white border-charcoal-900'
                : 'bg-white text-charcoal-600 border-beige-300 hover:border-gold-400'
            }`}
          >
            All ({allProducts.length})
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter('cat', cat.slug)}
              className={`flex-shrink-0 px-5 py-2.5 text-sm font-medium border transition-all whitespace-nowrap ${
                catFilter === cat.slug
                  ? 'bg-gold-500 text-charcoal-900 border-gold-500'
                  : 'bg-white text-charcoal-600 border-beige-300 hover:border-gold-400'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-beige-200">
          <p className="text-muted text-sm">
            Showing <span className="text-charcoal-900 font-semibold">{filtered.length}</span> products
          </p>
          <div className="flex items-center gap-3">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="text-sm border border-beige-300 bg-white px-4 py-2 focus:outline-none focus:border-gold-500 transition-colors"
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-4xl mb-4">🔍</p>
            <h3 className="font-playfair text-2xl text-charcoal-900 mb-2">No Products Found</h3>
            <p className="text-muted mb-6">Try a different filter or browse all products.</p>
            <button onClick={() => setSearchParams({})} className="btn-primary">
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i % 12} />
            ))}
          </div>
        )}
      </div>

      <CTA />
    </>
  );
}
