"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MobileMenuButton from "@/components/Navbar/MobileMenuButton";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detectar scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) setScrolled(true);
            else setScrolled(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = ["Inicio", "Servicios", "Procesos", "Tecnologías", "Contacto"];

    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-50 ${scrolled
                ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50"
                : "bg-linear-to-b from-gray-900/95 to-transparent backdrop-blur-sm"
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative">
                {/* Logo */}
                <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300 cursor-pointer flex items-center"
                >
                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center mr-3">
                        <span className="text-white font-bold">GL</span>
                    </div>
                    <span>GLAutomation</span>
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-10 font-medium relative">
                    {navItems.map((item) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            whileHover={{ opacity: 1 }}
                            className="relative cursor-pointer opacity-80 hover:opacity-100  transition text-white group"
                        >
                            {item}
                            {/* Glowing underline */}
                            <motion.span
                                className="absolute bottom-0 left-1/2 h-0.5 bg-linear-to-r from-transparent via-blue-400 to-transparent rounded shadow-lg"
                                initial={{ width: 0, left: "50%" }}
                                whileHover={{ width: "100%", left: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                            {/* Dot indicator */}
                            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.a>
                    ))}
                </div>

                {/* CTA */}
                <motion.a
                    href="#contacto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="hidden lg:block relative bg-gray-900 border border-gray-700 px-6 py-3 cursor-pointer rounded-lg overflow-hidden group transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                >
                    <span className="relative z-10 text-white font-semibold flex items-center">
                        ¡Hablemos!
                        <svg
                            className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:ml-3 transition-all duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </span>

                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-linear-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Corner accents */}
                    {/* <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150"></div> */}
                </motion.a>

                {/* Mobile Menu Button */}
                <MobileMenuButton open={open} setOpen={setOpen} />
            </div>

            {/* Mobile Menu */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800 text-white py-6 px-6 space-y-6"
                >
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ x: 10, opacity: 1 }}
                            className="block opacity-80 hover:opacity-100 text-lg cursor-pointer flex items-center group"
                            onClick={() => setOpen(false)}
                        >
                            <div className="w-2 h-2 rounded-full bg-blue-400 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            {item}
                        </motion.a>
                    ))}

                    <motion.a
                        href="#contacto"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg cursor-pointer w-full text-center mt-4"
                        onClick={() => setOpen(false)}
                    >
                        ¡Hablemos!
                    </motion.a>
                </motion.div>
            )}

            {/* Línea inferior animada (ajustada a nueva paleta) */}
            <motion.div
                className="absolute bottom-0 left-0 h-[1px] w-full"
                style={{
                    background: "linear-gradient(90deg, transparent, #3b82f6, #06b6d4, #3b82f6, transparent)",
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{
                    scaleX: [0, 1, 0],
                    opacity: [0, 1, 0]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.5, 1]
                }}
            />

            {/* Subtle glow effect on scroll */}
            {scrolled && (
                <motion.div
                    className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                />
            )}
        </motion.nav>
    );
}