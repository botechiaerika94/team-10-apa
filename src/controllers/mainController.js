let controller = {
    indexPage: (req, res) => {
        res.render('index', { title: 'APA' });
    },
    landingUser: (req, res) => {
        res.render('main/home', { title: 'HOME' });
    },
    tableT: (req, res) =>{
        res.send('Table')
    }
}
module.exports = controller