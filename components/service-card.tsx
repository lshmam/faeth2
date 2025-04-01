"use client"

import { motion } from "framer-motion"
import { ArrowRight, Megaphone, Palette, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: "Megaphone" | "Palette" | "ShoppingBag"
  delay?: number
}

export default function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  const icons = {
    Megaphone: <Megaphone className="h-8 w-8" />,
    Palette: <Palette className="h-8 w-8" />,
    ShoppingBag: <ShoppingBag className="h-8 w-8" />,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="bg-neutral-900 border-neutral-800 text-white h-full flex flex-col">
        <CardHeader>
          <div className="bg-neutral-800 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            {icons[icon]}
          </div>
          <h3 className="text-xl font-medium">{title}</h3>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-neutral-400">{description}</p>
        </CardContent>
        <CardFooter>
          <Button variant="link" className="text-white p-0 hover:text-neutral-400 transition-colors">
            Learn more
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

