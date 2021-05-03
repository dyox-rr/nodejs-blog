
const Category = require('../models/Category');
const slugify = require('slugify');

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
}