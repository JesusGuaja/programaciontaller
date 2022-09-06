
let criptos = ['Bitcoin', 'Ethereum’', 'Tether', 'BNB' , 'Cardano' , 'Dai' , 'Helium', 'Shiba Inu' , 'Tron' , 'Cronos','Solana'];

let longitud = criptos.length;
console.log('Longitud del arreglo = ' + longitud);

criptos.unshift('Stellar'); 
console.log(criptos);

let indice = criptos.indexOf('Shiba Inu');
let eliminados = criptos.splice(indice, 2);
console.log(criptos);
console.log(`Elementos eliminados: ${eliminados}`);

criptos.push('Gate');
console.log(criptos);

function imprimir() { 
    let parrafo = document.getElementById("parrafo");
    let longitud = criptos.length;
    let ultimo = criptos[longitud-1];
    let indice3 = criptos.indexOf('Helium');

    parrafo.innerHTML = `
    <b>Longitud</b> = ${longitud} <br>
    <b>Ultimo elemento</b> = ${ultimo} <br>
    <b>Elemento seleccionado</b> = ${criptos[indice3]}`  
}

document.getElementById("imprimir_btn").addEventListener("click", imprimir);



function imprimir_lista() {
    let lista = document.getElementById("lista");

    let items = []
    criptos.forEach( (element, index) => {
        //console.log((index+1) + '- '+element);
        let item = `
        <li><b>${element}</b></li>
        `
        items.push(item)
    }); 

    document.getElementById("lista").innerHTML = items.join("");
}

document.getElementById("lista_btn").addEventListener("click", imprimir_lista);

