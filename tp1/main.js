import Cliente from "./cliente.js"

function ejecutar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let dni = document.getElementById("dni").value;
  
    let cliente = new Cliente(nombre,apellido,dni);
    cliente.mostrar_datos_personales()
}

document.getElementById("aceptar").addEventListener("click", ejecutar);