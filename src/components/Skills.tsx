import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const categories = [
    {
      title: 'Languages',
      skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'SQL'],
    },
    {
      title: 'AI & Machine Learning',
      skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'CNNs', 'Computer Vision', 'LLM Integration', 'Pandas', 'NumPy'],
    },
    {
      title: 'Backend & DevOps',
      skills: ['FastAPI', 'NestJS', 'Node.js', 'Docker', 'Jenkins CI/CD', 'Kubernetes', 'Prometheus', 'Grafana'],
    },
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Oracle'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'Streamlit', 'Vite', 'Jupyter'],
    },
  ]

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
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  }

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div className="mb-16 max-w-2xl" variants={itemVariants}>
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-5">
            Technologies I work with
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A practical toolkit built through coursework and real projects — spanning
            AI/ML, backend systems, DevOps, and frontend development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.title}
              className="bg-white border border-gray-100 rounded-xl p-6"
              variants={itemVariants}
            >
              <h3 className="text-sm font-semibold text-ink uppercase tracking-wide mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
