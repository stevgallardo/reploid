export function Press() {
  const logos = [
    { name: 'Digital Journal', src: '/placeholder.svg?height=30&width=150' },
    { name: 'Bloomberg', src: '/placeholder.svg?height=30&width=150' },
    { name: 'Fox News', src: '/placeholder.svg?height=30&width=150' },
    { name: 'Popular Mechanics', src: '/placeholder.svg?height=30&width=150' },
    { name: 'Yahoo Finance', src: '/placeholder.svg?height=30&width=150' },
    { name: 'Associated Press', src: '/placeholder.svg?height=30&width=150' },
  ]

  return (
    <section className="py-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-white/5 p-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 items-center justify-center">
            {logos.map((logo) => (
              <div key={logo.name} className="flex justify-center">
                <img
                  src={logo.src}
                  alt={`Logo de ${logo.name}`}
                  className="h-8 object-contain filter brightness-0 invert opacity-50 hover:opacity-75 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

