import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Torstein Vegheim – Regissør og musikkformidler',
  description:
    'Frilanser med 40+ år i NRK. Regi, konseptutvikling og rådgivning for musikkproduksjoner, dokumentarer og kulturprosjekter.',
  openGraph: {
    title: 'Torstein Vegheim – Regissør og musikkformidler',
    description: '40+ år bak kameraet i NRK. Klassisk musikk som groover.',
    locale: 'nb_NO',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
