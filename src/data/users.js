//INTENTO #01 - NO PERMITE ACTUALIZAR ARCHIVOS
// usada para configuraciones
//console.log(users)
//const users = require('./users.json')
//INTENTO #02 MANIPULAR  JSON usando FS

// LER ARCHIVO
const fs = require('fs')
const usersList = JSON.parse(data)
    // OBJECTO COMPLET0
fs.readFile('./users.json', 'utf-8', (error, data) => {
    try {
        console.log(usersList);
    } catch (e) {
        console.log('LISTA DE USUARIOS CON ERROR!')
    }
});

// read FILE SYNC


// retorna object