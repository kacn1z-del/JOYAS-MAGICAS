import { IconWhatsApp } from './Icons';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/50600000000?text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20Joyas%20M%C3%A1gicas"
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 left-6 z-40 bg-[#25D366] hover:bg-[#1ebe5b] text-white rounded-full p-3.5 shadow-lg shadow-black/40 transition-transform hover:scale-110"
    >
      <IconWhatsApp className="w-6 h-6" />
    </a>
  );
}
