import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InvestSmart - Modern Investment Platform',
  description: 'Invest smartly with our cutting-edge platform',
}

export function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-50`}>
        <header className="bg-blue-600 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">InvestSmart</h1>
            <div className="space-x-4">
              <a href="/" className="hover:text-blue-200">Home</a>
              <a href="/signup" className="hover:text-blue-200">Sign Up</a>
              <a href="/signin" className="hover:text-blue-200">Sign In</a>
            </div>
          </nav>
        </header>
        <main className="container mx-auto mt-8 px-4">
          {children}
        </main>
        <footer className="bg-blue-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            © 2024 InvestSmart. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}