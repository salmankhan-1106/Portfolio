import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'm.salmankhan1106@gmail.com',
      link: 'mailto:m.salmankhan1106@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+92 305 2392121',
      link: 'tel:+923052392121',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/muhammad-salman-khan-2110r2006/',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'View my repositories',
      link: 'https://github.com/salmankhan-1106',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section id="contact" className="py-24 bg-white">
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div className="text-center mb-14" variants={itemVariants}>
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-5">Let's work together</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Have a role, a project, or just want to talk about AI and MLOps? My inbox is open.
          </p>
        </motion.div>

        <motion.div className="grid sm:grid-cols-2 gap-5 mb-14" variants={itemVariants}>
          {contactInfo.map((info) => (
            <a
              key={info.title}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : undefined}
              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-5 bg-gray-50 border border-gray-100 rounded-xl hover:border-accent/40 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 flex-shrink-0 bg-accent/10 rounded-lg flex items-center justify-center">
                <info.icon className="w-5 h-5 text-accent" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-ink">{info.title}</h3>
                <p className="text-gray-600 text-sm truncate">{info.value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.div className="flex items-center justify-center gap-2 text-gray-500 text-sm" variants={itemVariants}>
          <MapPin size={16} />
          Based in Pakistan · Open to remote opportunities
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
