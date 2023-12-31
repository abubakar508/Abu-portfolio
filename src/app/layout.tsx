import type { Metadata } from 'next'
import './globals.css'

//components
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'ABISMA - Portfolio',
  description: 'My skills and expertise',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=' font-montserrat overflow-x-hidden relative scrollbar-thin scroll scrollbar-track-tertiary scrollbar-thumb-accent'>
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
