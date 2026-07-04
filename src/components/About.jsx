import SectionGlow from './SectionGlow'
import { about } from '../content'

export default function About() {
  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-32">
      <SectionGlow tone="light" spread="full" className="inset-0 h-full w-full" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-14 px-6 sm:px-10 md:flex-row md:gap-16">
        <div className="flex w-full max-w-xs shrink-0 justify-center md:max-w-sm">
          <img
            src="/therabelle-logo.png"
            alt="Thera Belle"
            className="w-full max-w-[240px] object-contain sm:max-w-[280px]"
          />
        </div>

        <div className="text-center md:text-left">
          <p className="mb-5 text-[11px] font-medium tracking-[0.3em] text-[var(--color-gold-light)] uppercase sm:text-xs">
            {about.eyebrow}
          </p>
          <h2 className="font-[var(--font-display)] text-3xl leading-tight text-[var(--color-cream)] sm:text-4xl md:text-[2.4rem]">
            {about.title[0]}
            <br />
            <em className="italic text-[var(--color-gold-light)]">{about.title[1]}</em>
          </h2>

          <div className="mx-auto mt-7 flex max-w-md flex-col gap-4 md:mx-0">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-[var(--color-cream)]/70 sm:text-base">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
