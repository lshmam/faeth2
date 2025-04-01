"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { AnimatePresence, motion, useScroll } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setIsScrolled(y > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Journal", href: "/journal" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-4 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-light tracking-tight z-50">
            faeth.studio
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-neutral-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              variant="outline"
              className="rounded-full border-neutral-700 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact
            </Button>
          </div>

          <button className="md:hidden z-50 text-white" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-light hover:text-neutral-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <Button
                  variant="outline"
                  className="mt-4 rounded-full border-neutral-700 text-white hover:bg-white hover:text-black transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

