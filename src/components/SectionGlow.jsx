// Sutil textura de fundo — grid de pontos + glow suave.
// Substitui o antigo motivo de "palmeira" por algo discreto e premium,
// mantendo a mesma função de dar profundidade sem competir com o texto.
export default function SectionGlow({ tone = 'gold', className = '' }) {
  const dot = tone === 'gold' ? 'var(--color-gold-deep)' : 'var(--color-gold-light)'
  const glow = tone === 'gold' ? 'var(--color-gold)' : 'var(--color-gold-light)'

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, ${dot} 1px, transparent 1px)`,
        backgroundSize: '22px 22px',
        maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 75%)',
        opacity: 0.35,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle, ${glow} 0%, transparent 70%)`,
          opacity: 0.15,
        }}
      />
    </div>
  )
}
