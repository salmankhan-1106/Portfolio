import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({})

  const skills = [
    { name: 'Python', level: 95, color: 'from-yellow-400 to-green-500' },
    { name: 'Java', level: 88, color: 'from-red-500 to-orange-500' },
    { name: 'C++', level: 85, color: 'from-blue-500 to-purple-500' },
    { name: 'FastAPI', level: 92, color: 'from-green-400 to-blue-500' },
    { name: 'WebSockets', level: 88, color: 'from-purple-500 to-pink-500' },
    { name: 'LLM Integration', level: 90, color: 'from-indigo-500 to-purple-600' },
    { name: 'Database Design', level: 87, color: 'from-blue-400 to-cyan-500' },
    { name: 'Problem Solving', level: 96, color: 'from-green-500 to-teal-500' },
  ]

  const categories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Frameworks & Libraries',
      icon: '🚀',
      skills: ['FastAPI', 'React', 'Scikit-learn', 'Framer Motion', 'Tailwind CSS'],
    },
    {
      title: 'Databases & Tools',
      icon: '🗄️',
      skills: ['Oracle', 'MongoDB', 'Git', 'Streamlit', 'Vite'],
    },
    {
      title: 'AI & Machine Learning',
      icon: '🧠',
      skills: ['LLM Integration', 'Computer Vision', 'ML Model Training', 'Neural Networks'],
    },
  ]

  useEffect(() => {
    if (inView) {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => ({ ...prev, [skill.name]: skill.level }))
        }, index * 200)
      })
    }
  }, [inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200 rounded-full translate-x-1/2 opacity-20" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-green-200 rounded-full -translate-x-1/2 opacity-30" />
      </div>

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
            across various programming languages, frameworks, and technologies.
          </p>
        </motion.div>

        {/* Skills Progress Bars */}
        <motion.div className="mb-20" variants={itemVariants}>
          <h3 className="text-2xl font-bold text-center mb-12">Technical Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-sm font-bold text-gray-600">
                    {animatedSkills[skill.name] || 0}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${animatedSkills[skill.name] || 0}%` : 0 }}
                    transition={{ delay: index * 0.2, duration: 1.5, ease: 'easeOut' }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/30 rounded-full"
                      animate={{ x: ['0%', '100%', '0%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Categories */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-center mb-12">Technology Stack</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="group relative h-64"
                style={{ perspective: '1000px' }}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + categoryIndex * 0.1 }}
              >
                <motion.div
                  className="relative w-full h-full"
                  style={{
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.3s',
                  }}
                  whileHover={{
                    rotateY: 180,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Front of card */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-white rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-blue-200 transition-all duration-300"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden'
                    }}
                  >
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <motion.div 
                        className="text-6xl mb-4"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -10, 10, -10, 0],
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {category.icon}
                      </motion.div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{category.title}</h4>
                      <p className="text-sm text-gray-500">Hover to explore</p>
                      <motion.div
                        className="mt-4 w-8 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                        animate={{ scaleX: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </div>

                  {/* Back of card */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-green-500 rounded-xl p-6 shadow-lg"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className="h-full flex flex-col justify-center">
                      <h4 className="text-lg font-bold text-white mb-4 text-center">{category.title}</h4>
                      <div className="space-y-3">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: skillIndex * 0.1 }}
                          >
                            <motion.div
                              className="w-2 h-2 rounded-full bg-white"
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.2 }}
                            />
                            <span className="text-white font-medium text-sm">{skill}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Skill Cloud */}
        <motion.div className="mt-20" variants={itemVariants}>
          <h3 className="text-2xl font-bold text-center mb-12">Interactive Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Python', 'Java', 'C++', 'FastAPI', 'React', 'TypeScript', 'JavaScript',
              'Oracle', 'MongoDB', 'Scikit-learn', 'LLM Integration', 'Computer Vision', 
              'Machine Learning', 'Neural Networks', 'Streamlit', 'Git', 'Framer Motion', 'Tailwind CSS'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full shadow-lg cursor-pointer"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.05 }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: '#3b82f6',
                  boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Journey */}
        <motion.div className="mt-20 text-center" variants={itemVariants}>
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              languages, and methodologies to stay at the forefront of software development.
            </p>
            <motion.div
              className="mt-6 inline-flex items-center space-x-2"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span>🚀</span>
              <span className="font-medium">Always Growing, Always Learning</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
