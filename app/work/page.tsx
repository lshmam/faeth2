"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function WorkPage() {
  const projects = [
    {
      title: "Wellness Retreat",
      category: "Web Design & Development",
      description: "A serene digital experience for a luxury wellness retreat.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Organic Skincare",
      category: "Shopify Development",
      description: "Custom e-commerce solution for a premium skincare brand.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Sustainable Fashion",
      category: "Marketing & Web Design",
      description: "Brand strategy and website for an eco-conscious fashion label.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Fitness App",
      category: "UI/UX Design",
      description: "Intuitive interface design for a health tracking application.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-light tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Work
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-neutral-400 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transformative digital experiences for forward-thinking brands.
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/case-studies/${project.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="relative h-[400px] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-neutral-400 text-sm mb-2">{project.category}</span>
                  <h3 className="text-2xl font-light mb-2 group-hover:text-neutral-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 mb-4">{project.description}</p>
                  <div className="flex items-center text-white group-hover:text-neutral-300 transition-colors">
                    <span>View case study</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
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
            Let's create something amazing together
          </motion.h2>
          <motion.p
            className="text-xl text-neutral-400 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to elevate your brand with thoughtful design?
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
    </main>
  )
}

