import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="pt-32 pb-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-sm">
              <span className="text-teal-500">AUTOMATIZA TU NEGOCIO</span>
            </div>
            
            <h1 className="mt-8 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl text-white">
            Potenciamos el crecimiento de tu empresa con IA, sin complicaciones.
            </h1>
            
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Encuentra la oferta <span className="italic">perfecta</span> impulsada por IA, automatiza tu adquisición de clientes y resuelve tus problemas de gestión de proyectos. Comienza con nuestra consultoría gratuita de un día y escala tu negocio B2B a 8 cifras.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
                Consultoría Gratis <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10">
                Ver precios
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

