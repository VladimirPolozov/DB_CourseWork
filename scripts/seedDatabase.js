const mongoose = require('mongoose');

const Customer = require('../models/Customer');
const Product = require('../models/Product');
const Outlet = require('../models/Outlet');
const Supplier = require('../models/Supplier');
const Query = require('../models/Query');
const Order = require('../models/Order');
const Distribution = require('../models/Distribution');
const Sale = require('../models/Sale');

const customersData = require('../data/customersData');
const productsData = require('../data/productsData');
const outletsData = require('../data/outletsData');
const suppliersData = require('../data/suppliersData');
const queriesData = require('../data/queriesData');
const ordersData = require('../data/ordersData');
const distributionsData = require('../data/distributionsData');
const salesData = require('../data/salesData');

async function seedDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/tradingOrg', {});
        
        const customers = await Customer.insertMany(customersData);
        const customerIds = customers.map(c => c._id);
        const products = await Product.insertMany(productsData);
        const productIds = products.map(p => p._id);
        const outlets = await Outlet.insertMany(outletsData);
        const outletIds = outlets.map(o => o._id);
        const suppliers = await Supplier.insertMany(suppliersData);
        const supplierIds = suppliers.map(s => s._id);

        const processedQueries = [];
        for (const query of queriesData) {
            const newItemList = [];
            for (const item of query.items) {
                newItemList.push({
                    ...item,
                    product_id: getRandomId(productIds),
                });
            }

            processedQueries.push({
                date: query.date,
                outlet_id: getRandomId(outletIds),
                items: newItemList,
            });
        }
        const queries = await Query.insertMany(processedQueries);

        const processedOrders = [];
        for (const order of ordersData) {
            const newItemList = [];
            for (const item of order.items) {
                newItemList.push({
                    ...item,
                    product_id: getRandomId(productIds),
                });
            }

            processedOrders.push({
                date: order.date,
                supplier_name: order.supplier_name,
                outlet_id: getRandomId(outletIds),
                supplier_id: getRandomId(supplierIds),
                items: newItemList,
            });
        }
        const orders = await Order.insertMany(processedOrders);

        const processedDistributions = [];
        for (const distribution of distributionsData) {
            const newItemList = [];
            for (const item of distribution.items) {
                newItemList.push({
                    ...item,
                    outlet_id: getRandomId(outletIds),
                    product_id: getRandomId(productIds),
                });
            }

            processedDistributions.push({
                order_id: getRandomId(orders.map(o => o._id)),
                items: newItemList,
            });
        }
        await Distribution.insertMany(processedDistributions);

        const processedSales = [];
        for (const sale of salesData) {
            const outletIndex = Math.floor(Math.random() * outlets.length);
            const outletType = outlets[outletIndex].type;

            const newItemList = [];
            for (const item of sale.items) {
                newItemList.push({
                    ...item,
                    product_id: getRandomId(productIds),
                });
            }

            processedSales.push({
                date: sale.date,
                outlet_id: outletIds[outletIndex],
                seller_id: new mongoose.Types.ObjectId(),
                customer_id: ['универмаг', 'магазин'].includes(outletType)
                    ? getRandomId(customerIds)
                    : undefined,
                seller_name: sale.seller_name,
                items: newItemList,
            });
        }
        await Sale.insertMany(processedSales);

    } catch (error) {
        console.error('Ошибка при заполнении базы данных:', error);
    } finally {
        mongoose.disconnect();
    }
}

function getRandomId(idArray) {
    return idArray[Math.floor(Math.random() * idArray.length)];
}

seedDatabase();