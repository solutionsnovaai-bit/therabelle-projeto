import PalmMotif from './PalmMotif'
import { finalCta, WHATSAPP_URL } from '../content'

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-ink)] py-24 text-[var(--color-cream)] sm:py-32">
      <PalmMotif side="left" className="-left-10 bottom-0 h-72 w-72 text-[var(--color-gold)] opacity-25 sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-2xl px-6 text-center sm:px-10">
        <p className="mb-5 text-[11px] font-medium tracking-[0.3em] text-[var(--color-gold-light)] uppercase sm:text-xs">
          {finalCta.eyebrow}
        </p>
        <h2 className="font-[var(--font-display)] text-3xl leading-tight sm:text-4xl md:text-[2.6rem]">
          {finalCta.title[0]}
          <br />
          <em className="italic">{finalCta.title[1]}</em>
        </h2>

        <p className="mx-auto mt-8 max-w-md font-[var(--font-display)] text-lg italic leading-relaxed text-[var(--color-cream)]/80">
          "{finalCta.quote}"
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] px-8 py-3.5 text-sm font-medium tracking-wide text-[var(--color-ink)] transition-transform hover:scale-[1.03] hover:bg-[var(--color-gold-light)]"
        >
          {finalCta.cta}
        </a>
      </div>
    </section>
  )
}
