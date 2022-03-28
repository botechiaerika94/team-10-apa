//INTENTO #01 - NO PERMITE ACTUALIZAR ARCHIVOS
// usada para configuraciones
//console.log(users)
//const users = require('./users.json')
//INTENTO #02 MANIPULAR  JSON usando FS

// LER ARCHIVO
const fs = require('fs')

// OBJECTO COMPLET0
fs.readFile('./users.json', 'utf-8', (error, data) => {
    try {
        const usersList = JSON.parse(data)
        console.log(usersList);
    } catch (e) {
        console.log('LISTA DE USUARIOS CON ERROR!')
    }
});

// retorna object