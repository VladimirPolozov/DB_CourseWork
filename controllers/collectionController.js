const indexCtrl = require('./collection.controller.index');
const collectionCtrl = require('./collection.controller.collection');
const formCtrl = require('./collection.controller.form');
const actionCtrl = require('./collection.controller.actions');

module.exports = {
  getIndex: indexCtrl.getIndex,
  getCollection: collectionCtrl.getCollection,
  getNewForm: formCtrl.getNewForm,
  createItem: actionCtrl.createItem,
  getEditForm: formCtrl.getEditForm,
  updateItem: actionCtrl.updateItem,
  deleteItem: actionCtrl.deleteItem
};