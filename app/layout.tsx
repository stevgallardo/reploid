import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { PixelBackground } from '@/components/PixelBackground'; // Importa el fondo animado

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Reploid.AI - Sistemas de Crecimiento B2B',
  description: 'Construimos sistemas de crecimiento automatizados para fundadores B2B',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} min-h-screen bg-[#001219]`}>
        <PixelBackground /> {/* Fondo animado */}
        <Navbar /> {/* Barra de navegación */}
        <div className="flex flex-col items-center justify-center px-4">
          {/* Contenedor principal con ancho máximo */}
          <div className="w-full max-w-7xl">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
