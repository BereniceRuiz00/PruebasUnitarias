/*

//* Una prueba unitaraia es un una prueba automatizada que tiene como objetivo verificar la funcionalidad de una unidad de codigo. Entendemos "unidad de codigo" como la parte mas pequeña testeable de una aplicacion, puede ser: 

    -Rutinas
    -Funciones
    -Metodos

    Ventaja de las pruebas unitarias

El escribir pruebas unitarias nos va a permitir asegurarnos que el código funciona segun lo esperado, además de encontrar errores de forma mucho mas facil y poder realizar modificaciones sin comprometer otros elementos del programa. Tambien nos permite garantiazar que cuando el codigo siga evolucionando o escalando y se implementen nuevas caracteristicas, las caracteristicas mas antiguas siguen funcionando como antes 
Las pruebas unitarias de JavaScript normalmente se ejecutan en el explorador o en el front-end, y al realizarlas debemos tener en cuenta los siguientes aspectos:

    - La caracteristica que se está probando
    - El resultado final
    - El resultado esperado

*/

// Ejemplo de una funcion básica

function promedio(cal1, cal2, cal3) {
  caliFinal = (cal1 + cal2 + cal3) / 3;
  if (caliFinal >= 6) {
    console.log("Felicidades aprobaste");
  } else {
    console.log("NO aprobaste");
  }
}

promedio(7,8,8);
/*
     Test Runner (Herramientas para hacer pruebas unitarias)

    - Mocha
    - Ava
    - Jest

Jest es un marco de pruebas de JavaScript mantenido por Facebook, y esta enfocado en la simplicidad. Funciona con proyectos que utilizan Babel, TypeScript, Node.js, React, Angular y Vue.js. su objetivo es trabajar de inmediato y sin configuracion. Estaba pensado originalmante para trabajar en el lado del cliente, pero puede ser usado en cualquier lado.


Consideraciones par auqe JEST trabaje

1. Almacenar las fucniones a testear en una constante del tipo objeto.
2. Exportar estas funciones, para que esten disponibles en cualquier lugar
3. Importar o al menos agregar la direccion de donde vienen esas funciones
 */


