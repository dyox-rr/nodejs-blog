
const Category = require('../models/Category');
const slugify = require('slugify');


exports.index = (req, res) => {

    Category.findAll().then(categories => {
        res.render('admin/categories/index', {
            categories
        });
    }).catch(() => {
        res.send('Ocurr an error while trying load');
    });

}


exports.create = (req, res) => {
    res.render('admin/categories/create');
};

exports.save = (req, res) => {
    let { title } = req.body;
    
    if(!title) 
    { 
        res.redirect('/admin/categories/new');
    }else{
        Category.create({
            title,
            slug: slugify(title.toLowerCase())
        }).then(() => {
            res.redirect('/admin/categories/new');
        }).catch(e => console.error(e));
    }
};

exports.destroy = (req, res) => {
    let { id } = req.body;
    if(!id){
        res.redirect('/admin/categories');
    }else{
        Category.destroy({
            where: {
                id
            }
        })
        .then(() => {
            res.redirect('/admin/categories');
        }).catch(e => console.error(e));
    }
};

exports.edit = (req, res) => {
    let { id } = req.params;
    if(id){
        Category.findByPk(id, {
            raw:true
        })
        .then(category => {
            console.log(category);
            res.render('admin/categories/edit', {
                category
            });
        }).catch(e => {
            console.error(e);
            res.redirect('/admin/categories');
        });
    }else{
        res.redirect('/admin/categories');
    }
}

exports.update = (req, res) => {
    let { id, title } = req.body;
    
    if(id && title){
        Category.update(
            {
                title,
                slug: slugify(title.toLowerCase())
            },
            {
                where: {
                    id
                }
            }
        )
        .then(() => {
            res.redirect('/admin/categories');
        }).catch(e => {
            console.error(e);
            res.redirect('/admin/categories');
        })
    }else{
        res.redirect('/admin/categories');
    }
}