//vamos a crear un arreglo

let lenguajes = ['Java','Python','JavaScript','C++','Visual Basic','Go'];

//longitud del arreglo
let longitud = lenguajes.length;
console.log('Longitud del arreglo = ' + longitud);

//acceder al ultimo elemento del arreglo
let ultimo = lenguajes[longitud-1];

//recorrer un arreglo
lenguajes.forEach( (element, index) => {
    console.log((index+1) + '- '+element);
}); 

//agregar un elemento al final del arreglo
lenguajes.push('Php');
console.log(lenguajes);

//como eliminar el ultimo elemento del arreglo
lenguajes.pop();
console.log(lenguajes);

//agregar un elemento al inicio de un arreglo
lenguajes.unshift('C#'); 
console.log(lenguajes);

//como eliminar el primero elemento de un arreglo
lenguajes.shift();
console.log(lenguajes);

//como encontrar el indice de un elemento y mostrarlo posteriormente
let indice = lenguajes.indexOf('JavaScript');
console.log(lenguajes[indice]);

//eliminar cualquier elemento del arreglo
let indice2 = lenguajes.indexOf('C++')
let eliminados = lenguajes.splice(indice2, 2);
console.log(lenguajes);
console.log(eliminados);

//agregar un elemento dentro de un arreglo
lenguajes.splice(indice, 0, 'Visual Basic');
console.log(lenguajes); 

//como copiar un arreglo
let copia = lenguajes.slice();
copia.push('Ruby');
console.log(copia);
