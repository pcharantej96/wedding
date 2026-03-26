import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const petalColors = [
  'rgba(212, 175, 55, 0.4)',
  'rgba(184, 150, 15, 0.35)',
  'rgba(247, 231, 206, 0.5)',
  'rgba(232, 212, 139, 0.4)',
  'rgba(255, 200, 200, 0.3)',
]

function Petal({ delay, duration }) {
  const startX = Math.random() * 100
  const endX = startX + (Math.random() - 0.5) * 40
  const size = Math.random() * 12 + 8
  const color = petalColors[Math.floor(Math.random() * petalColors.length)]
  const rotation = Math.random() * 360

  return (
    <motion.div
      initial={{ y: '-5vh', x: `${startX}vw`, opacity: 0, rotate: rotation, scale: 0.5 }}
      animate={{
        y: '105vh',
        x: `${endX}vw`,
        opacity: [0, 0.8, 0.6, 0],
        rotate: rotation + 360 + Math.random() * 180,
        scale: [0.5, 1, 0.8, 0.6],
      }}
      transition={{
        duration,
        delay,
        ease: 'linear',
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
      }}
      className="absolute pointer-events-none"
      style={{ zIndex: 2 }}
    >
      <svg width={size} height={size * 1.3} viewBox="0 0 20 26" fill="none">
        <path
          d="M10 0C10 0 0 8 0 16C0 20.418 4.477 24 10 24C15.523 24 20 20.418 20 16C20 8 10 0 10 0Z"
          fill={color}
        />
        <path
          d="M10 4C10 4 5 10 5 15C5 18 7.239 20 10 20C12.761 20 15 18 15 15C15 10 10 4 10 4Z"
          fill="rgba(255,255,255,0.15)"
        />
      </svg>
    </motion.div>
  )
}

export default function FloatingPetals({ count = 15 }) {
  const [petals, setPetals] = useState([])

  useEffect(() => {
    const p = Array.from({ length: count }, (_, i) => ({
      id: i,
      delay: Math.random() * 8,
      duration: Math.random() * 6 + 8,
    }))
    setPetals(p)
  }, [count])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
      <AnimatePresence>
        {petals.map((petal) => (
          <Petal key={petal.id} delay={petal.delay} duration={petal.duration} />
        ))}
      </AnimatePresence>
    </div>
  )
}
