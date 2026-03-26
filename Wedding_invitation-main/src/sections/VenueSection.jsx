import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import TextReveal from '../components/TextReveal'

export default function VenueSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] flex items-center py-24 px-6 overflow-hidden"
      id="venue"
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

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <TextReveal className="text-center mb-16">
          <p className="font-body text-gold-light/50 tracking-[0.3em] uppercase text-xs md:text-sm mb-4">
            Where It Happens
          </p>
          <h2 className="font-heading text-champagne text-3xl md:text-5xl">
            The Venue
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-12 h-px bg-gold/30" />
            <span className="text-gold/50">✦</span>
            <div className="w-12 h-px bg-gold/30" />
          </div>
        </TextReveal>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          {/* Venue card */}
          <div
            className="relative rounded-2xl p-10 md:p-16 mx-auto max-w-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(255, 248, 231, 0.05))',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              boxShadow: '0 0 60px rgba(212, 175, 55, 0.05)',
            }}
          >
            {/* Decorative corners */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-gold/30" />
            <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-gold/30" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b border-l border-gold/30" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-gold/30" />

            {/* Location icon */}
            <div className="flex justify-center mb-6">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-gold">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </motion.div>
            </div>

            <h3 className="font-heading text-champagne text-2xl md:text-4xl mb-3">
              Ranganatha Swamy Temple
            </h3>
            <p className="text-gold-light/60 font-body text-lg mb-8">
              Tondapadu,Gooty,Andhra Pradesh
            </p>

            <div className="w-16 h-px bg-gold/30 mx-auto mb-8" />

            <p className="text-champagne/40 text-sm font-body mb-8">
              Join us for the wedding ceremony at this beautiful venue
            </p>

            {/* Google Maps button */}
            <motion.a
              href="https://www.google.com/maps/search/Ranganatha+Swamy+Temple+Tondapadu+Gooty+Andhra+Pradesh"

              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-body text-sm tracking-wider uppercase transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #B8960F)',
                color: '#3D0A13',
                boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              View on Google Maps
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
