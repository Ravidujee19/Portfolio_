'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiInstagram, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import ParticleBackground from './ParticleBackground'

const typingTexts = [
  'Data Scientist',
  'ML Engineer',
  'Web Developer',
  'Mobile App Developer',
  'Data Analyst',
  'AI Enthusiast',
]

export default function Hero() {
  const [currentText, setCurrentText] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const type = () => {
      const fullText = typingTexts[currentText]
      
      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1))
        if (displayText.length === 0) {
          setIsDeleting(false)
          setCurrentText((prev) => (prev + 1) % typingTexts.length)
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1))
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }
    }

    const timer = setTimeout(type, isDeleting ? 50 : 100)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentText])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 animate-gradient" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-gradient">Hi, I'm Ravidu Wickramaarachchi</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl font-semibold mb-4 min-h-[60px]"
          >
            <span className="text-gray-700 dark:text-gray-300">I'm a </span>
            <span className="text-gradient">{displayText}</span>
            <span className="animate-pulse">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Turning complex datasets into actionable insights and building intelligent systems
            that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.button
              onClick={() => scrollToSection('#projects')}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              View My Work
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-md border-2 border-blue-500 text-blue-500 dark:text-blue-400 rounded-full font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-6 mb-12"
          >
            {[
              { icon: FiGithub, href: 'https://github.com/Ravidujee19' },
              { icon: FiLinkedin, href: 'https://linkedin.com/in/ravidu-wickramaarachchi' },
              { icon: FiMail, href: 'mailto:ravijeewantha6599745@gmail.com' },
              { icon: FiInstagram, href: 'https://instagram.com/ravidujee_' },
            ].map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl transition-colors"
                style={{
                  color: 'var(--icon-color)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--icon-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--icon-color)')}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
