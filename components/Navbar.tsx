'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  // { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
<<<<<<< Updated upstream
=======
  const [activeSection, setActiveSection] = useState('home')
>>>>>>> Stashed changes
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

<<<<<<< Updated upstream
=======
  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''))

    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        {
          rootMargin: '-40% 0px -55% 0px', // fires when section crosses the middle of the viewport
          threshold: 0,
        }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

>>>>>>> Stashed changes
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold text-gradient cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            Portfolio
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
<<<<<<< Updated upstream
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 dark:text-gray-300 hover-color font-medium"
              >
                {item.name}
              </motion.button>
            ))}
=======
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Navigate to ${item.name}`}
                  className={`relative font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-gradient'
                      : 'text-gray-700 dark:text-gray-300 hover-color'
                  }`}
                >
                  {item.name}
                  {/* Animated sliding underline */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      style={{
                        background: 'linear-gradient(to right, var(--primary), var(--primary-hover))',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            })}
>>>>>>> Stashed changes
            <motion.button
              onClick={toggleTheme}
              whileHover={{ rotate: 180, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
<<<<<<< Updated upstream
=======
              aria-label="Toggle colour theme"
>>>>>>> Stashed changes
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover-color"
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
<<<<<<< Updated upstream
=======
              aria-label="Toggle colour theme"
>>>>>>> Stashed changes
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
<<<<<<< Updated upstream
=======
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
>>>>>>> Stashed changes
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg"
          >
<<<<<<< Updated upstream
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ x: 10 }}
                  className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium py-2"
                >
                  {item.name}
                </motion.button>
              ))}
=======
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ x: 10 }}
                    aria-label={`Navigate to ${item.name}`}
                    className={`flex items-center gap-3 w-full text-left font-medium py-2 transition-colors ${
                      isActive
                        ? 'text-gradient'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                    }`}
                  >
                    {/* Active dot indicator */}
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 ${
                        isActive ? 'dot-color scale-125' : 'bg-gray-400 dark:bg-gray-600'
                      }`}
                    />
                    {item.name}
                  </motion.button>
                )
              })}
>>>>>>> Stashed changes
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

