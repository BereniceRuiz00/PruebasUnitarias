//! Ejercicio pruebas unitarias 1

//Arreglar menor a mayor


//Crear funciones
const arregloOrdenado = (arreglo) => {
  
    nuevoArreglo = arreglo.sort(function(a, b) {
                    return a - b;
                     });
     
    return nuevoArreglo;
}

//Almacenar funciones

const operaciones = {
    arregloOrdenado,
}

//exportar
module.exports = operaciones;