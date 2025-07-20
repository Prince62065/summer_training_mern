const mongoose = require('mongoose');

const groceryListSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{ type: String }]
},{timeseries:true});

module.exports = mongoose.model('GroceryList', groceryListSchema);