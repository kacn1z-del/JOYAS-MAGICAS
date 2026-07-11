// Datos centralizados del catálogo de Joyas Mágicas.
// Fotos: stock (Pexels) como placeholder hasta contar con fotografía real del cliente.
// Para reemplazar por fotos reales: cambia el campo "image" por la ruta de la nueva foto.

const img = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1000`;

export const categories = [
  { slug: 'anillos', name: 'Anillos', icon: 'ring', tagline: 'El primer sí, en oro y diamante' },
  { slug: 'collares', name: 'Collares', icon: 'necklace', tagline: 'Piezas que enmarcan tu presencia' },
  { slug: 'aretes', name: 'Aretes', icon: 'earring', tagline: 'Un destello a cada movimiento' },
  { slug: 'pulseras', name: 'Pulseras', icon: 'bracelet', tagline: 'Elegancia que se lleva en el pulso' },
  { slug: 'relojes', name: 'Relojes', icon: 'watch', tagline: 'El tiempo, medido en lujo' },
  { slug: 'coleccion-especial', name: 'Colección Especial', icon: 'sparkle', tagline: 'Piezas únicas, diseñadas a tu medida' },
];

export const products = [
  // ANILLOS
  {
    id: 'anillo-eternidad-solitario',
    category: 'anillos',
    name: 'Anillo Eternidad Solitario',
    material: 'Oro blanco 18k · Diamante central 1.2ct',
    price: 1850000,
    image: img(19279699),
    description: 'Un solitario clásico que concentra toda su luz en una sola piedra. Diseñado para el compromiso que se recuerda para siempre.',
    featured: true,
  },
  {
    id: 'anillo-marquise-dorado',
    category: 'anillos',
    name: 'Anillo Marquise Dorado',
    material: 'Oro amarillo 18k · Corte marquise',
    price: 1620000,
    image: img(3156648),
    description: 'La talla marquise alarga la silueta del dedo y multiplica el brillo. Una pieza atrevida para quien no pasa desapercibida.',
  },
  {
    id: 'anillo-halo-clasico',
    category: 'anillos',
    name: 'Anillo Halo Clásico',
    material: 'Oro rosado 18k · Halo de diamantes',
    price: 1450000,
    image: img(15684127),
    description: 'Un diamante central rodeado de un halo de piedras menores, potenciando el brillo desde cualquier ángulo.',
  },
  {
    id: 'anillo-zafiro-imperial',
    category: 'anillos',
    name: 'Anillo Zafiro Imperial',
    material: 'Oro blanco 18k · Zafiro azul 2ct',
    price: 2100000,
    image: img(14058109),
    description: 'El azul profundo del zafiro contrasta con el brillo del oro blanco, una combinación reservada para la realeza.',
    featured: true,
  },
  {
    id: 'anillo-vintage-1930',
    category: 'anillos',
    name: 'Anillo Vintage 1930',
    material: 'Oro amarillo 18k · Diseño art déco',
    price: 1380000,
    image: img(216491),
    description: 'Inspirado en la era dorada del art déco, con líneas geométricas y un engaste que honra la joyería clásica.',
  },
  {
    id: 'anillo-brillante-clasico',
    category: 'anillos',
    name: 'Anillo Brillante Clásico',
    material: 'Platino · Diamante talla brillante 1ct',
    price: 1980000,
    image: img(1927266),
    description: 'El engaste de cuatro garras deja que la piedra hable por sí sola. Simplicidad absoluta, lujo absoluto.',
  },

  // COLLARES
  {
    id: 'collar-estrella-dorada',
    category: 'collares',
    name: 'Collar Estrella Dorada',
    material: 'Oro amarillo 18k · Dije de diamantes',
    price: 980000,
    image: img(13325931),
    description: 'Un dije en forma de estrella que descansa justo en la clavícula, pensado para brillar sin esfuerzo.',
    featured: true,
  },
  {
    id: 'collar-gota-diamante',
    category: 'collares',
    name: 'Collar Gota de Diamante',
    material: 'Oro rosado 18k · Diamante talla pera',
    price: 1250000,
    image: img(7407595),
    description: 'La talla en gota da movimiento a la piedra, un péndulo de luz que acompaña cada gesto.',
  },
  {
    id: 'collar-cadena-cubana',
    category: 'collares',
    name: 'Collar Cadena Cubana',
    material: 'Oro amarillo 18k · Eslabón cubano macizo',
    price: 1540000,
    image: img(20858959),
    description: 'Un clásico que nunca pasa de moda: eslabones densos y un peso que se siente al usarlo.',
  },
  {
    id: 'collar-perlas-y-oro',
    category: 'collares',
    name: 'Collar Perlas y Oro',
    material: 'Oro amarillo 18k · Perlas cultivadas',
    price: 890000,
    image: img(6165),
    description: 'La calidez de la perla combinada con el oro en un diseño que equilibra tradición y frescura.',
  },

  // ARETES
  {
    id: 'aretes-diamante-boton',
    category: 'aretes',
    name: 'Aretes Diamante Botón',
    material: 'Oro blanco 18k · Diamantes 0.8ct por par',
    price: 1120000,
    image: img(2735970),
    description: 'El básico indispensable de toda joyera: brillo discreto para el día, deslumbrante de noche.',
    featured: true,
  },
  {
    id: 'aretes-candelabro',
    category: 'aretes',
    name: 'Aretes Candelabro',
    material: 'Oro amarillo 18k · Diamantes en cascada',
    price: 1670000,
    image: img(10983783),
    description: 'Un diseño en cascada que enmarca el rostro y captura la luz con cada giro de cabeza.',
  },

  // PULSERAS
  {
    id: 'pulsera-tenis-diamantes',
    category: 'pulseras',
    name: 'Pulsera Tenis de Diamantes',
    material: 'Oro blanco 18k · Línea continua de diamantes',
    price: 2350000,
    image: img(12194325),
    description: 'La pulsera tenis por excelencia: una línea ininterrumpida de brillo alrededor de la muñeca.',
    featured: true,
  },
  {
    id: 'pulsera-cadena-fina',
    category: 'pulseras',
    name: 'Pulsera Cadena Fina',
    material: 'Oro amarillo 18k · Eslabón fino',
    price: 620000,
    image: img(8184263),
    description: 'Minimalista y versátil, pensada para combinarse en capas con otras piezas de la colección.',
  },
  {
    id: 'pulsera-bangle-dorada',
    category: 'pulseras',
    name: 'Pulsera Bangle Dorada',
    material: 'Oro amarillo 18k · Diseño rígido',
    price: 780000,
    image: img(12124662),
    description: 'Una pulsera rígida de líneas limpias, el complemento perfecto para un look de poder.',
  },

  // RELOJES
  {
    id: 'reloj-clasico-oro',
    category: 'relojes',
    name: 'Reloj Clásico de Oro',
    material: 'Caja de oro 18k · Movimiento suizo',
    price: 3200000,
    image: img(380782),
    description: 'Un reloj que trasciende tendencias, con una precisión que honra la mejor tradición relojera.',
    featured: true,
  },
  {
    id: 'reloj-bolsillo-heritage',
    category: 'relojes',
    name: 'Reloj de Bolsillo Heritage',
    material: 'Oro amarillo · Edición coleccionista',
    price: 2450000,
    image: img(2922718),
    description: 'Una pieza de colección para quien aprecia la relojería como arte, no solo como instrumento.',
  },
  {
    id: 'reloj-bolsillo-vintage',
    category: 'relojes',
    name: 'Reloj de Bolsillo Vintage',
    material: 'Oro rosado · Detalle grabado a mano',
    price: 2680000,
    image: img(4990963),
    description: 'Grabado a mano y terminado en oro rosado, un homenaje a la relojería de otra época.',
  },

  // COLECCIÓN ESPECIAL
  {
    id: 'coleccion-esmeralda-real',
    category: 'coleccion-especial',
    name: 'Anillo Esmeralda Real',
    material: 'Oro blanco 18k · Esmeralda colombiana 2.5ct',
    price: 3400000,
    image: img(17298629),
    description: 'Pieza única de nuestra colección especial. El verde profundo de la esmeralda, reservado para ocasiones irrepetibles.',
    featured: true,
    special: true,
  },
  {
    id: 'coleccion-diamante-rosa',
    category: 'coleccion-especial',
    name: 'Conjunto Diamante Rosa',
    material: 'Oro rosado 18k · Diamantes fancy pink',
    price: 4100000,
    image: img(3641059),
    description: 'Un conjunto exclusivo diseñado bajo pedido, con diamantes de tono rosado poco frecuentes en el mercado.',
    special: true,
  },
  {
    id: 'coleccion-a-la-medida',
    category: 'coleccion-especial',
    name: 'Diseño a la Medida',
    material: 'Tú eliges: metal, piedra y grabado',
    price: null,
    image: img(31522384),
    description: 'Trabajamos contigo y con nuestros joyeros maestros para crear la pieza que solo tú tendrás. Cotización personalizada.',
    special: true,
    customQuote: true,
  },
];

export const formatPrice = (price) => {
  if (price === null) return 'Cotización personalizada';
  return new Intl.NumberFormat('es-CR', {
    style: 'currency',
    currency: 'CRC',
    maximumFractionDigits: 0,
  }).format(price);
};

export const getProductsByCategory = (slug) => products.filter(p => p.category === slug);
export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductById = (id) => products.find(p => p.id === id);
