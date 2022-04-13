const fs = require('fs')
const path = require('path')
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json')
const localesFilePath = path.join(__dirname, '../data/localAndRoomsDataBase.json')
const usersList = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const localsList = JSON.parse(fs.readFileSync(localesFilePath, 'utf-8'));
let controller = {
    dashAPA: (req, res) => {
        res.render('apiOwner/ownersHome', {
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
        let register_user = req.params.register_user
        res.render('apiOwner/detailsUsers', {
            title: 'Detalles Usuario ' + register_user,
            usersList: usersList
        })
    },
    listLocals: (req, res) => {
        let rgL = req.params.rgL;
        res.render('apiOwner/showLocals', {
            title: 'listar Locales',
            localsList: localsList
        })
    },
    createLocal: (req, res) => {
        res.render('apiOwner/newEnterprise.ejs', { title: "FORM EMPRESA" })
    }
}

module.exports = controller