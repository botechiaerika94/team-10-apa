let controller = {
    apaClub: (req, res) => {
        res.send('club')
    },
    buscar: (req, res) => {
        res.render('apaClub/buscarProducto', { title: 'BUSCAR' });
    },
    miCuenta: (req, res) => {
        res.render('users/dashboard', { title: 'MiCuenta' });
    }
}
module.exports = controller