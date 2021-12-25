const express = require('express');
const app = express();

const PORT = 3000;

//settings
app.set('views', './src/views');
app.set('view engine', 'ejs');

const home = require('./src/routes/home');
app.use('/', home);

module.exports = app;

//2021 12 21 #8