let controller = {
    apaClub: (req, res) => {
        res.send('club')
    },
    buscar: (req, res) => {
        res.render('apaClub/buscarProducto', { title: 'BUSCAR' });
    },
    miCuenta: (req, res) => {
        res.render('apaClub/dash01', { title: 'MiCuenta' });
    }
}
module.exports = controller