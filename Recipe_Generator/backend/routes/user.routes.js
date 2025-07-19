const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { protectRoute } = require('../middlewares/auth.middleware');

router.post('/', userController.createUser);
router.get('/', protectRoute, userController.getUser);

module.exports = router;