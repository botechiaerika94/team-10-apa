let controller = {
    listE: (req, res) => {
        res.render('staff/staffBase')
    },
    createE: (req, res) => {
        res.render('staff/createProducts')
    }
}
module.exports = controller