import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer>
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-white/5 p-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="font-bold mb-4 text-white">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/sobre-nosotros" className="text-white/70 hover:text-white transition-colors">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/casos-de-estudio" className="text-white/70 hover:text-white transition-colors">
                    Casos de Estudio
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-white/70 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/carreras" className="text-white/70 hover:text-white transition-colors">
                    Carreras
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-white">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/estrategia-de-crecimiento" className="text-white/70 hover:text-white transition-colors">
                    Estrategia de Crecimiento
                  </Link>
                </li>
                <li>
                  <Link href="/automatizacion" className="text-white/70 hover:text-white transition-colors">
                    Automatización
                  </Link>
                </li>
                <li>
                  <Link href="/construccion-de-equipos" className="text-white/70 hover:text-white transition-colors">
                    Construcción de Equipos
                  </Link>
                </li>
                <li>
                  <Link href="/marketing" className="text-white/70 hover:text-white transition-colors">
                    Marketing
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-white">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/documentacion" className="text-white/70 hover:text-white transition-colors">
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link href="/centro-de-ayuda" className="text-white/70 hover:text-white transition-colors">
                    Centro de Ayuda
                  </Link>
                </li>
                <li>
                  <Link href="/politica-de-privacidad" className="text-white/70 hover:text-white transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terminos-de-servicio" className="text-white/70 hover:text-white transition-colors">
                    Términos de Servicio
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-white">Contacto</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contacto" className="text-white/70 hover:text-white transition-colors">
                    Contáctanos
                  </Link>
                </li>
                <li>
                  <Link href="/twitter" className="text-white/70 hover:text-white transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="/linkedin" className="text-white/70 hover:text-white transition-colors">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-center text-white/70">
              © {currentYear} Reploid.AI. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

