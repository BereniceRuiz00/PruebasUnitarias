//importar la funcionaludad a testear *objeto

const arregloOrdenado = require('./ejercicio1');

//Empezamos con el testing

let arreglotest1 = [5,4,3];

test ('Arreglar ARREGLO', () => {
    let nuevoarreglo= [3,4,5];
    expect (arregloOrdenado.arregloOrdenado(arreglotest1)).toStrictEqual(nuevoarreglo); //true
})


test ('Arreglar ARREGLO', () => {
    let nuevoarreglo= [4,3,5];
    expect (arregloOrdenado.arregloOrdenado(arreglotest1)).toStrictEqual(nuevoarreglo); //debe salir error
})
