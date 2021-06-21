const Product = require('./product.model')
const ObjectId = require('mongodb').ObjectId; 

module.exports = {
    getProducts: async (req, res) => {
        const result = await Product.find();
        res.status(200).json(result);
    },
    getProductById: async (req, res) => {
        const result = await Product.find({_id: req.params.id});
        res.status(200).json(result);
    },
    createProduct: async (req, res) => {
        const { name, description, price } = req.body;
        let product = new Product({
            name, description, price
        });

        const productSaved = await product.save();
        res.status(201).json(productSaved);
    },
    editProduct: async (req, res) => {
        const { name, description, price } = req.body;
        let product = {
            name, description, price
        };

        const result = await Product.findOneAndUpdate({_id: req.params.id}, product);
        res.status(300).json(result)
    },
    deleteAllProducts: async (req, res) => {
        await Product.deleteMany();
        res.status(200).json('deleted All Products');
    },
    deleteProductById: async (req, res) => {
        const result = await Product.findOneAndDelete({_id: req.params.id});
        res.status(200).json(result);
    },
}
