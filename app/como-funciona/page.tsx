import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ComoFuncionaPage() {
  const pasos = [
    {
      titulo: "1. Análisis Inicial",
      descripcion: "Evaluamos tu negocio y identificamos oportunidades de automatización con IA."
    },
    {
      titulo: "2. Estrategia Personalizada",
      descripcion: "Desarrollamos una estrategia adaptada a tus necesidades específicas."
    },
    {
      titulo: "3. Implementación",
      descripcion: "Implementamos las soluciones de IA y automatizamos tus procesos clave."
    },
    {
      titulo: "4. Optimización Continua",
      descripcion: "Monitoreamos y optimizamos el rendimiento de forma continua."
    }
  ]

  return (
    <main className="pt-32 pb-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-black/50 p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-4">
              Cómo Funciona
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Un proceso simple y efectivo para transformar tu negocio con IA
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {pasos.map((paso) => (
              <div key={paso.titulo} className="flex flex-col items-center text-center p-6">
                <CheckCircle className="h-12 w-12 text-teal-500 mb-4" />
                <h2 className="text-xl font-bold text-white mb-2">{paso.titulo}</h2>
                <p className="text-white/80">{paso.descripcion}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
              Comenzar Ahora <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

