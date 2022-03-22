let controller = {
    iniciarU: (req, res) => {
        res.render('apaClub/login', { title: 'Ingreso al CLUB!' });
    },
    buscar: (req, res) => {
        res.render('apaClub/buscarProducto', { title: 'BUSCAR' });
    },
    validarU: (req, res) => {
        res.render('apaClub/validando', { title: 'Aguarde' });
    },
    miCuenta: (req, res) => {
        res.render('apaClub/apaSocio', { title: 'Area del Socio' });
    }
}
module.exports = controller