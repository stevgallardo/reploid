import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function TerminosDeServicioPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-black/50 p-8 md:p-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-6">
            Términos de Servicio
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Al utilizar los servicios de Reploid.AI, aceptas cumplir con estos términos. Por favor, léelos cuidadosamente.
          </p>
          <div className="space-y-6 text-white/80">
            <h2 className="text-2xl font-bold text-white">1. Uso del Servicio</h2>
            <p>
              Debes usar nuestros servicios de acuerdo con estos términos y todas las leyes aplicables. No puedes usar nuestros servicios para actividades ilegales o no autorizadas.
            </p>

            <h2 className="text-2xl font-bold text-white">2. Cuentas de Usuario</h2>
            <p>
              Eres responsable de mantener la confidencialidad de tu cuenta y contraseña. Notifícanos inmediatamente si sospechas de cualquier uso no autorizado de tu cuenta.
            </p>
            <h2 className="text-2xl font-bold text-white">3. Propiedad Intelectual</h2>
            <p>
              Todo el contenido y software asociado con nuestros servicios está protegido por derechos de autor y otras leyes de propiedad intelectual.
            </p>
            <h2 className="text-2xl font-bold text-white">4. Limitación de Responsabilidad</h2>
            <p>
              No somos responsables de daños indirectos, incidentales, especiales, consecuentes o punitivos, o de cualquier pérdida de beneficios o ingresos.
            </p>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
              Aceptar Términos <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
  }

