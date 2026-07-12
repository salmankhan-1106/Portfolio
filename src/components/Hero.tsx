import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-ink relative overflow-hidden"
    >
      {/* Subtle solid accent shape, no particles/gradients */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-accent/10 rounded-full blur-3xl" />

      <motion.div
        className="max-w-6xl mx-auto px-6 lg:px-8 py-32 relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <motion.p
              className="text-accent-light font-semibold tracking-wide text-sm uppercase mb-4"
              variants={itemVariants}
              style={{ color: '#818CF8' }}
            >
              AI Engineering Student
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
              variants={itemVariants}
            >
              Muhammad Salman Khan
            </motion.h1>

            <motion.p
              className="text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 text-lg leading-relaxed"
              variants={itemVariants}
            >
              I build AI-powered applications, MLOps pipelines, and full-stack
              products — from LLM-integrated chatbots to CNN-based computer
              vision systems and production-grade CI/CD workflows.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              variants={itemVariants}
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-dark text-white rounded-md font-semibold text-base transition-colors"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white rounded-md font-semibold text-base hover:bg-white/5 transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-5 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <a
                href="https://github.com/salmankhan-1106"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-salman-khan-2110r2006/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:m.salmankhan1106@gmail.com"
                aria-label="Email"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={22} />
              </a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div className="lg:w-2/5 flex justify-center" variants={itemVariants}>
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/Portfolio/my-profile.jpg"
                  alt="Muhammad Salman Khan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-lg">
                Open to opportunities
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
