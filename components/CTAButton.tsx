'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface CTAButtonProps {
  text: string
  href: string
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
}

export function CTAButton({
  text,
  href,
  variant = 'default',
  size = 'default',
  className = ''
}: CTAButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant={variant}
        size={size}
        className={`bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white ${className}`}
        asChild
      >
        <a href={href}>
          {text}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </motion.div>
  )
} 