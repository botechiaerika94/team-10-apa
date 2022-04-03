let controller = {
    login: (req, res) => {
        res.render('empresas/login', { title: 'Login EMPRESAS' })
    },
    clubE: (req, res) => {
        res.render('empresas/landingEmpresas')
    },
    register: (req, res) => {
        res.render('empresas/cadastroEmpresa', { title: 'Cadastro EMRESAS' })
    },
    create: (req, res) => {
        let newE = {
                nameE: req.body.nameE,
                emailE: req.body.emailE,
                webE: req.body.webE,
                checkE: req.body.checkE,
                notesE: req.body.notesE
            }
            //GUARDAR INFO!
        res.redirect('empresas/club')
    }
}
module.exports = controller