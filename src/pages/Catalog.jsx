import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { CategoryIcon, IconSearch } from '../components/Icons';
import { categories, products } from '../data/products';

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('categoria') || 'todas';
  const [query, setQuery] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeCategory]);

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory !== 'todas') {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.material.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCategory, query]);

  const setCategory = (slug) => {
    if (slug === 'todas') {
      searchParams.delete('categoria');
    } else {
      searchParams.set('categoria', slug);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-black min-h-screen pt-32 pb-24 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold-light/50 text-xs tracking-[0.35em] uppercase mb-3">Catálogo completo</p>
          <h1 className="font-display text-4xl md:text-6xl text-gold-light">Nuestras Joyas</h1>
        </div>

        {/* Buscador */}
        <div className="max-w-md mx-auto mb-10 relative">
          <IconSearch className="w-4 h-4 text-gold-light/40 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nombre o material..."
            className="w-full bg-ink-soft border border-gold/20 focus:border-gold rounded-full pl-11 pr-4 py-3 text-sm text-gold-light placeholder:text-gold-light/30 outline-none transition-colors"
          />
        </div>

        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          <button
            onClick={() => setCategory('todas')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm tracking-wide border transition-colors duration-300 ${
              activeCategory === 'todas'
                ? 'bg-gold text-black border-gold'
                : 'border-gold/20 text-gold-light/70 hover:border-gold/50'
            }`}
          >
            Todas
          </button>
          {categories.map((cat) => {
            const isSpecial = cat.slug === 'coleccion-especial';
            const isActive = activeCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => setCategory(cat.slug)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm tracking-wide border transition-colors duration-300 ${
                  isActive
                    ? isSpecial
                      ? 'bg-rose text-white border-rose'
                      : 'bg-gold text-black border-gold'
                    : isSpecial
                      ? 'border-rose/30 text-rose-light/80 hover:border-rose/60'
                      : 'border-gold/20 text-gold-light/70 hover:border-gold/50'
                }`}
              >
                <CategoryIcon name={cat.icon} className="w-4 h-4" />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Grid de productos */}
        {filtered.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gold-light/50">No encontramos piezas que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  );
}
