import { Inter } from 'next/font/google'
import { ThemeProvider } from '../components/ThemeProvider'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://techardent.com'),
  title: {
    default: 'TechArdent - Building the Future of Technology',
    template: '%s | TechArdent'
  },
  description: 'TechArdent is a leading technology company building innovative solutions for modern businesses. We specialize in cloud platforms, API development, and enterprise solutions.',
  keywords: ['technology', 'cloud platform', 'API development', 'enterprise solutions', 'innovation', 'software development'],
  authors: [{ name: 'TechArdent Team' }],
  creator: 'TechArdent',
  publisher: 'TechArdent',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techardent.com',
    siteName: 'TechArdent',
    title: 'TechArdent - Building the Future of Technology',
    description: 'Leading technology company building innovative solutions for modern businesses.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TechArdent - Technology Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechArdent - Building the Future of Technology',
    description: 'Leading technology company building innovative solutions for modern businesses.',
    images: ['/images/twitter-image.jpg'],
    creator: '@techardent',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    bing: 'your-bing-verification',
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
