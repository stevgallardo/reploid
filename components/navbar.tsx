'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Menu, X } from 'lucide-react' // Icons for hamburger menu
import { usePathname } from 'next/navigation'

export function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-4">
      <div className="mx-auto max-w-7xl flex h-20 items-center justify-between rounded-lg border border-white/10 bg-black/70 px-4 sm:px-6 lg:px-11">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-white">Reploid.AI</span>
        </Link>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/twitter"
            className={`text-sm transition-colors ${
              pathname === '/twitter' ? 'text-teal-400' : 'text-white hover:text-white/80'
            }`}
          >
            Twitter
          </Link>
          <Link 
            href="/casos-de-estudio"
            className={`text-sm transition-colors ${
              pathname === '/casos-de-estudio' ? 'text-teal-400' : 'text-white hover:text-white/80'
            }`}
          >
            Casos de Estudio
          </Link>
          <Link 
            href="/como-funciona"
            className={`text-sm transition-colors ${
              pathname === '/como-funciona' ? 'text-teal-400' : 'text-white hover:text-white/80'
            }`}
          >
            Cómo Funciona
          </Link>
          <Link 
            href="/blog"
            className={`text-sm transition-colors ${
              pathname === '/blog' ? 'text-teal-400' : 'text-white hover:text-white/80'
            }`}
          >
            Blog
          </Link>
          <Link 
            href="/contacto"
            className={`text-sm transition-colors ${
              pathname === '/contacto' ? 'text-teal-400' : 'text-white hover:text-white/80'
            }`}
          >
            Contáctanos
          </Link>
        </div>

        <Button className="hidden md:inline-flex bg-teal-500 hover:bg-teal-600">
          Reservar llamada <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 text-white px-4 py-4 space-y-4">
          <Link 
            href="/twitter"
            className="block text-xl hover:text-teal-400 px-4 py-2"
          >
            Twitter
          </Link>
          <Link 
            href="/casos-de-estudio"
            className="block text-xl hover:text-teal-400 px-4 py-2"
          >
            Casos de Estudio
          </Link>
          <Link 
            href="/como-funciona"
            className="block text-xl hover:text-teal-400 px-4 py-2"
          >
            Cómo Funciona
          </Link>
          <Link 
            href="/blog"
            className="block text-xl hover:text-teal-400 px-4 py-2"
          >
            Blog
          </Link>
          <Link 
            href="/contacto"
            className="block text-xl hover:text-teal-400 px-4 py-2"
          >
            Contáctanos
          </Link>
        </div>
      )}
    </nav>
  )
}
