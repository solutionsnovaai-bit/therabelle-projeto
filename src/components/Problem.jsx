import SectionGlow from './SectionGlow'
import { problem } from '../content'

export default function Problem() {
  return (
    <section id="projeto" className="relative overflow-hidden bg-[var(--color-cream)] py-24 sm:py-32">
      <SectionGlow tone="gold" className="-right-24 top-0 h-96 w-96 sm:h-[28rem] sm:w-[28rem]" />

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
