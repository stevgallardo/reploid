'use client'

import { useState } from 'react'
import { ArrowRight, Mail, MessageSquare, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    mensaje: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío del formulario
    console.log(formData)
  }

  return (
    <main className="pt-32 pb-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-black/50 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mb-4">
                Contáctanos
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Estamos aquí para ayudarte a transformar tu negocio con IA. Contáctanos y comencemos.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-teal-500" />
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-white/80">info@reploid.ai</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-teal-500" />
                  <div>
                    <h3 className="font-semibold text-white">Teléfono</h3>
                    <p className="text-white/80">+34 900 123 456</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MessageSquare className="h-6 w-6 text-teal-500" />
                  <div>
                    <h3 className="font-semibold text-white">Chat</h3>
                    <p className="text-white/80">Disponible 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <div>
                <Input
                  placeholder="Empresa"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Mensaje"
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="bg-white/5 border-white/10 text-white min-h-[150px]"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-teal-500 hover:bg-teal-600">
                Enviar mensaje <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

