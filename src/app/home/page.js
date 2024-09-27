import "./home.css";

export default function HomePage() {
  return (
    <div className="fondo">
      <h1 className="titulo" >Hotel Pacific Reef</h1>
        <h1 className="subtitulo" >Encuentra la reserva de tus sueños</h1>
      <div className="barra">
          <select>
            <option value="" disabled selected>Selecciona un tipo de habitación</option>
            <option value="simple">Habitación Simple</option>
            <option value="doble">Habitación Doble</option>
            <option value="suite">Suite</option>
          </select>
          <input type="number" placeholder="Número de personas" min="1" />
          <input type="date" placeholder="Fecha" />
          <button type="button">Buscar</button>
      </div>
      <div className="panel">
      </div>
    </div>
  )
}
