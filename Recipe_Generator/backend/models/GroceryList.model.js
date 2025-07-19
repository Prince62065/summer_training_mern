const mongoose = require('mongoose');

const groceryListSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [String]
});

module.exports = mongoose.model('GroceryList', groceryListSchema);
