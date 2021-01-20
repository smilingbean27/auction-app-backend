const express = require('express'),
    router = express.Router({mergeParams: true}),
    AuctionController = require('../controllers/auction');

// Get products 
router.get('/products', AuctionController.getProducts(), (req, res) => {});

// Post products 
router.post('/products', AuctionController.addProduct(), (req, res) => {});

// Get a particular product 
router.get('/product/:id', AuctionController.getProductbyId(), (req, res) => {});

// Delete a product 
router.delete('/product/:id',AuctionController.deleteProductbyId(), (req, res) => {});

// Update a product 
router.put('/product/:id', AuctionController.modifyProductbyId(), (req, res) => {});

module.exports = router;