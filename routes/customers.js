const express = require('express');
const router = express.Router();

const customersController = require('../controller/customers');
const validation = require('../middleware/validate');
const { isAuthenticate } = require('../middleware/auth');

router.get('/', customersController.getAllCustomers);
router.get('/:id', isAuthenticate, customersController.getCustomerById);
router.post(
  '/',
  isAuthenticate,
  validation.saveCustomers,
  customersController.createCustomers
);
router.put(
  '/:id',
  validation.saveCustomers,
  customersController.updateCustomersById
);
router.delete('/:id', isAuthenticate, customersController.deleteCustomers);

module.exports = router;
