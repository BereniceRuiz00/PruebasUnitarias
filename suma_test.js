// !Ejemplo de la funcion suma de mi calculadora

// En esta funcion suma, pasamos 2 valores como pramateros para realizar la operación.

// ?Forma normal
function suma(a,b){
    return a+b;
}

// ? Forma PRO
suma= (a,b) => a+b;

// nombrefuncion (parametros) => (que esperamos recibir)

// Forma mas omenos de felipe

const sumaEJemplo = (a,b) => {
    return a-b; //Obtenga un -2
}
sumaEJemplo(1,3); //Espero obtener un: 4

// funcion sumav2
const sumaEjemplov2 = (a,b)=>{
    return a - b
}

if(sumaEjemplov2(1,3) !=4){
    console.error("La suma de 1 y 3 deberia ser 4");
}

// funcion sumav3

const sumav3 = (a,b)=>{
    return a - b
}

console.assert(sumav3(1,3) === 4,"La suma de 1 y 3, deberia de ser 4");

//console.assert nos ayuda a mostrar un mensaje de error en la consola si la afirmacion es falsa. Si la afirmacion es verdadera, no se mostrara ningun mensaje. OJO, segun la documentacion de mozilla, esta caracteristica no esta disponible en todos los navegadores, por lo que no es recomendable usarla.


//Escenarios de prueba
const escenarios = [
    { a: 0, b: 0, resultado: 0 },
    { a: 1, b: 3, resultado: 4 },
    { a: -3, b: 3, resultado: 0 },
]

//Para cada esceneario, se recorre y de cada esceneario se recupera la a, la b y el resultado esperado, y se ejecuta la funcion sumav4 con los parametros a y b.
escenarios.forEach(revisar => {
    const { a, b, resultado } = revisar

    console.assert(
        sumav3 (a, b) === resultado,
        "La suma de " + a + " y " + b + " deberia ser " + resultado
    )
})

console.log("La cantidad de escenarios pasados es: ", escenarios.length);


