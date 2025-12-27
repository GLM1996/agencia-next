"use client"

import React from 'react'
import { motion } from 'framer-motion'
import {
    ChatBubbleLeftRightIcon,
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    GlobeAltIcon,
    CodeBracketIcon,
    CpuChipIcon,
    RocketLaunchIcon
} from '@heroicons/react/24/outline'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const services = [
        { name: "Automatización RPA", href: "#" },
        { name: "Desarrollo Web", href: "#" },
        { name: "APIs & Integraciones", href: "#" },
        { name: "Migración Cloud", href: "#" },
        { name: "Business Intelligence", href: "#" },
        { name: "DevOps & CI/CD", href: "#" }
    ]

    const company = [
        { name: "Sobre Nosotros", href: "#" },
        { name: "Nuestro Equipo", href: "#" },
        { name: "Casos de Éxito", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Carreras", href: "#" },
        { name: "Contacto", href: "#" }
    ]

    const technologies = [
        { name: "React & Next.js", href: "#" },
        { name: "Python & FastAPI", href: "#" },
        { name: "AWS & Azure", href: "#" },
        { name: "Docker & Kubernetes", href: "#" },
        { name: "PostgreSQL & MongoDB", href: "#" },
        { name: "Tailwind CSS", href: "#" }
    ]

    const socialLinks = [
        // { name: "LinkedIn", href: "#", icon: "💼" },
        // { name: "GitHub", href: "#", icon: "🐙" },
        // { name: "Twitter", href: "#", icon: "🐦" },
        // { name: "YouTube", href: "#", icon: "📺" }
    ]

    return (
        <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 pt-16 pb-8 px-4 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.3) 2%, transparent 0%), 
                          radial-gradient(circle at 75px 75px, rgba(6, 182, 212, 0.3) 2%, transparent 0%)`,
                    backgroundSize: '100px 100px'
                }}></div>
            </div>

            {/* Top Border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="relative">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                                    <CpuChipIcon className="w-7 h-7 text-white" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full"></div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white">GLAutomation</h2>
                                <p className="text-sm text-gray-400">Innovación Digital</p>
                            </div>
                        </div>

                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Transformamos negocios mediante automatización inteligente y desarrollo web de vanguardia.
                            Soluciones tecnológicas que impulsan el crecimiento y la eficiencia.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center">
                                    <EnvelopeIcon className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Email</p>
                                    <p className="text-white">estrellaglm96@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center">
                                    <PhoneIcon className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Teléfono</p>
                                    <p className="text-white">+53 63835837</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center">
                                    <ChatBubbleLeftRightIcon className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Whatsapp</p>
                                    <p className="text-white">+53 63835837</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all duration-300">
                            <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                                <RocketLaunchIcon className="w-6 h-6 text-white" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">
                                ¿Listo para comenzar?
                            </h3>
                            <p className="text-gray-300 mb-6">
                                Agenda una consulta gratuita y descubre cómo podemos transformar tu negocio.
                            </p>

                            <a
                                href="#contacto"
                                className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center font-medium py-4 rounded-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300 group"
                            >
                                <span className="flex items-center justify-center">
                                    Solicitar consulta
                                    <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:ml-3 transition-all duration-300">🚀</span>
                                </span>
                            </a>

                            <div className="mt-8 pt-6 border-t border-gray-800">
                                <h4 className="text-white font-semibold mb-4 flex items-center">
                                    <GlobeAltIcon className="w-5 h-5 mr-2 text-blue-400" />
                                    Síguenos
                                </h4>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            className="w-12 h-12 rounded-lg bg-gray-800/50 flex items-center justify-center text-xl hover:bg-blue-600/20 hover:scale-110 transition-all duration-300 group"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span className="group-hover:scale-110 transition-transform duration-300">
                                                {social.icon}
                                            </span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <p className="text-gray-400 text-sm">
                                © {currentYear} GLAutomation. Todos los derechos reservados.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                { name: "Privacidad", href: "#" },
                                { name: "Términos", href: "#" },
                                { name: "Cookies", href: "#" },
                                { name: "Seguridad", href: "#" },
                                { name: "Aviso Legal", href: "#" }
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="text-gray-400 hover:text-blue-300 text-sm transition-colors duration-300"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        <div className="mt-4 md:mt-0">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                                <span className="text-emerald-400 text-sm font-medium">En línea</span>
                                <span className="text-gray-500 text-sm">• Soporte 24/7</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}