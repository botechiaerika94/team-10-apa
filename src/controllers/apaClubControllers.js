let controller = {
    apaClub: (req, res) => {
        res.send('BIEN - VENIDO AL CLUB')
    },
    buscar: (req, res) => {
        res.render('apaClub/buscarProducto', { title: 'BUSCAR' });
    },
    miCuenta: (req, res) => {
        res.render('apaClub/apaSocio', { title: 'Area del Socio' });
    }
}
module.exports = controller