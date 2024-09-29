'use client'

import { useEffect, useState } from 'react'
import { redirect, useRouter } from 'next/navigation'

export default function AuthCheck({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch('/api/auth')
        const data = await response.json()

        if (data.authenticated) {
          setIsAuthenticated(true)
        } else {
          router.push('/login')
        }
      } catch (error) {
        console.error('Error al verificar la autenticación:', error)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [router])

  if (loading) return <span>Loading...</span>

  return <>{isAuthenticated ? children : null}</>
}
