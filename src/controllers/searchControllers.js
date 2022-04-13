let controller = {
    searchAny: (req, res) => {
        res.send('Busqueda TODOS')
    },
    searchZone: (req, res) => {
        req.query.comuna
        res.send('Busqueda COMUNA')
    },
    searchPrice: (req, res) => {
        req.query.precio
        res.send('Busqueda PRECIO')
    }
}
module.exports = controller