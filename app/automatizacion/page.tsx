import { ArrowRight, Bot, Cog, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AutomatizacionPage() {
  const soluciones = [
    {
      titulo: "Automatización de Procesos",
      descripcion: "Optimizamos tus flujos de trabajo con IA para aumentar la eficiencia operativa.",
      icon: <Cog className="h-8 w-8 text-teal-500" />
    },
    {
      titulo: "Chatbots Inteligentes",
      descripcion: "Implementamos asistentes virtuales para mejorar la atención al cliente 24/7.",
      icon: <Bot className="h-8 w-8 text-teal-500" />
    },
    {
      titulo: "Automatización de Marketing",
      descripcion: "Creamos campañas personalizadas y automatizadas para generar más leads.",
      icon: <Zap className="h-8 w-8 text-teal-500" />
    }
  ]

  return (
    <main className="pt-32 pb-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-black/50 p-8 md:p-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-6">
            Soluciones de Automatización con IA
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Transforma tu negocio B2B con nuestras soluciones de automatización inteligente, diseñadas para impulsar la eficiencia y el crecimiento.
          </p>
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {soluciones.map((solucion, index) => (
              <div key={index} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <div className="mb-4">{solucion.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{solucion.titulo}</h3>
                <p className="text-white/80">{solucion.descripcion}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
              Descubre Nuestras Soluciones <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

