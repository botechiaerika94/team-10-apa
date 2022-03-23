let locales = [{
    idL: 0;
    comunaID: 1
    nameL: pL:
}]

let controller = {
    landingProducts: (req, res) => {
        res.render('products/landingProducts', {
            title: 'PRODUCTOS - CABA',
            comunaID: 1,
            comunaIncludes: "Retiro, San Nicolás, Puerto Madero, San Telmo, Montserrat y Constitución",
            comunaParaghy: "La Comuna 1 está integrada por los 	barrios de  Retiro, San Nicolás, Puerto Madero, San Telmo, Montserrat y Constitución."

        })
    },
    comunas: (req, res) => {
        const comunaID = req.params.comunaID
        res.render('products/productosComuna', {
            title: 'Comuna ' + comunaID
        })
    },
    detallesL: (req, res) => {
        const idL = req.res.idL
        res.render('products/comunaLocales', {
            title: 'Local ' + idL,
            {
                comuna: 'comuna' + locales.comunaID,
            }

        })
    }
}
module.exports = controller