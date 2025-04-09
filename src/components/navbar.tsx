"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="container flex h-16 items-center justify-between mx-auto max-w-screen-lg">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-md bg-secondary">
              <div className="absolute inset-0 flex items-center text-xs justify-center text-primary-foreground font-bold">
                WD
              </div>
            </div>
            <span className="font-semibold text-xl hidden sm:inline-block">Webdesignify</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="#work" className="text-muted-foreground hover:text-foreground transition-colors">
            Work
          </Link>
          <Link href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
            Process
          </Link>
          <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Button variant="default" asChild>
            <Link href="/kontakt">Kontakt aufnehmen</Link>
          </Button>
        </nav>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border/40 py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#services"
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#work"
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              href="#process"
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </Link>
            <Link
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Button variant="default" className="w-full" onClick={() => setIsMenuOpen(false)}>
              Kontakt aufnehmen
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

