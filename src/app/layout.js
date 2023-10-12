import GlobalState from '@/context'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quest',
  description: 'Made by Jindal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalState>
          <Navbar/>
          <main>
            {children}
          </main>
        </GlobalState>
      </body>
    </html>
  )
}
