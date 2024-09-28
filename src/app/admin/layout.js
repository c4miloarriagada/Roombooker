import style from './layout.module.css'

export default function AdminLayout({ children }) {
  return (
    <div className={style.admin__container}>
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
