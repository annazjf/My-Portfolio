import './globals.css'
import { Inter } from 'next/font/google'
import { MotionPreferenceProvider } from './components/MotionPreferenceProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Annabel Portfolio',
  description: 'Portfolio website showcasing data analysis and design projects',
  icons: {
    icon: {
      url: 'data:image/svg+xml;base64,' + Buffer.from(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
                fill="#FFFFFF" stroke="#020202" stroke-width="1"/>
        </svg>
      `).toString('base64'),
      sizes: '32x32',
      type: 'image/svg+xml'
    },
  },
}

export default function RootLayout({ children }) {
  const starIcon = 'data:image/svg+xml;base64,' + Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
            fill="#FFFFFF" stroke="#020202" stroke-width="1"/>
    </svg>
  `).toString('base64');

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={starIcon} type="image/svg+xml" />
        <link rel="shortcut icon" href={starIcon} type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <MotionPreferenceProvider>{children}</MotionPreferenceProvider>
      </body>
    </html>
  )
}
