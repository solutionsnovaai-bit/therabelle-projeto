import { hero, WHATSAPP_URL } from '../content'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden">
      {/* Desktop hero art — logo sits in the right third */}
      <img
        src="/hero-desktop.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        fetchpriority="high"
      />
      {/* Mobile hero art — logo sits in the top third */}
      <img
        src="/hero-mobile.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover md:hidden"
        fetchpriority="high"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-6 pt-[42svh] pb-16 sm:px-10 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-xl text-center md:mx-0 md:max-w-lg md:text-left">
          <p className="mb-5 text-[11px] font-medium tracking-[0.3em] text-[var(--color-gold-deep)] uppercase sm:text-xs">
            {hero.eyebrow}
          </p>
          <h1 className="font-[var(--font-display)] text-[2.5rem] leading-[1.08] text-[var(--color-ink)] sm:text-[3.1rem] md:text-[3.4rem]">
            {hero.title[0]}{' '}
            <em className="italic text-[var(--color-gold-deep)]">{hero.title[1]}</em>{' '}
            {hero.title[2]}
          </h1>
          <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-[var(--color-ink-soft)] sm:text-base md:mx-0">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-ink)] px-7 py-3.5 text-sm font-medium tracking-wide text-[var(--color-cream)] transition-transform hover:scale-[1.02] hover:bg-[var(--color-gold-deep)]"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#projeto"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium tracking-wide text-[var(--color-ink)] underline decoration-[var(--color-gold)] decoration-1 underline-offset-4 transition-colors hover:text-[var(--color-gold-deep)]"
            >
              {hero.ctaSecondary}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
