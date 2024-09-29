"use client";

import "./home.css";
import { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link'; // Importar Link de Next.js

export default function HomePage() {
  const [habitaciones, setHabitaciones] = useState([]);

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch('/api/habitaciones', {
      method: 'POST',
      body: JSON.stringify({
        llegada: formData.get('llegada'),
        salida: formData.get('salida'),
        tipo: formData.get('tipo'),
        personas: formData.get('personas'),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    setHabitaciones(data);
  }

  return (
    <div className="fondo">
      <h1 className="titulo">Hotel Pacific Reef</h1>
      <h1 className="subtitulo">Encuentra la reserva de tus sueños</h1>

      <form onSubmit={onSubmit} className="barra">
        <select name="tipo" required>
          <option value="" disabled selected>Selecciona un tipo de habitación</option>
          <option value="simple">Habitación Simple</option>
          <option value="doble">Habitación Doble</option>
          <option value="suite">Suite</option>
        </select>

        <input type="number" name="personas" placeholder="Número de personas" min="1" required />
        <input type="date" name="llegada" required />
        <input type="date" name="salida" required />
        <button type="submit">Buscar</button>
      </form>

      <div className="panel">
        <Box
          style={{ textAlign: "center", width: '100%' }}
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 2,
          }}
        >
          {habitaciones.map((habitacion) => (
            <Card variant="outlined" sx={{ minWidth: 275 }} key={habitacion.id}>
              <CardContent>
                <img src={`/img/habitaciones/${habitacion.tipo}/${habitacion.imagenes[0]}`} alt={habitacion.tipo} />
                <Typography variant="h5" component="div">
                  {habitacion.descripcion}
                </Typography>
              </CardContent>
              <CardActions>
                {/* Link para redirigir a la página de detalles de la habitación */}
                <Link href={`/detalle/${habitacion.id}`}>
                  <Button variant="outlined" size="small">Mostrar Más</Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </Box>
      </div>
    </div>
  );
}

