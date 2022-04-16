const fs = require('fs')
const path = require('path')
    //REQUIRE PATH, READ FILE and SYNC JSON DOCUMENT
const comunasFilePath = path.join(__dirname, '../data/comunasDataBase.json')
const p00BaseFilePath = path.join(__dirname, '../data/p00_DataBase.json')
    //JSON OBJECT --> JS OBJECT
const comunas = JSON.parse(fs.readFileSync(comunasFilePath, 'utf-8'));
const p00 = JSON.parse(fs.readFileSync(p00BaseFilePath, 'utf-8'));

/* ******LANDING ******* */
let controller = {
    index: (req, res) => {
        res.render('products/products00_telos', {
            title: p00.title,
            localsList: p00})
    },
    comunasP: (req, res) => {
        let comunaID = req.params.comunaID
        res.render('products/productosComuna', {
            title: 'Comuna ' + comunaID
        })
    },
    detallesL: (req, res) => {
        let idLocal = req.params.idLocal
        res.render('products/comunaLocales', {
            title: 'Local ' + idLocal,
        })
    },
    detallesR: (req, res) => {
        let idRooms = req.params.idRooms
        res.render('products/detallesP', {
            title: 'Producto ' + idRooms,
        })
    },
    listCABA: (req, res) => {
        res.render('products/landingProducts', {
            title: 'PRODUCTOS - CABA',
            comunas: comunas
        })
    }
}
module.exports = controller