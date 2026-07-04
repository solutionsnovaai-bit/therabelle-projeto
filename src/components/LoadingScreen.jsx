import { useEffect, useState } from 'react'

// Tela de carregamento premium — fundo preto, logo dourado centralizado
// e barra de progresso dourada. Duração curta o suficiente pra não
// incomodar, mas perceptível o bastante pra dar o ar de "abertura".
export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    const duration = 1600
    const start = performance.now()

    let frame
    const tick = (now) => {
      const elapsed = now - start
      const pct = Math.min(100, (elapsed / duration) * 100)
      setProgress(pct)

      if (pct < 100) {
        frame = requestAnimationFrame(tick)
      } else {
        setHiding(true)
        setTimeout(onFinish, 500)
      }
    }
    frame = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frame)
  }, [onFinish])

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${
        hiding ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      role="status"
      aria-label="Carregando"
    >
      <img
        src="/therabelle-logo.png"
        alt="Thera Belle"
        className="w-40 object-contain sm:w-48"
      />

      <div className="mt-10 h-[2px] w-48 overflow-hidden rounded-full bg-white/10 sm:w-56">
        <div
          className="h-full rounded-full bg-[var(--color-gold)]"
          style={{ width: `${progress}%`, transition: 'width 60ms linear' }}
        />
      </div>
    </div>
  )
}
