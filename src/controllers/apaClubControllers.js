const fs = require('fs')
const path = require('path')
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json')
const usersList = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
let controller = {
    apaClub: (req, res) => {
        res.render('apaClub/perfilApa', {
            title: 'Perfil del Socio'
        })
    },
    buscar: (req, res) => {
        res.render('apaClub/buscarProducto', { title: 'BUSCAR' });
    },
    //miCuenta: (req, res) => {
    //    res.render('users/dashboard', {
    //        title: 'miCuenta',
    //        usersList: usersList
    //    })
    //},
    //edit: (req, res) => {
    //    let user = req.params.user_register
    //    res.render('apaClub/perfilApa', {
    //        title: 'Perfil Usuario' + userList.id,
    //        user: usersList
    //    })
    //
    showCart: (req, res) => {
        res.render('apaClub/apaClub_shopCart', { title: 'APA' })
    }

}
module.exports = controller