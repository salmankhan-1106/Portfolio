import React from 'react'
import { motion } from 'framer-motion'

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Bouncing Circles Animation */}
        <motion.div
          className="relative mb-8 flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <div className="animation-wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </motion.div>
        
        <motion.h1
          className="text-4xl font-bold text-white mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="gradient-text">Muhammad Salman Khan</span>
        </motion.h1>
        
        <motion.p
          className="text-xl text-gray-300"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Creating Amazing Experiences...
        </motion.p>
        
        {/* Progress indicator */}
        <motion.div
          className="mt-8 w-64 mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Loading</span>
            <span>Please wait...</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
