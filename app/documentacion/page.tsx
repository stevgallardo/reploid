import { ArrowRight, Book, FileText, Code } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DocumentacionPage() {
  const secciones = [
    {
      titulo: "Guías de Inicio",
      descripcion: "Aprende los conceptos básicos y comienza a utilizar nuestras soluciones de IA.",
      icon: <Book className="h-8 w-8 text-teal-500" />
    },
    {
      titulo: "API Reference",
      descripcion: "Documentación detallada de nuestra API para integraciones personalizadas.",
      icon: <Code className="h-8 w-8 text-teal-500" />
    },
    {
      titulo: "Tutoriales",
      descripcion: "Guías paso a paso para implementar funcionalidades específicas.",
      icon: <FileText className="h-8 w-8 text-teal-500" />
    }
  ]

  return (
    <main className="pt-32 pb-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-black/50 p-8 md:p-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-6">
            Documentación
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Explora nuestra documentación completa para sacar el máximo provecho de las soluciones de IA de Reploid.
          </p>
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {secciones.map((seccion, index) => (
              <div key={index} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <div className="mb-4">{seccion.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{seccion.titulo}</h3>
                <p className="text-white/80">{seccion.descripcion}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
              Explorar Documentación <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

