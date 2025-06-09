const mongoose = require('mongoose');

module.exports = {
  Customer: require('./Customer'),
  Product: require('./Product'),
  Outlet: require('./Outlet'),
  Supplier: require('./Supplier'),
  Query: require('./Query'),
  Order: require('./Order'),
  Distribution: require('./Distribution'),
  Sale: require('./Sale')
};