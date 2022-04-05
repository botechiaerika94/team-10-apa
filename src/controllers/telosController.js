const fs = require('fs')
const path = require('path')
    //REQUIRE PATH, READ FILE and SYNC JSON DOCUMENT
const comunasFilePath = path.join(__dirname, '../data/comunasDataBase.json')
const ofertasDataBaseFilePath = path.join(__dirname, '../data/ofertasDataBase.json')
    //JSON OBJECT --> JS OBJECT
const comunas = JSON.parse(fs.readFileSync(comunasFilePath, 'utf-8'));
const ofertasMes = JSON.parse(fs.readFileSync(ofertasDataBaseFilePath, 'utf-8'));
let controller = {
    list: (req, res) => {
        res.render('telos/list', {
            title: 'PRODUCTOS - CABA',
            comunas: comunas
        })
    },
    comunasP: (req, res) => {
        let comunaID = req.params.comunaID
        res.render('telos/productosComuna', {
            title: 'Comuna ' + comunaID
        })
    },
    detailsL: (req, res) => {
        let idC = req.params.idComuna
        res.render('telos/details', {
            title: 'Local ' + idC,
        })
    },
    detallesR: (req, res) => {
        let idRooms = req.params.idRooms
        res.render('telos/detallesP', {
            title: 'Producto ' + idRooms,
        })
    },
    sale: (req, res) => {
        res.render('telos/ofertas', { title: ofertasMes.title, ofertasMes: { ofertasMes } })
    },
    searchByKey:{

    }
}
module.exports = controller