const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');
const ArticleController = require('../controllers/ArticleController');


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



module.exports = router;