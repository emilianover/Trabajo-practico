//1)
const readlineSync = require("readline-sync")
const palabra = readlineSync.question("escriba una palabra:")
for (n = 0 ; n < 10 ; n++){
    console.log(palabra)
}
//2)
const edad = readlineSync.question("ingrese edad: ")
function printEdad(pEdad) {
    for (i = 0; i < pEdad;) {
        console.log("Edad # ", ++i)
    }
}
printEdad(edad);
//3)
const esNumeroPar = (x) => (~~x === x) 
const esNumeroImpar = (pNum) => (pNum % 2)
function print(pNum){
    let numeros = ""
    for (i = 0; i < pNum; i++){
        if(i === 1){
            numeros = 1
        }
        else if (esNumeroImpar(i)){
            numeros = numeros + "," + i
        
        }
      else { }
    }  
    return numeros
}   
const num = readlineSync.question("ingrese un numero par positivo: ")
if(esNumeroPar(num)){
    console.log("el numero no es par")
}
else if (num < 0){
    console.log("El numero no es positivo")
}
else {
    console.log(print(num))
}
//4)
const numEntero = readlineSync.question("Ingrese un numero entero: ")

function printTriangulo(pNum){
    for (i = 0; i < pNum;){
        console.log("*".repeat(++i))
    }
}
printTriangulo(numEntero)
//5) 
const palabras = readlineSync.question("Ingrese una palabra: ")
function printPalabra(pPalabra){
    let resultPalabra = " "
    for (i = pPalabra.length-1; i >= 0; i--){
        resultPalabra = resultPalabra + pPalabra
    }
    return resultPalabra
}
console.log(printPalabra(palabra))