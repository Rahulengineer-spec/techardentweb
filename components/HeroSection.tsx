'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    })
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Hero Banner Background Image */}
      <Image 
        src="/images/hero-banner.gif" 
        alt="Hero Banner Background" 
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none opacity-50" 
        priority 
        unoptimized={true}
        aria-hidden="true"
      />
      {/* Animated background gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black/70 to-blue-900/30 mix-blend-multiply"
        style={{ willChange: 'transform' }}
      />
      
      {/* Optimized gradient orb */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl"
        style={{ willChange: 'transform' }}
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4"
        style={{ opacity, scale }}
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-yellow-400">Tech</span>
          <span className="text-white">Ardent</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Building the future of technology, one innovation at a time
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button 
            className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            style={{ willChange: 'transform' }}
          >
            Get Started
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}