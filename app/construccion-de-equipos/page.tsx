import { ArrowRight, Users, Briefcase, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ConstruccionDeEquiposPage() {
  const servicios = [
    {
      titulo: "Reclutamiento de Talento en IA",
      descripcion: "Encontramos y atraemos a los mejores profesionales en IA para tu equipo.",
      icon: <Users className="h-8 w-8 text-teal-500" />
    },
    {
      titulo: "Desarrollo de Habilidades",
      descripcion: "Programas de capacitación personalizados para potenciar las habilidades de tu equipo en IA.",
      icon: <GraduationCap className="h-8 w-8 text-teal-500" />
    },
    {
      titulo: "Consultoría de Equipos",
      descripcion: "Asesoramos en la estructura y gestión óptima de equipos de IA.",
      icon: <Briefcase className="h-8 w-8 text-teal-500" />
    }
  ]

  return (
    <main className="pt-32 pb-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-black/50 p-8 md:p-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-6">
            Construcción de Equipos de IA
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Formamos y desarrollamos equipos de élite en IA para impulsar la innovación y el crecimiento de tu empresa B2B.
          </p>
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {servicios.map((servicio, index) => (
              <div key={index} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <div className="mb-4">{servicio.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{servicio.titulo}</h3>
                <p className="text-white/80">{servicio.descripcion}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
              Construye Tu Equipo de IA <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

