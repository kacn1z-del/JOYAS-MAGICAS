import { useMemo } from 'react';

// Elemento de firma: un campo sutil de partículas doradas que respira,
// evocando el "brillo" de la hoja de marca sin saturar la pantalla.
export default function SparkleField({ count = 14, className = '' }) {
  const sparkles = useMemo(() => (
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 2 + Math.random() * 3,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 3,
    }))
  ), [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="sparkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animation: `float-sparkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
