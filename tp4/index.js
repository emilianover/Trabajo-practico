console.log("Existen ", process.argv.length)
for (i = 0; i < process.argv.length; i++) {
    console.log(" #",i, " = ", process.argv[i])
}
//1)
console.log("Hola " + process.argv[2])
//2)
const readlineSync = require("readline-sync")
const json = {
    Nombre: "",
    Apellido: "",
    Edad: 0
}
const nombre = readlineSync.question("Ingrese Nombre: ")
const apellido = readlineSync.question("Ingrese Apellido: ")
const edad = readlineSync.question("Ingrese Edad: ")
json.Nombre = nombre
json.Apellido = apellido
json.Edad = edad
console.log(json)
//3)
const miLista1 = [2, "Emi", "Taza"]
const miLista2 = ["Leche", "Cafe", "Chocolate"]
function buscarElemento(pLista, pBuscar){
    console.log("Buscar: ", pBuscar, " - Posicion: ", pLista.indexOf(pBuscar))
}
buscarElemento(miLista1, "taza")
buscarElemento(miLista2, "chocolate")
//4)
const miLista = [1, 7, 9, 11]
console.log(miLista)
miLista.reverse()
console.log(" ----> ", miLista)
