let controller = {
    index: (req, res) => {
        res.render('staff/staff_01', { title: 'STAFF1' })
    },
    index1: (req, res) => {
        res.render('staff/staff_02', { title: 'STAFF4' })
    },
    index2: (req, res) => {
        res.render('staff/staff_03', { title: 'STAFF2' })
    },
    index3: (req, res) => {
        res.render('staff/staff_04', { title: 'STAFF3' })
    }
}
module.exports = controller