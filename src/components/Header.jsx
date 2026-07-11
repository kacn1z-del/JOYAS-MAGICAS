import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu, IconClose } from './Icons';

const navLinks = [
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-gold/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setMenuOpen(false)}>
          <img
            src="/logo-icon.png"
            alt="Joyas Mágicas"
            className="h-11 w-11 object-contain transition-transform duration-500 group-hover:scale-110"
          />
          <div className="flex flex-col leading-none">
            <span className="font-display text-gold text-lg md:text-xl tracking-wide">JOYAS MÁGICAS</span>
            <span className="font-body text-[9px] md:text-[10px] tracking-[0.35em] text-gold-light/70">JOYERÍA</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-body text-sm tracking-widest uppercase transition-colors ${
                  isActive ? 'text-gold' : 'text-gold-light/80 hover:text-gold'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden text-gold"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? <IconClose className="w-7 h-7" /> : <IconMenu className="w-7 h-7" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden bg-black border-t border-gold/20 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-body text-base tracking-widest uppercase ${isActive ? 'text-gold' : 'text-gold-light/80'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
