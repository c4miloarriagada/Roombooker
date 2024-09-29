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
import { TextField } from '@mui/material'

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

    const data = await response.json()
    setHabitaciones(data)
  }

  return (
    <div className="fondo">
      <h1 className="titulo">Hotel Pacific Reef</h1>
      <h1 className="subtitulo">Encuentra la reserva de tus sueños</h1>

      <form
        style={{
          maxWidth: '20rem',
          backgroundColor: '#ffff',
          padding: '0.6rem',
          borderRadius: '0.3rem'
        }}
        onSubmit={onSubmit}
      >
        <TextField
          label="Fecha llegada"
          type="date"
          id="llegada"
          name="llegada"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />

        <TextField
          label="Fecha salida"
          type="date"
          id="salida"
          name="salida"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />

        <Button variant="contained" type="submit" fullWidth>
          Buscar
        </Button>
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
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {habitaciones.map((habitacion, index) => (
              <Card key={index} variant="outlined" sx={{ minWidth: 275 }}>
                <CardContent>
                  <Image
                    src={habitacion.imagenes[0]}
                    width={100}
                    height={100}
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
          </div>
        </Box>
      </div>
    </div>
  )
}
