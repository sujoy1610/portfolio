import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { Toaster } from 'sonner' // ✅ Import Toaster

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sujoy Sarkar - Portfolio',
  description: 'Personal portfolio built with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
        <Toaster richColors position="top-right" /> {/* ✅ Toasts work now */}
      </body>
    </html>
  )
}
