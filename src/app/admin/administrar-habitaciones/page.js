import { TipoHabitacionForm } from './_components/TipoHabitacionForm'

export default async function AdminHabPage() {
  const response = await fetch('http://localhost:3000/api/admin/habitaciones', {
    method: 'GET',
    cache: 'no-store'
  })

  const habitaciones = await response.json()

  return (
    <div>
      <h1>Tipo de Habitacion</h1>
      <TipoHabitacionForm habitacionesData={habitaciones} />
    </div>
  )
}
