'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import './home.css'
import Image from 'next/image'

export default function HomePage() {
  const [habitaciones, setHabitaciones] = useState([])

  async function onSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)

    const response = await fetch('/api/habitaciones', {
      method: 'POST',
      body: JSON.stringify({
        llegada: formData.get('llegada'),
        salida: formData.get('salida')
      })
    })

    // Handle response if necessary
    const data = await response.json()
    setHabitaciones(data)
  }

  return (
    <div className="fondo">
      <h1 className="titulo">Hotel Pacific Reef</h1>
      <h1 className="subtitulo">Encuentra la reserva de tus sueños</h1>

      <form onSubmit={onSubmit}>
        <label for="llegada">Fecha llegada:</label>
        <br />
        <input type="date" id="llegada" name="llegada" />
        <br />

        <label for="salida">Fecha salida:</label>
        <br />
        <input type="date" id="salida" name="salida" />
        <br />
        <button type="submit">Buscar</button>
      </form>
      <div>
        <Box
          style={{ textAlign: 'center' }}
          sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 2
          }}
        >
          {habitaciones.map((habitacion, index) => (
            <Card key={index} variant="outlined" sx={{ minWidth: 275 }}>
              <CardContent>
                <Image
                  src={
                    '/img/habitaciones/' +
                    habitacion.tipo +
                    '/' +
                    habitacion.imagenes[0]
                  }
                  alt="habitacion"
                />
                <Typography variant="h5" component="div">
                  {habitacion.descripcion}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" size="small">
                  Mostrar Más
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </div>
    </div>
  )
}
