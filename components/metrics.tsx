'use client'

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: "AI Apps",
    metrics: [
      {
        company: "OpenMind",
        metric: "redujo el tiempo de entrenamiento en un 85%"
      },
      {
        company: "DataFlow",
        metric: "aumentó la precisión del modelo en un 40%"
      },
      {
        company: "AIScale",
        metric: "procesamiento 12x más rápido"
      }
    ],
    cta: {
      text: "Implementar AI Apps",
      description: "Despliega apps de IA en segundos"
    }
  },
  {
    name: "Web Apps",
    metrics: [
      {
        company: "TechFlow",
        metric: "tiempo de carga reducido de 5s a 0.5s"
      },
      {
        company: "WebForge",
        metric: "rendimiento mejorado en un 75%"
      },
      {
        company: "AppMaster",
        metric: "escalabilidad aumentada en 10x"
      }
    ],
    cta: {
      text: "Desplegar Web Apps",
      description: "Lanza tu aplicación web al instante"
    }
  },
  {
    name: "Ecommerce",
    metrics: [
      {
        company: "ShopTech",
        metric: "conversiones aumentadas en un 45%"
      },
      {
        company: "CartFlow",
        metric: "tasa de abandono reducida en 60%"
      },
      {
        company: "SalesPro",
        metric: "ingresos incrementados en 3x"
      }
    ],
    cta: {
      text: "Crear Tienda Online",
      description: "Comienza a vender en minutos"
    }
  },
  {
    name: "Marketing",
    metrics: [
      {
        company: "LeadGen",
        metric: "generación de leads aumentada en 200%"
      },
      {
        company: "MarketPro",
        metric: "ROI mejorado en un 150%"
      },
      {
        company: "GrowthHub",
        metric: "engagement aumentado en 5x"
      }
    ],
    cta: {
      text: "Iniciar Marketing",
      description: "Impulsa tu crecimiento ahora"
    }
  },
  {
    name: "Platforms",
    metrics: [
      {
        company: "CloudScale",
        metric: "tiempo de implementación reducido en 90%"
      },
      {
        company: "PlatformX",
        metric: "disponibilidad mejorada al 99.99%"
      },
      {
        company: "SystemPro",
        metric: "costos operativos reducidos en 70%"
      }
    ],
    cta: {
      text: "Construir Plataforma",
      description: "Escala sin límites"
    }
  }
]

const descriptions = {
  "AI Apps": "Optimiza tus aplicaciones de IA con nuestra infraestructura especializada. Reduce tiempos de entrenamiento y mejora la precisión de tus modelos con configuración zero-config.",
  "Web Apps": "Despliega aplicaciones web con rendimiento excepcional. Obtén tiempos de carga ultrarrápidos y escalabilidad automática para la mejor experiencia de usuario.",
  "Ecommerce": "Impulsa tus ventas online con nuestra plataforma optimizada para e-commerce. Mejora conversiones y reduce el abandono de carrito con experiencias de compra fluidas.",
  "Marketing": "Potencia tus campañas de marketing con análisis en tiempo real y automatización inteligente. Aumenta el ROI y mejora la generación de leads.",
  "Platforms": "Construye y escala plataformas robustas con nuestra infraestructura enterprise-grade. Obtén alta disponibilidad y rendimiento optimizado."
}

export function Metrics() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof descriptions>("AI Apps")

  const activeData = categories.find(cat => cat.name === activeCategory)

  return (
    <section className="py-24 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-black/50 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-8">
            <div>
              <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant={activeCategory === category.name ? "default" : "ghost"}
                    className={cn(
                      "rounded-full text-sm whitespace-nowrap",
                      activeCategory === category.name 
                        ? "bg-teal-500 hover:bg-teal-600 text-white" 
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    )}
                    onClick={() => setActiveCategory(category.name as keyof typeof descriptions)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8"
                >
                  <div className="grid gap-8">
                    {activeData?.metrics.map((item, index) => (
                      <motion.div
                        key={item.company}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <p className="text-2xl md:text-4xl lg:text-3xl font-medium text-white">
                          <span className="font-bold">{item.company}</span>{" "}
                          {item.metric}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 text-lg text-white/80"
                  >
                    {descriptions[activeCategory as keyof typeof descriptions]}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-start justify-center gap-4 lg:border-l lg:border-white/10 lg:pl-8"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-white">
                    {activeData?.cta.description}
                  </h3>
                  <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
                    {activeData?.cta.text} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
