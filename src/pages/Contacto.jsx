import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconWhatsApp } from '../components/Icons';

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', telefono: '', mensaje: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola, soy ${form.nombre || 'un cliente'}. ${form.mensaje}${form.telefono ? ` (Tel: ${form.telefono})` : ''}`
    );
    window.open(`https://wa.me/50600000000?text=${text}`, '_blank');
    setSent(true);
  };

  return (
    <div className="bg-black min-h-screen pt-32 pb-24 px-5 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold-light/50 text-xs tracking-[0.35em] uppercase mb-3">Hablemos</p>
          <h1 className="font-display text-4xl md:text-6xl text-gold-light">Contáctanos</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-gold text-xl mb-6">Visítanos o escríbenos</h2>
            <ul className="space-y-5 text-gold-light/70 text-sm">
              <li>
                <p className="text-gold-light/40 text-xs tracking-widest uppercase mb-1">Dirección</p>
                San José, Costa Rica
              </li>
              <li>
                <p className="text-gold-light/40 text-xs tracking-widest uppercase mb-1">Horario</p>
                Lunes a sábado, 9:00am – 6:00pm
              </li>
              <li>
                <p className="text-gold-light/40 text-xs tracking-widest uppercase mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/50600000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
                >
                  <IconWhatsApp className="w-4 h-4" /> +506 0000-0000
                </a>
              </li>
              <li>
                <p className="text-gold-light/40 text-xs tracking-widest uppercase mb-1">Correo</p>
                hola@joyasmagicas.com
              </li>
            </ul>

            <div className="divider-gold my-8" />

            <p className="text-gold-light/50 text-sm leading-relaxed">
              También puedes usar el asistente virtual en la esquina inferior derecha para resolver dudas
              rápidas sobre nuestras piezas al instante.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-ink-soft border border-gold/15 rounded-lg p-7 md:p-8"
          >
            <div className="mb-5">
              <label className="block text-gold-light/50 text-xs tracking-widest uppercase mb-2">Nombre</label>
              <input
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                className="w-full bg-black border border-gold/20 focus:border-gold rounded-md px-4 py-3 text-sm text-gold-light outline-none transition-colors"
              />
            </div>
            <div className="mb-5">
              <label className="block text-gold-light/50 text-xs tracking-widest uppercase mb-2">Teléfono (opcional)</label>
              <input
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                className="w-full bg-black border border-gold/20 focus:border-gold rounded-md px-4 py-3 text-sm text-gold-light outline-none transition-colors"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gold-light/50 text-xs tracking-widest uppercase mb-2">Mensaje</label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-black border border-gold/20 focus:border-gold rounded-md px-4 py-3 text-sm text-gold-light outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gold hover:bg-gold-light text-black font-body font-semibold tracking-widest uppercase text-sm px-8 py-3.5 rounded-full transition-colors duration-300"
            >
              Enviar por WhatsApp
            </button>
            {sent && (
              <p className="text-gold-light/50 text-xs text-center mt-4">
                Se abrió WhatsApp con tu mensaje. Si no se abrió automáticamente, escríbenos directamente.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
}
