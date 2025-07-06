'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// ✅ Type definition for dots
type Dot = {
  left: string
  top: string
  delay: number
  duration: number
}

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const roles = ['Full Stack Developer', 'React Specialist', 'Firebase Expert', 'UI/UX Enthusiast']
  const [currentRole, setCurrentRole] = useState(0)
  const [dots, setDots] = useState<Dot[]>([]) // ✅ Now typed correctly
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const randomDots: Dot[] = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    }))

    setDots(randomDots)
  }, [])

  useEffect(() => {
    const typeText = async () => {
      const text = roles[currentRole]
      for (let i = 0; i <= text.length; i++) {
        setDisplayText(text.slice(0, i))
        await new Promise(resolve => setTimeout(resolve, 100))
      }
      await new Promise(resolve => setTimeout(resolve, 2000))
      for (let i = text.length; i >= 0; i--) {
        setDisplayText(text.slice(0, i))
        await new Promise(resolve => setTimeout(resolve, 50))
      }
      setCurrentRole(prev => (prev + 1) % roles.length)
    }

    typeText()
  }, [currentRole])

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/VE1Db552HjScfofz/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm Sujoy Sarkar 👋
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="text-gray-300">I'm a</span>
            <span className="ml-2 text-blue-400 font-semibold border-r-2 border-blue-400 animate-pulse">
              {displayText}
            </span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            Passionate about building real-time, Firebase-powered applications and MERN stack solutions.
            Currently seeking opportunities to create amazing user experiences.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          onClick={scrollToNext}
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className="w-8 h-8 text-white/70 hover:text-white transition-colors" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {dots.map((dot, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              style={{ left: dot.left, top: dot.top }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: dot.duration,
                repeat: Infinity,
                delay: dot.delay,
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Hero
