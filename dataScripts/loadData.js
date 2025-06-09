const mongoose = require('mongoose');
const clearDatabase = require('./clearDatabase');
const seedDatabase = require('./seedDatabase');

async function loadData() {
    try {
        await mongoose.connect('mongodb://localhost:27017/tradingOrg', {});

        await clearDatabase();
        await seedDatabase();

    } catch (error) {
        console.error('Ошибка:', error.message);
    } finally {
        await mongoose.connection.close();
    }
}