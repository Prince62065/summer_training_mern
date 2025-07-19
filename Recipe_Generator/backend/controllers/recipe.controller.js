const Recipe = require('../models/Recipe.model');
const Grocery = require('../models/GroceryList.model');

// Save Recipe
exports.saveRecipe = async (req, res) => {
    const { title, image, ingredients } = req.body;

    try {
        const newRecipe = new Recipe({
            user: req.user.id,
            title,
            image,
            ingredients
        });

        await newRecipe.save();

        res.status(201).json({ message: 'Recipe saved successfully', recipe: newRecipe });
    } catch (err) {
        res.status(500).json({ error: 'Failed to save recipe' });
    }
};

// Get Saved Recipes
exports.getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find({ user: req.user.id });
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch recipes' });
    }
};

// Rate Recipe
exports.rateRecipe = async (req, res) => {
    const { recipeId, rating } = req.body;

    try {
        const recipe = await Recipe.findById(recipeId);

        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }

        recipe.rating = rating;
        await recipe.save();

        res.json({ message: 'Recipe rated successfully', recipe });
    } catch (err) {
        res.status(500).json({ error: 'Failed to rate recipe' });
    }
};

// Generate Grocery List
exports.generateGroceryList = async (req, res) => {
    try {
        const recipes = await Recipe.find({ user: req.user.id });

        // Flatten all ingredients
        const allIngredients = recipes.flatMap(recipe => recipe.ingredients);

        // Remove duplicates
        const uniqueIngredients = [...new Set(allIngredients)];

        const grocery = new Grocery({
            user: req.user.id,
            items: uniqueIngredients
        });

        await grocery.save();

        res.json({ message: 'Grocery list generated', grocery });
    } catch (err) {
        res.status(500).json({ error: 'Failed to generate grocery list' });
    }
};
