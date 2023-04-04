const agregar = require("./agregar.js");
const busqueda = require("./busqueda.js");
const listar = require("./listar.js");
const command = process.argv[2];

switch (command.ToLowerCase()) {
    case "listar":
        if (process.argv.length == 4) {
            console.log(listar(process.argv[3]));
        } else {
            console.log(
                `Ingrese en consola: node index.js listar Lacteos\nCategorias disponibles: ${listarCategorias()}`
            );
        }
        break;
    case "agregar":
        if (process.argv.length == 7) {
            console.log(
                agregar(
                    process.argv[2],
                    process.argv[3],
                    process.argv[4],
                    process.argv[5],
                    process.argv[6]
                )
            );
        } else {
            console.log(
                "Ingrese en consola: node index.js 99 Ketchup 'Salsa de tomate' Aderezos 199.99"
            );
        }
        break;
    case "buscar":
        if (process.argv.length == 4) {
            console.log(busqueda.buscarPorId(process.argv[3]));
        } else {
            console.log("Ingrese en consola:\n- node index.js buscar 1");
        }
        break;
    case "buscarPrecio":
        if (process.argv.length == 4) {
            console.log(busqueda.buscarProductosHastaPrecio(process.argv[3]));
        } else {
            console.log("Ingrese en consola:\n- node index.js buscarPrecio 300.5");
        }
   
}