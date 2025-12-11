'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:your.email@example.com', label: 'Email' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 via-gray-100 to-white dark:from-gray-900 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white overflow-hidden border-t border-gray-200 dark:border-gray-800">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold">Ravidu Wickramaarachchi</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Data Science student passionate about AI, ML, and building intelligent solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Navigation</h4>

            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.button
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover-color transition-colors text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity dot-color" />
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Let's Connect</h4>

            <div className="space-y-3">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover-color transition-all text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                >
                  <div className="p-2 bg-white/80 dark:bg-gray-800/50 rounded-lg border border-gray-300/50 dark:border-gray-700/50 hover-border transition-colors shadow-sm dark:shadow-none">
                    <Icon size={16} />
                  </div>
                  <span>{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="relative pt-8 border-t border-gray-200/50 dark:border-gray-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-500 text-sm">
              © {new Date().getFullYear()}{' '}
              <span className="text-gray-900 dark:text-gray-300 font-medium">
                Ravidu Wickramaarachchi
              </span>. All rights reserved.
            </p>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/50 rounded-full border border-gray-300/50 dark:border-gray-700/50 hover-border hover-color transition-all text-sm backdrop-blur-sm shadow-sm dark:shadow-none"
            >
              <span>Back to top</span>
              <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                <FiArrowUp size={16} />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>

      </div>
    </footer>
  )
}
