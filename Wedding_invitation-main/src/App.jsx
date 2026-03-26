import { Analytics } from '@vercel/analytics/react'
import HeroSection from './sections/HeroSection'
import CoupleSection from './sections/CoupleSection'
import WeddingDetailsSection from './sections/WeddingDetailsSection'
import FinalSection from './sections/FinalSection'

function App() {
  return (
    <main className="relative">
      <HeroSection />
      <CoupleSection />
      <WeddingDetailsSection />
      <FinalSection />
      <Analytics />
    </main>
  )
}

export default App
