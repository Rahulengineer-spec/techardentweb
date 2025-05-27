'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimationProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
}

// Fade in animation
export function FadeIn({ children, className, ...props }: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Slide in animation
export function SlideIn({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  duration = 0.5 
}: AnimationProps) {
  const directionMap = {
    up: { initial: { y: 40 }, animate: { y: 0 } },
    down: { initial: { y: -40 }, animate: { y: 0 } },
    left: { initial: { x: 40 }, animate: { x: 0 } },
    right: { initial: { x: -40 }, animate: { x: 0 } }
  }

  return (
    <motion.div
      initial={directionMap[direction].initial}
      whileInView={directionMap[direction].animate}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Scale in animation
export function ScaleIn({ children, className = '', delay = 0, duration = 0.5 }: AnimationProps) {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger children animation
export function StaggerContainer({ children, className, ...props }: AnimationProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Stagger child animation
export function StaggerChild({ children, className, ...props }: AnimationProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Hover scale animation
export function HoverScale({ children, className, ...props }: AnimationProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Example usage:
/*
<StaggerContainer>
  <StaggerChild>
    <FadeIn>Content 1</FadeIn>
  </StaggerChild>
  <StaggerChild>
    <SlideIn direction="up">Content 2</SlideIn>
  </StaggerChild>
  <StaggerChild>
    <ScaleIn>Content 3</ScaleIn>
  </StaggerChild>
</StaggerContainer>
*/ 