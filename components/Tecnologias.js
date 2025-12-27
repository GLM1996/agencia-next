"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function Technologies() {
  const technologies = [
    { name: "React", category: "Frontend", color: "bg-cyan-500/20 border-cyan-500/30" },
    { name: "Next.js", category: "Frontend", color: "bg-gray-500/20 border-gray-500/30" },
    { name: "Node.js", category: "Backend", color: "bg-emerald-500/20 border-emerald-500/30" },
    // { name: "Python", category: "Automatización", color: "bg-blue-500/20 border-blue-500/30" },
    // { name: "AWS", category: "Cloud", color: "bg-amber-500/20 border-amber-500/30" },
    { name: "Docker", category: "DevOps", color: "bg-blue-400/20 border-blue-400/30" },
    // { name: "Kubernetes", category: "DevOps", color: "bg-blue-600/20 border-blue-600/30" },
    { name: "PostgreSQL", category: "Database", color: "bg-blue-700/20 border-blue-700/30" },
    { name: "MongoDB", category: "Database", color: "bg-green-500/20 border-green-500/30" },
    // { name: "FastAPI", category: "Backend", color: "bg-teal-500/20 border-teal-500/30" },
    { name: "JavaScript", category: "Frontend", color: "bg-blue-500/20 border-blue-500/30" },
    { name: "Tailwind CSS", category: "Frontend", color: "bg-cyan-400/20 border-cyan-400/30" },
  ]

  const categories = ["Frontend", "Backend", "Automatización", "Cloud", "DevOps", "Database"]

  return (
    <section className="py-20 px-4 bg-linear-to-b from-gray-900 to-gray-800" id='tecnologías'>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tecnologías <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-300">que Utilizamos</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Trabajamos con las herramientas más modernas y robustas para garantizar soluciones de calidad.
          </p>
        </motion.div>

        {/* Technology Cloud */}
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className={`relative backdrop-blur-sm border rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] ${tech.color}`}>
                  <div className="text-white font-medium text-sm md:text-base">
                    {tech.name}
                  </div>
                  <div className="text-gray-400 text-xs mt-1">
                    {tech.category}
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-white/20 transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Categories Legend */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {categories.map((category, index) => (
              <div key={category} className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${
                  category === "Frontend" ? "bg-cyan-500" :
                  category === "Backend" ? "bg-emerald-500" :
                  category === "Automatización" ? "bg-blue-500" :
                  category === "Cloud" ? "bg-amber-500" :
                  category === "DevOps" ? "bg-blue-400" :
                  "bg-green-500"
                }`}></div>
                <span className="text-gray-300 text-sm">{category}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}