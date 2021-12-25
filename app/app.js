const express = require('express');
const app = express();

const PORT = 3000;

//routing
const home = require('./src/routes/home');

//settings
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/src/public`));
app.use('/', home);


module.exports = app;

//2021 12 21 #8