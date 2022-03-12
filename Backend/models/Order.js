const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        // required: true,
        // unique: true
    },
    complete: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    vendorName: {
        type: String
    },
    quantity: {
        type: Number
    }
});

module.exports = mongoose.model('order', OrderSchema)