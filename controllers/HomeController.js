const Article = require('../models/Article');
const Category = require('../models/Category');



exports.index = (req, res) => {

    Article.findAll({
        order: [
            ['id', 'desc']
        ],
        include: [
            {model: Category}
        ]
    })
    .then(articles => {
        console.log('processing...');
        res.render('index', {
            articles
        });
    })
    .catch(e => {
        console.error(e);
        res.send('Falha ao renderizar página.');
    });
};

exports.show_article = (req, res) => {
    let { slug } = req.params;
    Article.findOne()
    .then(article => {
        console.log(article);
        res.render('article', {
            article
        });
    }).catch(e => {
        console.error(e);
        res.redirect('/');
    });
}
