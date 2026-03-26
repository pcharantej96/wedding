import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function TextReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: -60 },
    right: { y: 0, x: 60 },
  }

  const d = directions[direction] || directions.up

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: d.y, x: d.x, filter: 'blur(10px)' }}
      animate={isInView ? { opacity: 1, y: 0, x: 0, filter: 'blur(0px)' } : {}}
      transition={{
        duration: 1,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
