const express = require('express');
const router = express.Router();
const {createCategory, getCategories, deleteCategory} = require('../controllers/category');

router.post('/add', createCategory);
router.get('/all-categories', getCategories);
router.delete('/:id', deleteCategory);

module.exports = router;