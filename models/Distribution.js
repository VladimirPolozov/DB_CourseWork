const mongoose = require('mongoose');
const { Schema } = mongoose;

const distributionItemSchema = Schema({
    outlet_id: {
        type: Schema.Types.ObjectId,
        ref: 'Outlet',
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

const distributionSchema = Schema({
    order_id: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    items: {
        type: [distributionItemSchema],
        required: true
    }
});

module.exports = mongoose.model('Distribution', distributionSchema);