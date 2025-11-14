import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/lib/theme/ThemeProvider'
import { Header } from '@/components/common/Header'
import { Footer } from '@/components/common/Footer'
import { ScrollToTop } from '@/components/common/ScrollToTop'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lençol de Seda - Quartos e Acompanhantes de Luxo',
  description: 'Plataforma premium para aluguel de quartos e serviços exclusivos',
  icons: {
    icon: [
      { url: '/images/batatais-secret-favicon.jpeg', type: 'image/jpeg' },
      { url: '/images/batatais-secret-favicon.jpeg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/images/batatais-secret-favicon.jpeg', sizes: '16x16', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/images/batatais-secret-favicon.jpeg', sizes: '180x180', type: 'image/jpeg' },
    ],
    shortcut: '/images/batatais-secret-favicon.jpeg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main style={{ minHeight: 'calc(100vh - 200px)' }}>
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}

