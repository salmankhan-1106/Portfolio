import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BrainCircuit, Server, Code2, LineChart } from 'lucide-react'

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const stats = [
    { number: '8+', label: 'Featured Projects' },
    { number: '4', label: 'Core Focus Areas' },
    { number: '15+', label: 'Technologies Used' },
    { number: 'BS AI', label: 'In Progress' },
  ]

  const focusAreas = [
    {
      icon: BrainCircuit,
      title: 'AI & Machine Learning',
      description: 'Building CNN-based computer vision systems and integrating LLMs (Gemini, Groq) into production applications.',
    },
    {
      icon: Server,
      title: 'MLOps & DevOps',
      description: 'Designing CI/CD pipelines with Jenkins, Docker, and Kubernetes, with monitoring via Prometheus and Grafana.',
    },
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Shipping end-to-end apps with React, Next.js, FastAPI, and NestJS backed by PostgreSQL and MongoDB.',
    },
    {
      icon: LineChart,
      title: 'Data Science',
      description: 'Turning raw data into models — preprocessing, classification, regression, and hyperparameter tuning.',
    },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div className="mb-16 max-w-2xl" variants={itemVariants}>
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-5">
            Turning ideas into working AI systems and software
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm pursuing a Bachelor's degree in Artificial Intelligence, with hands-on
            experience across the full stack — from training deep learning models to
            deploying them with proper CI/CD and monitoring in place.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div className="space-y-5" variants={itemVariants}>
            <p className="text-gray-600 leading-relaxed">
              My work spans machine learning and computer vision (CNNs for plant disease
              detection, ML models for loan approval prediction), LLM-integrated
              applications (guarded, SQL-grounded chatbots and AI shopping assistants
              built with Gemini and Groq), and MLOps pipelines that use Docker, Jenkins,
              Kubernetes, and Prometheus/Grafana for automated, self-healing deployments.
            </p>
            <p className="text-gray-600 leading-relaxed">
              On the engineering side, I build full-stack products with React, Next.js,
              FastAPI, and NestJS, backed by PostgreSQL and MongoDB — with an emphasis on
              clean architecture and code that's actually maintainable.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-4" variants={itemVariants}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-extrabold text-ink mb-1">{stat.number}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Focus Areas */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-ink mb-8">What I Work On</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:border-accent/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-11 h-11 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <area.icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-base font-semibold text-ink mb-2">{area.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
