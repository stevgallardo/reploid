import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-white/5 p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            ¿Listo para escalar tu negocio B2B con IA?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Reserva una llamada de estrategia de IA gratuita hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos de crecimiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
              Reservar llamada <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10">
              Ver precios
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

