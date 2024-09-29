'use client'

import { Button, TextField } from '@mui/material'
import './registro.css'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'

export default function RegistroPage() {
  const router = useRouter()

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
      })
    })

    const data = await response.json()

    if (data.user) {
      router.push('/login')
    } else {
      toast(data.error)
    }
  }

  return (
    <div>
      <div className="panel">
        <h1 className="titulo">Hotel pacific reef</h1>

        <h2>Inicio de sesion</h2>
        <div style={{ maxWidth: '30rem' }}>
          <form onSubmit={onSubmit}>
            <TextField
              label="Email"
              type="email"
              id="email"
              name="email"
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <TextField
              label="Nombre"
              type="text"
              id="nombre"
              name="nombre"
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <TextField
              label="Apellido Completo"
              type="text"
              id="apellido"
              name="apellido"
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <TextField
              label="Rut"
              type="text"
              id="rut"
              name="rut"
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <TextField
              label="Fecha Nacimiento"
              type="date"
              id="fecha_nacimiento"
              name="fecha_nacimiento"
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
            />

            <TextField
              label="Password"
              type="password"
              id="password"
              name="password"
              variant="outlined"
              fullWidth
              margin="normal"
            />

            <Button variant="contained" type="submit" fullWidth>
              Registrarse
            </Button>
          </form>
        </div>
      </div>
      <div className="panel fondo"></div>
      <ToastContainer />
    </div>
  )
}
