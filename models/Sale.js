const mongoose = require('mongoose');
const { Schema } = mongoose;

const saleItemSchema = Schema({
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
    product_price: {
        type: Number,
        required: true,
        min: 0
    }
});

const saleSchema = Schema({
    date: {
        type: Date,
        default: Date.now
    },
    customer_id: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    outlet_id: {
        type: Schema.Types.ObjectId,
        ref: 'Outlet',
        required: true
    },
    seller_id: {
        type: Schema.Types.ObjectId,
        ref: 'Seller',
        required: true
    },
    seller_name: {
        type: String,
        required: true
    },
    items: {
        type: [saleItemSchema],
        required: true
    }
});

module.exports = mongoose.model('Sale', saleSchema);