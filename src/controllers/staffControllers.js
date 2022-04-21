let controller = {
    index: (req, res) => {
        res.render('staff/employersRead', { title: 'STAFF' })
    },
    staff01: (req, res) => {
        res.render('staff/staff_05', { title: 'STAFF' })
    },
    getByReserve: (req, res) => {
        idReserve = req.params.idReserve
        res.render('staff/staff_01', {
            title: 'RESERVA ' + idReserve
        })
    },
    createID: (req, res) => {
        res.render('staff/staff_04', { title: 'CADASTRO NUEVO STAFF' })
    }
}

module.exports = controller