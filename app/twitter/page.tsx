import { ArrowRight, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function TwitterPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-black/50 p-8 md:p-12">
          <div className="flex flex-col items-center text-center">
            <Twitter className="h-16 w-16 text-teal-500 mb-6" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-4">
              Síguenos en Twitter
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              Mantente al día con las últimas actualizaciones, consejos y noticias sobre IA y automatización de negocios.
            </p>
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
              Seguir @ReploidAI <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

