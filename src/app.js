/**************REQUISICION + FUNCIONALIDAD de EXPRESS ***************/
const express = require('express');
const mongoose = require('mongoose');


const path = require('path');

const app = express()

const methodOverride = require('method-override')
app.use(methodOverride('_method'))
    // CAPTURA FORM EN OBJETO LITERAL Y CONVIERE EN JSON
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
const productsRouter = require('./routes/productsRoutes.js')
const enterpriseRouter = require('./routes/enterpriseRoutes.js')

const apiOwnerRouter = require('./routes/apiOwnerRoutes.js')
  
app.use('/', mainRouters);
app.use('/apa-club', apaClubRouter);
app.use('/usuarios', usersRouter);
app.use('/productos', productsRouter);
app.use('/empresas', enterpriseRouter);

app.use('/ApiControl', apiOwnerRouter);


/**************WS LISTEN ON 6669 ***************/
app.listen(process.env.PORT || 6699, () => {
    console.log('WS LEVANTADO Y CORRIENDO EN 6699')
})

module.exports=Router
