const express = require('express');
const router = express.Router();

const paymentsController = require('../controller/payments');
const validation = require('../middleware/validate');
const { isAuthenticate } = require('../middleware/auth');

router.get('/', paymentsController.getAllPayments);
router.get('/:id', paymentsController.getSinglePayment);
router.post(
  '/',
  isAuthenticate,
  validation.savePayment,
  paymentsController.createPayment
);
router.put(
  '/:id',
  isAuthenticate,
  validation.savePayment,
  paymentsController.updatePayment
);
router.delete('/:id', isAuthenticate, paymentsController.deletePayment);

module.exports = router;
