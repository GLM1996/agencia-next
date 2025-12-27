"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      position: "CEO, TechSolutions Inc.",
      content: "La automatización implementada por el equipo incrementó nuestra eficiencia en un 40%. Un trabajo excepcional.",
      rating: 5,
      company: "Tech"
    },
    {
      id: 2,
      name: "Ana Martínez",
      position: "CTO, Innovatech",
      content: "Desarrollaron una plataforma que revolucionó nuestro proceso de ventas. Profesionales y entregaron antes de tiempo.",
      rating: 5,
      company: "Innovatech"
    },
    {
      id: 3,
      name: "Miguel Sánchez",
      position: "Director de Operaciones, LogisticPro",
      content: "Su solución de automatización redujo nuestros costos operativos en un 35%. Recomendados al 100%.",
      rating: 5,
      company: "Logistic"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lo que dicen <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300">nuestros clientes</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Historias de éxito y transformación digital que nos inspiran a seguir innovando.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Testimonial Card */}
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 h-full transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] group">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">"</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 italic mb-8">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                    <div className="inline-block mt-1 px-3 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { value: "98%", label: "Satisfacción Clientes" },
            { value: "150+", label: "Proyectos Completados" },
            { value: "40%", label: "Ahorro Promedio" },
            { value: "24/7", label: "Soporte" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}