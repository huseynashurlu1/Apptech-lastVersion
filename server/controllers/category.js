const Category = require('../models/category');

// Create Category 
const createCategory = async (req, res) => {
    const category = await Category.create(req.body)
    res.json(category)
}

// Get All Categories
const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        throw new Error(error)
    }
}

// Delete Category
const deleteCategory = async (req, res) => {
    const { id } = req.params
    try {
        const category = await Category.findByIdAndDelete(id);
        res.json(category);
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {createCategory, getCategories, deleteCategory};
