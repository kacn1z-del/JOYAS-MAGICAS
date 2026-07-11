import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import { IconWhatsApp } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/20 pt-16 pb-8 px-5 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img src="/logo-horizontal.png" alt="Joyas Mágicas" className="h-14 object-contain object-left mb-4" />
          <p className="text-gold-light/60 text-sm leading-relaxed max-w-xs">
            Donde la elegancia se convierte en magia. Joyería fina diseñada y curada para momentos que merecen ser recordados.
          </p>
        </div>

        <div>
          <h4 className="font-display text-gold text-sm tracking-[0.2em] mb-4">CATEGORÍAS</h4>
          <ul className="space-y-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/catalogo?categoria=${c.slug}`}
                  className="text-gold-light/60 hover:text-gold text-sm transition-colors"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-gold text-sm tracking-[0.2em] mb-4">EXPLORAR</h4>
          <ul className="space-y-2">
            <li><Link to="/catalogo" className="text-gold-light/60 hover:text-gold text-sm transition-colors">Catálogo completo</Link></li>
            <li><Link to="/nosotros" className="text-gold-light/60 hover:text-gold text-sm transition-colors">Nuestra historia</Link></li>
            <li><Link to="/contacto" className="text-gold-light/60 hover:text-gold text-sm transition-colors">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-gold text-sm tracking-[0.2em] mb-4">VISÍTANOS</h4>
          <ul className="space-y-2 text-gold-light/60 text-sm">
            <li>San José, Costa Rica</li>
            <li>Lunes a sábado, 9am – 6pm</li>
            <li>
              <a
                href="https://wa.me/50600000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-2 hover:text-gold transition-colors"
              >
                <IconWhatsApp className="w-4 h-4" /> +506 0000-0000
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="divider-gold my-8 max-w-7xl mx-auto" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gold-light/40">
        <p>© {new Date().getFullYear()} Joyas Mágicas Joyería. Todos los derechos reservados.</p>
        <p>Sitio desarrollado por KCN Studio</p>
      </div>
    </footer>
  );
}
