import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { formatPrice } from '../data/products';

const FALLBACK = '/logo-icon.png';

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
    >
      <Link
        to={`/producto/${product.id}`}
        className="group block bg-ink-soft border border-gold/15 rounded-sm overflow-hidden hover:border-gold/50 transition-colors duration-300"
      >
        <div className="img-zoom-wrap aspect-[4/5] bg-ink-charcoal relative">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = FALLBACK; e.currentTarget.className = 'w-1/3 h-1/3 m-auto object-contain opacity-40'; }}
            className="w-full h-full object-cover"
          />
          {product.special && (
            <span className="absolute top-3 left-3 bg-rose text-white text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full font-body font-semibold">
              Edición limitada
            </span>
          )}
        </div>
        <div className="p-4 md:p-5">
          <p className="text-gold-light/50 text-[11px] tracking-widest uppercase mb-1">{product.material}</p>
          <h3 className="font-display text-gold-light text-base md:text-lg mb-2 group-hover:text-gold transition-colors">
            {product.name}
          </h3>
          <p className="text-gold font-body font-medium">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </motion.div>
  );
}
