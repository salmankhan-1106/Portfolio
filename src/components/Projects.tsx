import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const projects = [
    {
      id: 1,
      title: 'Face Recognition System',
      description: 'Computer Vision system using facial recognition for identity verification and security applications.',
      longDescription: 'Advanced computer vision project implementing facial recognition using machine learning algorithms. The system can detect, recognize, and verify faces in real-time, making it suitable for security applications, attendance systems, and access control. Built with OpenCV and deep learning models for high accuracy.',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop',
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision', 'NumPy'],
      features: ['Real-time face detection', 'Identity verification', 'High accuracy recognition', 'Security integration'],
      github: '#',
      category: 'AI/ML',
    },
    {
      id: 2,
      title: 'Relationship Compatibility Predictor',
      description: 'Machine Learning model that predicts relationship compatibility based on personality traits and preferences.',
      longDescription: 'A sophisticated ML prediction model that analyzes personality traits, interests, and behavioral patterns to predict relationship compatibility. Uses advanced algorithms to process user data and provide compatibility scores with detailed insights. The model has been trained on comprehensive datasets for accurate predictions.',
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning', 'Data Analysis'],
      features: ['Compatibility scoring', 'Personality analysis', 'Behavioral patterns', 'Detailed insights'],
      github: '#',
      category: 'AI/ML',
    },
    {
      id: 3,
      title: 'City Distance Calculator',
      description: 'Graph-based application implementing Dijkstra, Prim\'s, and Kruskal algorithms for optimal path finding.',
      longDescription: 'Data Structures and Algorithms project implementing various graph algorithms to find shortest paths between cities. Features Dijkstra\'s algorithm for shortest path, Prim\'s and Kruskal\'s algorithms for minimum spanning tree. Provides visual representation of graphs and optimal route calculations.',
      image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop',
      technologies: ['Java', 'Graph Algorithms', 'Data Structures', 'Dijkstra', 'Prim\'s & Kruskal\'s'],
      features: ['Shortest path calculation', 'Multiple algorithm implementation', 'Visual graph representation', 'Route optimization'],
      github: '#',
      category: 'DSA',
    },
    {
      id: 4,
      title: 'HR Management System',
      description: 'Comprehensive Human Resource management system built with JavaFX for employee management and operations.',
      longDescription: 'Object-Oriented Programming project featuring a complete HR management solution. Handles employee records, payroll management, attendance tracking, performance evaluation, and reporting. Built with JavaFX for an intuitive desktop interface with modern UI components and database integration.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      technologies: ['Java', 'JavaFX', 'OOP Principles', 'Database Integration', 'Desktop Application'],
      features: ['Employee management', 'Payroll system', 'Attendance tracking', 'Performance evaluation'],
      github: '#',
      category: 'OOP',
    },
    {
      id: 5,
      title: 'Interactive Portfolio Website',
      description: 'Modern, responsive portfolio website built with React, featuring smooth animations and interactive elements.',
      longDescription: 'A professional portfolio website showcasing advanced React development skills. Features smooth scrolling, interactive animations with Framer Motion, responsive design with Tailwind CSS, and modern UI/UX principles. Includes contact form integration, dynamic content, and optimized performance.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      features: ['Responsive design', 'Smooth animations', 'Interactive elements', 'Modern UI/UX'],
      github: '#',
      category: 'Web Development',
    },
    {
      id: 6,
      title: 'Comprehensive Data Analysis Suite',
      description: 'Advanced data science toolkit for Exploratory Data Analysis (EDA) with comprehensive visualization capabilities.',
      longDescription: 'Professional data analysis platform specializing in Exploratory Data Analysis (EDA). Provides comprehensive statistical analysis, data visualization, pattern recognition, and insight generation. Features automated EDA reports, interactive dashboards, and advanced analytics for data-driven decision making.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
      features: ['Automated EDA', 'Statistical analysis', 'Data visualization', 'Pattern recognition'],
      github: '#',
      category: 'Data Science',
    },
  ]

  const categories = ['All', 'AI/ML', 'DSA', 'OOP', 'Web Development', 'Data Science']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredProjects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

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
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500 rounded-full opacity-5 blur-3xl" />
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my best work, demonstrating expertise in various technologies
            and problem-solving approaches.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div className="flex justify-center mb-12" variants={itemVariants}>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setCurrentSlide(0)
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Carousel */}
        <motion.div className="relative mb-16" variants={itemVariants}>
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {filteredProjects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-8 p-8">
                      {/* Project Image */}
                      <div className="relative group">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 lg:h-80 object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
                        <div className="absolute top-4 right-4">
                          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="flex flex-col justify-center">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4">{project.title}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {project.longDescription}
                        </p>

                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {project.features.map((feature) => (
                              <div key={feature} className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span className="text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          {filteredProjects.length > 1 && (
            <>
              <motion.button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={24} />
              </motion.button>
            </>
          )}

          {/* Slide Indicators */}
          {filteredProjects.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {filteredProjects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-blue-500' : 'bg-white/30'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-center mb-12">All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-400 text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
