import TipoUsuario from '@/models/TipoUsuario'
import { RegistroUsuario } from './_components/RegistroUsuario'

import style from './page.module.css'

export default async function RegistroFuncionarioPage() {
  const tiposUsuarios = await TipoUsuario.findAll({ raw: true })

  return (
    <div className={style.formulario__container}>
      <RegistroUsuario tipoUsuarios={tiposUsuarios} />
    </div>
  )
}
