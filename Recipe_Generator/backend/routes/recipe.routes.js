const express = require('express');
const router = express.Router();

const {
    saveRecipe,
    getRecipes,
    rateRecipe,
    generateGroceryList
} = require('../controllers/recipe.controller');

const { protectRoute } = require('../middlewares/auth.middleware');

router.post('/save', protectRoute, saveRecipe);
router.get('/', protectRoute, getRecipes);
router.post('/rate', protectRoute, rateRecipe);
router.post('/generate-grocery', protectRoute, generateGroceryList);

module.exports = router;
