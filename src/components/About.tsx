import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Rocket, Brain, Heart } from 'lucide-react'

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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

  const stats = [
    { number: '15+', label: 'Projects Built' },
    { number: '5+', label: 'Technologies Learned' },
    { number: '100%', label: 'Passion for AI' },
    { number: '24/7', label: 'Learning Mode' },
  ]

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'I believe in writing maintainable, scalable, and efficient code that stands the test of time.',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Always exploring new technologies and methodologies to deliver cutting-edge solutions.',
    },
    {
      icon: Brain,
      title: 'Problem Solving',
      description: 'I approach every challenge with analytical thinking and creative problem-solving skills.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Passionate about technology and committed to creating meaningful digital experiences.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-30" />
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate software developer who loves turning complex problems into simple, 
            beautiful, and intuitive solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Image */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative">
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-20"
                animate={{
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-15"
                animate={{
                  rotate: [360, 180, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/Portfolio/profile-image.jpg"
                  alt="Muhammad Salman Khan at work"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Student badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.5, type: 'spring', stiffness: 150 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">AI</div>
                  <div className="text-sm opacity-90">Bachelor Student</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Building the Future with Artificial Intelligence
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Currently pursuing a Bachelor's degree in Artificial Intelligence, where I'm mastering 
              the fundamentals of Machine Learning, Neural Networks, and Computer Vision. My academic 
              journey is driven by curiosity and a passion for solving complex problems through AI.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              I'm actively working with cutting-edge technologies including Python for ML model development, 
              React for frontend applications, MongoDB and Oracle for database management, and exploring 
              LLM integration for innovative AI solutions. Each project teaches me something new about 
              the endless possibilities of artificial intelligence.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not studying or coding, you'll find me exploring the latest AI research papers, 
              building personal projects, or experimenting with new machine learning frameworks and algorithms.
            </p>

            {/* Skills highlight */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {['Python & ML', 'Computer Vision', 'React Development', 'Database Design'].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500" />
                  <span className="text-gray-700 font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-bold text-center mb-12">
            What <span className="gradient-text">Drives</span> Me
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="group relative bg-white rounded-xl p-6 shadow-lg border border-gray-100 cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated background overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <value.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                />
                <motion.div
                  className="absolute bottom-2 left-2 w-3 h-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
