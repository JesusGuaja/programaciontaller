import Pitagoras from "./pitagoras.js"

function ejecutar() {
    let opuesto = document.getElementById("opuesto").value;
    let adyasente = document.getElementById("adyasente").value;
  
    let pitagoras = new Pitagoras(opuesto, adyasente);
    pitagoras.mostrar_resultado()
}

document.getElementById("aceptar").addEventListener("click", ejecutar);