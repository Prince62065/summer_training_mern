const GroceryList = require('../models/GroceryList.model');

exports.getGroceryList = async (req, res) => {
    const list = await GroceryList.findOne({ user: req.userId });
    res.json(list || { items: [] });
};
