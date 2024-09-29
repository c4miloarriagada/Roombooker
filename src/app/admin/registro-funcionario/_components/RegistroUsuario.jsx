'use client'
import { ToastContainer, toast } from 'react-toastify'
import React, { useState } from 'react'
import style from './../page.module.css'
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material'
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
        toast.success('Usuario registrado con éxito')
      } else {
        const errorData = await response.json()
        toast('Error al registrar el usuario: ' + errorData.message)
      }
    } catch (error) {
      toast.error('Error en la solicitud: ' + error.message)
    }
  }
  return (
    <div>
      <h2>Igresar Funcionario</h2>
      <form className={style.formulario} onSubmit={handleSubmit}>
        <TextField
          label="RUT Usuario"
          type="text"
          id="rut_usuario"
          name="rut_usuario"
          value={formData.rut_usuario}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />

        <TextField
          label="Nombre"
          type="text"
          id="nombre_usuario"
          name="nombre_usuario"
          value={formData.nombre_usuario}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />

        <TextField
          label="Apellido"
          type="text"
          id="apellido_usuario"
          name="apellido_usuario"
          value={formData.apellido_usuario}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />

        <TextField
          label="Fecha de Nacimiento"
          type="date"
          id="fecha_nacimiento"
          name="fecha_nacimiento"
          value={formData.fecha_nacimiento}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />

        <TextField
          label="Correo Electrónico"
          type="email"
          id="correo"
          autoComplete="off"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="id_tipo_usuario_label">Tipo de Usuario</InputLabel>
          <Select
            labelId="id_tipo_usuario_label"
            id="id_tipo_usuario"
            name="id_tipo_usuario"
            value={formData.id_tipo_usuario}
            onChange={handleChange}
            required
          >
            <MenuItem value="">
              <em>Seleccione un tipo de usuario</em>
            </MenuItem>
            {tipoUsuarios.map((tipo) => (
              <MenuItem key={tipo.id} value={tipo.id}>
                {tipo.nombre_tipo}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Contraseña"
          type="password"
          autoComplete="off"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />

        <div style={{ marginTop: '1rem' }}>
          <Button variant="contained" type="submit" fullWidth>
            Registrar
          </Button>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}
