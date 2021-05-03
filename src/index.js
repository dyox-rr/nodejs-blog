const express = require('express');
const app = express();
const PORT = 3000;
const connection = require('../database/Connection');
const routes = require('./routes');
const Article = require('../models/Article');
const Category = require('../models/Category');

/* configs */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(routes);


connection.authenticate()
.then(() => console.log('Connected.'))
.catch(e => console.error(e));





app.listen(PORT, () => console.log('app is running'));