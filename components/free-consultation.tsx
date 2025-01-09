import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, LightbulbIcon, TrendingUp } from 'lucide-react'

export function FreeConsultation() {
  return (
    <section className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
              Consultoría Gratuita de IA para Impulsar tus Ganancias
            </h2>
            <p className="text-xl text-white mb-8">
              Pasa un día con nuestros expertos y recibe estrategias personalizadas y prompts de IA, completamente gratis.
            </p>
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
              Reserva tu consulta gratis <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Calendar className="h-12 w-12 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Un Día Completo</h3>
              <p className="text-white/80">Dedicamos un día entero a entender y analizar tu negocio.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <LightbulbIcon className="h-12 w-12 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Estrategias Personalizadas</h3>
              <p className="text-white/80">Desarrollamos estrategias de IA adaptadas a tus necesidades específicas.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <TrendingUp className="h-12 w-12 text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Impulso de Ganancias</h3>
              <p className="text-white/80">Te mostramos cómo implementar estas estrategias para aumentar tus ingresos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

