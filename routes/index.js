const express = require('express');
const router = express.Router();
const passport = require('passport');

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

router.get(
  '/auth/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

router.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    req.session.user = req.user;
    res.redirect('/api-docs');
  }
);

module.exports = router;
