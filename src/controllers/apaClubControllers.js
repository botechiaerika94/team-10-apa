let controller = {
    apaClub: (req, res) => {
        res.render('apaClub/dash01', {title: 'Bien-venido al CLUB!'})
    },
    buscar: (req, res) => {
        res.render('apaClub/buscarProducto', { title: 'BUSCAR' });
    },
    miCuenta: (req, res) => {
        res.render('apaClub/apaSocio', { title: 'Area del Socio' });
    }
}
module.exports = controller