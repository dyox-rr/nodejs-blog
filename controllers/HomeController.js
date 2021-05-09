const Article = require('../models/Article');
const Category = require('../models/Category');



exports.index = (req, res) => {
    let { page }  = req.query;
    const limit = 3;
    let offset = page ? (parseInt(page) -1) * limit : 0;
    let next;
   

    Article.findAndCountAll({
        order: [
            ['id', 'desc']
        ],
        include: [
            {model: Category}
        ],
        limit,
        offset
    })
    .then(articles => {
        next = !(offset + limit >= articles.count);
        res.render('index', {
            articles
        });
    })
    .catch(e => {
        res.send('Falha ao renderizar página.');
    });
};

exports.show_article = (req, res) => {
    let { slug } = req.params;
    Article.findOne()
    .then(article => {
        res.render('article', {
            article
        });
    }).catch(e => {
        console.error(e);
        res.redirect('/');
    });
}
