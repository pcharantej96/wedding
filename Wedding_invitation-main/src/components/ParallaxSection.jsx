import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxSection({ children, className = '', speed = 0.3, overlay = false }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-dark/30 to-maroon/50 z-[1]" />
      )}
      <motion.div style={{ y }} className="relative">
        {children}
      </motion.div>
    </div>
  )
}
