export default class Ventas {

    constructor(productos_definitivos){
        this.productos_totales = []
        productos_definitivos.forEach( (element) => {
            
            let item = `
            <div class="col-lg-3">
            <div class="card">
            <img height="350" src="${element.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.price}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
            </div>
            </div>
            </div>
            `
            this.productos_totales.push(item);
        });

        
    }

    enviar() {
        document.getElementById("cuerpo").innerHTML = this.productos_totales.join('');
    }

}

