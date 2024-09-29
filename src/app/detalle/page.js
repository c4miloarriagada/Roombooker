'use client';

import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel'; // Alternativa para BedIcon
import ShowerIcon from '@mui/icons-material/Shower';
import BalconyIcon from '@mui/icons-material/Balcony';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AlarmIcon from '@mui/icons-material/Alarm';
import HouseIcon from '@mui/icons-material/House';
import './detalle.css';

const DetallePage = () => {
  return (
    <div className="container">
      <Box className="header">
        <Typography variant="h4" component="div">
        <HouseIcon /> Detalle de habitación
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography className="description" variant="h6" component="div">
            Habitación doble deluxe
          </Typography>
          <div className="image-container">
            <img
              src="https://hotelfarolopesancollection.com/wp-content/webp-express/webp-images/uploads/habitacion-doble-deluxe-01-1-1920x800.jpg.webp"
              alt="Habitación Doble Deluxe"
            />
          </div>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card variant="outlined" className="card">
            <CardContent className="card-content">
              <Typography variant="body2" color="text.secondary">
                Toda la noche en el spa solo para ti y tu pareja. Una experiencia privada nocturna en la piscina de hidromasaje del Spa de 23:00h a 9:00h con alojamiento en Habitación Doble Deluxe.
                Nuestra Habitación Deluxe tiene acceso directo y privado a la zona de agua del Spa, donde disfrutarás de nuestra piscina de 52m2...
              </Typography>

              <Typography variant="caption" display="block" sx={{ mt: 2 }}>
                (En este alojamiento no se aceptan mascotas)
              </Typography>

              <Box sx={{ mt: 2 }}>
                <Typography variant="body2"><HotelIcon /> Cama 180 cm</Typography>
                <Typography variant="body2"><ShowerIcon /> Baño con ducha</Typography>
                <Typography variant="body2"><BalconyIcon /> Terraza</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box className="include-section">
        <Typography variant="h5" component="div">
          Incluye
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card variant="outlined" className="include-card">
              <CardContent>
                <Typography variant="h6" component="div">
                  <FreeBreakfastIcon /> Desayuno incluido
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Disfruta de la mejor comida y comienza el día en nuestro buffet con todo tipo de comidas y apta para todo tipo de dieta.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card variant="outlined" className="include-card">
              <CardContent>
                <Typography variant="h6" component="div">
                  <CheckCircleIcon /> Check-in automático
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Obtén la mejor experiencia posible y realiza tu check-in a tu modo, no tendrás que esperar o interactuar si así lo deseas.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card variant="outlined" className="include-card">
              <CardContent>
                <Typography variant="h6" component="div">
                  <AlarmIcon /> Atención 24 hrs
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  No te preocupes si tienes algún problema en medio de la noche, en Hotel Pacific Reef siempre habrá alguien en recepción para ayudarte.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DetallePage;
