import { ArrowRight, Target, TrendingUp, BarChart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function MarketingPage() {
  const estrategias = [
    {
      titulo: "Marketing Predictivo",
      descripcion: "Utilizamos IA para predecir tendencias y comportamientos de clientes.",
      icon: <TrendingUp className="h-8 w-8 text-teal-500" />
    },
    {
      titulo: "Personalización a Escala",
      descripcion: "Creamos experiencias únicas para cada cliente utilizando IA.",
      icon: <Target className="h-8 w-8 text-teal-500" />
    },
    {
      titulo: "Análisis Avanzado",
      descripcion: "Proporcionamos insights profundos para optimizar tus campañas.",
      icon: <BarChart className="h-8 w-8 text-teal-500" />
    }
  ]

  return (
    <main className="pt-32 pb-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-black/50 p-8 md:p-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-6">
            Marketing Impulsado por IA
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Revoluciona tus estrategias de marketing B2B con nuestras soluciones basadas en inteligencia artificial.
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
              Potencia Tu Marketing <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

