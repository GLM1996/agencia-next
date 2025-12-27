"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: "¿Cuánto tiempo toma desarrollar una solución de automatización?",
            answer: "El tiempo varía según la complejidad del proyecto. Proyectos simples pueden tomar 2-4 semanas, mientras que soluciones empresariales complejas pueden requerir 2-3 meses. Incluimos un análisis detallado inicial para proporcionar estimaciones precisas."
        },
        {
            question: "¿Ofrecen soporte post-implementación?",
            answer: "Sí, todos nuestros proyectos incluyen 3 meses de soporte gratuito post-implementación. Además, ofrecemos planes de mantenimiento continuo con SLA garantizados para asegurar el funcionamiento óptimo de tu solución."
        },
        {
            question: "¿Trabajan con empresas internacionales?",
            answer: "Absolutamente. Trabajamos con clientes en todo el mundo. Utilizamos metodologías ágiles y herramientas de colaboración remota que nos permiten trabajar eficientemente con empresas de cualquier ubicación geográfica."
        },
        {
            question: "¿Qué tipo de empresas se benefician más de sus servicios?",
            answer: "Empresas de todos los tamaños y sectores pueden beneficiarse. Hemos trabajado con startups, PYMES y grandes corporaciones en sectores como logística, fintech, salud, retail y manufactura."
        },
        {
            question: "¿Cómo manejan la seguridad de los datos?",
            answer: "La seguridad es nuestra prioridad. Implementamos prácticas como encriptación end-to-end, autenticación multifactor, auditorías de seguridad regulares y cumplimiento con regulaciones como GDPR. Cada solución incluye un plan de seguridad personalizado."
        },
    ]

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-20 px-4 bg-linear-to-b from-gray-900 to-gray-800">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-blue-600 to-cyan-500 mb-6">
                        <QuestionMarkCircleIcon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Preguntas <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-300">Frecuentes</span>
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            {/* FAQ Item */}
                            <div className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]' : 'border-gray-800 hover:border-gray-700'
                                }`}>
                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-5 text-left flex justify-between items-center group"
                                >
                                    <span className={`text-lg font-medium transition-colors duration-300 ${openIndex === index ? 'text-blue-300' : 'text-white group-hover:text-blue-200'
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <ChevronDownIcon className={`w-6 h-6 transition-all duration-300 ${openIndex === index ? 'text-blue-400 rotate-180' : 'text-gray-400 group-hover:text-gray-300'
                                        }`} />
                                </button>

                                {/* Answer */}
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-5 pt-2 border-t border-gray-800">
                                                <p className="text-gray-300">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Hover Effect Line */}
                                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <p className="text-gray-300 mb-6">
                        ¿No encuentras lo que buscas?
                    </p>
                    <a
                        href="#contacto"
                        className="inline-flex items-center bg-gray-900 border border-gray-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] group"
                    >
                        <span>Contactar con un especialista</span>
                        <svg
                            className="w-5 h-5 ml-3 opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}