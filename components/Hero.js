"use client"
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  const randomArray = (steps, min, max) =>
    Array.from({ length: steps }, () => Math.random() * (max - min) + min);

  useEffect(() => {
    const animateLoop = async (controls) => {
      while (true) {
        await controls.start({
          y: randomArray(7, -40, 40),
          x: randomArray(7, -20, 20),
          rotate: randomArray(7, -10, 10),
          scale: randomArray(7, 0.9, 1.1),
          opacity: randomArray(7, 0.5, 1),
          transition: { duration: 6, ease: "easeInOut" },
        });
      }
    };

    animateLoop(leftControls);
    animateLoop(rightControls);
  }, [leftControls, rightControls]);

  return (
    <section
      id="inicio"
      className="relative text-white min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(circle at center, #000000 0%, #1E40AF 100%)",
      }}
    >
      {/* Imágenes decorativas */}
      <motion.img
        src="/robot.svg"
        alt="Robot decorativo"
        className="hidden lg:block absolute left-1/6 bottom-1/4 w-48"
        animate={leftControls}
        loading="lazy"
      />
      <motion.img
        src="/n8n.svg"
        alt="n8n decorativo"
        className="hidden lg:block absolute right-1/6 top-1/4 w-48"
        animate={rightControls}
        loading="lazy"
      />

      <div className="text-center px-6 z-10 max-w-3xl">
        
        {/* ✅ H1 SEO FIJO */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold leading-tight mb-4"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-blue-600 via-white to-blue-200 bg-clip-text text-transparent">
            Desarrollador
          </span>{" "}
          Full Stack en React y Next.js
        </motion.h1>

        {/* ✅ Texto SEO real */}
        <motion.p
          className="text-base md:text-lg text-gray-200/80 max-w-2xl mx-auto mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Construyo sitios web rápidos y optimizados para SEO, desarrollo aplicaciones modernas y automatizo procesos usando Node.js, APIs e integraciones en la nube.
        </motion.p>

        {/* ✅ H2 con animación / marketing */}
        <motion.h2
          className="text-xl md:text-2xl font-semibold leading-tight"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Automatizo <br />
          <span className="text-blue-300">
            <Typewriter
              words={["procesos", "integraciones", "bots", "dashboards"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.h2>

        <motion.p
          className="mt-6 text-lg text-blue-200"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          Ahorra tiempo, reduce errores y escala tus operaciones sin esfuerzo.
        </motion.p>

        {/* Botón */}
        <motion.div
          className="mt-8 flex flex-col md:flex-row justify-center gap-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <motion.a
            href="#contacto"
            className="relative bg-gray-900 border border-gray-700 px-8 py-4 rounded-lg text-white font-medium text-lg transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] group overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/0 via-blue-900/0 to-blue-900/0 group-hover:from-blue-900/20 group-hover:via-blue-900/10 group-hover:to-blue-900/20 transition-all duration-500"></div>
            <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-20 blur-sm rounded-lg transition-opacity duration-300"></div>
            <div className="absolute inset-0 border border-white/10 rounded-lg group-hover:border-blue-400/30 transition-all duration-300"></div>

            <span className="relative tracking-wide group-hover:tracking-wider transition-all duration-300">
              Solicitar consulta
            </span>
            <span className="relative ml-2 opacity-0 group-hover:opacity-100 group-hover:ml-3 transition-all duration-300">
              →
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
