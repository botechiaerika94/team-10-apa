let controller = {
    login:(req, res)=> {
        res.render('users/login', {title: 'Login APA-CLUB!'})
    },
    crearCuenta: (req, res) => {res.render('users/register', { title: 'Nuevos Socios' })
    }
}
module.exports = controller