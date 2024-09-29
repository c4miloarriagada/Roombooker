import Link from 'next/link'
import { AgregarHabitacionForm } from './_components/AgregarHabitacionForm'
import { cookies } from 'next/headers'
import { isAdmin } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function RegistroHabitacionPage() {
  const cookieStore = cookies()

  const userIsAdmin = await isAdmin(cookieStore)

  if (!userIsAdmin) {
    redirect('/login')
  }
  return (
    <>
      <Link href="/admin/administrar-habitaciones" />
      <h1>Agregar Habitacion</h1>

      <AgregarHabitacionForm />
    </>
  )
}
