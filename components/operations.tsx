'use client'

import { Bot, Target, Users, LineChart, Settings2, Gauge } from 'lucide-react'
import { AnimatedCard } from './animated-card'
import { motion } from 'framer-motion'

export function Operations() {
  const services = [
    {
      title: "Investigación de Mercado y Posicionamiento",
      description: "Descubre tu ajuste perfecto al mercado y crea ofertas convincentes que convierten.",
      icon: <Target className="h-8 w-8" />,
    },
    {
      title: "Sistemas de Automatización",
      description: "Construye sistemas escalables que trabajan 24/7 para generar y nutrir leads.",
      icon: <Bot className="h-8 w-8" />,
    },
    {
      title: "Construcción de Equipos",
      description: "Contrata y entrena a las personas adecuadas para apoyar tu negocio en crecimiento.",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Estrategia de Crecimiento",
      description: "Desarrolla y ejecuta estrategias basadas en datos para un crecimiento sostenible.",
      icon: <LineChart className="h-8 w-8" />,
    },
    {
      title: "Optimización de Procesos",
      description: "Optimiza tus operaciones para máxima eficiencia y rentabilidad.",
      icon: <Settings2 className="h-8 w-8" />,
    },
    {
      title: "Seguimiento de Rendimiento",
      description: "Monitorea y optimiza tus métricas clave para un éxito continuo.",
      icon: <Gauge className="h-8 w-8" />,
    },
  ]

  return (
    <motion.section
      className="py-24 bg-black/50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
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
            Transformamos tu negocio con soluciones de IA personalizadas y escalables
          </p>
        </motion.div>
        
        <motion.div
          className="grid gap-8 md:grid-cols-3 lg:grid-cols-3"
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <AnimatedCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
