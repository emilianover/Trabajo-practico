//tp2
//P1

const numeroRandom = Math.floor((Math.random() * (100 - 1 +1)) + 1)

function esigual(n) {
    if (n % 2 === 0)
        console.log ("Numero par:" + n)
    else 
        console.log ("Numero impar:" + n)
    }

esigual(numeroRandom) 
esigual(11) 
//p2
function comparacion (pt1, pt2){
    if (pt1.length > pt2.length) 
        { console.log(pt1," [tiene mas letras]", pt2)}
    else if (pt1.length < pt2.length) 
        {console.log(pt2," [tiene mas caracteres que]",pt1)}
    else if (pt1.length === pt2.length)
        {console.log(pt1," [tiene la misma cantidad de letras")}
    else { console.log("no se pudo comparar:", pt1, " contra ", pt2)}
}

comparacion("tren", "edificio")
//p3
for (let i = 0; i <= 10; i++){
    console.log(i,"x", 9, "=", i*9 )
}
//p4
function multiplicar (A){
    return A * 23;
}
let resultado = multiplicar(100);
console.log(resultado)

//p5
let arrayNum = new array()
const riceArray = 20
let fromArray = 0

while (fromArrat < riceArray ) {
    let numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
    arrayNum.unshift(numeroRandom)
    fromArray++
}
console.log(arrayNum)
