const Article = require('../models/Article');
const Category = require('../models/Category');
const slugify = require('slugify');


exports.index = (req, res) => {
    Article.findAll({
        include: [{model: Category}]
    }).then(articles => {
        res.render('admin/articles/index', {
            articles
        });
    }).catch(e => {
        console.error(e);
        res.redirect('/admin/articles');
    })
};

exports.create = (req, res) => {

    Category.findAll()
    .then(categories => {
        res.render('admin/articles/create', {
            categories
        });
    }).catch(e => {
        console.error(e);
        res.redirect('/admin/articles');
    });
};

exports.save = (req, res) => {
    let { title, body, category } = req.body;
    Article.create({
        title,
        slug: slugify(title.toLowerCase()),
        body,
        categoryId: category
    }).then(() => {
        console.log('The article was created.');
        res.redirect('/admin/articles');
    }).catch(e => {
        console.error(e);
        res.redirect('/admin/articles');
    })
}

exports.destroy = (req, res) => {
    let { id } = req.body;
    if(!id){
        res.redirect('/admin/articles');
    }else{
        Article.destroy({
            where: {
                id
            }
        }).then(() => {
            console.log("article was deleted;");
            res.redirect('/admin/articles');
        }).catch(e => {
            res.redirect('/admin/articles');
            console.error(e);
        })
    }
};

exports.edit = (req, res) => {
    let { id } = req.params;
    Article.findOne({
        include: [
            {model:Category}
        ]
    }).then(article => {
        Category.findAll().then(categories => {
            res.render('admin/articles/edit', {
                article,
                categories
            });
        }).catch(e => {
            console.error(e);
            res.redirect('/admin/articles');
        });
    }).catch(e => {
        console.error(e);
        res.redirect('/admin/articles');
    });
}

exports.update = (req, res) => {
    let { id, title, category, body } = req.body;
    Article.update({
        title, categoryId: category, body
    }, {
        where: { id }
    }).then(() => {
        console.log('articles was updated.');
        res.redirect(`/admin/articles/edit/${id}`);
    }).catch(e => {
        console.error(e);
        res.redirect(`/admin/articles/edit/${id}`);
    })
}