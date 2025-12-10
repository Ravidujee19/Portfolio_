'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FiCode, FiLayers, FiUsers, FiAward } from 'react-icons/fi'

const stats = [
  { icon: FiCode, value: '10+', label: 'Projects', color: 'text-blue-500' },
  { icon: FiLayers, value: '15+', label: 'Technologies', color: 'text-purple-500' },
  { icon: FiUsers, value: '5+', label: 'Datasets Analyzed', color: 'text-pink-500' },
  { icon: FiAward, value: 'SLIIT', label: 'Data Science Student', color: 'text-green-500' },
]

const funFacts = [
  '🤖 Passionate about AI & ML',
  '📊 Love turning data into insights',
  '🚀 Always exploring cutting-edge AI',
  '💡 Thrive on hands-on learning',
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          {...({} as any)}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
            {...({} as any)}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse" />

              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl"
                {...({} as any)}
              >
                <img
                  src="/Profile/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            {...({} as any)}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Data Science Student & Full-Stack Developer
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Hi, I&apos;m Ravidu Wickramaarachchi, a Data Science undergraduate at SLIIT with a
              passion for Artificial Intelligence, Machine Learning, Data Analytics, and
              Data Engineering.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              With a strong background in web development, I&apos;ve built many applications before 
              diving into data science. I&apos;m experienced in Python, SQL, TensorFlow, PyTorch, 
              Scikit-learn, Power BI, and Streamlit.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I love exploring new AI techniques, solving problems, and building intelligent 
              systems that create real-world impact.
            </p>

            {/* Fun Facts */}
            <div className="grid grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
                  {...({} as any)}
                >
                  <p className="text-sm font-medium">{fact}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all"
                {...({} as any)}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-block mb-4 ${stat.color}`}
                  {...({} as any)}
                >
                  <Icon size={40} />
                </motion.div>

                <h4 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                  {stat.value}
                </h4>

                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
