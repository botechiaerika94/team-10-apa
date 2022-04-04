const fs = require('fs')
const path = require('path')
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json')
const localesFilePath = path.join(__dirname, '../data/localesDataBase.json')
const usersList = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const localsList = JSON.parse(fs.readFileSync(localesFilePath, 'utf-8'));


let controller = {
    dashAPA: (req, res) => {
        res.render('apiOwners/dashOwnersAPA', {
            title: 'owners apa'
        })
    },
    list: (req, res) => {
        res.render('apiOwner/showUsers', {
            title: 'Lista de Usuarios',
            usersList: usersList
        });
    },
    showUByID: (req, res) => {
        let register_user = usersList.register_user
        let readUser = req.params.register_user
        res.render('apiOwner/detailsUsers', {
            title: 'Detalles Usuario ' + listUsers.regiser_user,
            usersList: usersList
        })
    },
    listLocals: (req, res) => {
        let rgL = req.params.rgL;
        res.render('apiOwner/showLocals', {
            title: 'listar Locales',
            localsList: localsList
        })
    }
}
module.exports = controller
module.exports = controller