'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export function AnimatedCard({ title, description, icon }: AnimatedCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 group hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:border-teal-500/50"
      style={{
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.05 }} // Keeps hover scaling effect, remove if unnecessary
    >
      <div className="mb-4 text-teal-500 transition-transform duration-300 group-hover:scale-110">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-teal-400">{title}</h3>
      <p className="text-white/80">{description}</p>
    </motion.div>
  )
}

<style jsx global>{`
  @keyframes subtle-glow {
    0% {
      box-shadow: 0 0 20px rgba(20,184,166,0.1);
    }
    50% {
      box-shadow: 0 0 30px rgba(20,184,166,0.2);
    }
    100% {
      box-shadow: 0 0 20px rgba(20,184,166,0.1);
    }
  }

  .group {
    animation: subtle-glow 3s ease-in-out infinite;
  }

  .group:hover {
    animation: none;
  }
`}</style>
