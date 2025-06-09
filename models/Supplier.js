const mongoose = require('mongoose');
const { Schema } = mongoose;

const productInfoSchema = Schema({
    product_name: {
        type: String,
        required: true
    },
    product_id: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    product_price: {
        type: Number,
        required: true,
        min: 0
    }
});

const supplierSchema = Schema({
    name: {
        type: String,
        required: true
    },
    products: {
        type: [productInfoSchema],
        required: true
    }
});

module.exports = mongoose.model('Supplier', supplierSchema);