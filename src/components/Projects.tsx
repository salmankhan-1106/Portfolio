import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ArrowUpRight } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  github: string
  category: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'GoSellr AI Assistant',
    description:
      'AI shopping-assistant chatbot with a NestJS backend and Next.js frontend. Uses Groq\'s Llama 3.1 to ground responses in a live product catalog and stays on-topic with built-in guardrails.',
    technologies: ['NestJS', 'Next.js', 'TypeScript', 'Groq LLM', 'Prisma'],
    github: 'https://github.com/salmankhan-1106/GoSellr-AI-Assistant',
    category: 'AI/ML',
  },
  {
    id: 2,
    title: 'Guarded SQL Chatbot',
    description:
      'A SQL-grounded chatbot for e-commerce catalogs. Every request passes through a rate limiter, topic guardrail, constrained SQL generation, and a validator before a read-only database and Gemini formatter produce the reply.',
    technologies: ['Python', 'Google Gemini', 'PostgreSQL', 'SQL Validation'],
    github: 'https://github.com/salmankhan-1106/Chatbot',
    category: 'AI/ML',
  },
  {
    id: 3,
    title: 'Self-Healing MLOps Pipeline',
    description:
      'Production-style MLOps pipeline with Jenkins CI/CD, Dockerized deployments, Kubernetes manifests, and Prometheus/Grafana monitoring with automated alerting.',
    technologies: ['Docker', 'Jenkins', 'Kubernetes', 'Prometheus', 'Grafana'],
    github: 'https://github.com/salmankhan-1106/selfhealing-mlops-FA23-BAI-038',
    category: 'MLOps & DevOps',
  },
  {
    id: 4,
    title: 'Plant Disease Recognition System',
    description:
      'CNN-based deep learning system that identifies 38 plant diseases across multiple crops from leaf images and recommends treatment, deployed as an interactive Streamlit app.',
    technologies: ['TensorFlow', 'Keras', 'CNN', 'Streamlit'],
    github: 'https://github.com/salmankhan-1106/Plants-Diseases-Recognition-System',
    category: 'AI/ML',
  },
  {
    id: 5,
    title: 'Gemini AI Chatbot',
    description:
      'FastAPI chatbot powered by Google Gemini 1.5 Flash with real-time streaming over WebSockets, session persistence, and a polished custom UI.',
    technologies: ['FastAPI', 'Gemini API', 'WebSockets', 'JavaScript'],
    github: 'https://github.com/salmankhan-1106/gemini_chatbot',
    category: 'AI/ML',
  },
  {
    id: 6,
    title: 'Loan Approval Prediction',
    description:
      'End-to-end ML workflow for loan approval: data preprocessing, classification models with hyperparameter tuning, and regression with decision trees and ensemble learners.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
    github: 'https://github.com/salmankhan-1106/Loan-Prediction',
    category: 'Data Science',
  },
  {
    id: 7,
    title: 'ML-Ops Training Pipeline',
    description:
      'Containerized machine learning training and deployment pipeline with Jenkins automation and Dockerized model serving.',
    technologies: ['Python', 'Docker', 'Jenkins'],
    github: 'https://github.com/salmankhan-1106/ML-Ops',
    category: 'MLOps & DevOps',
  },
  {
    id: 8,
    title: 'HealthLane — Hospital Management',
    description:
      'Full-stack hospital management platform for patient records, doctor scheduling, and appointment booking.',
    technologies: ['FastAPI', 'React', 'PostgreSQL', 'SQLAlchemy'],
    github: 'https://github.com/salmankhan-1106/Hospital_Mangement',
    category: 'Full-Stack',
  },
]

const categories = ['All', 'AI/ML', 'MLOps & DevOps', 'Full-Stack', 'Data Science']

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All' ? projects : projects.filter((p) => p.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <section id="projects" className="py-24 bg-ink">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div className="mb-12 max-w-2xl" variants={itemVariants}>
          <p className="text-accent-light font-semibold text-sm uppercase tracking-wide mb-3" style={{ color: '#818CF8' }}>
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Selected work from my GitHub
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Every project below links directly to its source code. All of my work is
            public — take a look at the implementation, not just the pitch.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div className="flex flex-wrap gap-3 mb-10" variants={itemVariants}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-accent text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-accent/50 hover:bg-white/[0.06] transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-semibold text-accent-light bg-accent/10 px-2.5 py-1 rounded" style={{ color: '#A5B4FC' }}>
                  {project.category}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-gray-500 group-hover:text-white transition-colors"
                />
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-gray-400 bg-white/5 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-gray-300 group-hover:text-white transition-colors pt-2 border-t border-white/10">
                <Github size={16} />
                View on GitHub
              </div>
            </motion.a>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div className="text-center mt-14" variants={itemVariants}>
          <a
            href="https://github.com/salmankhan-1106"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white rounded-md font-semibold hover:bg-white/5 transition-colors"
          >
            <Github size={18} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
