const Grocery = require('../models/GroceryList.model');
const Recipe = require('../models/Recipe.model');

// Get Grocery List
exports.getGroceryList = async (req, res) => {
    try {
        const grocery = await Grocery.findOne({ user: req.userId });

        if (!grocery) {
            return res.status(404).json({ message: 'No grocery list found' });
        }

        res.json(grocery);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch grocery list' });
    }
};

// Generate Grocery List
exports.generateGroceryList = async (req, res) => {
    try {
        const recipes = await Recipe.find({ user: req.userId });

        const allIngredients = recipes.flatMap(recipe => recipe.ingredients);
        const uniqueIngredients = [...new Set(allIngredients)];

        let grocery = await Grocery.findOne({ user: req.userId });

        if (grocery) {
            grocery.items = uniqueIngredients;
        } else {
            grocery = new Grocery({
                user: req.userId,
                items: uniqueIngredients
            });
        }

        await grocery.save();

        res.json({ message: 'Grocery list generated', grocery });
    } catch (err) {
        res.status(500).json({ error: 'Failed to generate grocery list' });
    }
};

// Add Item to Grocery List
exports.addGroceryItem = async (req, res) => {
    const { item } = req.body;

    try {
        const grocery = await Grocery.findOne({ user: req.userId });

        if (!grocery) {
            return res.status(404).json({ error: 'Grocery list not found' });
        }

        if (!grocery.items.includes(item)) {
            grocery.items.push(item);
            await grocery.save();
        }

        res.json({ message: 'Item added', grocery });
    } catch (err) {
        res.status(500).json({ error: 'Failed to add item' });
    }
};



// Delete Item from Grocery List
exports.deleteGroceryItem = async (req, res) => {
    const { item } = req.body;

    try {
        const grocery = await Grocery.findOne({ user: req.userId });

        if (!grocery) {
            return res.status(404).json({ error: 'Grocery list not found' });
        }

        grocery.items = grocery.items.filter(i => i !== item);
        await grocery.save();

        res.json({ message: 'Item removed', grocery });
    } catch (err) {
        res.status(500).json({ error: 'Failed to remove item' });
    }
};
