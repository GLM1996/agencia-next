"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  CpuChipIcon, 
  CodeBracketIcon, 
  CloudArrowUpIcon, 
  ChartBarIcon,
  CommandLineIcon,
  ServerIcon 
} from '@heroicons/react/24/outline'

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Automatización de Procesos",
      description: "Optimizamos tus flujos de trabajo mediante RPA y automatización inteligente para aumentar la productividad y reducir errores.",
      icon: <CpuChipIcon className="w-10 h-10" />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "Desarrollo Web a Medida",
      description: "Creamos aplicaciones web modernas y escalables con React, Next.js y tecnologías de vanguardia.",
      icon: <CodeBracketIcon className="w-10 h-10" />,
      color: "from-indigo-500 to-purple-400"
    },
    {
      id: 3,
      title: "Migración a la Nube",
      description: "Transferencia segura y eficiente de tus sistemas e infraestructura a plataformas cloud líderes.",
      icon: <CloudArrowUpIcon className="w-10 h-10" />,
      color: "from-emerald-500 to-teal-400"
    },
    {
      id: 4,
      title: "Análisis de Datos & BI",
      description: "Transformamos datos en insights accionables con dashboards interactivos y herramientas de business intelligence.",
      icon: <ChartBarIcon className="w-10 h-10" />,
      color: "from-amber-500 to-orange-400"
    },
    {
      id: 5,
      title: "APIs & Integraciones",
      description: "Desarrollamos APIs robustas y conectamos tus sistemas para una comunicación fluida entre plataformas.",
      icon: <CommandLineIcon className="w-10 h-10" />,
      color: "from-rose-500 to-pink-400"
    },
    {
      id: 6,
      title: "DevOps & Infraestructura",
      description: "Implementamos pipelines CI/CD, contenedores y orquestación para un despliegue continuo y confiable.",
      icon: <ServerIcon className="w-10 h-10" />,
      color: "from-violet-500 to-purple-400"
    }
  ]

  return (
    <section className="py-20 px-4 bg-linear-to-b from-gray-900 via-gray-800 to-gray-900" id='servicios'>
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
            Servicios <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Especializados</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Soluciones tecnológicas que transforman negocios. Combinamos automatización inteligente 
            con desarrollo web de última generación para impulsar tu empresa.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Card */}
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 h-full transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] overflow-hidden">
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500`}></div>
                
                {/* Top Border Glow */}
                <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                
                {/* Icon Container */}
                <div className={`mb-6 p-4 rounded-xl bg-gradient-to-br ${service.color} w-fit`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>               

                {/* Corner Accents */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-block p-px rounded-xl bg-linear-to-r from-blue-500 via-cyan-400 to-blue-500">
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Listo para transformar tu negocio?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Descubre cómo nuestras soluciones de automatización y desarrollo pueden optimizar 
                tus operaciones y potenciar tu crecimiento.
              </p>
              <a
                href="#contacto"
                className="relative inline-flex items-center bg-gray-900 border border-gray-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] group"
              >
                <span className="relative">Solicitar auditoría gratuita</span>
                <span className="ml-3 opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}