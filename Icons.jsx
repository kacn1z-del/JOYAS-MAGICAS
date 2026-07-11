// Íconos SVG de línea fina, coherentes con la sección "Elementos" de la hoja de marca
// (brillo, elegancia, exclusividad). Todos heredan color por currentColor.

export const IconSparkle = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2 L13.8 9.2 L21 11 L13.8 12.8 L12 20 L10.2 12.8 L3 11 L10.2 9.2 Z"
      fill="currentColor" />
  </svg>
);

export const IconDiamond = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
    <path d="M6 8 L2.5 8 L12 21 L21.5 8 L18 8 M6 8 L9 3 H15 L18 8 M6 8 L12 8 M12 8 L18 8 M9 3 L12 8 L15 3" strokeLinejoin="round" />
  </svg>
);

export const IconRing = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
    <circle cx="12" cy="14" r="7" />
    <path d="M9 7 L12 2 L15 7 L12 9.5 Z" strokeLinejoin="round" />
  </svg>
);

export const IconNecklace = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
    <path d="M4 4 C4 12 8 16 12 16 C16 16 20 12 20 4" />
    <path d="M12 16 L12 18" />
    <circle cx="12" cy="20" r="1.6" fill="currentColor" stroke="none" />
  </svg>
);

export const IconEarring = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
    <circle cx="12" cy="6" r="2.4" />
    <path d="M12 8.4 L12 12" />
    <path d="M8 12 a4 4 0 1 0 8 0" />
  </svg>
);

export const IconBracelet = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
    <ellipse cx="12" cy="12" rx="9" ry="5.5" />
    <ellipse cx="12" cy="12" rx="5.5" ry="3" opacity="0.5" />
  </svg>
);

export const IconWatch = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
    <circle cx="12" cy="12" r="6" />
    <path d="M12 8.5 L12 12 L14.5 13.5" />
    <path d="M9.5 4 L14.5 4 M9.5 20 L14.5 20" />
  </svg>
);

const iconMap = {
  ring: IconRing,
  necklace: IconNecklace,
  earring: IconEarring,
  bracelet: IconBracelet,
  watch: IconWatch,
  sparkle: IconSparkle,
};

export const CategoryIcon = ({ name, className }) => {
  const Cmp = iconMap[name] || IconSparkle;
  return <Cmp className={className} />;
};

export const IconWhatsApp = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12.004 2C6.486 2 2.01 6.476 2.01 11.994c0 1.99.52 3.858 1.44 5.482L2 22l4.65-1.42a9.947 9.947 0 0 0 5.354 1.55h.004c5.518 0 9.994-4.476 9.994-9.994C22.002 6.476 17.526 2 12.004 2zm0 18.09h-.003a8.083 8.083 0 0 1-4.115-1.127l-.295-.176-3.052.932.815-3.007-.192-.309a8.06 8.06 0 0 1-1.24-4.31c0-4.46 3.63-8.09 8.088-8.09 2.161 0 4.192.842 5.719 2.372a8.037 8.037 0 0 1 2.368 5.723c0 4.46-3.629 8.089-8.093 8.089z" />
  </svg>
);

export const IconChat = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export const IconClose = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
  </svg>
);

export const IconMenu = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
  </svg>
);

export const IconSearch = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" strokeLinecap="round" />
  </svg>
);

export const IconSend = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3 20l18-8L3 4v6l12 2-12 2v6z" />
  </svg>
);
