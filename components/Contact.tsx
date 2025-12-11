'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, HTMLMotionProps } from 'framer-motion'
import { FiInstagram, FiGithub, FiLinkedin, FiMail, FiSend, FiCheckCircle } from 'react-icons/fi'

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
    { icon: FiGithub, href: 'https://github.com/Ravidujee19', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/ravidu-wickramaarachchi', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:ravijeewantha6599745@gmail.com', label: 'Email' },
    { icon: FiInstagram, href: 'https://instagram.com/ravidujee_', label: 'Instagram' },
  ]

  const MotionDiv = motion.div as React.FC<HTMLMotionProps<'div'>>
  const MotionP = motion.p as React.FC<HTMLMotionProps<'p'>>
  const MotionButton = motion.button as React.FC<HTMLMotionProps<'button'>>
  const MotionSpan = motion.span as React.FC<HTMLMotionProps<'span'>>

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
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
          
          {/* Form */}
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500'
                  }`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all resize-none ${
                    errors.message
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500'
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <MotionButton
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all ${
                  isSubmitted
                    ? 'bg-green-500'
                    : 'bg-theme bg-theme-hover'
                } disabled:opacity-50 flex items-center justify-center gap-2`}
              >
                {isSubmitting ? (
                  <>
                    <MotionDiv animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
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

          {/* Right Side: Social + Info */}
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <MotionDiv
                  key={label}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 w-full">
                    <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:scale-110 transition-transform">
                      <Icon size={24} className="text-gray-700 dark:text-gray-300" />
                    </div>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{label}</span>
                  </a>
                </MotionDiv>
              ))}
            </div>

            <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-xl">
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Quick Response</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                I typically respond within 24 hours. For urgent matters, reach out via email or LinkedIn.
              </p>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
