'use client'

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LuArrowRight, LuArrowUpRight, LuShield, LuWallet } from "react-icons/lu";

export default function Component() {
  const [prices, setPrices] = useState([
    { symbol: 'BTC/USD', price: '91,054.48', change: '+4.25%', isPositive: true },
    { symbol: 'ETH/USD', price: '3,089.87', change: '+1.01%', isPositive: true },
    { symbol: 'USDT/USD', price: '1.00028', change: '+0.03%', isPositive: true },
  ])

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prices => prices.map(price => ({
        ...price,
        price: (parseFloat(price.price.replace(',', '')) + (Math.random() - 0.5) * 10).toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 5,
        }),
      })))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Price Ticker */}
      <div className="w-full bg-white border-b overflow-hidden">
        <div className="animate-ticker-slide flex gap-8 py-2 px-4">
          {prices.map((price, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <span className="font-medium">{price.symbol}</span>
              <span>${price.price}</span>
              <span className={price.isPositive ? 'text-green-500' : 'text-red-500'}>
                {price.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Manage and Grow Your Investment Portfolio
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experience the future of digital asset management. Our platform brings forth the newest
            financial instruments, focusing on the most promising digital markets.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Create Account <LuArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/50 backdrop-blur border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <LuWallet className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Wallet</h3>
              <p className="text-gray-600">
                Your assets are protected by state-of-the-art security measures and multi-signature technology.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/50 backdrop-blur border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <LuArrowUpRight className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Trading</h3>
              <p className="text-gray-600">
                Access advanced trading tools and real-time market data to make informed decisions.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/50 backdrop-blur border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-4">
                <LuShield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Asset Protection</h3>
              <p className="text-gray-600">
                Your investments are secured with institutional-grade protection and insurance coverage.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}