import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animationType?: '3d-rotate' | 'slide-up' | 'fade-scale' | 'parallax'
  delay?: number
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  className = '',
  animationType = 'slide-up',
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight && rect.bottom > 0
        
        if (isInView && !isVisible) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isVisible])

  const getAnimationVariants = () => {
    switch (animationType) {
      case '3d-rotate':
        return {
          hidden: { 
            opacity: 0, 
            rotateX: -90,
            transformPerspective: 1000,
            scale: 0.8
          },
          visible: { 
            opacity: 1, 
            rotateX: 0,
            transformPerspective: 1000,
            scale: 1,
            transition: {
              duration: 0.8,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        }
      
      case 'fade-scale':
        return {
          hidden: { 
            opacity: 0, 
            scale: 0.8,
            y: 50
          },
          visible: { 
            opacity: 1, 
            scale: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        }
      
      case 'parallax':
        const parallaxY = scrollY * 0.5
        return {
          hidden: { 
            opacity: 0,
            y: parallaxY + 100
          },
          visible: { 
            opacity: 1,
            y: parallaxY,
            transition: {
              duration: 0.8,
              delay,
              ease: "easeOut"
            }
          }
        }
      
      default: // slide-up
        return {
          hidden: { 
            opacity: 0, 
            y: 60,
            scale: 0.95
          },
          visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
              duration: 0.6,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        }
    }
  }

  return (
    <motion.div
      ref={elementRef}
      className={className}
      variants={getAnimationVariants()}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      style={{
        transformStyle: animationType === '3d-rotate' ? 'preserve-3d' : 'flat'
      }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollAnimation
