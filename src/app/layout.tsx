import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

import './globals.css'
import '@/lib/dayjs'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Heróis Anônimos',
    default: 'Heróis Anônimos',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body
        className={twMerge(
          inter.className,
          'flex flex-col h-screen bg-slate-100',
        )}
      >
        <Providers>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
