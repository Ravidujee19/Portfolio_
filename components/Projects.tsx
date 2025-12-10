'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

type ProjectCategory = 'all' | 'ml' | 'analytics' | 'visualization' | 'web' | 'mobile'

interface Project {
  id: number
  title: string
  description: string
  category: ProjectCategory
  tech: string[]
  github: string
  demo: string
  image: string
}

const projects: Project[] = [
  {
  id: 1,
  title: "BookManager",
  description:
    "A full-stack CRUD application for managing books using Spring Boot, Hibernate (JPA), Thymeleaf, and an H2 in-memory database. Includes add, edit, delete, view, and title-based search with a clean Bootstrap UI.",
  category: "web",
  tech: [
    "Spring Boot",
    "Spring MVC",
    "Spring Data JPA",
    "Hibernate",
    "Thymeleaf",
    "H2 Database",
    "Bootstrap 5"
  ],
  github: "https://github.com/Ravidujee19/BookManager",
  demo: "",
  image: ""
  },
  {
  id: 2,
  title: "CityBus",
  description:
    "A PHP and MySQL-based CRUD system for managing buses, routes, schedules, reservations, and user roles. Supports Admin, User, and Driver accounts with role-based access. Includes modules for bus management, route handling, reservations, and driver scheduling.",
  category: "web",
  tech: [
    "PHP",
    "MySQL",
    "HTML",
    "CSS",
    "Apache (XAMPP/WAMP)"
  ],
  github: "https://github.com/Dilmith-Ranasinghe518/CityBus", 
  demo: "",
  image: ""
  },
  {
  id: 3,
  title: "Scholarship Exam Prediction",
  description:
    "A machine learning model that predicts whether a 4th-grade student will pass the 5th-grade scholarship exam using a dataset of 30 students. Includes EDA, preprocessing, model training, evaluation, and achieved 93% accuracy.",
  category: "ml",
  tech: [
    "Python",
    "Jupyter Notebook",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Scikit-learn"
  ],
  github: "https://github.com/Ravidujee19/Scholarship_prediction",
  demo: "",
  image: ""
  },
  {
  id: 4,
  title: "PocketGuard",
  description:
    "PocketGuard is an offline-first personal finance tracker built with Kotlin. It allows users to manage income, expenses, budgets, category-wise summaries, and secure passcode access. All data is stored locally using SharedPreferences with optional manual backup/restore.",
  category: "mobile", 
  tech: ["Kotlin", "Android", "XML", "SharedPreferences"],
  github: "https://github.com/Ravidujee19/PocketGuard",
  demo: "",
  image: "/Project/pocketguard.png" 
  },
  {
  id: 5,
  title: "MediHeaven",
  description:
    "A full-stack MERN platform for managing personal health data, doctor appointments, finances, and a healthcare marketplace. Supports multiple roles (Admin, Patient, Supplier, Health Provider), real-time data visualizations, MVC architecture, and secure JWT authentication.",
  category: "web",
  tech: [
    "React.js",
    "Bootstrap 5",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Chart.js",
    "Recharts"
  ],
  github: "https://github.com/Ravidujee19/MediHeaven",
  demo: "",
  image: ""
  },
  {
  id: 6,
  title: "EventPro",
  description:
    "A Java-based event reservation system built with Servlets, JSP, and MySQL. Users can register, log in, browse events, and reserve slots, while admins manage events, reservations, and user accounts. Follows a clean MVC architecture with JDBC for database operations.",
  category: "web",
  tech: [
    "Java Servlets",
    "JSP",
    "JDBC",
    "MySQL",
    "HTML",
    "CSS",
    "JavaScript",
    "MVC Architecture"
  ],
  github: "https://github.com/Ravidujee19/EventPro", 
  demo: "",
  image: ""
  },



]

const categories: { value: ProjectCategory; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'ml', label: 'Machine Learning' },
  { value: 'analytics', label: 'Data Analytics' },
  { value: 'visualization', label: 'Visualization' },
  { value: 'web', label: 'Web Applications' },
  { value: 'mobile', label: 'Mobile Apps' },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'all' || project.category === selectedCategory
  )

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">My Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects I've built with passion and precision
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category.value
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100"
                    >
                      <FiGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100"
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

