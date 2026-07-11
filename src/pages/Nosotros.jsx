import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SparkleField from '../components/SparkleField';
import { IconSparkle, IconDiamond, IconRing } from '../components/Icons';

const values = [
  { icon: IconSparkle, title: 'Brillo', text: 'Cada piedra es seleccionada por su capacidad de capturar la luz y contarla de vuelta.' },
  { icon: IconDiamond, title: 'Elegancia', text: 'El diseño nunca grita; susurra buen gusto en cada línea y cada engaste.' },
  { icon: IconRing, title: 'Exclusividad', text: 'Piezas pensadas para durar generaciones, no temporadas.' },
];

export default function Nosotros() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero oscuro */}
      <section className="relative pt-36 pb-24 px-5 md:px-10 overflow-hidden">
        <SparkleField count={12} />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-gold-light/50 text-xs tracking-[0.35em] uppercase mb-4">Nuestra historia</p>
          <h1 className="font-display text-4xl md:text-6xl text-shimmer mb-6">El arte de crear magia en oro</h1>
          <p className="text-gold-light/60 leading-relaxed">
            Joyas Mágicas nace de una convicción simple: una joya no es solo un objeto, es un recuerdo con forma.
            Desde nuestro taller en Costa Rica, cada pieza se diseña y se pule a mano para que, al brillar,
            cuente una historia que valga la pena guardar para siempre.
          </p>
        </div>
      </section>

      {/* Sección clara con el icono medallón */}
      <section className="bg-gold-light py-20 px-5 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.img
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="/logo-medallion.png"
            alt="Sello Joyas Mágicas"
            className="w-24 md:w-28 mx-auto mb-6 drop-shadow-md"
          />
          <h2 className="font-display text-2xl md:text-4xl text-black mb-4">Cada joya guarda una historia</h2>
          <p className="text-black/60 max-w-xl mx-auto leading-relaxed">
            Cada brillo crea un recuerdo. Por eso trabajamos únicamente con materiales certificados y joyeros
            maestros que entienden que su trabajo no termina en el diseño: termina en el momento en que
            alguien la usa por primera vez.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-black py-24 px-5 md:px-10 border-t border-gold/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center text-gold mx-auto mb-5">
                <v.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-gold text-xl mb-3">{v.title}</h3>
              <p className="text-gold-light/60 text-sm leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-ink-soft py-20 px-5 md:px-10 border-t border-gold/10 text-center">
        <h2 className="font-display text-2xl md:text-4xl text-gold-light mb-6">
          ¿Lista para encontrar tu próxima joya?
        </h2>
        <Link
          to="/catalogo"
          className="inline-block bg-gold hover:bg-gold-light text-black font-body font-semibold tracking-widest uppercase text-sm px-8 py-3.5 rounded-full transition-colors duration-300"
        >
          Explorar catálogo
        </Link>
      </section>
    </div>
  );
}
