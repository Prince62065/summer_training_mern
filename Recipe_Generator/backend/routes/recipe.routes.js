const express = require('express');
const router = express.Router();
const {
    saveRecipe,
    getRecipes,
    rateRecipe,
    generateGroceryList
} = require('../controllers/recipe.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/save', saveRecipe);
router.get('/', getRecipes);
router.post('/rate',  rateRecipe);
router.post('/generate-grocery', generateGroceryList);

module.exports = router;
