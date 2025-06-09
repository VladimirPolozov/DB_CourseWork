const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const ejs = require('ejs');
const path = require('path');

const collectionRoutes = require('./routes/collections');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/', collectionRoutes);

module.exports = app;