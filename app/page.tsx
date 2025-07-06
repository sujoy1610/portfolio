'use client'

import Hero from '@/components/sections/Hero'
import Journey from '@/components/sections/Journey'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import About from '@/components/sections/About'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Hero />
      <About/>
      <Journey />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
