import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import GoldParticles from '../components/GoldParticles'
import TextReveal from '../components/TextReveal'

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9])

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale }}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark via-maroon to-maroon-dark" />

      {/* Temple SVG background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: 0.15 }}
      >
        <img
          src="/temple_transparent.svg"
          alt=""
          className="w-[120%] md:w-[80%] max-w-[800px] h-auto"
          style={{ filter: 'brightness(2) sepia(1) hue-rotate(10deg) saturate(3)' }}
        />
      </div>

      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Particles */}
      <GoldParticles />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Decorative top ornament */}
        <TextReveal delay={0.2}>
          <div className="flex justify-center mb-8">
            <svg width="120" height="40" viewBox="0 0 120 40" className="text-gold opacity-60">
              <path d="M60 0 C40 20, 0 20, 0 20 C0 20, 40 20, 60 40 C60 40, 80 20, 120 20 C120 20, 80 20, 60 0Z" fill="currentColor" fillOpacity="0.3" />
              <circle cx="60" cy="20" r="3" fill="currentColor" />
              <line x1="20" y1="20" x2="50" y2="20" stroke="currentColor" strokeWidth="0.5" />
              <line x1="70" y1="20" x2="100" y2="20" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
        </TextReveal>

        <TextReveal delay={0.5}>
          <p className="font-body text-gold-light/70 tracking-[0.4em] uppercase text-xs md:text-sm mb-6">
            You are cordially invited to
          </p>
        </TextReveal>

        <TextReveal delay={0.8}>
          <h2 className="font-heading text-champagne text-lg md:text-2xl tracking-[0.3em] uppercase mb-8">
            Wedding Invitation
          </h2>
        </TextReveal>

        <TextReveal delay={1.1}>
          <div className="my-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>
        </TextReveal>

        <TextReveal delay={1.4}>
          <h1 className="font-script text-gold text-5xl md:text-7xl lg:text-8xl mb-4 leading-tight">
            P. Ravi Kumar
          </h1>
        </TextReveal>

        <TextReveal delay={1.7}>
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="w-12 h-px bg-gold/40" />
            <span className="text-3xl md:text-4xl">❤️</span>
            <div className="w-12 h-px bg-gold/40" />
          </div>
        </TextReveal>

        <TextReveal delay={2.0}>
          <h1 className="font-script text-gold text-5xl md:text-7xl lg:text-8xl leading-tight">
            P. Farhana
          </h1>
        </TextReveal>

        <TextReveal delay={2.3}>
          <p className="font-body text-champagne/50 text-sm mt-12 tracking-widest uppercase">
            1st April 2026 · Gooty, AP
          </p>
        </TextReveal>

        {/* Scroll indicator */}
        <TextReveal delay={2.8}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-16"
          >
            <svg width="24" height="40" viewBox="0 0 24 40" className="mx-auto text-gold/40">
              <rect x="1" y="1" width="22" height="38" rx="11" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <motion.circle
                cx="12"
                cy={10}
                r="3"
                fill="currentColor"
                animate={{ cy: [10, 22, 10] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </svg>
          </motion.div>
        </TextReveal>
      </div>
    </motion.section>
  )
}
