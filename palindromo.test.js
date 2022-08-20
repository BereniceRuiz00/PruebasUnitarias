// 3. Importar

// defino una constante con el nombre de la funcion a revisar, y de que rita la voy a sacar o consultar

// 
const palindromo = require("./palindromo");

// Con test, planeo 3 escenarios

// ? Escenario donde si sea palindromo TRUE
 test ("Palindromo", () => {
    expect(palindromo.palindromo("OSO")).toBe(true);
 });
 
 // ? Escenario donde no ingrese nada FALSE
 test ("No hay nada", () => {
    expect(palindromo.palindromo("")).toBe(false);
 });

// ? escenario donde lo que se ingrese no sea un texto o undefined FALSE
test ("Esto no es un texto", () => {
    expect(palindromo.palindromo("5")).toBe(false);
 });