const express = require('express');
const router = express.Router();

const deviceController = require('../controller/device');
const validation = require('../middleware/validate');
const { isAuthenticate } = require('../middleware/auth');

router.get('/', deviceController.getAllDevices);
router.get('/:id', deviceController.getSingleDevice);
router.post(
  '/',
  isAuthenticate,
  validation.saveDevice,
  deviceController.createDevice
);
router.put(
  '/:id',
  isAuthenticate,
  validation.saveDevice,
  deviceController.updateDevice
);
router.delete('/:id', isAuthenticate, deviceController.deleteDevice);

module.exports = router;
