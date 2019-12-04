//creamos descripcion que servira para nuestros modulos
const descripcion = { 
    demand: true, 
    alias: 'd', 
    desc: "Descripción de la tarea por hacer" 
};


//configuracion de "completado"
const completado = { 
    default: "true",
    alias: 'c',
    desc: "Marca como completada o pendiente la tarea"
};


// creación de comandos con su respectiva descripcion
const argv = require('yargs') 
    .command('crear', 'Crear una tarea', {
        descripcion 
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion, 
        completado
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion 
    })
    .command('listar', 'lista tareas', {
        completado 
    })
    .help()
    .argv;
//exportacion de los argvs
module.exports = { 
    argv
}