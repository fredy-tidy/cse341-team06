const express = require('express');
const router = express.Router();

const ordersControllers = require('../controller/orders');
const validator = require('../middleware/validate');
const { isAuthenticate } = require('../middleware/auth');

router.post(
  '/',
  isAuthenticate,
  validator.saveOrders,
  ordersControllers.createOrders
);
router.delete('/:orderId', isAuthenticate, ordersControllers.deleteOrder);
router.get(
  '/customer/:customerId',
  isAuthenticate,
  ordersControllers.getOrdersByCustomer
);
router.put(
  '/:orderId',
  isAuthenticate,
  validator.saveOrders,
  ordersControllers.updateOrders
);

module.exports = router;
