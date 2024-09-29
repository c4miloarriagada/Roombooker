import TipoUsuario from '@/models/TipoUsuario'
import { EditUserForm } from './_components/EditUSerForm'

export default async function EditarUSuarioPage() {
  const response = await fetch('http://localhost:3000/api/admin/funcionario', {
    method: 'GET',
    cache: 'no-store'
  })

  const usuarios = await response.json()
  const tiposUsuarios = await TipoUsuario.findAll({ raw: true })

  return (
    <div>
      <h1>Editar Funcionario</h1>
      <EditUserForm users={usuarios} tipoUsuario={tiposUsuarios} />
    </div>
  )
}
