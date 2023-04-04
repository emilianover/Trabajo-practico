//2)
const data = require("./dataBase");
function list(pCategoria){
    let listCategoria = new Array();
    for(i = 0; i < data.length; i++){
        if(data[i].Categoria == pCategoria){
            listCategoria.push(data[i]);
        }
    }
    return listCategoria;
}
module.exports = {list};