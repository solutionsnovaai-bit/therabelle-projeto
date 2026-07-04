// Recurring palm-frond shadow motif — echoes the light/shadow signature
// established in the hero artwork, used sparingly as a section threshold.
export default function PalmMotif({ side = 'right', className = '' }) {
  const flip = side === 'left' ? 'scale-x-[-1]' : ''
  return (
    <svg
      viewBox="0 0 300 260"
      aria-hidden="true"
      className={`pointer-events-none absolute ${flip} ${className}`}
    >
      <g stroke="currentColor" strokeWidth="1.1" fill="none" strokeLinecap="round" opacity="0.5">
        <path d="M40 250 C 70 190, 90 150, 150 20" />
        <path d="M55 235 C 90 190, 100 150, 138 60" />
        <path d="M70 220 C 100 185, 108 150, 128 95" />
        <path d="M40 250 C 30 200, 20 170, 40 100" />
        <path d="M40 250 C 55 210, 60 185, 62 140" />
      </g>
    </svg>
  )
}
