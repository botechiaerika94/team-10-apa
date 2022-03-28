const fs = require('fs')
const path = require('path')
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json')
const usersList = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
let controller = {
    apaClub: (req, res) => {
        res.send('club')
    },
    buscar: (req, res) => {
        res.render('apaClub/buscarProducto', { title: 'BUSCAR' });
    },
    miCuenta: (req, res) => {
        res.render('users/dashboard', {
            title: 'miCuenta',
            usersList: usersList
        })
    }
}
module.exports = controller