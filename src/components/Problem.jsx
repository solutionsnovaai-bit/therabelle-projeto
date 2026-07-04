import PalmMotif from './PalmMotif'
import { problem } from '../content'

export default function Problem() {
  return (
    <section id="projeto" className="relative overflow-hidden bg-[var(--color-cream)] py-24 sm:py-32">
      <PalmMotif side="right" className="-right-6 top-0 h-64 w-64 text-[var(--color-olive)] opacity-40 sm:h-80 sm:w-80" />

      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-10">
        <p className="mb-5 text-[11px] font-medium tracking-[0.3em] text-[var(--color-gold-deep)] uppercase sm:text-xs">
          {problem.eyebrow}
        </p>
        <h2 className="font-[var(--font-display)] text-3xl leading-tight text-[var(--color-ink)] sm:text-4xl md:text-[2.6rem]">
          {problem.title[0]}
          <br />
          <em className="italic">{problem.title[1]}</em>
        </h2>

        <div className="mx-auto mt-8 flex max-w-xl flex-col gap-5">
          {problem.paragraphs.map((p, i) => (
            <p key={i} className="text-[15px] leading-relaxed text-[var(--color-ink-soft)] sm:text-base">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
