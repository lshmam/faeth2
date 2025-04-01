"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import ServiceCard from "@/components/service-card"
import ClientLogos from "@/components/client-logos"
import Footer from "@/components/footer"
import TestimonialsSlider from "@/components/testimonials-slider"

export default function Home() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.9])
  const y = useTransform(scrollY, [0, 300], [0, -50])

  const [isLoaded, setIsLoaded] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const scrollToContent = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-light tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              FAETH STUDIO
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />

      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.div style={{ opacity, scale, y }} className="max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-light tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            Elevating brands through <span className="text-neutral-400">thoughtful</span> design.
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-neutral-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            We craft digital experiences for health, wellness, and fashion brands that connect, convert, and captivate.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-neutral-700 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              View our work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          onClick={scrollToContent}
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </motion.div>
      </section>

      <div ref={scrollRef}>
        <section className="py-24 px-4 bg-neutral-950">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-5xl font-light mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Services
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="Marketing"
                description="Strategic campaigns that amplify your brand's voice and connect with your ideal audience."
                icon="Megaphone"
                delay={0.1}
              />
              <ServiceCard
                title="Web Design"
                description="Immersive digital experiences that blend aesthetics with intuitive functionality."
                icon="Palette"
                delay={0.3}
              />
              <ServiceCard
                title="Shopify Development"
                description="Custom e-commerce solutions that transform browsers into buyers."
                icon="ShoppingBag"
                delay={0.5}
              />
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-gradient-to-b from-neutral-950 to-black">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-5xl font-light mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Approach
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl md:text-3xl font-light mb-6">Minimalist. Functional. Impactful.</h3>
                <p className="text-neutral-400 mb-6">
                  We believe in the power of simplicity. Our design philosophy strips away the unnecessary to focus on
                  what truly matters: your brand's message and the user experience.
                </p>
                <p className="text-neutral-400 mb-6">
                  Every pixel, interaction, and line of code serves a purpose. We craft digital experiences that not
                  only look beautiful but drive real business results.
                </p>
                <Button variant="link" className="text-white p-0 hover:text-neutral-400 transition-colors">
                  Learn more about our process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div
                className="relative h-[400px] rounded-2xl overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image src="/placeholder.svg?height=800&width=600" alt="Design process" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-5xl font-light mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Brands We've Elevated
            </motion.h2>

            <ClientLogos />

            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/case-studies">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-neutral-700 text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  View case studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-5xl font-light mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              What Our Clients Say
            </motion.h2>

            <TestimonialsSlider />
          </div>
        </section>

        <section className="py-24 px-4 bg-neutral-950">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-5xl font-light mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Ready to transform your brand?
            </motion.h2>
            <motion.p
              className="text-xl text-neutral-400 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's create something extraordinary together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="rounded-full bg-white text-black hover:bg-neutral-200 transition-all duration-300"
              >
                Start a project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}

