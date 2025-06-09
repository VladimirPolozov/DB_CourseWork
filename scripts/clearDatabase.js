
const mongoose = require('mongoose');

async function clearDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/tradingOrg', {});

        const modelNames = [
            'Customer',
            'Product',
            'Outlet',
            'Supplier',
            'Query',
            'Order',
            'Distribution',
            'Sale'
        ];

        for (const modelName of modelNames) {
            const model = mongoose.model(modelName);
            await model.deleteMany({});
        }

    } catch (error) {
        console.error('Ошибка:', error.message);
    } finally {
        if (mongoose.connection.readyState === 1) {
            await mongoose.connection.close();
        }
    }
}

module.exports = clearDatabase;