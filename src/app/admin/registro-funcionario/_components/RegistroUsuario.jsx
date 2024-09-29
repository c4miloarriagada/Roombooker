'use client'
import { ToastContainer, toast } from 'react-toastify'
import React, { useState } from 'react'
import style from './../page.module.css'
import { Button } from '@mui/material'
export const RegistroUsuario = ({ tipoUsuarios }) => {
  const [formData, setFormData] = useState({
    rut_usuario: '',
    nombre_usuario: '',
    apellido_usuario: '',
    fecha_nacimiento: '',
    correo: '',
    id_tipo_usuario: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/admin/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      console.log(response)
      if (response.ok) {
        setFormData({
          rut_usuario: '',
          nombre_usuario: '',
          apellido_usuario: '',
          fecha_nacimiento: '',
          correo: '',
          id_tipo_usuario: '',
          password: ''
        })
        toast('Usuario registrado con éxito')
      } else {
        const errorData = await response.json()
        toast('Error al registrar el usuario: ' + errorData.message)
      }
    } catch (error) {
      toast('Error en la solicitud: ' + error.message)
    }
  }
  return (
    <div>
      <h2>Modificar Datos</h2>
      <form className={style.formulario} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="rut_usuario">RUT Usuario:</label>
          <input
            type="text"
            id="rut_usuario"
            name="rut_usuario"
            value={formData.rut_usuario}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="nombre_usuario">Nombre:</label>
          <input
            type="text"
            id="nombre_usuario"
            name="nombre_usuario"
            value={formData.nombre_usuario}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="apellido_usuario">Apellido:</label>
          <input
            type="text"
            id="apellido_usuario"
            name="apellido_usuario"
            value={formData.apellido_usuario}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
          <input
            type="date"
            id="fecha_nacimiento"
            name="fecha_nacimiento"
            value={formData.fecha_nacimiento}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="correo">Correo Electrónico:</label>
          <input
            type="email"
            id="correo"
            autoComplete="off"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="id_tipo_usuario">Tipo de Usuario:</label>
          <select
            id="id_tipo_usuario"
            name="id_tipo_usuario"
            value={formData.id_tipo_usuario}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un tipo de usuario</option>
            {tipoUsuarios.map((tipo) => (
              <option key={tipo.id} value={tipo.id}>
                {tipo.nombre_tipo}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <Button variant="contained" type="submit">
            Registrar
          </Button>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}
