const argv = require('./config/yargs').argv; // YARGS
const tareas = require('./controlador/tareas-por-hacer'); //MODULOS
const colors = require('colors'); //COLORES

let comando = argv._[0];

//Creacion de Opciones o Casos
switch (comando) { 
    //Caso para crear Tareas
    case 'crear': 
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    //Caso para listar Tareas
    case 'listar': 
        let rea = tareas.tcompleta(argv.completado); 
        console.log("Listado de tareas".yellow);
        for (let tarea of rea) { 
            console.log("=====================".green);
            console.log("Tarea: ".red, tarea.descripcion);
            console.log("Estado: ".red, tarea.completado);
        }
        break;
    //Caso para actualizar Tareas
    case 'actualizar': 
        let actualizado = tareas.actualizar(argv.descripcion, argv.completado); 
        
        console.log(actualizado);
        break;
    //Caso para borrar Tareas
    case 'borrar': 
        let borrado = tareas.borrar(argv.descripcion); 
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido");
}