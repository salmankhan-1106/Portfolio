import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { initializeSmoothScroll } from './hooks/useSmoothScroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

function App() {
  const [isLoading, setIsLoading] = useState(true) // Original loading screen behavior
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Initialize smooth scrolling
    const cleanup = initializeSmoothScroll()
    return cleanup
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-screen bg-gray-50"
          >
            <ScrollProgress />
            <Navbar activeSection={activeSection} />
            
            <main className="relative z-10">
              <Hero />
              <About />
              <Skills />
              <Projects />
              
              {/* Contact Section */}
              <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      Have a project in mind or want to discuss opportunities? 
                      I'd love to hear from you!
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <motion.a
                      href="mailto:m.salmankhan1106@gmail.com"
                      className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600 text-sm">m.salmankhan1106@gmail.com</p>
                    </motion.a>
                    
                    <motion.a
                      href="tel:+923001234567"
                      className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-600 text-sm">+92 300 1234567</p>
                    </motion.a>
                    
                    <motion.div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                      <p className="text-gray-600 text-sm">Pakistan</p>
                    </motion.div>
                    
                    <motion.a
                      href="https://linkedin.com/in/your-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Linkedin className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h3>
                      <p className="text-gray-600 text-sm">Connect with me</p>
                    </motion.a>
                  </div>
                  
                  <div className="mt-16 text-center">
                    <p className="text-gray-600">
                      © 2025 Muhammad Salman Khan. Made with ❤️ and lots of ☕
                    </p>
                  </div>
                </div>
              </section>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
