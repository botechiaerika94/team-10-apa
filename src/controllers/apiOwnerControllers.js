const fs = require('fs')
const path = require('path')
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json')
const usersList = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


let controller = {
    list: (req, res) => {
        res.render('apiOwner/showUsers', {
            title: 'Lista de Usuarios',
            usersList: usersList
        });
    },
    read: (req, res) => {
        let readUser = req.params.user_register
        res.render('apiOwners/')
    }
}
module.exports = controller