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
        res.render('products/detallesNOClientes', {
            title: 'Local ' + idL
        })
    }
}
module.exports = controller