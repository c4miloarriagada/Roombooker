'use client';

import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, Button, Card, CardContent } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import './checkout.css'; // Import the CSS file for styling
import { useRouter } from 'next/navigation';

const CheckoutPage = () => {

  const router = useRouter();
  const [promoCode, setPromoCode] = useState('');

  const handlePromoChange = (e) => {
    setPromoCode(e.target.value);
  };

  return (
    <div className="payment-container">
      <Grid container spacing={3}>
        {/* Payment Form */}
        <Grid item xs={12} md={8}>
          <Box className="payment-form">
            <Typography variant="h4" className="title">
              Realicemos el pago
            </Typography>
            <Typography variant="body1" className="subtitle">
              Para realizar la confirmación de reserva, por favor ingrese los detalles de su tarjeta. Será redireccionado a su banco para confirmar el pago.
              Finalmente, recibirá un correo de confirmación de reserva.
            </Typography>

            {/* Cardholder Name */}
            <TextField
              fullWidth
              label="Nombre del titular"
              value="PAULINA CHIMAROKE"
              className="input-field"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              margin="normal"
            />

            {/* Card Number */}
            <TextField
              fullWidth
              label="Número de tarjeta"
              value="9870 3456 7890 6473"
              className="input-field"
              InputProps={{
                readOnly: true,
                startAdornment: <CreditCardIcon className="credit-icon" />,
              }}
              variant="outlined"
              margin="normal"
            />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                {/* Expiration Date */}
                <TextField
                  fullWidth
                  label="Fecha de caducidad"
                  value="03 / 25"
                  className="input-field"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={6}>
                {/* CVV */}
                <TextField
                  fullWidth
                  label="CVV"
                  value="654"
                  className="input-field"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
            </Grid>

            {/* Promo Code */}
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  label="Código de descuento"
                  value={promoCode}
                  onChange={handlePromoChange}
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained" className="apply-button" onClick={() => router.push('/home')}>
                  Aplicar
                </Button>
              </Grid>
            </Grid>

            <Button fullWidth variant="contained" className="pay-button">
              Pagar
            </Button>
          </Box>
        </Grid>

        {/* Purchase Summary */}
        <Grid item xs={12} md={4}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h5" className="summary-title">
                Detalle de su compra
              </Typography>

              <Typography variant="h3" className="summary-amount">
                $20.000
              </Typography>

              <Typography variant="body2" className="summary-item">
                HABITACIÓN DOBLE VIP
              </Typography>
              <Typography variant="body2" className="summary-item">
                1 DÍA
              </Typography>
              <Typography variant="body2" className="summary-item">
                19/09/2024 - 20/09/2024
              </Typography>

              <Box className="summary-breakdown">
                <Typography variant="body2" className="summary-item">
                  Descuentos y ofertas: $0.00
                </Typography>
                <Typography variant="body2" className="summary-item">
                  Tax: $0.00
                </Typography>
                <Typography variant="body2" className="summary-item">
                  Total: $20.000
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};


export default CheckoutPage;