const express = require('express');
const router = express.Router();
const {protectRoute} = require('../middlewares/auth.middleware');
const controller = require('../controllers/grocery.controller');

router.get('/', protectRoute, controller.getGroceryList);
router.post('/generate', protectRoute, controller.generateGroceryList);
router.post('/add', protectRoute, controller.addGroceryItem);
router.post('/delete', protectRoute, controller.deleteGroceryItem);

module.exports = router;
