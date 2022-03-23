let controller = {
    indexPage: (req, res) => {
        res.render('index', { title: 'APA' });
    },
    landingUser: (req, res) => {
        res.render('main/home', { title: 'HOME' });
    }
}
module.exports = controller