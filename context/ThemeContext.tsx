'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

type Theme = 'dark' | 'light' | 'system' // Added 'system'

interface ThemeContextType {
  theme: Theme
  effectiveTheme: 'dark' | 'light' // To know the actual theme being applied (dark or light)
  setTheme: (theme: Theme) => void // Changed from toggleTheme to setTheme for more control
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system') // Default to 'system'
  const [effectiveTheme, setEffectiveTheme] = useState<'dark' | 'light'>('dark') // Default effective theme

  const applyTheme = useCallback((selectedTheme: Theme) => {
    let currentEffectiveTheme: 'dark' | 'light'
    if (selectedTheme === 'system') {
      currentEffectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    } else {
      currentEffectiveTheme = selectedTheme
    }
    setEffectiveTheme(currentEffectiveTheme)
    document.documentElement.classList.toggle('dark', currentEffectiveTheme === 'dark')
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    const initialTheme = savedTheme || 'system'
    setThemeState(initialTheme)
    applyTheme(initialTheme)
  }, [applyTheme])

  useEffect(() => {
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = () => {
        applyTheme('system')
      }
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme, applyTheme])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, effectiveTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}