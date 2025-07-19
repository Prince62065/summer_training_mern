const express = require('express');
const router = express.Router();
const groceryController = require('../controllers/grocery.controller');
const auth = require('../middlewares/auth.middleware');

router.get('/', auth, groceryController.getGroceryList);

module.exports = router;
