import { ArrowRight, BarChart, Target, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function EstrategiaDeCrecimientoPage() {
  const estrategias = [
    {
      titulo: "Análisis de Mercado con IA",
      descripcion: "Utilizamos IA avanzada para analizar tendencias del mercado y oportunidades de crecimiento.",
      icon: <BarChart className="h-8 w-8 text-teal-500" />
    },
    {
      titulo: "Optimización de Conversión",
      descripcion: "Mejoramos tus tasas de conversión utilizando algoritmos de aprendizaje automático.",
      icon: <TrendingUp className="h-8 w-8 text-teal-500" />
    },
    {
      titulo: "Segmentación de Clientes",
      descripcion: "Identificamos y segmentamos tu audiencia ideal para campañas más efectivas.",
      icon: <Target className="h-8 w-8 text-teal-500" />
    }
  ]

  return (
    <main className="pt-32 pb-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-black/50 p-8 md:p-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-6">
            Estrategia de Crecimiento Impulsada por IA
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Potencia el crecimiento de tu negocio B2B con nuestras estrategias personalizadas y basadas en datos de IA.
          </p>
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {estrategias.map((estrategia, index) => (
              <div key={index} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <div className="mb-4">{estrategia.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{estrategia.titulo}</h3>
                <p className="text-white/80">{estrategia.descripcion}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
              Consulta Gratuita <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

