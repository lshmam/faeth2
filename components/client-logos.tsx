"use client"

import { motion } from "framer-motion"

export default function ClientLogos() {
  // Placeholder for client logos
  const logos = Array(6).fill(null)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
      {logos.map((_, index) => (
        <motion.div
          key={index}
          className="flex items-center justify-center h-24 bg-neutral-900 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 * index }}
        >
          <div className="text-neutral-500 font-light">Client Logo</div>
        </motion.div>
      ))}
    </div>
  )
}

