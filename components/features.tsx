'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Bot, Gauge, LineChart, Settings2, Target, Users } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Target,
      title: "Investigación de Mercado y Posicionamiento",
      description: "Descubre tu ajuste perfecto al mercado y crea ofertas convincentes que convierten."
    },
    {
      icon: Bot,
      title: "Sistemas de Automatización",
      description: "Construye sistemas escalables que trabajan 24/7 para generar y nutrir leads."
    },
    {
      icon: Users,
      title: "Construcción de Equipos",
      description: "Contrata y entrena a las personas adecuadas para apoyar tu negocio en crecimiento."
    },
    {
      icon: LineChart,
      title: "Estrategia de Crecimiento",
      description: "Desarrolla y ejecuta estrategias basadas en datos para un crecimiento sostenible."
    },
    {
      icon: Settings2,
      title: "Optimización de Procesos",
      description: "Optimiza tus operaciones para máxima eficiencia y rentabilidad."
    },
    {
      icon: Gauge,
      title: "Seguimiento de Rendimiento",
      description: "Monitorea y optimiza tus métricas clave para un éxito continuo."
    }
  ]

  return (
    <motion.section
      className="py-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Small Blue Text */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-teal-400 font-semibold uppercase tracking-wide">
          características
          </p>
        </motion.div>

        {/* Title Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
            Una mejor manera de optimizar operaciones impulsadas por IA
          </h2>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
          Transformamos tu negocio con soluciones de IA personalizadas y escalables.
          </p>
        </motion.div>

        {/* Grid of Features */}
        <motion.div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] hover:scale-105"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-5 w-5 text-teal-500" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
