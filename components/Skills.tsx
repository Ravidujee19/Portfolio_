

"use client";

import { useState, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  SiPython,
  SiPostgresql,
  SiMysql,
  SiTensorflow,
  SiPytorch,
  SiJupyter,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiStreamlit,
  SiPowerbi,
  SiGit,
  SiDocker,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiFlutter,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: "ml" | "data" | "tools" | "visualization" | "web" | "mobile";
  color: string;
  funFact: string;
  projects?: number;
}

const skills: Skill[] = [
  { name: "Python", icon: SiPython, category: "data", color: "text-blue-500", funFact: "Primary language for all ML projects" },
  { name: "SQL", icon: TbSql, category: "data", color: "text-blue-600", funFact: "Expert in complex queries" },
  { name: "TensorFlow", icon: SiTensorflow, category: "ml", color: "text-orange-500", funFact: "Deep learning models" },
  { name: "PyTorch", icon: SiPytorch, category: "ml", color: "text-red-500", funFact: "Neural networks and research" },
  { name: "Scikit-learn", icon: SiScikitlearn, category: "ml", color: "text-yellow-600", funFact: "Classical ML algorithms" },
  { name: "Pandas", icon: SiPandas, category: "data", color: "text-green-600", funFact: "Data wrangling & cleaning" },
  { name: "NumPy", icon: SiNumpy, category: "data", color: "text-blue-700", funFact: "Numerical computing core" },
  { name: "Power BI", icon: SiPowerbi, category: "visualization", color: "text-yellow-500", funFact: "Business intelligence dashboards" },
  { name: "Streamlit", icon: SiStreamlit, category: "visualization", color: "text-red-600", funFact: "Deploy ML applications fast" },
  { name: "Jupyter", icon: SiJupyter, category: "tools", color: "text-orange-600", funFact: "Data exploration notebook" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "data", color: "text-blue-700", funFact: "Advanced relational databases" },
  { name: "MySQL", icon: SiMysql, category: "data", color: "text-blue-600", funFact: "Database management systems" },
  { name: "Git", icon: SiGit, category: "tools", color: "text-red-600", funFact: "Version control expert" },
  { name: "Docker", icon: SiDocker, category: "tools", color: "text-blue-600", funFact: "Container-based deployments" },
  { name: "React", icon: SiReact, category: "web", color: "text-cyan-500", funFact: "Interactive UI development" },
  { name: "Next.js", icon: SiNextdotjs, category: "web", color: "text-gray-900 dark:text-white", funFact: "Full-stack React framework" },
  { name: "Node.js", icon: SiNodedotjs, category: "web", color: "text-green-600", funFact: "Backend JavaScript runtime" },
  { name: "TypeScript", icon: SiTypescript, category: "web", color: "text-blue-600", funFact: "Strongly typed JavaScript" },
  { name: "JavaScript", icon: SiJavascript, category: "web", color: "text-yellow-500", funFact: "Core language of the web" },
  { name: "MongoDB", icon: SiMongodb, category: "data", color: "text-green-500", funFact: "NoSQL document database" },
  { name: "React Native", icon: SiReact, category: "mobile", color: "text-cyan-500", funFact: "Cross-platform mobile apps" },
  { name: "Flutter", icon: SiFlutter, category: "mobile", color: "text-blue-400", funFact: "Native-speed mobile apps" },
  { name: "Firebase", icon: SiFirebase, category: "mobile", color: "text-orange-500", funFact: "Backend as a service" },
];

const categories = [
  { value: "all", label: "All Skills" },
  { value: "ml", label: "ML / Deep Learning" },
  { value: "data", label: "Data Engineering" },
  { value: "web", label: "Web Development" },
  { value: "mobile", label: "Mobile Development" },
  { value: "tools", label: "Dev Tools" },
  { value: "visualization", label: "Visualization" },
] as const;

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | Skill["category"]
  >("all");

  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredSkills = useMemo(
    () =>
      skills.filter(
        (skill) => selectedCategory === "all" || skill.category === selectedCategory
      ),
    [selectedCategory]
  );

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Tools and technologies I use to build intelligent systems.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              whileHover={{ scale: 1.05 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category.value
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                onHoverStart={() => setHoveredSkill(index)}
                onHoverEnd={() => setHoveredSkill(null)}
                whileHover={{ scale: 1.1, y: -8 }}
                className="relative group"
              >
                <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all flex flex-col items-center">
                  <Icon
                    className={`text-5xl mb-3 ${skill.color}`}
                  />
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white text-center">
                    {skill.name}
                  </h3>

                  {/* Tooltip */}
                  {hoveredSkill === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-48 p-3 bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 rounded-lg text-xs shadow-xl z-10"
                    >
                      <p className="font-semibold">{skill.funFact}</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          {[
            { label: "Total Projects", value: "10+" },
            { label: "Technologies", value: "15+" },
            { label: "Years Experience", value: "2+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl"
            >
              <h4 className="text-3xl font-bold text-gradient mb-2">
                {stat.value}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
