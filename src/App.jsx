import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Plans from './components/Plans'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Plans />
      <FinalCta />
      <Footer />
    </div>
  )
}

export default App
