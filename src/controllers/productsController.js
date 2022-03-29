
const fs = require('fs')
const path = require('path')
    //REQUIRE PATH, READ FILE and SYNC JSON DOCUMENT
const comunasFilePath = path.join(__dirname, '../data/comunasDataBase.json')
    //JSON OBJECT --> JS OBJECT
const comunas = JSON.parse(fs.readFileSync(comunasFilePath, 'utf-8'));


let controller = {
    landingProducts: (req, res) => {
        res.render('products/landingProducts', {
            title: 'PRODUCTOS - CABA',
            comunas: comunas
        })
    },
    comunasP: (req, res) => {
        let comunaSelect = null
        comunaSelect = req.params.comunaID
        res.render('products/productosComuna', {
            title: locales
        })
    },

    detallesL: (req, res) => {
        const idL = req.res.idL
        res.render('products/comunaLocales', {
            title: 'Local ' + idL,
            {
                comuna: 'comuna' + locales.comunaID,
        })
    }}
module.exports = controller