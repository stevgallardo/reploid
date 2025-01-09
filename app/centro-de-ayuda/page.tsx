import { ArrowRight, HelpCircle, MessageCircle, Video } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CentroDeAyudaPage() {
  const recursos = [
    {
      titulo: "Preguntas Frecuentes",
      descripcion: "Encuentra respuestas rápidas a las preguntas más comunes.",
      icon: <HelpCircle className="h-8 w-8 text-teal-500" />
    },
    {
      titulo: "Soporte en Vivo",
      descripcion: "Chatea con nuestro equipo de soporte para obtener ayuda inmediata.",
      icon: <MessageCircle className="h-8 w-8 text-teal-500" />
    },
    {
      titulo: "Tutoriales en Video",
      descripcion: "Aprende visualmente con nuestros tutoriales paso a paso.",
      icon: <Video className="h-8 w-8 text-teal-500" />
    }
  ]

  return (
    <main className="pt-32 pb-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-black/50 p-8 md:p-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-6">
            Centro de Ayuda
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Estamos aquí para ayudarte. Encuentra la asistencia que necesitas para aprovechar al máximo nuestras soluciones de IA.
          </p>
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {recursos.map((recurso, index) => (
              <div key={index} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <div className="mb-4">{recurso.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{recurso.titulo}</h3>
                <p className="text-white/80">{recurso.descripcion}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
              Obtener Ayuda <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

