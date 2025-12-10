'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, HTMLMotionProps } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiSend, FiCheckCircle } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: FiMail, href: 'mailto:your.email@example.com', label: 'Email', color: 'hover:text-red-500' },
  ]

  const MotionDiv = motion.div as React.FC<HTMLMotionProps<'div'> & { className?: string }>
  const MotionP = motion.p as React.FC<HTMLMotionProps<'p'> & { className?: string }>
  const MotionButton = motion.button as React.FC<HTMLMotionProps<'button'> & { className?: string; type?: 'button' | 'submit' | 'reset'; disabled?: boolean }>
  const MotionSpan = motion.span as React.FC<HTMLMotionProps<'span'> & { className?: string }>

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-12">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500'
                  }`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <MotionP initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-sm text-red-500">
                    {errors.name}
                  </MotionP>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <MotionP initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-sm text-red-500">
                    {errors.email}
                  </MotionP>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500'
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <MotionP initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-sm text-red-500">
                    {errors.message}
                  </MotionP>
                )}
              </div>

              <MotionButton
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all ${
                  isSubmitted
                    ? 'bg-green-500'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50'
                } disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
              >
                {isSubmitting ? (
                  <>
                    <MotionDiv animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <FiCheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <FiSend size={20} />
                    Send Message
                  </>
                )}
              </MotionButton>
            </form>
          </MotionDiv>

          <MotionDiv initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <MotionDiv key={label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ x: 10, scale: 1.02 }} className={`flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all group ${color}`}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 w-full">
                    <MotionDiv whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg group-hover:scale-110 transition-transform">
                      <Icon size={24} className="text-gray-700 dark:text-gray-300" />
                    </MotionDiv>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{label}</span>
                  </a>
                </MotionDiv>
              ))}
            </div>

            <MotionDiv initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.6 }} className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Quick Response</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                I typically respond within 24 hours. For urgent matters, feel free to reach out via email or LinkedIn.
              </p>
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
