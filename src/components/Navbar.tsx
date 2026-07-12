import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Menu, X } from 'lucide-react'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

interface NavbarProps {
  activeSection: string
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollToElement } = useSmoothScroll({ duration: 900 })

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    scrollToElement(sectionId, 72)
    setMobileMenuOpen(false)
  }

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-lg font-bold tracking-tight transition-colors ${
              scrolled ? 'text-ink' : 'text-white'
            }`}
          >
            Salman Khan
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-colors py-1 ${
                  activeSection === item.id
                    ? 'text-accent'
                    : scrolled
                    ? 'text-gray-600 hover:text-ink'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                    layoutId="activeNavItem"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <a
              href="https://github.com/salmankhan-1106"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                scrolled
                  ? 'bg-ink text-white hover:bg-accent'
                  : 'bg-white text-ink hover:bg-accent hover:text-white'
              }`}
            >
              <Github size={16} />
              GitHub
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 ${scrolled ? 'text-ink' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden overflow-hidden bg-white border-t border-gray-100"
        initial={false}
        animate={{ height: mobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.25 }}
      >
        <div className="px-6 py-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'text-accent bg-accent/5'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://github.com/salmankhan-1106"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 rounded-md text-sm font-semibold text-white bg-ink text-center mt-2"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
