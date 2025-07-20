const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
},{timestamps:true});

module.exports = mongoose.model('Recipe', recipeSchema);
