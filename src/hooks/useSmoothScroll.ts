import { useEffect, useRef } from 'react'

interface SmoothScrollOptions {
  duration?: number
  easing?: (t: number) => number
}

// Easing functions for smooth animations
const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}

const easeInOutQuart = (t: number): number => {
  return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t
}

export const useSmoothScroll = (options: SmoothScrollOptions = {}) => {
  const { duration = 1000, easing = easeInOutCubic } = options

  const smoothScrollTo = (targetY: number) => {
    const startY = window.pageYOffset
    const distance = targetY - startY
    const startTime = Date.now()

    const scroll = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = easing(progress)
      
      window.scrollTo(0, startY + distance * ease)
      
      if (progress < 1) {
        requestAnimationFrame(scroll)
      }
    }

    requestAnimationFrame(scroll)
  }

  const scrollToElement = (elementId: string, offset: number = 0) => {
    const element = document.getElementById(elementId)
    if (element) {
      const targetY = element.offsetTop - offset
      smoothScrollTo(targetY)
    }
  }

  return { smoothScrollTo, scrollToElement }
}

export const useParallaxScroll = () => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5
      
      elementRef.current.style.transform = `translateY(${rate}px)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return elementRef
}

export const use3DScrollEffect = () => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const scrolled = window.pageYOffset
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = scrolled / scrollHeight

      // 3D transform effects
      const rotateX = scrollProgress * 360 * 0.1 // Subtle rotation
      const translateZ = scrollProgress * 100
      const scale = 1 + scrollProgress * 0.1

      elementRef.current.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        translateZ(${translateZ}px) 
        scale(${scale})
      `
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return elementRef
}

// Smooth scroll behavior for the entire page
export const initializeSmoothScroll = () => {
  // Enhanced CSS smooth scrolling
  document.documentElement.style.scrollBehavior = 'smooth'
  
  // Return empty cleanup function for now
  return () => {
    // No cleanup needed for basic smooth scroll
  }
}

export { easeInOutCubic, easeInOutQuart }
