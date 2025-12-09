import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ravidu Wickramaarachchi',
  description: 'Data Science undergraduate at SLIIT passionate about AI, ML, Data Analytics, and Data Engineering. Turning complex datasets into actionable insights.',
  keywords: 'portfolio, data science, machine learning, AI, data analytics, data engineering, python, tensorflow, pytorch, SLIIT',
  authors: [{ name: 'Ravidu Wickramaarachchi' }],
  openGraph: {
    title: 'Portfolio | Ravidu Wickramaarachchi',
    description: 'Data Science student passionate about AI, ML, and Data Engineering',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

