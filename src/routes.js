const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');


router.get('/admin/categories/new', CategoryController.create);
router.post('/admin/categories/save', CategoryController.save);


module.exports = router;