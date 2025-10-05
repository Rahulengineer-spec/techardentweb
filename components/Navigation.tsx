'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X, Heart } from 'lucide-react'

const productLinks = [
  { name: 'Overview', href: '/products' },
  { name: 'Features', href: '/features' },
  { name: 'Enterprise', href: '/enterprise' },
  { name: 'Changelog', href: '/changelog' },
]

const resourceLinks = [
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api' },
  { name: 'Community', href: '/community' },
  { name: 'Help Center', href: '/help' },
  { name: 'Status', href: '/status' },
]

const companyLinks = [
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
  { name: 'Press', href: '/press' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)

  // Timer-based open/close for dropdown
  const openDropdown = (name: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setActiveDropdown(name)
  }
  const delayedCloseDropdown = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
    setDropdownTimeout(timeout)
  }
  const cancelCloseDropdown = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
  }

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-yellow-400">Tech</span>
              <span className="text-white">Ardent</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {/* Product Dropdown */}
            <div className="relative"
              onMouseEnter={() => openDropdown('product')}
              onMouseLeave={delayedCloseDropdown}
            >
              <div>
                <button
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  tabIndex={0}
                >
                  Product
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'product' && (
                  <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
                    onMouseEnter={cancelCloseDropdown}
                    onMouseLeave={delayedCloseDropdown}
                  >
                    <div className="py-1">
                      {productLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative"
              onMouseEnter={() => openDropdown('resources')}
              onMouseLeave={delayedCloseDropdown}
            >
              <div>
                <button
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  tabIndex={0}
                >
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'resources' && (
                  <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
                    onMouseEnter={cancelCloseDropdown}
                    onMouseLeave={delayedCloseDropdown}
                  >
                    <div className="py-1">
                      {resourceLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative"
              onMouseEnter={() => openDropdown('company')}
              onMouseLeave={delayedCloseDropdown}
            >
              <div>
                <button
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                  tabIndex={0}
                >
                  Company
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'company' && (
                  <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
                    onMouseEnter={cancelCloseDropdown}
                    onMouseLeave={delayedCloseDropdown}
                  >
                    <div className="py-1">
                      {companyLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Donate Button */}
            <Link
              href="/donate"
              className="flex items-center space-x-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Heart className="h-4 w-4" />
              <span>Donate</span>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/login"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile Product Links */}
            <div className="space-y-1">
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 px-3 py-2">
                Product
              </div>
              {productLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Resources Links */}
            <div className="space-y-1">
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 px-3 py-2">
                Resources
              </div>
              {resourceLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Company Links */}
            <div className="space-y-1">
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 px-3 py-2">
                Company
              </div>
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Donate Button */}
            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors mt-4"
            >
              <Heart className="h-4 w-4" />
              <span>Donate</span>
            </Link>

            {/* Mobile CTA Buttons */}
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800 dark:text-gray-200">Guest User</div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">guest@example.com</div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
} 