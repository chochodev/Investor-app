'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

declare global {
  interface Window {
    ethereum?: any
  }
}

export function ConnectWallet() {
  const [account, setAccount] = useState<string | null>(null)

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  async function checkIfWalletIsConnected() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' })
        if (accounts.length > 0) {
          setAccount(accounts[0])
        }
      } catch (error) {
        console.error('An error occurred while connecting to MetaMask:', error)
      }
    }
  }

  async function connectWallet() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        setAccount(accounts[0])
      } catch (error) {
        console.error('An error occurred while connecting to MetaMask:', error)
      }
    } else {
      alert('MetaMask is not installed. Please install it to use this feature.')
    }
  }

  return (
    <div>
      {account ? (
        <p>Connected: {account}</p>
      ) : (
        <Button onClick={connectWallet}>Connect MetaMask</Button>
      )}
    </div>
  )
}