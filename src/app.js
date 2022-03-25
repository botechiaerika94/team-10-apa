const PORT = 9669
const express = require('express');
const mongoose = require('mongoose');

const path = require('path');
const methodOverride = require('method-override')
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static(path.join(__dirname, './../public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(methodOverride('_method'))

const mainRouters = require('./routes/mainRoutes.js')
const apaClubRouter = require('./routes/apaClubRoutes.js')
const usersRouter = require('./routes/usersRoutes.js')
const productsRouter = require('./routes/productsRoutes.js')
const enterpriseRouter = require('./routes/enterpriseRoutes.js')

app.use('/', mainRouters);
app.use('/apa-club', apaClubRouter);
app.use('/usuarios', usersRouter);
app.use('/productos', productsRouter);
app.use('/empresas', enterpriseRouter);


app.listen(process.env.PORT || 9669, function() {
    console.log('WS EXPRESS CORRIENDO EN 9669')
})