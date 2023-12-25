import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

<link rel="icon" href="/favicon.ico" sizes="any" />

export const metadata: Metadata = {
  title: 'Traveler',
  description: 'Modern Next js Travel web  app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
        
      </body>
    </html>
  )
}
