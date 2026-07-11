import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SparkleField from '../components/SparkleField';
import ProductCard from '../components/ProductCard';
import { CategoryIcon, IconSparkle } from '../components/Icons';
import { categories, getFeaturedProducts } from '../data/products';

const featured = getFeaturedProducts();

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
        <SparkleField count={22} />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

        <div className="relative max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.85, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            src="/logo-hero.png"
            alt="Joyas Mágicas — anillo con diamante"
            className="w-40 md:w-56 mb-8 drop-shadow-[0_0_40px_rgba(212,175,55,0.35)]"
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl text-shimmer leading-tight tracking-wide"
          >
            JOYAS MÁGICAS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-gold-light/70 text-sm md:text-base tracking-[0.3em] uppercase mt-4"
          >
            Donde la elegancia se convierte en magia
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <Link
              to="/catalogo"
              className="bg-gold hover:bg-gold-light text-black font-body font-semibold tracking-widest uppercase text-sm px-8 py-3.5 rounded-full transition-colors duration-300"
            >
              Explorar catálogo
            </Link>
            <a
              href="https://wa.me/50600000000"
              target="_blank"
              rel="noreferrer"
              className="border border-gold text-gold font-body tracking-widest uppercase text-sm px-8 py-3.5 rounded-full hover:bg-gold hover:text-black transition-colors duration-300"
            >
              Agendar visita
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-light/40 text-xs tracking-widest uppercase"
        >
          Desliza para descubrir
        </motion.div>
      </section>

      {/* CATEGORÍAS */}
      <section className="bg-black py-24 px-5 md:px-10 border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold-light/50 text-xs tracking-[0.35em] uppercase mb-3">Nuestras colecciones</p>
            <h2 className="font-display text-3xl md:text-5xl text-gold-light">Cada pieza, un mundo propio</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={`/catalogo?categoria=${cat.slug}`}
                  className="group flex flex-col items-center text-center gap-3 p-5 border border-gold/10 rounded-lg hover:border-gold/40 hover:bg-ink-soft transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                    <CategoryIcon name={cat.icon} className="w-6 h-6" />
                  </div>
                  <span className="font-display text-gold-light text-sm md:text-base">{cat.name}</span>
                  <span className="text-gold-light/40 text-xs hidden md:block">{cat.tagline}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTACADOS */}
      <section className="bg-ink-soft py-24 px-5 md:px-10 border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-gold-light/50 text-xs tracking-[0.35em] uppercase mb-3">Seleccionadas para ti</p>
              <h2 className="font-display text-3xl md:text-5xl text-gold-light">Piezas destacadas</h2>
            </div>
            <Link to="/catalogo" className="text-gold text-sm tracking-widest uppercase border-b border-gold pb-1 hover:text-gold-light transition-colors">
              Ver todo el catálogo →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featured.slice(0, 8).map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* COLECCIÓN ESPECIAL / CUSTOM */}
      <section className="relative bg-black py-28 px-5 md:px-10 border-t border-gold/10 overflow-hidden">
        <SparkleField count={10} />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center text-gold">
              <IconSparkle className="w-7 h-7" />
            </div>
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-shimmer mb-6">Colección Especial, diseñada solo para ti</h2>
          <p className="text-gold-light/60 max-w-2xl mx-auto leading-relaxed mb-10">
            Trabajamos junto a nuestros joyeros maestros para crear piezas únicas: tú eliges el metal, la piedra
            y el grabado. Cada creación pasa por un proceso artesanal pensado para un solo dueño.
          </p>
          <Link
            to="/catalogo?categoria=coleccion-especial"
            className="inline-block bg-gold hover:bg-gold-light text-black font-body font-semibold tracking-widest uppercase text-sm px-8 py-3.5 rounded-full transition-colors duration-300"
          >
            Descubrir la colección
          </Link>
        </div>
      </section>

      {/* CITA / GARANTÍA */}
      <section className="bg-gold-light py-20 px-5 md:px-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="font-display text-black text-lg mb-2">Autenticidad garantizada</h3>
            <p className="text-black/60 text-sm leading-relaxed">Cada pieza incluye certificado de autenticidad y garantía de por vida en manufactura.</p>
          </div>
          <div>
            <h3 className="font-display text-black text-lg mb-2">Atención personalizada</h3>
            <p className="text-black/60 text-sm leading-relaxed">Agenda una cita privada en tienda o conversa con nuestro asesor virtual las 24 horas.</p>
          </div>
          <div>
            <h3 className="font-display text-black text-lg mb-2">Diseño a la medida</h3>
            <p className="text-black/60 text-sm leading-relaxed">Convertimos tu idea en una joya real, desde el boceto hasta el estuche.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
