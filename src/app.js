const PORT = 9669
const express = require('express');
const path = require('path');


const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static(path.join(__dirname, './../public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


const mainRouters = require('./routes/mainRoutes.js')
const apaClubRouter = require('./routes/apaClubRoutes.js')
// const usuariosRouter = require('./routes/usuariosRouters.js');
const productsRouter = require('./routes/productsRoutes.js')
//const empresasRouter = require('./routes/empresasRouters.js')

app.use('/', mainRouters);
app.use('/apa-club', apaClubRouter);
//app.use('/usuarios', usuariosRouter);
app.use('/productos', productsRouter);
//app.use('/empresas', empresasRouter);
//app.use('/locales', productosRouter);
app.use('/*' , (req, res) => {res.render('error404')})


app.listen(process.env.PORT||9669, function(){
    console.log(`WS EXPRESS CORRIENDO EN ${PORT}`)
})