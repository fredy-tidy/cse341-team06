const Store = require('../database/models/store.model');

// Create a store (POST /store)
exports.createStore = async (req, res) => {
  try {
    const store = new Store(req.body);
    await store.save();
    res.status(201).json(store);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all stores (GET /store)
exports.getAllStores = async (req, res) => {
  try {
    const stores = await Store.find();
    res.json(stores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single store by ID (GET /store/:id)
exports.getStoreById = async (req, res) => {
  try {
    const store = await Store.findById(req.params.id);
    if (!store) return res.status(404).json({ message: 'Store not found' });
    res.json(store);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a store (PUT /store/:id)
exports.updateStore = async (req, res) => {
  try {
    const updatedStore = await Store.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedStore) return res.status(404).json({ message: 'Store not found' });
    res.json(updatedStore);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a store (DELETE /store/:id)
exports.deleteStore = async (req, res) => {
  try {
    const deletedStore = await Store.findByIdAndDelete(req.params.id);
    if (!deletedStore) return res.status(404).json({ message: 'Store not found' });
    res.json({ message: 'Store deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
