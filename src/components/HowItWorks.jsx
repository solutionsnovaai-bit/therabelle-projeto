import { steps } from '../content'

export default function HowItWorks() {
  return (
    <section className="relative bg-[var(--color-cream-deep)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <p className="mb-4 text-center text-[11px] font-medium tracking-[0.3em] text-[var(--color-gold-deep)] uppercase sm:text-xs">
          Como funciona
        </p>
        <h2 className="mx-auto max-w-xl text-center font-[var(--font-display)] text-3xl leading-tight text-[var(--color-ink)] sm:text-4xl">
          Da ideia ao <em className="italic">feed</em>, em quatro etapas
        </h2>

        <ol className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="relative border-t border-[var(--color-ink)]/15 pt-6">
              <span className="font-[var(--font-display)] text-sm tracking-widest text-[var(--color-gold-deep)]">
                {step.number}
              </span>
              <h3 className="mt-3 font-[var(--font-display)] text-xl text-[var(--color-ink)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
