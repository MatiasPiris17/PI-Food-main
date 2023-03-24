//----------------------->Formulario para crear una nueva receta<-----------------------
//----------->DESCRIPCION<-----------------------
//debe ser controlado completamente con JavaScritp
// Debe contar con los siguientes campos:
// Nombre.
// Resumen del plato.
// Nivel de comida saludable (health score).
// Paso a paso.
// Imagen.
// Posibilidad de seleccionar/agregar varios tipos de dieta en simultáneo.
// Botón para crear la receta.
import React from "react";
import { Link } from "react-router-dom";

export default function Form() {
  return (
    <div>
      <h1>Sitio para crear Recetas</h1>
      <div>
        <Link to="/home">
          <button>HOME</button>
        </Link>
      </div>
    </div>
  );
}
