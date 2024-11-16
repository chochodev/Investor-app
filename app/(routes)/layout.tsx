import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import { LuBarChart2, LuTwitter, LuGithub, LuLinkedin } from 'react-icons/lu';
import Link from 'next/link'; 
import { Button } from '@/components/ui/button';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InvestSmart - Modern Investment Platform',
  description: 'Invest smartly with our cutting-edge platform',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-50`}>
        
        
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LuBarChart2 className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl">InvestSmart</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm hover:text-blue-600">Home</Link>
            <Link href="#" className="text-sm hover:text-blue-600">About Us</Link>
            <Link href="#" className="text-sm hover:text-blue-600">FAQs</Link>
            <Link href="#" className="text-sm hover:text-blue-600">Our Policy</Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/signin">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Register</Link>
            </Button>
          </div>
        </nav>
      </header>


        <main className="container mx-auto mt-8 px-4">
          {children}
        </main>
        
        <footer className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div className="space-y-4">
                <div className="h-8 w-8 rounded-full bg-black" />
                <p className="text-sm text-gray-500">
                  Track and manage your investments with our transparent platform.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Products</h3>
                <ul className="space-y-2">
                  <li><Link href="/investments" className="text-sm text-gray-500 hover:text-gray-900">Investments</Link></li>
                  <li><Link href="/stocks" className="text-sm text-gray-500 hover:text-gray-900">Stocks</Link></li>
                  <li><Link href="/crypto" className="text-sm text-gray-500 hover:text-gray-900">Crypto</Link></li>
                  <li><Link href="/bonds" className="text-sm text-gray-500 hover:text-gray-900">Bonds</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-sm text-gray-500 hover:text-gray-900">About</Link></li>
                  <li><Link href="/careers" className="text-sm text-gray-500 hover:text-gray-900">Careers</Link></li>
                  <li><Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col items-center justify-between border-t pt-8 md:flex-row">
              <p className="text-sm text-gray-500">© 2024 Investment Portfolio. All rights reserved.</p>
              <div className="mt-4 flex space-x-6 md:mt-0">
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  <LuTwitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  <LuGithub className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  <LuLinkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}