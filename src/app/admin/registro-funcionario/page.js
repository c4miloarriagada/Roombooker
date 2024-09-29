import TipoUsuario from '@/models/TipoUsuario'
import { RegistroUsuario } from './_components/RegistroUsuario'
import { isAdmin } from '@/lib/auth'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import style from './page.module.css'

export default async function RegistroFuncionarioPage() {
  const tiposUsuarios = await TipoUsuario.findAll({ raw: true })
  const cookieStore = cookies()

  const userIsAdmin = await isAdmin(cookieStore)

  if (!userIsAdmin) {
    redirect('/login')
  }
  return (
    <div className={style.formulario__container}>
      <RegistroUsuario tipoUsuarios={tiposUsuarios} />
    </div>
  )
}
