'use client'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export const EditUserForm = ({ users, tipoUsuario }) => {
  const [selectedRut, setSelectedRut] = useState('')
  const router = useRouter()
  const [formData, setFormData] = useState({
    rut_usuario: '',
    nombre_usuario: '',
    apellido_usuario: '',
    fecha_nacimiento: '',
    correo: '',
    id_tipo_usuario: ''
  })

  const handleSelectChange = (event) => {
    const selectedRut = event.target.value
    const user = users.find((user) => user.rut_usuario === selectedRut)

    if (user) {
      setSelectedRut(selectedRut)
      setFormData({
        rut_usuario: user.rut_usuario,
        nombre_usuario: user.nombre_usuario,
        apellido_usuario: user.apellido_usuario,
        fecha_nacimiento: user.fecha_nacimiento.split('T')[0],
        correo: user.correo,
        id_tipo_usuario: user.id_tipo_usuario
      })
    }
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch('/api/admin/funcionario', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Error al actualizar el usuario')
      }

      const data = await response.json()

      toast.success(
        data.message || 'Datos del usuario actualizados correctamente.'
      )
      router.refresh()
    } catch (error) {
      toast.error(`Hubo un problema al actualizar el usuario: ${error.message}`)
    }
  }

  return (
    <Box sx={{ width: '600px', margin: '5rem auto' }}>
      <ToastContainer />

      <FormControl fullWidth margin="normal">
        <InputLabel id="select-user-label">Seleccionar Usuario</InputLabel>
        <Select
          labelId="select-user-label"
          id="select-user"
          value={selectedRut}
          label="Seleccionar Usuario"
          onChange={handleSelectChange}
        >
          {users.map((user) => (
            <MenuItem key={user.rut_usuario} value={user.rut_usuario}>
              {`${user.nombre_usuario} ${user.apellido_usuario} (RUT: ${user.rut_usuario})`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <form onSubmit={handleSubmit}>
        <TextField
          label="RUT Usuario"
          name="rut_usuario"
          value={formData.rut_usuario}
          onChange={handleChange}
          fullWidth
          margin="normal"
          disabled
        />

        <TextField
          label="Nombre"
          name="nombre_usuario"
          value={formData.nombre_usuario}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Apellido"
          name="apellido_usuario"
          value={formData.apellido_usuario}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Correo Electrónico"
          name="correo"
          type="email"
          value={formData.correo}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Fecha de Nacimiento"
          name="fecha_nacimiento"
          type="date"
          value={formData.fecha_nacimiento}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="tipo-usuario-label">Tipo de Usuario</InputLabel>
          <Select
            labelId="tipo-usuario-label"
            id="tipo-usuario"
            name="id_tipo_usuario"
            value={formData.id_tipo_usuario}
            label="Tipo de Usuario"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Seleccione un tipo de usuario</em>
            </MenuItem>
            {tipoUsuario.map((tipo) => (
              <MenuItem key={tipo.id} value={tipo.id}>
                {tipo.nombre_tipo}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="contained"
          type="submit"
          color="primary"
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Guardar Cambios
        </Button>
      </form>
    </Box>
  )
}
