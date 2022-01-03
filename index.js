const express = require('express');

const app = express();

app.engine('html', require('ejs').renderFile)

app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('assets'))

app.use('/', require('./routes/default-routes'))

module.exports = app;
