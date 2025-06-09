const mongoose = require('mongoose');
const { Schema } = mongoose;

const characteristicSchema = Schema({
    key: {
        type: String,
        required: true
    },
    value: {
        type: Schema.Types.Mixed, // может быть числом, строкой и т.п.
        required: true
    }
});

const sellerSchema = Schema({
    seller_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true,
        min: 0
    }
});

const inventorySchema = Schema({
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
        min: 0,
        integer: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    }
});

const outletSchema = Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['универмаг', 'магазин', 'киоск', 'лоток', 'другое']
    },
    characteristics: {
        type: [characteristicSchema],
        required: true
    },
    sellers: {
        type: [sellerSchema],
        required: true
    },
    inventory: {
        type: [inventorySchema],
        required: true
    }
});

module.exports = mongoose.model('Outlet', outletSchema);