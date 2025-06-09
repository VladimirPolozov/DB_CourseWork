const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderItemSchema = Schema({
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
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }
});

const orderSchema = Schema({
    date: {
        type: Date,
        default: Date.now
    },
    supplier_name: {
        type: String,
        required: true
    },
    supplier_id: {
        type: Schema.Types.ObjectId,
        ref: 'Supplier',
        required: true
    },
    outlet_id: {
        type: Schema.Types.ObjectId,
        ref: 'Outlet',
        required: true
    },
    items: {
        type: [orderItemSchema],
        required: true
    }
});

module.exports = mongoose.model('Order', orderSchema);