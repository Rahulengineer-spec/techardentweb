'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { SunIcon, MoonIcon, DesktopIcon } from '@radix-ui/react-icons' // Using Radix icons for a consistent look

export function ThemeToggle() {
  const { theme, setTheme, effectiveTheme } = useTheme()

  const themes = [
    { name: 'light', icon: <SunIcon className="w-5 h-5" /> },
    { name: 'dark', icon: <MoonIcon className="w-5 h-5" /> },
    { name: 'system', icon: <DesktopIcon className="w-5 h-5" /> },
  ] as const;

  return (
    <div className="flex space-x-1 rounded-full bg-gray-200 dark:bg-gray-800 p-1">
      {themes.map((t) => (
        <motion.button
          key={t.name}
          onClick={() => setTheme(t.name)}
          className={`relative p-2 rounded-full transition-colors focus:outline-none 
            ${theme === t.name 
              ? 'bg-white dark:bg-gray-700' 
              : 'hover:bg-gray-300 dark:hover:bg-gray-700'
            }
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={`
            ${theme === t.name 
              ? (effectiveTheme === 'dark' ? 'text-blue-500' : 'text-yellow-600') 
              : (effectiveTheme === 'dark' ? 'text-gray-400' : 'text-gray-500')
            }
            ${t.name === 'system' && theme === 'system' 
              ? (effectiveTheme === 'dark' ? 'text-blue-400' : 'text-purple-600') 
              : ''
            }
          `}>
            {t.icon}
          </span>
          {theme === t.name && (
            <motion.div
              layoutId="activeThemePill"
              className="absolute inset-0 rounded-full bg-white dark:bg-gray-600 mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  )
}