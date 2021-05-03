const express = require('express');
const app = express();
const PORT = 3000;

/* configs */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})
app.listen(PORT, () => console.log('app is running'));