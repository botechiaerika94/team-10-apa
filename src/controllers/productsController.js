const fs = require('fs')
const path = require('path')
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json')
const localesFilePath = path.join(__dirname, '../data/localAndRoomsDataBase.json')
const localesDBFilePath = path.join(__dirname, '../data/localAndRoomsDataBase.json')
const usersList = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const localsDB = JSON.parse(fs.readFileSync(localesDataBaseFilePath, 'utf-8'));
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
    showUbyID: (req, res) => {
        let register_user = req.res.register_user
        res.render('apiOwner/detailsUsers', {
            title: 'Detalles Usuario ' + register_user,
            usersList: usersList
        })
    },
    listLocals: (req, res) => {
        let rgL = req.params.rgL;
        res.render('apiOwner/showLocals', {
                title: 'listar Locales',
                localsList: localsDB
            })
            /* 
            //    createLocal: (req, res) => {
            //        res.render('apiOwner/readLocal.ejs', { title: "FORM EMPRESA" })
            //    },
            //    storeLocal: (req, res) => {
            //
            //        class CreateTelo {
            //            constructor() {
            //                this.nameHotel = req.body.nameL,
            //                    this.emailHotel = req.body.emailL,
            //                    this.telephoneHotel = req.body.telL,
            //                    this.webPageHotel = req.body.webL,
            //                    this.addressL = req.body.addressL,
            //                    this.parkingHotel =  req.body.addressL2,
            //                    this.comuna = req.body.breakPointL,
            //					this.breakPoint = req.body.breakPointL
            //						}
            //        newEJSON = new CreateTelo(newEJSON ( JSON.stringify(fs.readFileSync(createTelo))))
            //        newEJSON(req.body.newEJSON => {
            //            JSON.exports(__dirname, '../data/newEjson.json') })*/
    }
}
module.exports = controller