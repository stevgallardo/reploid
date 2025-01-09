import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CarrerasPage() {
  const posiciones = [
    {
      titulo: "Ingeniero de IA Senior",
      departamento: "Ingeniería",
      ubicacion: "Madrid, España",
      tipo: "Tiempo Completo"
    },
    {
      titulo: "Científico de Datos",
      departamento: "Análisis",
      ubicacion: "Remoto",
      tipo: "Tiempo Completo"
    },
    {
      titulo: "Gerente de Producto",
      departamento: "Producto",
      ubicacion: "Barcelona, España",
      tipo: "Tiempo Completo"
    },
    {
      titulo: "Especialista en Marketing de Contenidos",
      departamento: "Marketing",
      ubicacion: "Remoto",
      tipo: "Medio Tiempo"
    }
  ]

  return (
    <main className="pt-32 pb-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-black/50 p-8 md:p-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-6">
            Carreras en Reploid.AI
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Únete a nuestro equipo y ayúdanos a construir el futuro de la IA en el mundo empresarial. Estamos buscando mentes brillantes y apasionadas para impulsar la innovación.
          </p>
          <h2 className="text-2xl font-bold text-white mb-4">Posiciones Abiertas</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {posiciones.map((posicion, index) => (
              <div key={index} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{posicion.titulo}</h3>
                <p className="text-white/80 mb-4">{posicion.departamento}</p>
                <div className="flex justify-between text-sm text-white/60">
                  <span>{posicion.ubicacion}</span>
                  <span>{posicion.tipo}</span>
                </div>
                <Button className="mt-4 w-full bg-teal-500 hover:bg-teal-600">
                  Aplicar Ahora
                </Button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
              Ver Todas las Posiciones <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

