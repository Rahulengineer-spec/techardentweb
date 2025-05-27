'use client'

import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Container({ children, className = '' }: LayoutProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

export function Grid({ children, className = '' }: LayoutProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ${className}`}>
      {children}
    </div>
  )
}

export function Section({ children, className, id }: LayoutProps) {
  return (
    <section className={`py-16 md:py-24 ${className || ''}`} id={id}>
      {children}
    </section>
  )
}

export function Flex({ children, className = '' }: LayoutProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-6 lg:gap-8 ${className}`}>
      {children}
    </div>
  )
} 