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

    //create NO crea producto solo lo recupera al back
    create: (req, res) => {
        let newE = {
        empresa.push(newE)
            //GUARDAR INFO!
        res.send('Bien venido a APA')
    }
}
module.exports = controller