const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

//body-parser
app.use(bodyParser.urlencoded({extended: true}));

//Rutas
app.use('/', require('./routes/auth'));

app.listen(process.env.PORT || 3000, () => {
    const port = process.env.PORT || 3000;
    console.log(`Servidor coriendo en el puerto ${port}`);
});