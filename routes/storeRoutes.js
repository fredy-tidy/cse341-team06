const express = require('express');
const router = express.Router();
const storeController = require('../controller/storeController');

// Create
router.post('/store', storeController.createStore);

// Get all
router.get('/store', storeController.getAllStores);

// Get single
router.get('/store/:id', storeController.getStoreById);

// Update
router.put('/store/:id', storeController.updateStore);

// Delete
router.delete('/store/:id', storeController.deleteStore);

module.exports = router;
