import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import TextReveal from '../components/TextReveal'

const details = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <text x="12" y="18" textAnchor="middle" fill="currentColor" fontSize="7" fontWeight="bold" stroke="none">1</text>
      </svg>
    ),
    label: 'Date',
    value: 'Wednesday, 1st April 2026',
    sub: 'Save the Date',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'Muhurtham',
    value: '9:37 AM',
    sub: 'Utthara Nakshatram · Vrushabha Lagnam',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Venue',
    value: 'Ranganatha Swamy Temple',
    sub: 'Tondapadu, Gooty, Andhra Pradesh',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
        <path d="M18 8h1a4 4 0 010 8h-1" />
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    label: 'Followed by',
    value: 'Traditional Lunch',
    sub: 'Please join us for a celebratory feast',
  },
]

export default function WeddingDetailsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center py-24 px-6 overflow-hidden"
      id="details"
      style={{
        background: 'linear-gradient(180deg, #3D0A13 0%, #5A0F1C 50%, #3D0A13 100%)',
      }}
    >
      {/* Decorative radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.08) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <TextReveal className="text-center mb-16">
          <h2 className="font-heading text-champagne text-3xl md:text-5xl">
            Wedding Ceremony
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-12 h-px bg-gold/30" />
            <span className="text-gold/50">✦</span>
            <div className="w-12 h-px bg-gold/30" />
          </div>
        </TextReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
              className="group relative p-10 rounded-2xl text-center transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05), rgba(255, 248, 231, 0.02))',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(212, 175, 55, 0.15)',
              }}
            >
              {/* Gold accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex justify-center mb-6">
                {detail.icon}
              </div>
              <p className="font-body text-gold-light/60 tracking-[0.2em] uppercase text-xs mb-3">
                {detail.label}
              </p>
              <h3 className="font-heading text-champagne text-xl md:text-2xl mb-3">
                {detail.value}
              </h3>
              <p className="text-gold-light/40 text-sm font-body mb-6">
                {detail.sub}
              </p>
              {detail.label === 'Venue' && (
                <motion.a
                  href="https://www.google.com/maps/search/Ranganatha+Swamy+Temple+Tondapadu+Gooty+Andhra+Pradesh"

                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full font-body text-xs tracking-wider uppercase transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37, #B8960F)',
                    color: '#3D0A13',
                    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Get Directions
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
