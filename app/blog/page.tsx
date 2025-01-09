import { ArrowRight, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function BlogPage() {
  const posts = [
    {
      titulo: "El Futuro de la IA en los Negocios B2B",
      resumen: "Descubre las tendencias más importantes en IA para empresas B2B en 2024.",
      fecha: "23 Dic 2023",
      categoria: "Tendencias"
    },
    {
      titulo: "Guía de Automatización para Startups",
      resumen: "Aprende cómo implementar automatización en tu startup de manera efectiva.",
      fecha: "20 Dic 2023",
      categoria: "Guías"
    },
    {
      titulo: "Mejores Prácticas en IA para Ventas B2B",
      resumen: "Optimiza tu proceso de ventas B2B con estas estrategias de IA.",
      fecha: "18 Dic 2023",
      categoria: "Ventas"
    }
  ]

  return (
    <main className="pt-32 pb-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Insights y actualizaciones sobre IA, automatización y crecimiento B2B
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link href="#" key={post.titulo}>
              <div className="rounded-lg border border-white/10 bg-black/50 p-6 hover:border-teal-500/50 transition-colors">
                <div className="flex items-center gap-2 text-sm text-white/60 mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{post.fecha}</span>
                  <span className="text-teal-400">{post.categoria}</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{post.titulo}</h2>
                <p className="text-white/80 mb-4">{post.resumen}</p>
                <Button variant="link" className="text-teal-400 p-0 hover:text-teal-300">
                  Leer más <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
            Ver todos los artículos <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  )
}

