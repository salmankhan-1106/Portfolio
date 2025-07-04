import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [displayText, setDisplayText] = useState('')
  const fullText = 'AI Student | Machine Learning Enthusiast | Future Data Scientist'

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.substring(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 360, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <motion.div
              className="mb-6"
              variants={itemVariants}
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                style={{
                  transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
                }}
              >
                <span className="gradient-text">Muhammad</span>
                <br />
                <span className="text-white">Salman Khan</span>
              </motion.h1>
            </motion.div>

            <motion.div
              className="mb-8"
              variants={itemVariants}
            >
              <div className="text-xl md:text-2xl text-gray-300 font-medium h-8">
                {displayText}
                <motion.span
                  className="inline-block w-0.5 h-6 bg-blue-500 ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </motion.div>

            <motion.p
              className="text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 text-lg"
              variants={itemVariants}
            >
              Pursuing Bachelor's in Artificial Intelligence, specializing in Machine Learning, 
              Neural Networks, and Computer Vision. Building projects with Python, React, MongoDB, 
              and Oracle while exploring the fascinating world of AI and data science.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start mt-8"
              variants={itemVariants}
            >
              <motion.a
                href="https://www.linkedin.com/in/muhammad-salman-khan-2110r2006/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <span className="text-xl">💼</span>
                <span>Connect on LinkedIn</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <motion.div
              className="relative"
              variants={itemVariants}
              style={{
                transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
              }}
            >
              {/* Floating geometric shapes */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-30"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  variants={floatingVariants}
                  animate="animate"
                  transition={{
                    delay: i * 0.2,
                    duration: 6,
                    repeat: Infinity,
                  }}
                />
              ))}

              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Glowing background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Profile image container */}
                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img
                    src="/profile-image.jpg"
                    alt="Muhammad Salman Khan"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
                </motion.div>

                {/* Status indicator */}
                <motion.div
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <div className="flex items-center space-x-2">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-green-500"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-sm font-medium text-gray-800">Available for work</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-white/70 hover:text-white transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
