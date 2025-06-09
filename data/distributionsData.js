const mongoose = require('mongoose');

const distributionsData = [
    {
        order_id: new mongoose.Types.ObjectId(),
        items: [
            {
                outlet_id: new mongoose.Types.ObjectId(),
                product_id: new mongoose.Types.ObjectId(),
                count: 50
            }
        ]
    },
    {
        order_id: new mongoose.Types.ObjectId(),
        items: [
            {
                outlet_id: new mongoose.Types.ObjectId(),
                product_id: new mongoose.Types.ObjectId(),
                count: 30
            }
        ]
    },
    {
        order_id: new mongoose.Types.ObjectId(),
        items: [
            {
                outlet_id: new mongoose.Types.ObjectId(),
                product_id: new mongoose.Types.ObjectId(),
                count: 40
            }
        ]
    },
    {
        order_id: new mongoose.Types.ObjectId(),
        items: [
            {
                outlet_id: new mongoose.Types.ObjectId(),
                product_id: new mongoose.Types.ObjectId(),
                count: 60
            }
        ]
    },
    {
        order_id: new mongoose.Types.ObjectId(),
        items: [
            {
                outlet_id: new mongoose.Types.ObjectId(),
                product_id: new mongoose.Types.ObjectId(),
                count: 70
            }
        ]
    }
];

module.exports = distributionsData;