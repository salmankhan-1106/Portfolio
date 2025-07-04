import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface CursorPosition {
  x: number
  y: number
}

const CursorEffects: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [trails, setTrails] = useState<CursorPosition[]>([])
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  const words = [
    { text: 'DEVELOPER', color: 'alizarin' },
    { text: 'CREATIVE', color: 'wisteria' },
    { text: 'INNOVATOR', color: 'peter-river' },
    { text: 'PROBLEM SOLVER', color: 'emerald' },
    { text: 'AI ENTHUSIAST', color: 'sun-flower' }
  ]

  const rotatingTextRef = useRef<HTMLDivElement>(null)

  // Mouse position tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setMousePosition(newPosition)
      
      // Add trail effect
      setTrails(prev => {
        const newTrails = [newPosition, ...prev.slice(0, 8)]
        return newTrails
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Rotating text animation
  useEffect(() => {
    const animateWord = () => {
      if (!rotatingTextRef.current) return

      setIsAnimating(true)
      const currentWord = rotatingTextRef.current.querySelector('.word.current')
      const nextWord = rotatingTextRef.current.querySelector('.word.next')

      if (currentWord && nextWord) {
        // Animate out current word
        const currentLetters = currentWord.querySelectorAll('.letter')
        currentLetters.forEach((letter, i) => {
          setTimeout(() => {
            letter.classList.add('out')
          }, i * 60)
        })

        // Animate in next word
        setTimeout(() => {
          currentWord.classList.remove('current')
          currentWord.classList.add('behind')
          nextWord.classList.remove('behind')
          nextWord.classList.add('current')

          const nextLetters = nextWord.querySelectorAll('.letter')
          nextLetters.forEach((letter, i) => {
            letter.classList.remove('behind')
            setTimeout(() => {
              letter.classList.add('in')
            }, i * 60)
          })

          setCurrentWordIndex((prev) => (prev + 1) % words.length)
          setIsAnimating(false)
        }, currentLetters.length * 60 + 200)
      }
    }

    const interval = setInterval(animateWord, 3000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <>
      {/* Cursor Follower */}
      <motion.div
        className="cursor-follower bg-blue-500 opacity-30"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Cursor Trails */}
      {trails.map((trail, index) => (
        <motion.div
          key={index}
          className="cursor-trail"
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
            backgroundColor: `hsl(${200 + index * 20}, 70%, 60%)`,
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ 
            opacity: 0, 
            scale: 0.3,
          }}
          transition={{ duration: 0.8 }}
        />
      ))}

      {/* Floating Interactive Elements */}
      <motion.div
        className="fixed top-1/4 left-1/4 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="fixed top-3/4 right-1/4 w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full pointer-events-none z-50"
        style={{
          transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
        }}
        animate={{
          scale: [1.2, 0.8, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Rotating Text */}
      <div 
        ref={rotatingTextRef}
        className="fixed top-20 right-20 rotating-text pointer-events-none z-40 hidden lg:block"
      >
        <p>
          {words.map((word, index) => (
            <span
              key={index}
              className={`word ${
                index === 0 ? 'current' : 
                index === 1 ? 'next' : 'behind'
              } ${word.color}`}
              style={{ opacity: index === 0 ? 1 : 0 }}
            >
              {word.text.split('').map((letter, letterIndex) => (
                <span
                  key={letterIndex}
                  className={`letter ${index === 0 ? 'in' : 'behind'}`}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </span>
          ))}
        </p>
      </div>
    </>
  )
}

export default CursorEffects
