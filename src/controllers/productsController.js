const fs = require('fs')
const path = require('path')
    //REQUIRE PATH, READ FILE and SYNC JSON DOCUMENT
const comunasFilePath = path.join(__dirname, '../data/comunasDataBase.json')
const ofertasDataBaseFilePath = path.join(__dirname, '../data/ofertasDataBase.json')
    //JSON OBJECT --> JS OBJECT
const comunas = JSON.parse(fs.readFileSync(comunasFilePath, 'utf-8'));
const ofertasMes = JSON.parse(fs.readFileSync(ofertasDataBaseFilePath, 'utf-8'));
let controller = {
    landingProducts: (req, res) => {
        res.render('products/landingProducts', {
            title: 'PRODUCTOS - CABA',
            comunas: comunas
        })
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
    sale: (req, res) => {
        res.render('products/ofertas', { title: ofertasMes.title, ofertasMes: { ofertasMes } })
    }
}
module.exports = controller