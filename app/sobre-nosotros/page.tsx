import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SobreNosotrosPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-black/50 p-8 md:p-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-6">
            Sobre Nosotros
          </h1>
          <p className="text-xl text-white/80 mb-8">
            En Reploid.AI, estamos dedicados a transformar el panorama empresarial B2B a través de soluciones de IA innovadoras y personalizadas. Nuestra misión es empoderar a las empresas para que alcancen su máximo potencial utilizando la tecnología más avanzada.
          </p>
          <h2 className="text-2xl font-bold text-white mb-4">Nuestra Historia</h2>
          <p className="text-lg text-white/80 mb-6">
            Fundada en 2020, Reploid.AI nació de la visión de un grupo de expertos en IA y emprendedores seriales que vieron el potencial de la inteligencia artificial para revolucionar las operaciones empresariales. Desde entonces, hemos crecido hasta convertirnos en líderes en el campo de la automatización y optimización impulsada por IA para empresas B2B.
          </p>
          <h2 className="text-2xl font-bold text-white mb-4">Nuestro Equipo</h2>
          <p className="text-lg text-white/80 mb-6">
            Contamos con un equipo diverso de ingenieros de IA, científicos de datos, estrategas de negocios y expertos en UX, todos unidos por la pasión de crear soluciones que marquen la diferencia en el mundo empresarial.
          </p>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
              Únete a Nuestro Equipo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

