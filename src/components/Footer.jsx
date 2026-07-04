import { footer } from '../content'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] py-8 text-center">
      <p className="text-[11px] tracking-[0.15em] text-[var(--color-cream)]/45 uppercase">
        {footer.studio}
      </p>
    </footer>
  )
}
