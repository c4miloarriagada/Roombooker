'use client'

import { Button, TextField } from '@mui/material'
import './login.css'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'

export default function Page() {
  const router = useRouter()

  async function onSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)

    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password')
      })
    })

    const data = await response.json()

    if (data.logged) {
      router.push('/home')
    } else {
      toast(data.message)
    }
  }

  return (
    <div>
      <div className="panel">
        <h1 style={{ marginLeft: '5rem' }} className="titulo">
          Hotel Pacific Reef
        </h1>
        <div style={{ padding: '5rem' }}>
          <h2>Inicio de sesion</h2>
          <form onSubmit={onSubmit}>
            <br />
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              required={true}
            />

            <br />

            <br />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              required={true}
            />

            <br />
            <br />
            <Button variant="contained" type="Submit">
              {' '}
              Log in
            </Button>
          </form>
        </div>
        <ToastContainer />
      </div>
      <div className="panel fondo"></div>
    </div>
  )
}
