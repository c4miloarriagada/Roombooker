'use client';

import React from 'react';
import { Box, Typography, Grid, TextField, Button, Card, CardContent } from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import WifiIcon from '@mui/icons-material/Wifi';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import './reserva.css';

const ReservaPage = () => {
  return (
    <div className="reservation-container">
      <Typography variant="h2" className="hotel-title">
        HOTEL PACIFIC REEF
      </Typography>

      <Card className="room-info-card">
        <CardContent>
          <Typography variant="h5" className="room-title">
            <HotelIcon /> Habitación Doble Deluxe
          </Typography>

          <Typography variant="body1" className="room-details">
            240m2
          </Typography>

          <ul className="room-features">
            <li><HotelIcon /> 2 huéspedes</li>
            <li><HotelIcon /> 1 cama KING</li>
            <li><BathtubIcon /> Baño privado</li>
            <li><RestaurantIcon /> Desayuno incluido</li>
            <li><WifiIcon /> Wifi</li>
          </ul>

          <Typography variant="h6" className="room-price">
            $20.000 / por noche
          </Typography>

          <Typography variant="body2" className="reservation-dates">
            Fechas de la reserva: <strong>19/09/2024 - 20/09/2024</strong>
          </Typography>

          <Typography variant="h6" className="total-price">
            $20.000 TOTAL
          </Typography>
        </CardContent>
      </Card>

      <Box className="customer-info">
        <Typography variant="h5" className="section-title">
          Datos de los clientes
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Cliente 1</Typography>
            <TextField
              fullWidth
              label="Nombre completo"
              defaultValue="Camilo Arriagada"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Correo"
              defaultValue="newuser@gmail.com"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Número de celular"
              defaultValue="+569 12564728"
              margin="normal"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6">Cliente 2</Typography>
            <TextField
              fullWidth
              label="Nombre completo"
              defaultValue="Makoto Azúa"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Correo"
              defaultValue="lalala@gmail.com"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Número de celular"
              defaultValue="+569 84758497"
              margin="normal"
            />
          </Grid>
        </Grid>

        <Button variant="contained" className="payment-button">
          Ir al portal de pagos
        </Button>
      </Box>
    </div>
  );
};

export default ReservaPage;
