'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com', label: 'GitHub', color: 'hover:text-white' },
  { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: FiMail, href: 'mailto:your.email@example.com', label: 'Email', color: 'hover:text-red-400' },
]

const techStack = [
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiTailwindcss, name: 'Tailwind CSS' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 via-gray-100 to-white dark:from-gray-900 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white overflow-hidden border-t border-gray-200 dark:border-gray-800">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-500/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold text-gradient">Ravidu Wickramaarachchi</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              Data Science student passionate about AI, ML, and building intelligent solutions that make a difference.
            </p>
            {/* <div className="flex flex-col gap-3 pt-2">
              <span className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider">Built with</span>
              <div className="flex gap-4">
                {techStack.map(({ icon: Icon, name }) => (
                  <motion.div
                    key={name}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                    title={name}
                  >
                    <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-500/30 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-2 bg-white/80 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 shadow-sm dark:shadow-none">
                      <Icon className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" size={24} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div> */}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    whileHover={{ x: 8 }}
                    className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Let's Connect</h4>
            <div className="space-y-3">
              {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className={`group flex items-center gap-3 text-gray-600 dark:text-gray-400 ${color} transition-all text-sm`}
                >
                  <div className="p-2 bg-white/80 dark:bg-gray-800/50 rounded-lg border border-gray-300/50 dark:border-gray-700/50 group-hover:border-blue-500/50 dark:group-hover:border-blue-500/50 transition-colors shadow-sm dark:shadow-none">
                    <Icon size={16} />
                  </div>
                  <span>{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative pt-8 border-t border-gray-200/50 dark:border-gray-800/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-500 text-sm">
              © {new Date().getFullYear()} <span className="text-gray-900 dark:text-gray-300 font-medium">Ravidu Wickramaarachchi</span>. All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/50 rounded-full border border-gray-300/50 dark:border-gray-700/50 hover:border-blue-500/50 dark:hover:border-blue-500/50 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-all text-sm backdrop-blur-sm shadow-sm dark:shadow-none"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <FiArrowUp size={16} />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

