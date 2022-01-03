"use strict";

const express =     require('express');

const app = express();

//routing
const home = require('./src/routes/home');

//settings
app.set('views', './src/views');
app.set('view engine', 'ejs');

//middleware
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', home);

module.exports = app;

//2021 12 21 #8