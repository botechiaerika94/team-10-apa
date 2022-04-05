/**************REQUISICION + FUNCIONALIDAD de EXPRESS ***************/
require('dotenv').config
const express = require('express');
const port = process.env.PORT

const path = require('path');

const app = express()

const methodOverride = require('method-override')
app.use(methodOverride('_method'))
    // Prepara app para method POST - CAPTURAR FORM --> LITERAL OBJECT + FORMATO JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

/***********middlewares****** */

/***********CARPETAS PUBLICAS****** */
app.use(express.static(path.join(__dirname, './../public')));
/**************REQUISICION***************/
const mainRouters = require('./routes/mainRoutes.js')
const apaClubRouter = require('./routes/apaClubRoutes.js')
const usersRouter = require('./routes/usersRoutes.js')
const telosRouter = require('./routes/telosRoutes.js')
const enterpriseRouter = require('./routes/enterpriseRoutes.js')
const apiOwnerRouter = require('./routes/apiOwnerRoutes.js')
const staffRouter = require('./routes/staffRoutes.js')

app.use('/', mainRouters);
app.use('/apa-club', apaClubRouter);
app.use('/usuarios', usersRouter);
app.use('/telos', telosRouter);
app.use('/empresas', enterpriseRouter);
app.use('/ApaOwners', apiOwnerRouter);
app.use('/staff', staffRouter)

/**************WS LISTEN ON 6669 ***************/
app.listen(process.env.PORT || 8080, () => {
    console.log('WS LEVANTADO Y CORRIENDO EN 8080')
})

module.exports = app