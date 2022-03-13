const mongoose = require('mongoose');

const InventorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    shelf_quantity: {
        type: Number,
        required: true
    },
    stock_quantity: {
        type: Number
    }
});

module.exports = mongoose.model('inventory', InventorySchema)