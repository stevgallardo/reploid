import { ArrowRight, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CasosDeEstudioPage() {
  const casos = [
    {
      titulo: "TechCorp Internacional",
      descripcion: "Cómo ayudamos a incrementar la eficiencia en un 300% con IA",
      industria: "Tecnología",
      resultado: "300% más eficiencia"
    },
    {
      titulo: "Logística Global S.A.",
      descripcion: "Automatización de procesos logísticos con IA predictiva",
      industria: "Logística",
      resultado: "50% reducción de costos"
    },
    {
      titulo: "ConsultingPro",
      descripcion: "Transformación digital de servicios de consultoría",
      industria: "Consultoría",
      resultado: "200% más clientes"
    }
  ]

  return (
    <main className="pt-32 pb-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-4">
            Casos de Estudio
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Descubre cómo hemos ayudado a empresas B2B a transformar sus operaciones con IA
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {casos.map((caso) => (
            <div key={caso.titulo} className="rounded-lg border border-white/10 bg-black/50 p-6 hover:border-teal-500/50 transition-colors">
              <FileText className="h-8 w-8 text-teal-500 mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">{caso.titulo}</h2>
              <p className="text-white/80 mb-4">{caso.descripcion}</p>
              <div className="flex justify-between items-center text-sm text-white/60">
                <span>{caso.industria}</span>
                <span className="text-teal-400">{caso.resultado}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
            Ver más casos <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  )
}

