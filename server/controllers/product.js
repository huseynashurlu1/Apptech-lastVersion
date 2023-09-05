const Product = require('../models/product');
const multer = require('multer');
const upload = multer({ dest: '../../client/uploads' }); 

const createProduct = async (req, res) => {
    console.log(req.file);
    try {
        upload(req, res, async (err) => {
            if (err) {
                return res.status(500).json({ error: 'Dosya yükleme hatası' });
            }

            const { name, price, description, shipping, categoryId, brandId } = req.body;
            const product = new Product({
                name,
                description,
                price,
                shipping,
                image: req.file.filename, 
                categoryId,
                brandId
            });

            const savedProduct = await product.save();
            res.json(savedProduct);
        });
    } catch (error) {
        res.status(500).json({ error: 'Yeni ürün oluşturulurken bir hata oluştu.' });
    }
}

// Get All Products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        throw new Error(error)
    }
}

// Get All Products
const getProductById = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findById(id);
        res.json(product);
    } catch (error) {
        throw new Error(error)
    }
}


// Get Products By Category
const getProductByCategory = async (req, res) => {
    const { id } = req.params
    try {
        const products = await Product.find({ categoryId: id }).populate('brandId'); 
        res.json(products);
    } catch (error) {
        throw new Error(error)
    }
}

// Delete Product
const deleteProduct = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findByIdAndDelete(id);
        res.json(product);
    } catch (error) {
        throw new Error(error)
    }
}


// Increase Product View
const increaseView = async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedProduct = await Product.findByIdAndUpdate(productId, { $inc: { viewCount: 1 } }, { new: true });

        res.json({ product: updatedProduct });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the view count.' });
    }
}

module.exports = {createProduct, getProducts, getProductById, getProductByCategory, deleteProduct, increaseView};
