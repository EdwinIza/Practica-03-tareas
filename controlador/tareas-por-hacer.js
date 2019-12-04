//módulo para archivos
const fs = require('fs'); 

let tareasPorHacer = []; 

//Modulo para cargar datos 
const cargarDB = () => { 
    try { 
        tareasPorHacer = require('../db/data.json');
    } catch (error) {
        tareasPorHacer = [];
    }
    return tareasPorHacer; 
}

//Modulo para guardar Db
const guardarDB = () => { 
    let data = JSON.stringify(tareasPorHacer);

    //Creacion del jason mediante "stringify"
    fs.writeFile('db/data.json', data, (err) => { 
        if (err) throw new Error('No se pudo guardar', err); 
    });
}

//Modulo para crear Tareas
const crear = (descripcion) => { 
    cargarDB(); 
    let tarea = {
        descripcion,
        completado: "false"
    };
    tareasPorHacer.push(tarea); 
    guardarDB(); 
    return tarea; 
}

//Modulo para obtener la lista de Tareas
const getLista = () => { 
    cargarDB(); 
    return tareasPorHacer; 
}

//Modulo para actualizar una tarea "Completada o no Completada"
const actualizar = (descripcion, completado = true) => { 
    cargarDB(); //cargamos la base

    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion); 

    if (index >= 0) { 
        tareasPorHacer[index].completado = completado;
        guardarDB(); 
        return true; 
    }
    return false; 

}

//Modulo para borrar una tarea
const borrar = (descripcion) => { 
    cargarDB(); 
//Mediante el fileter filtraremos nuestra lista de tareas
    let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion); 
    if (tareasPorHacer.length === nuevoListado.length) { 
        return "No se ha borrado la tarea o No existe"; 
    } else {
        tareasPorHacer = nuevoListado; 
        guardarDB(); 
        return "Tarea Borrada"; 
    }
}

//Modulo para mostrar tareas completadas y no completadas
const tcompleta = (completado) => { 
    let lista = []; 
    let base = cargarDB(); 

    for (var i = 0; i < base.length; i++) { 
        if (tareasPorHacer[i].completado === completado) { 
            lista.push(tareasPorHacer[i]) 
                
        }
    }
    return lista; 
}

//Exportacion de modulos
module.exports = { 
    crear,
    getLista,
    actualizar,
    borrar,
    tcompleta

}