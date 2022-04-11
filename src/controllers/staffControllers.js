let controller = {
    index: (req, res) => {
        res.render('staff/staff_00Cover', { title: 'Bien Venid@s Equipo!' })
    },
    readStaff: (req, res) => {
        res.render('staff/staff_01formRegister', {
            title: 'Configuración del  Equipo '
        })
    },
    index2: (req, res) => {
        res.render('staff/staff_03', { title: 'STAFF2' })
    },
    index3: (req, res) => {
        res.render('staff/staff_04', { title: 'STAFF3' })
    }
}
module.exports = controller