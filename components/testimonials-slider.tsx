"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"

interface Testimonial {
  quote: string
  author: string
  position: string
  company: string
}

export default function TestimonialsSlider() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Working with faeth.studio transformed our brand. Their approach to design is both beautiful and strategic, resulting in a website that not only looks stunning but converts visitors into customers.",
      author: "Sarah Johnson",
      position: "Founder",
      company: "Bloom Wellness",
    },
    {
      quote:
        "The team at faeth.studio understood our vision from day one. Their expertise in Shopify development helped us create a seamless shopping experience that our customers love.",
      author: "Michael Chen",
      position: "CEO",
      company: "Eco Apparel",
    },
    {
      quote:
        "Our marketing campaigns have never performed better. faeth.studio's strategic approach and attention to detail have helped us connect with our audience in meaningful ways.",
      author: "Emma Rodriguez",
      position: "Marketing Director",
      company: "Pure Nutrition",
    },
    {
      quote:
        "The design process was collaborative and insightful. faeth.studio took the time to understand our brand values and translated them into a digital experience that feels authentic to who we are.",
      author: "David Kim",
      position: "Creative Director",
      company: "Mindful Living",
    },
  ]

  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 8000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="relative">
      <div className="absolute -top-12 right-0 flex space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-neutral-800 text-white hover:bg-white hover:text-black transition-all duration-300"
          onClick={prev}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-neutral-800 text-white hover:bg-white hover:text-black transition-all duration-300"
          onClick={next}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-neutral-900 p-8 md:p-12">
        <Quote className="absolute top-8 left-8 h-12 w-12 text-neutral-800 opacity-50" />

        <div className="relative min-h-[300px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="text-xl md:text-2xl font-light text-white mb-8 italic">"{testimonials[current].quote}"</p>
              <div>
                <p className="text-lg font-medium">{testimonials[current].author}</p>
                <p className="text-neutral-400">
                  {testimonials[current].position}, {testimonials[current].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`mx-1 h-2 w-2 rounded-full transition-all duration-300 ${
                index === current ? "bg-white w-6" : "bg-neutral-700"
              }`}
              onClick={() => {
                setAutoplay(false)
                setCurrent(index)
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

