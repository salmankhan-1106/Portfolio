import React from 'react'
import { motion } from 'framer-motion'

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#36454F] via-[#2c363c] to-[#1f2a30]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Custom Geometric Loader */}
        <motion.div
          className="relative mb-8 flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <div className="loader"></div>
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
              className="h-full bg-gradient-to-r from-[#7c9885] to-[#a8c4a2] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* CSS Styles for the geometric loader */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .loader {
          --s: 30px;
          --_d: calc(0.353 * var(--s));
          width: calc(var(--s) + var(--_d));
          aspect-ratio: 1;
          display: grid;
        }

        .loader:before,
        .loader:after {
          content: "";
          grid-area: 1/1;
          clip-path: polygon(
            var(--_d) 0,
            100% 0,
            100% calc(100% - var(--_d)),
            calc(100% - var(--_d)) 100%,
            0 100%,
            0 var(--_d)
          );
          background: conic-gradient(
            from -90deg at calc(100% - var(--_d)) var(--_d),
            #7c9885 135deg,
            #36454F 0 270deg,
            #a8c4a2 0
          );
          animation: l6 2s infinite;
        }

        .loader:after {
          animation-delay: -1s;
        }

        @keyframes l6 {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(30px, 0);
          }
          50% {
            transform: translate(30px, 30px);
          }
          75% {
            transform: translate(0, 30px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        `
      }} />
    </motion.div>
  )
}

export default LoadingScreen
