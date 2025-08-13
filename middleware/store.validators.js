const { body, param, query, validationResult } = require('express-validator');

const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  return res.status(400).json({ ok:false, errors: errors.array() });
};

const createStoreRules = [
  body('name').notEmpty().withMessage('name is required'),
  body('code').notEmpty().withMessage('code is required')
              .isLength({ min: 2 }).withMessage('code too short')
              .matches(/^[A-Za-z0-9-]+$/).withMessage('code must be alphanumeric/dash'),
  body('email').optional().isEmail().withMessage('invalid email'),
  body('phone').optional().isString(),
  body('address').optional().isObject(),
];

const updateStoreRules = [
  param('id').isMongoId().withMessage('invalid id'),
  body('name').optional().notEmpty(),
  body('code').optional().matches(/^[A-Za-z0-9-]+$/),
  body('email').optional().isEmail(),
  body('phone').optional().isString(),
  body('address').optional().isObject(),
  body('isActive').optional().isBoolean(),
];

const idParamRule = [ param('id').isMongoId().withMessage('invalid id') ];

const listQueryRules = [
  query('page').optional().isInt({ min:1 }),
  query('limit').optional().isInt({ min:1, max:100 }),
  query('q').optional().isString(),
  query('isActive').optional().isBoolean(),
];

module.exports = {
  handleValidation,
  createStoreRules,
  updateStoreRules,
  idParamRule,
  listQueryRules
};
