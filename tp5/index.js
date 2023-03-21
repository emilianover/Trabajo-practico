const readlineSync = require("readline-sync");
const menjErrorNum = "-> Ingrese solo un numero entero";
const menjErrorLetra = "-> Ingrese solo una letra";
//1)
let list1 = ["Juan", "Dani"];
let list2 = ["Leo", "Monica", "Juliana"];
const list = (plist1, plist2) => plist1.concat(plist2);
console.log("Array 1: " + list1);
console.log("Array 2: " + list2);
console.log("Array 1+2: " + list(list1, list2));
//2)
const vocales = ["a", "e", "i", "o", "u"];
const esVocal = (pLetra) =>{
    if (pLetra.length == 1){
        const isLetra = vocales.find(
            (element) => element === pLetra.toLowerCase()
        )
        return isLetra === undefined ? "=> No es una vocal" : "=> Es una vocal";
    }else {   
    return msgErrorLetra;
    }
};
const letra = readlineSync.question("Ingrese una Letra: ");
console.log(esVocal(letra));
//3)
function generar_caracteres(pLetra, pNumberInt){
    const pattern = new RegExp("^[A-Z]+$", "i");
    if((pLetra.length == 1) & pattern.test(pLetra)){
        if(pNumberInt.indexOf(".") == -1){
            const parsed = Number.parseInt(pNumberInt, 10);
            return !Number.isNaN(parsed)
            ? "-> " + pLetra.repeat(pNumberInt)
            : msgErrorNumber;
        }else {
            return msgErrorNumber;
        }
    }else {
        return msgErrorLetra;
    }
};
const char = readlineSync.question("Ingrese una letra: ");
const numberInt = readlineSync.question("Ingrese un numero entero: ");
console.log(generar_caracteres(char, numberInt));
//4)
const numeros = [0, 2, 4, 6, 8];
function sumaArreglo(){
    let sum = 0;
    for (i = 0; 1 < numeros.length; i++){
        sum += numeros[i];
    }
    return sum;
};
console.log("=> Cont. array: " + numeros);
console.log("=> Suma del cont. del array: " + sumaArreglo());
//5)
function isNumeroArray(pArrayNumero) {
    for (i = 0; i < pArrayNumero.length; i++){
        const parsed = Numero.parseInt(pArrayNumero[i], 10);
        if (Numero.isNaN(parsed)) return false;
    }
    return true;
};
function numeroMayor(pArrayNumero){
    if(isNumberArray(pArrayNumero)){
        let numeroMayor = 0;
        for(i = 0; i < pArrayNumero.length; i++){
            numeroMayor = numeroMayor < pArrayNumero[i] ? pArrayNumero[i] : numeroMayor;     
        }
        return numeroMayor;
    }else{
        return "ERROR - Ingrese solo numeros: ";
    }
};
let numeroArray = new Array();
for (i = 0; 3 > i; ){
    numeroArray.push(readlineSync.question("#" + ++i + " = Ingrese un numero: "));
}
console.log("=> El mayor numero es: " + numeroMayor(numeroArray));