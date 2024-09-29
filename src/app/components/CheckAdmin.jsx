'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminCheck({ children }) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function checkAdmin() {
      try {
        const response = await fetch('/api/admin/checkuser')
        const data = await response.json()

        if (data.isAdmin) {
          setIsAdmin(true)
        } else {
          router.push('/login')
        }
      } catch (error) {
        console.error('Error al verificar permisos de administrador:', error)
      } finally {
        setLoading(false)
      }
    }

    checkAdmin()
  }, [router])

  if (loading) return <div>Verificando permisos...</div>

  return isAdmin ? children : null
}
