let controller = {
    login:(req, res)=> {
        res.render('users/login', {title: 'Login APA-CLUB!'})
    },
    crearCuenta: (req, res) => {res.render('users/register', { title: 'Nuevos Socios' })
    },
    readPerfil: (req, res) => { res.render ('users/baseSocios', {title: 'mi Cuenta'} )
    }
}
module.exports = controller