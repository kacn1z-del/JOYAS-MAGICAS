import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChat, IconClose, IconSend } from './Icons';

const WELCOME_MESSAGE = {
  role: 'assistant',
  content: '¡Hola! Soy el asistente virtual de Joyas Mágicas ✨. Puedo ayudarte a encontrar la pieza perfecta, resolver dudas sobre materiales, precios o agendar una cita. ¿En qué te puedo ayudar hoy?',
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open, loading]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const newMessages = [...messages, { role: 'user', content: trimmed }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error('Fallo en la respuesta del servidor');

      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Disculpa, tuve un problema para responder. Por favor escríbenos por WhatsApp y con gusto te atendemos directamente.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Cerrar chat' : 'Abrir chat con asistente'}
        className="fixed bottom-6 right-6 z-40 bg-gold hover:bg-gold-light text-black rounded-full p-4 shadow-gold-glow transition-transform hover:scale-110"
      >
        {open ? <IconClose className="w-6 h-6" /> : <IconChat className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-40 w-[92vw] max-w-sm h-[70vh] max-h-[560px] bg-ink-soft border border-gold/30 rounded-lg shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-black px-5 py-4 border-b border-gold/20 flex items-center gap-3">
              <img src="/logo-icon.png" alt="" className="w-8 h-8 object-contain" />
              <div>
                <p className="font-display text-gold text-sm">Asistente Joyas Mágicas</p>
                <p className="text-gold-light/50 text-xs">Impulsado por IA · Respuesta al instante</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] px-4 py-2.5 rounded-lg text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-gold text-black ml-auto rounded-br-none'
                      : 'bg-black/60 text-gold-light/90 border border-gold/15 rounded-bl-none'
                  }`}
                >
                  {m.content}
                </div>
              ))}
              {loading && (
                <div className="bg-black/60 border border-gold/15 rounded-lg rounded-bl-none px-4 py-2.5 max-w-[60%]">
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" />
                  </span>
                </div>
              )}
            </div>

            <form onSubmit={sendMessage} className="border-t border-gold/20 p-3 flex items-center gap-2 bg-black">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-ink-soft text-gold-light placeholder:text-gold-light/30 text-sm rounded-full px-4 py-2.5 border border-gold/20 focus:border-gold outline-none"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Enviar mensaje"
                className="bg-gold text-black rounded-full p-2.5 disabled:opacity-40 transition-opacity"
              >
                <IconSend className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
