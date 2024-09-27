'use client';

import Link from "next/link";
import "./inicio.css";

export default function Page() {
  return (
    <div className="fondo">
      <h1 className="titulo">Bienvenidos</h1>

      <Link className="boton" href={"/registro"}>Sign In</Link>
      <br/>
      <Link className="boton" href={"/login"}>Log In</Link>
    </div>
  )
}
