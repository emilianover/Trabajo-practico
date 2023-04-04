const data = require("./dataBase");
//1)
const buscarPorId = (pId) => 
  data.filter((e) => e.id === pId) 

//3)
const buscarProductosHastaPrecio = (pPrecio) => data.filter((e) => e.precio <= pPrecio);

module.exports = { buscarPorId, buscarProductosHastaPrecio }