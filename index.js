const express = require('express');
const app = express();
const PORT = 3000;
const connection = require('./database/Connection');

/* configs */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));



connection.authenticate()
.then(() => console.log('Connected.'))
.catch(e => console.error(e));





app.get('/', (req, res) => {
    res.render('index');
})
app.listen(PORT, () => console.log('app is running'));