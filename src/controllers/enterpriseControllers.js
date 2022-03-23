let controller = {
    login: (req, res) => {
        res.render('empresas/login', {title: 'Login EMPRESAS'})
    },
    register: (req, res)=>{
            res.render('empresas/cadastroEmpresa', {title: 'Cadastro EMRESAS'})
    }
}
module.exports = controller