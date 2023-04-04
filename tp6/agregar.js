//4)
function agregar(xId, pNombre, pDescripcion, pCategoria, pPrecio){
const parsed = number.parseFloat(pPrecio)
if(Number.isNaN(parsed)){
    return "El precio no es valido";
}
let producto = {
    id: xId,
    nombre: pNombre,
    descripcion: pDescripcion,
    categoria: pCategoria,
    precio: pPrecio
};
dataBase.push(producto);
return data;
};
module.exports = agregar;