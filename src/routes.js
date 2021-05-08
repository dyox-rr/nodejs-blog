const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');
const ArticleController = require('../controllers/ArticleController');
const HomeController = require('../controllers/HomeController');



router.get('/', HomeController.index);
router.get('/:slug', HomeController.show_article);
router.get('/categories/all', CategoryController.all);


router.get('/admin/categories', CategoryController.index);
router.get('/admin/categories/new', CategoryController.create);
router.post('/admin/categories/save', CategoryController.save);
router.post('/admin/categories/destroy', CategoryController.destroy);
router.get('/admin/categories/edit/:id', CategoryController.edit);
router.post('/admin/categories/update', CategoryController.update);

router.get('/admin/articles', ArticleController.index);
router.get('/admin/articles/new', ArticleController.create);
router.post('/admin/articles/save', ArticleController.save);
router.post('/admin/articles/destroy', ArticleController.destroy);
router.get('/admin/articles/edit/:id', ArticleController.edit);
router.post('/admin/articles/update', ArticleController.update);



module.exports = router;