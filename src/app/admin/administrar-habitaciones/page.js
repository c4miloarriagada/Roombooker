import { cookies } from 'next/headers'
import { TipoHabitacionForm } from './_components/TipoHabitacionForm'
import { isAdmin } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function AdminHabPage() {
  const response = await fetch('http://localhost:3000/api/admin/habitaciones', {
    method: 'GET',
    cache: 'no-store'
  })

  const habitaciones = await response.json()
  const cookieStore = cookies()

  const userIsAdmin = await isAdmin(cookieStore)

  if (!userIsAdmin) {
    redirect('/login')
  }
  return (
    <div>
      <h1>Tipo de Habitacion</h1>
      <TipoHabitacionForm habitacionesData={habitaciones} />
    </div>
  )
}
