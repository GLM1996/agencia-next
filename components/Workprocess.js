"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  LightBulbIcon, 
  DocumentMagnifyingGlassIcon, 
  WrenchScrewdriverIcon,
  RocketLaunchIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline'

export default function WorkProcess() {
  const steps = [
    {
      id: 1,
      title: "Descubrimiento & Análisis",
      description: "Analizamos tus necesidades y procesos actuales para identificar oportunidades de automatización.",
      icon: <DocumentMagnifyingGlassIcon className="w-8 h-8" />,
      color: "border-blue-500"
    },
    {
      id: 2,
      title: "Diseño de Solución",
      description: "Creamos una arquitectura técnica detallada y prototipos para validar el enfoque.",
      icon: <LightBulbIcon className="w-8 h-8" />,
      color: "border-purple-500"
    },
    {
      id: 3,
      title: "Desarrollo & Implementación",
      description: "Construimos la solución con metodologías ágiles y las mejores prácticas del sector.",
      icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
      color: "border-emerald-500"
    },
    {
      id: 4,
      title: "Pruebas & Optimización",
      description: "Realizamos testing exhaustivo y ajustes finos para garantizar máximo rendimiento.",
      icon: <CheckCircleIcon className="w-8 h-8" />,
      color: "border-amber-500"
    },
    {
      id: 5,
      title: "Despliegue & Soporte",
      description: "Implementamos la solución y ofrecemos soporte continuo para su mantenimiento.",
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      color: "border-cyan-500"
    }
  ]

  return (
    <section className="py-20 px-4 bg-linear-to-b from-gray-800 to-gray-900" id='procesos'>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Proceso</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Metodología probada que garantiza resultados excepcionales en cada proyecto.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-16 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-30"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Step Card */}
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center h-full transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`w-10 h-10 rounded-full bg-gray-900 border-2 ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white font-bold">
                        {step.id}
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-4 mb-6 flex justify-center">
                    <div className={`p-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border ${step.color} group-hover:scale-110 transition-all duration-300`}>
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm">
                    {step.description}
                  </p>

                  {/* Progress Dot */}
                  <div className="mt-6 flex justify-center">
                    <div className={`w-3 h-3 rounded-full ${step.color.replace('border', 'bg')} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}