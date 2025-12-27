"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  // Genera un array de keyframes aleatorios
  const randomArray = (steps, min, max) => Array.from({ length: steps }, () =>
    Math.random() * (max - min) + min
  );

  useEffect(() => {
    const animateLeft = async () => {
      while (true) {
        await leftControls.start({
          y: randomArray(7, -40, 40),
          x: randomArray(7, -20, 20),
          rotate: randomArray(7, -10, 10),
          scale: randomArray(7, 0.9, 1.1),
          opacity: randomArray(7, 0.5, 1),
          transition: { duration: 6, ease: 'easeInOut' }
        });
      }
    };
    const animateRight = async () => {
      while (true) {
        await rightControls.start({
          y: randomArray(7, -40, 40),
          x: randomArray(7, -20, 20),
          rotate: randomArray(7, -10, 10),
          scale: randomArray(7, 0.9, 1.1),
          opacity: randomArray(7, 0.5, 1),
          transition: { duration: 6, ease: 'easeInOut' }
        });
      }
    };
    animateLeft();
    animateRight();
  }, [leftControls, rightControls]);

  return (
    <section
      className="relative text-white min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(circle at center, #000000 0%, #1E40AF 100%)",
      }} id='inicio'  >
      {/* Imagen izquierda */}
      <motion.img
        src="/robot.svg"
        alt="Decorative left"
        className="hidden lg:block absolute left-1/6 bottom-1/4 w-48"
        animate={leftControls}
      />

      {/* Imagen derecha */}
      <motion.img
        src="/n8n.svg"
        alt="Decorative right"
        className="hidden lg:block absolute right-1/6 top-1/4 w-48"
        animate={rightControls}
      />

      <div className="text-center px-6 z-10">
        {/* Título con animación y texto que cambia */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold leading-tight"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Automatizo <br />
          <span className="text-blue-400">
            <Typewriter
              words={['procesos', 'integraciones', 'bots', 'dashboards']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="mt-6 text-lg text-blue-200"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        >
          Ahorra tiempo, reduce errores y escala tus operaciones sin esfuerzo.
        </motion.p>

        {/* Botones */}
        <motion.div
          className="mt-8 flex flex-col md:flex-row justify-center gap-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        >
          {/* Botón Principal - Solicitar consulta */}
          <motion.a
            href="#contacto"
            className="relative bg-gray-900 border border-gray-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] group overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Fondo con gradiente sutil al hacer hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/0 via-blue-900/0 to-blue-900/0 group-hover:from-blue-900/20 group-hover:via-blue-900/10 group-hover:to-blue-900/20 transition-all duration-500"></div>

            {/* Resplandor azul en el borde */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-20 blur-sm rounded-lg transition-opacity duration-300"></div>

            {/* Borde blanco/azul */}
            <div className="absolute inset-0 border border-white/10 rounded-lg group-hover:border-blue-400/30 transition-all duration-300"></div>

            {/* Texto con efecto sutil */}
            <span className="relative tracking-wide group-hover:tracking-wider transition-all duration-300">
              Solicitar consulta
            </span>

            {/* Flecha sutil */}
            <span className="relative ml-2 opacity-0 group-hover:opacity-100 group-hover:ml-3 transition-all duration-300">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
