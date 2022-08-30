import Ventas from "./ventas.js"

const ventas = async () => {

    const productos = await fetch(`https://fakestoreapi.com/products${document.getElementById("slt_operar").value}`);
    const productos_definitivos = await productos.json();

    let ventas = new Ventas(productos_definitivos);
    ventas.enviar()
}

document.getElementById("slt_operar").addEventListener("change", ventas);

