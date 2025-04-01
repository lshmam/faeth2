"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ServicesPage() {
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
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-neutral-400 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tailored solutions for health, wellness, and fashion brands looking to make an impact.
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-light mb-6">Marketing</h2>
              <p className="text-neutral-400 mb-4">
                Strategic campaigns that amplify your brand's voice and connect with your ideal audience.
              </p>
              <ul className="space-y-3 text-neutral-400 mb-6">
                <li>• Brand Strategy & Positioning</li>
                <li>• Social Media Management</li>
                <li>• Content Creation</li>
                <li>• Email Marketing</li>
                <li>• Influencer Partnerships</li>
              </ul>
              <Button variant="link" className="text-white p-0 hover:text-neutral-400 transition-colors">
                Learn more
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
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative h-[400px] rounded-2xl overflow-hidden md:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-light mb-6">Web Design</h2>
              <p className="text-neutral-400 mb-4">
                Immersive digital experiences that blend aesthetics with intuitive functionality.
              </p>
              <ul className="space-y-3 text-neutral-400 mb-6">
                <li>• UI/UX Design</li>
                <li>• Responsive Websites</li>
                <li>• Interactive Experiences</li>
                <li>• Design Systems</li>
                <li>• Prototyping & Testing</li>
              </ul>
              <Button variant="link" className="text-white p-0 hover:text-neutral-400 transition-colors">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-light mb-6">Shopify Development</h2>
              <p className="text-neutral-400 mb-4">Custom e-commerce solutions that transform browsers into buyers.</p>
              <ul className="space-y-3 text-neutral-400 mb-6">
                <li>• Custom Theme Development</li>
                <li>• Shopify Plus Solutions</li>
                <li>• App Integration</li>
                <li>• Performance Optimization</li>
                <li>• Conversion Rate Optimization</li>
              </ul>
              <Button variant="link" className="text-white p-0 hover:text-neutral-400 transition-colors">
                Learn more
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
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-light mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to elevate your brand?
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
    </main>
  )
}

