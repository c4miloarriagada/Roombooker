'use client';

import "./login.css";

export default function Page() {
  async function onSubmit(event) {
    event.preventDefault()
 
    const formData = new FormData(event.target)

    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }
 
  return (
    <div>
      <div className="panel">
        <h1 className="titulo">hotel pacific reef</h1>

        <h2>Inicio de sesion</h2>
        <form onSubmit={onSubmit}>
          <label for="email">Email:</label><br/>
          <input type="email" id="email" name="email"/><br/>
          <label for="password">Password:</label><br/>
          <input type="password" id="password" name="password"/>
          <br/>
          <br/>
          <button type="submit">Log in</button>
        </form>
      </div>
      <div className="panel fondo"></div>
    </div>
  )
}
