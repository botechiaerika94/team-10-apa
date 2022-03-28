const fs = require('fs')
const path = require('path')
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json')
const usersAll = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


let controller = {
    listUsers: (req, res) => {
        res.render('apiOwner/showUsers', {
            title: 'Lista de Usuarios',
            users: usersAll
        });
    }
}
module.exports = controller