import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import TextReveal from '../components/TextReveal'
import FloatingPetals from '../components/FloatingPetals'

export default function FinalSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden"
      id="final"
    >
      {/* Dark background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #3D0A13 0%, #2A0710 40%, #1A050B 100%)',
        }}
      />

      {/* Radial gold glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
        }}
      />

      {/* Floating petals */}
      <FloatingPetals count={20} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Decorative top */}
        <TextReveal delay={0.2}>
          <div className="flex justify-center mb-12">
            <svg width="100" height="2" className="text-gold/30">
              <line x1="0" y1="1" x2="100" y2="1" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </TextReveal>

        <TextReveal delay={0.4}>
          <p className="font-heading text-champagne/70 text-lg md:text-2xl italic leading-relaxed mb-4">
            "With the blessings of our families
          </p>
        </TextReveal>

        <TextReveal delay={0.7}>
          <p className="font-heading text-champagne/70 text-lg md:text-2xl italic leading-relaxed mb-12">
            We invite you to celebrate our wedding."
          </p>
        </TextReveal>

        <TextReveal delay={1.0}>
          <div className="ornament-divider my-10">
            <span className="text-gold/40">✦</span>
          </div>
        </TextReveal>

        <TextReveal delay={1.3}>
          <h2 className="font-script text-gold text-4xl md:text-6xl lg:text-7xl mb-4">
            P. Ravi Kumar
          </h2>
        </TextReveal>

        <TextReveal delay={1.5}>
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="w-12 h-px bg-gold/30" />
            <motion.span
              className="text-3xl md:text-4xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              ❤️
            </motion.span>
            <div className="w-12 h-px bg-gold/30" />
          </div>
        </TextReveal>

        <TextReveal delay={1.7}>
          <h2 className="font-script text-gold text-4xl md:text-6xl lg:text-7xl">
            P. Farhana
          </h2>
        </TextReveal>

        <TextReveal delay={2.0}>
          <div className="mt-16 space-y-2">
            <p className="text-champagne/30 text-xs tracking-[0.3em] uppercase font-body">
              1st April 2026 · Gooty, AP
            </p>
            <p className="text-champagne/20 text-xs font-body">
              Ranganatha Swamy Temple, Tondapadu
            </p>
          </div>
        </TextReveal>
      </div>
    </motion.section>
  )
}
