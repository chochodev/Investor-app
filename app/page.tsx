'use client'

import Image from 'next/image'
import Link from 'next/link'

export function BlockPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Welcome to InvestSmart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Secure MetaMask Integration</li>
            <li>Transparent Investment Plans</li>
            <li>Real-time Dashboard Updates</li>
            <li>Expert Financial Advisors</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Performance</h2>
          <Image src="/placeholder.svg?height=200&width=300" alt="Performance Chart" width={300} height={200} className="mx-auto" />
        </div>
      </div>
      <Link href="/signup" className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
        Get Started Now
      </Link>
    </div>
  )
}