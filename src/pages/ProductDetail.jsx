import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { IconWhatsApp, IconSparkle } from '../components/Icons';
import { getProductById, getProductsByCategory, formatPrice, categories } from '../data/products';

const FALLBACK = '/logo-icon.png';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!product) {
    return (
      <div className="bg-black min-h-screen pt-40 pb-24 text-center px-5">
        <p className="text-gold-light/60 mb-6">No encontramos esta pieza en el catálogo.</p>
        <Link to="/catalogo" className="text-gold underline">Volver al catálogo</Link>
      </div>
    );
  }

  const categoryInfo = categories.find((c) => c.slug === product.category);
  const related = getProductsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 4);

  const whatsappMessage = encodeURIComponent(
    `Hola, estoy interesado(a) en "${product.name}" del catálogo de Joyas Mágicas. ¿Me pueden dar más información?`
  );

  return (
    <div className="bg-black min-h-screen pt-28 md:pt-32 pb-24 px-5 md:px-10">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-gold-light/50 hover:text-gold text-sm mb-8 inline-flex items-center gap-2 transition-colors"
        >
          ← Volver
        </button>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="aspect-square bg-ink-soft rounded-lg overflow-hidden border border-gold/15 relative"
          >
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = FALLBACK; e.currentTarget.className = 'w-1/3 h-1/3 m-auto object-contain opacity-40'; }}
              className="w-full h-full object-cover"
            />
            {product.special && (
              <span className="absolute top-4 left-4 bg-rose text-white text-xs tracking-widest uppercase px-3 py-1.5 rounded-full font-semibold">
                Edición limitada
              </span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {categoryInfo && (
              <Link
                to={`/catalogo?categoria=${categoryInfo.slug}`}
                className="text-gold-light/50 text-xs tracking-[0.3em] uppercase hover:text-gold transition-colors"
              >
                {categoryInfo.name}
              </Link>
            )}
            <h1 className="font-display text-3xl md:text-4xl text-gold-light mt-3 mb-3">{product.name}</h1>
            <p className="text-gold-light/50 text-sm mb-6">{product.material}</p>

            <p className="text-gold-light/70 leading-relaxed mb-8">{product.description}</p>

            <div className="flex items-center gap-2 mb-8">
              {product.customQuote ? (
                <span className="font-display text-2xl text-gold">Cotización personalizada</span>
              ) : (
                <span className="font-display text-3xl text-gold">{formatPrice(product.price)}</span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/50600000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-black font-body font-semibold tracking-wide text-sm px-8 py-3.5 rounded-full transition-colors duration-300"
              >
                <IconWhatsApp className="w-4 h-4" /> Consultar por WhatsApp
              </a>
              <Link
                to="/contacto"
                className="flex items-center justify-center border border-gold text-gold text-sm tracking-wide px-8 py-3.5 rounded-full hover:bg-gold hover:text-black transition-colors duration-300"
              >
               Más información
              </Link>
            </div>

            <div className="divider-gold my-8" />

            <div className="flex items-start gap-3 text-gold-light/50 text-sm">
              <IconSparkle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <p>Incluye certificado de autenticidad, estuche de presentación y garantía de por vida en manufactura.</p>
            </div>
          </motion.div>
        </div>

        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="font-display text-2xl md:text-3xl text-gold-light mb-8">También te podría interesar</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
