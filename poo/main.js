// forma 1

import Vehiculo from "./vehiculo.js";

function ejecutar() {
  let kilometraje = document.getElementById("imp_km").value;

  let vehiculo = new Vehiculo(kilometraje);
  vehiculo.mostrar_km();
}

document.getElementById("btn_mostrar").addEventListener("click", ejecutar);

// forma 2

const mostrar_marca = () => {
  let vehiculo = new Vehiculo();
  vehiculo.marca = document.getElementById("slt-marca").value;
  vehiculo.mostrar_marca();
};
document.getElementById("btn-aceptar").addEventListener("click", mostrar_marca);
