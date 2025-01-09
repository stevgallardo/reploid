import { Quote } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      quote: "Trabajar con este equipo ha transformado nuestro negocio. Nuestra generación de leads ha aumentado un 300% y nuestros procesos son más eficientes que nunca.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "/placeholder.svg?height=64&width=64"
    },
    {
      quote: "Los sistemas automatizados que construyeron nos han ahorrado innumerables horas y nos han ayudado a escalar más allá de lo que creíamos posible.",
      author: "Michael Chen",
      position: "Fundador, GrowthLabs",
      image: "/placeholder.svg?height=64&width=64"
    },
    {
      quote: "Su enfoque estratégico para el crecimiento B2B no tiene comparación. Hemos visto resultados notables en solo unos meses.",
      author: "Emma Davis",
      position: "COO, ScaleUp Solutions",
      image: "/placeholder.svg?height=64&width=64"
    }
  ]

  return (
    <section className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-sm">
              <span className="text-teal-500">HISTORIAS DE ÉXITO DE CLIENTES</span>
            </div>
            <h2 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl text-white">
              Confiado por empresas B2B líderes impulsadas por IA
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <Quote className="h-8 w-8 text-teal-500 mb-4" />
                <p className="mb-6 text-lg text-white">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="rounded-full h-16 w-16"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-sm text-white/70">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

