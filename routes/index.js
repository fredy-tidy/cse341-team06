const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/electronic', require('./electronic_device'));
router.use('/payments', require('./payments'));
router.use('/customers', require('./customers'));
router.use('/orders', require('./orders'));
router.use('/store', require('./storeRoutes'));

router.get('/', (req, res) => {
  // swagger.tags=['Hello World']
  res.send('Hellow World at week 05');
});

module.exports = router;
