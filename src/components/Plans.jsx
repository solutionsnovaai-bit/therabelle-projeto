import { plans, WHATSAPP_URL } from '../content'

export default function Plans() {
  return (
    <section className="relative bg-[var(--color-cream)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <p className="mb-4 text-center text-[11px] font-medium tracking-[0.3em] text-[var(--color-gold-deep)] uppercase sm:text-xs">
          Investimento
        </p>
        <h2 className="mx-auto max-w-xl text-center font-[var(--font-display)] text-3xl leading-tight text-[var(--color-ink)] sm:text-4xl">
          Escolha o ponto de <em className="italic">partida</em>
        </h2>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-[2rem] border p-8 transition-transform hover:-translate-y-1 ${
                plan.highlight
                  ? 'border-[var(--color-gold)] bg-[var(--color-ink)] text-[var(--color-cream)] shadow-xl shadow-[var(--color-gold)]/10 lg:scale-[1.04]'
                  : 'border-[var(--color-ink)]/12 bg-[var(--color-cream-deep)]/60 text-[var(--color-ink)]'
              }`}
            >
              {plan.highlight && (
                <span className="mb-4 inline-block w-fit rounded-full bg-[var(--color-gold)] px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-[var(--color-ink)] uppercase">
                  Recomendado
                </span>
              )}

              <h3 className="font-[var(--font-display)] text-2xl">{plan.name}</h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  plan.highlight ? 'text-[var(--color-cream)]/75' : 'text-[var(--color-ink-soft)]'
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                {plan.originalPrice && (
                  <span
                    className={`text-lg line-through ${
                      plan.highlight ? 'text-[var(--color-cream)]/40' : 'text-[var(--color-ink-soft)]/50'
                    }`}
                  >
                    {plan.originalPrice}
                  </span>
                )}
                <span className="flex items-baseline gap-1.5">
                  <span className="font-[var(--font-display)] text-4xl">{plan.price}</span>
                  <span
                    className={`text-sm ${
                      plan.highlight ? 'text-[var(--color-cream)]/70' : 'text-[var(--color-ink-soft)]'
                    }`}
                  >
                    {plan.period}
                  </span>
                </span>
              </div>

              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm leading-snug">
                    <span
                      className={`mt-1 text-xs ${
                        plan.highlight ? 'text-[var(--color-gold-light)]' : 'text-[var(--color-gold-deep)]'
                      }`}
                      aria-hidden="true"
                    >
                      ✦
                    </span>
                    <span className={plan.highlight ? 'text-[var(--color-cream)]/90' : 'text-[var(--color-ink-soft)]'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-9 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors ${
                  plan.highlight
                    ? 'bg-[var(--color-cream)] text-[var(--color-ink)] hover:bg-[var(--color-gold-light)]'
                    : 'border border-[var(--color-ink)]/25 text-[var(--color-ink)] hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-cream)]'
                }`}
              >
                Escolher {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
