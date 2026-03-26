import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import TextReveal from '../components/TextReveal'
import BrideImg from '../assets/Bride_Illustration.png'
import GroomImg from '../assets/Groom_Illustration.png'

export default function CoupleSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center py-24 px-6 overflow-hidden"
      id="couple"
      style={{
        background: 'linear-gradient(180deg, #FFF8E7 0%, #F7E7CE 50%, #FFF8E7 100%)',
      }}
    >
      <motion.div
        style={{ opacity, scale }}
        className="max-w-6xl mx-auto w-full relative z-10"
      >
        {/* Decorative corner ornaments */}
        <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-gold/20 rounded-tl-lg" />
        <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-gold/20 rounded-tr-lg" />
        <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-gold/20 rounded-bl-lg" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-gold/20 rounded-br-lg" />

        {/* Top tagline */}
        <TextReveal className="text-center mb-16">
        </TextReveal>

        {/* Couple cards */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 mx-auto mb-8">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-gold/30 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-2 rounded-full border border-gold/20" />
              {/* Illustration container */}
              <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl">
                <img
                  src={GroomImg}
                  alt="Groom Illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="font-heading text-maroon text-2xl md:text-3xl mb-2">P. Ravi Kumar</h3>
            <div className="w-16 h-px bg-gold mx-auto my-3" />
            <p className="text-maroon/60 text-sm font-body">
              S/o Smt. P. Lakshmi Devi<br />
              & Late Sri P. Narayana Swamy
            </p>
          </motion.div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 mx-auto mb-8">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-gold/30 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
              <div className="absolute inset-2 rounded-full border border-gold/20" />
              {/* Illustration container */}
              <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl">
                <img
                  src={BrideImg}
                  alt="Bride Illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="font-heading text-maroon text-2xl md:text-3xl mb-2">P. Farhana</h3>
            <div className="w-16 h-px bg-gold mx-auto my-3" />
            <p className="text-maroon/60 text-sm font-body">
              D/o Smt. Shamshad <br />
              & Late Sri P Shajahan <br />
            </p>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <TextReveal delay={0.8} className="text-center mt-20">
          <div className="ornament-divider">
            <span className="text-gold">✦</span>
          </div>
          <p className="font-heading text-maroon/80 text-xl md:text-3xl italic leading-relaxed">
            "Two families<br />
            <span className="text-gold-dark">One beautiful beginning"</span>
          </p>
        </TextReveal>
      </motion.div>
    </section>

  )
}

