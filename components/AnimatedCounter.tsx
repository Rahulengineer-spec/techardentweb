'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView, useSpring } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  text?: string
  className?: string
  duration?: number // Optional duration in seconds
}

export function AnimatedCounter({ value, text, className, duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [displayValue, setDisplayValue] = useState(0)

  const springValue = useSpring(0, {
    damping: 100,
    stiffness: 100,
    mass: 1,
    duration: duration * 1000 // Convert seconds to milliseconds
  })

  useEffect(() => {
    if (isInView) {
      springValue.set(value)
    }
  }, [isInView, value, springValue])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest))
    })
    return unsubscribe
  }, [springValue])

  return (
    <motion.span ref={ref} className={className}>
      {displayValue}
      {text}
    </motion.span>
  )
}
