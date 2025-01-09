import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PoliticaDePrivacidadPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-black/50 p-8 md:p-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-6">
            Política de Privacidad
          </h1>
          <p className="text-xl text-white/80 mb-8">
            En Reploid.AI, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta política describe cómo recopilamos, usamos y protegemos tu información.
          </p>
          <div className="space-y-6 text-white/80">
            <h2 className="text-2xl font-bold text-white">1. Recopilación de Información</h2>
            <p>
              Recopilamos información que nos proporcionas directamente, así como datos sobre cómo interactúas con nuestros servicios.
            </p>
            <h2 className="text-2xl font-bold text-white">2. Uso de la Información</h2>
            <p>
              Utilizamos tu información para proporcionar, mantener y mejorar nuestros servicios, así como para desarrollar nuevos productos y características.
            </p>
            <h2 className="text-2xl font-bold text-white">3. Protección de Datos</h2>
            <p>
              Implementamos medidas de seguridad diseñadas para proteger tus datos contra accesos no autorizados y uso indebido.
            </p>
            <h2 className="text-2xl font-bold text-white">4. Compartir Información</h2>
            <p>
              No vendemos tu información personal. Compartimos datos solo en circunstancias limitadas, como con tu consentimiento o para cumplir con requisitos legales.
            </p>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
              Contactar Soporte <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

