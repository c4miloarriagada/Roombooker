import Link from 'next/link'
import style from './layout.module.css'
const links = [
  { url: '/admin/registro-habitacion', value: 'Registro de Habitación' },
  { url: '/admin/registro-funcionario', value: 'Gestión de Habitaciones' },
  { url: '/admin/administrar-habitaciones', value: 'Administrar Habitacion' },
  { url: '/admin/editar-usuario', value: 'Editar Usuarios' }
]
export default function AdminLayout({ children }) {
  return (
    <div className={style.admin__container}>
      <header className={style.header}>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {links.map((link) => (
            <Link
              style={{ textDecoration: 'none', color: 'white' }}
              key={link.url}
              href={link.url}
            >
              {link.value}
            </Link>
          ))}
        </div>
      </header>
      <div className={style.formulario}>
        <h1 className={style.titulo}>Hotel Pacific Reef</h1>
        {children}
      </div>{' '}
      <aside className={style.aside}>
        <div className={style.photo}></div>
      </aside>
    </div>
  )
}
