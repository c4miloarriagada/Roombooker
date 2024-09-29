import Link from 'next/link'
import { AgregarHabitacionForm } from './_components/AgregarHabitacionForm'

export default async function RegistroHabitacionPage() {
  return (
    <>
      <Link href="/admin/administrar-habitaciones" />
      <h1>Agregar Habitacion</h1>
      <AgregarHabitacionForm />
    </>
  )
}
