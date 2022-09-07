let numero = [1, 4, 2, 3];

let resultado = numero.reduce( (valorAnterior, valorActual)=> {
    return valorAnterior + valorActual
});

console.log(resultado);

//primer llamada o pasada
valorAnterior = 0; valorActual = 1;

//segunda llamada o pasada
valorAnterior = 1; valorActual = 2;