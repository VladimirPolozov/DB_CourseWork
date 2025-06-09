const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/tradingOrg');

const Customer = require('./models/Customer');
const Product = require('./models/Product');
const Outlet = require('./models/Outlet');
const Supplier = require('./models/Supplier');
const Query = require('./models/Query');
const Order = require('./models/Order');
const Distribution = require('./models/Distribution');
const Sale = require('./models/Sale');

const models = {
  customers: Customer,
  products: Product,
  outlets: Outlet,
  suppliers: Supplier,
  queries: Query,
  orders: Order,
  distributions: Distribution,
  sales: Sale
};

app.get('/', async (req, res) => {
  const customerCount = await Customer.countDocuments();
  const productCount = await Product.countDocuments();
  const outletCount = await Outlet.countDocuments();
  const supplierCount = await Supplier.countDocuments();
  const queryCount = await Query.countDocuments();
  const orderCount = await Order.countDocuments();
  const distributionCount = await Distribution.countDocuments();
  const saleCount = await Sale.countDocuments();

  const collections = [
    { name: 'Покупатели', count: customerCount, path: 'customers' },
    { name: 'Товары', count: productCount, path: 'products' },
    { name: 'Торговые точки', count: outletCount, path: 'outlets' },
    { name: 'Поставщики', count: supplierCount, path: 'suppliers' },
    { name: 'Заявки на поставку', count: queryCount, path: 'queries' },
    { name: 'Заказы', count: orderCount, path: 'orders' },
    { name: 'Распределение товаров', count: distributionCount, path: 'distributions' },
    { name: 'Продажи', count: saleCount, path: 'sales' }
  ];

  res.render('index', { collections });
});

function getModelFields(schema) {
    const obj = {};
    for (const key in schema.obj) {
        if (key === '_id') continue; // пропускаем _id
        obj[key] = { key: key, label: key };
    }
    return Object.values(obj);
}

app.get('/collections/:name', async (req, res) => {
    const collectionName = req.params.name;
    const Model = models[collectionName];

    if (!Model) {
        return res.status(404).send('Коллекция не найдена');
    }

    try {
        const items = await Model.find().lean(); // Получаем документы
        const fields = getModelFields(Model.schema);

        res.render('collection', {
            collectionName: collectionName,
            collectionPath: collectionName,
            items: items,
            fields: fields
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Ошибка загрузки данных');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});