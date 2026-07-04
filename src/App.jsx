import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Plans from './components/Plans'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      <div className="min-h-screen bg-[var(--color-cream)]">
        <Nav />
        <Hero />
        <Problem />
        <HowItWorks />
        <About />
        <Plans />
        <FinalCta />
        <Footer />
      </div>
    </>
  )
}

export default App
