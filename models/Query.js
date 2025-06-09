const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = Schema({
    product_name: {
        type: String,
        required: true
    },
    product_id: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    count: {
        type: Number,
        required: true,
        min: 1,
        integer: true
    }
});

const querySchema = Schema({
    date: {
        type: Date,
        default: Date.now
    },
    outlet_id: {
        type: Schema.Types.ObjectId,
        ref: 'Outlet',
        required: true
    },
    items: {
        type: [itemSchema],
        required: true
    }
});

module.exports = mongoose.model('Query', querySchema);