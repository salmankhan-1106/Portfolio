import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-ink border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Muhammad Salman Khan. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/salmankhan-1106"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-salman-khan-2110r2006/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:m.salmankhan1106@gmail.com"
            aria-label="Email"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
