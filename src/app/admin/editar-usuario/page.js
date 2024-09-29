import TipoUsuario from '@/models/TipoUsuario'
import { EditUserForm } from './_components/EditUSerForm'
import { cookies } from 'next/headers'
import { isAdmin } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function EditarUSuarioPage() {
  const response = await fetch('http://localhost:3000/api/admin/funcionario', {
    method: 'GET',
    cache: 'no-store'
  })

  const usuarios = await response.json()
  const tiposUsuarios = await TipoUsuario.findAll({ raw: true })
  const cookieStore = cookies()

  const userIsAdmin = await isAdmin(cookieStore)

  if (!userIsAdmin) {
    redirect('/login')
  }
  return (
    <div>
      <h1>Editar Funcionario</h1>
      <EditUserForm users={usuarios} tipoUsuario={tiposUsuarios} />
    </div>
  )
}
