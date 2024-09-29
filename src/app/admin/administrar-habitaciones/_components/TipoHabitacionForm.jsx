'use client'

import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { toast, ToastContainer } from 'react-toastify'
import { useRouter } from 'next/navigation'

export const TipoHabitacionForm = ({ habitacionesData }) => {
  const [selectedHabitacionId, setSelectedHabitacionId] = useState('')
  const [formData, setFormData] = useState({
    id_tipo_habitacion: '',
    descripcion_tipo_habitacion: '',
    precio: ''
  })
  const router = useRouter()
  const handleSelectChange = (event) => {
    const habitacionId = event.target.value
    const habitacion = habitacionesData.find(
      (hab) => hab.id_tipo_habitacion === habitacionId
    )

    if (habitacion) {
      setSelectedHabitacionId(habitacionId)
      setFormData({
        id_tipo_habitacion: habitacion.id_tipo_habitacion,
        descripcion_tipo_habitacion: habitacion.descripcion_tipo_habitacion,
        precio: habitacion.precio
      })
    }
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleClick = async () => {
    try {
      if (!selectedHabitacionId) {
        toast('Por favor, selecciona una habitación para editar.')
        return
      }

      const response = await fetch('/api/admin/habitaciones', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Error al actualizar la habitación')
      }

      const data = await response.json()

      router.refresh()
      toast.success(data.message)
    } catch (error) {
      console.error('Error al actualizar la habitación:', error)
      toast.error('Hubo un problema al actualizar la habitación.')
    }
  }

  return (
    <Box sx={{ width: '20rem', margin: '5rem auto' }}>
      <ToastContainer />

      <FormControl fullWidth margin="normal">
        <InputLabel id="select-habitacion-label">
          Seleccionar Habitación
        </InputLabel>
        <Select
          labelId="select-habitacion-label"
          id="select-habitacion"
          value={selectedHabitacionId}
          label="Seleccionar Habitación"
          onChange={handleSelectChange}
        >
          {habitacionesData.map((habitacion) => (
            <MenuItem
              key={habitacion.id_tipo_habitacion}
              value={habitacion.id_tipo_habitacion}
            >
              {`ID: ${habitacion.id_tipo_habitacion} - ${habitacion.descripcion_tipo_habitacion}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <form style={{ marginTop: '20px' }}>
        <TextField
          label="ID Tipo de Habitación"
          name="id_tipo_habitacion"
          value={formData.id_tipo_habitacion}
          onChange={handleChange}
          fullWidth
          margin="normal"
          disabled
        />

        <TextField
          label="Descripción"
          name="descripcion_tipo_habitacion"
          value={formData.descripcion_tipo_habitacion}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <TextField
          label="Precio"
          name="precio"
          type="number"
          value={formData.precio}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '20px' }}
          onClick={handleClick}
        >
          Guardar Cambios
        </Button>
      </form>
    </Box>
  )
}
