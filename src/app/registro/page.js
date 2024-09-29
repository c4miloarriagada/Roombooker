'use client';

import { FormularioRegistro } from './_component/FormularioRegistro'
import style from './page.module.css'
import { useRouter } from 'next/navigation'

export default function RegistroPage() {

  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault()
 
    const formData = new FormData(event.target)

    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
        nombre_usuario: formData.get('nombre'),
        apellido_usuario: formData.get('apellido'),
        rut_usuario: formData.get('rut'),
        fecha_nacimiento: formData.get('fecha_nacimiento'),
        tipo_usuario: 'cliente'
      }),
    })

    const data = await response.json()

    if(data.user) {
      router.push("/login");
    }
    else {
      alert(data.error);
    }
  
  }


  return (
    <div>
      <div className="panel">
        <h1 className="titulo">hotel pacific reef</h1>

        <h2>Inicio de sesion</h2>
        <form onSubmit={onSubmit}>
          <label for="email">Email:</label><br/>
          <input type="email" id="email" name="email"/><br/>
          <label for="nombre">Nombre:</label><br/>
          <input type="text" id="nombre" name="nombre"/><br/>
          <label for="apellido">Apellido Completo:</label><br/>
          <input type="text" id="apellido" name="apellido"/><br/>
          <label for="rut">Rut:</label><br/>
          <input type="text" id="rut" name="rut"/>
          <label for="fecha_nacimiento">Fecha nacimiento:</label><br/>
          <input type="date" id="fecha_nacimiento" name="fecha_nacimiento"/>
          <label for="password">Password:</label><br/>
          <input type="password" id="password" name="password"/>
          <br/>

          <br/>
          <br/>
          <button type="submit">Registrarse</button>
        </form>
      </div>
      <div className="panel fondo"></div>
    </div>
  )
}
