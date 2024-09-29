'use client'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { IconButton } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify'
export const AgregarHabitacionForm = () => {
  const [formData, setFormData] = useState({
    descripcion_tipo_habitacion: '',
    precio: ''
  })

  const [urls, setUrls] = useState([''])

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleUrlChange = (index, event) => {
    const updatedUrls = [...urls]
    updatedUrls[index] = event.target.value
    setUrls(updatedUrls)
  }

  const addUrlField = () => {
    setUrls([...urls, ''])
  }

  const removeUrlField = (index) => {
    const updatedUrls = urls.filter((_, i) => i !== index)
    setUrls(updatedUrls)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const completeFormData = { ...formData, urls }

    try {
      const response = await fetch('/api/admin/habitaciones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(completeFormData)
      })

      if (!response.ok) {
        toast(`Error en la petición: ${response.status}`)
        return
      }

      toast.success('Tipo de habitación creado con éxito!')
      setFormData({
        descripcion_tipo_habitacion: '',
        precio: ''
      })
      setUrls([''])
    } catch (error) {
      console.error('Error al crear el tipo de habitación:', error)
      toast.error(
        'Hubo un error al crear el tipo de habitación. Por favor, intenta de nuevo.'
      )
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Descripción Tipo Habitación"
        type="text"
        id="descripcion_tipo_habitacion"
        name="descripcion_tipo_habitacion"
        value={formData.descripcion_tipo_habitacion}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />

      <TextField
        label="Precio"
        type="number"
        id="precio"
        name="precio"
        value={formData.precio}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
      />

      {urls.map((url, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1rem'
          }}
        >
          <TextField
            label={`URL ${index + 1}`}
            type="url"
            id={`url-${index}`}
            name={`url-${index}`}
            value={url}
            onChange={(event) => handleUrlChange(index, event)}
            required
            fullWidth
            margin="normal"
          />
          <IconButton
            onClick={() => removeUrlField(index)}
            aria-label="remove"
            color="secondary"
            style={{ marginLeft: '10px' }}
          ></IconButton>
        </div>
      ))}

      <Button
        variant="outlined"
        onClick={addUrlField}
        style={{ marginBottom: '1rem' }}
      >
        Agregar URL
      </Button>

      <div style={{ marginTop: '1rem' }}>
        <Button variant="contained" type="submit" fullWidth>
          Guardar
        </Button>
      </div>
      <ToastContainer />
    </form>
  )
}
