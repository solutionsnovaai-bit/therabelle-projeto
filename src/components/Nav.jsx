import { WHATSAPP_URL } from '../content'

export default function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <span
          className="font-[var(--font-display)] text-sm tracking-[0.3em] text-black sm:text-base"
        >
          THERA BELLE
        </span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-black/30 bg-white/40 px-4 py-2 text-[11px] font-semibold tracking-[0.15em] text-black uppercase backdrop-blur-sm transition-colors hover:border-black hover:bg-black hover:text-[var(--color-cream)] sm:text-xs"
        >
          Falar agora
        </a>
      </div>
    </header>
  )
}
