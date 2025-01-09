'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Sparkles } from 'lucide-react'
import { useState } from 'react'

export function Pricing() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const plans = [
    {
      name: "Básico",
      price: "499",
      description: "Perfecto para empresas que están comenzando",
      features: [
        "Automatización básica de leads",
        "Dashboard personalizado",
        "Soporte por email",
        "Actualizaciones mensuales",
      ],
      cta: "Comenzar ahora",
      href: "/checkout/basic"
    },
    {
      name: "Pro",
      price: "999",
      description: "Para empresas que buscan escalar rápidamente",
      features: [
        "Todo en Básico",
        "IA avanzada para leads",
        "Integraciones premium",
        "Soporte prioritario 24/7",
        "Reportes semanales"
      ],
      cta: "Actualizar a Pro",
      href: "/checkout/pro",
      featured: true
    },
    {
      name: "Enterprise",
      price: "2499",
      description: "Soluciones personalizadas para grandes empresas",
      features: [
        "Todo en Pro",
        "API personalizada",
        "Onboarding dedicado",
        "Manager de cuenta exclusivo",
        "SLA garantizado"
      ],
      cta: "Contactar ventas",
      href: "/checkout/enterprise"
    }
  ]

  return (
    <section className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-sm">
              <span className="text-teal-500">PLANES Y PRECIOS</span>
            </div>
            <h2 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Escala tu negocio con IA
            </h2>
            <p className="mt-4 text-xl text-white/80">
              Elige el plan perfecto para tus necesidades
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative rounded-xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  plan.featured ? 'ring-2 ring-teal-500' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transform: hoveredIndex === index ? 'translateY(-10px)' : 'none',
                }}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <div className="inline-flex items-center rounded-full bg-teal-500 px-4 py-1 text-sm font-medium text-white">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Más popular
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">${plan.price}</span>
                    <span className="text-white/60">/mes</span>
                  </div>
                  <p className="mt-2 text-white/80">{plan.description}</p>
                </div>

                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-white/80">
                      <Check className="h-5 w-5 text-teal-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.featured 
                      ? 'bg-teal-500 hover:bg-teal-600' 
                      : 'border-white/10 bg-white/5 hover:bg-white/10'
                  }`}
                  variant={plan.featured ? 'default' : 'outline'}
                  size="lg"
                  asChild
                >
                  <a href={plan.href}>
                    {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

