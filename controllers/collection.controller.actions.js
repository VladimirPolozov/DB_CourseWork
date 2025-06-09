exports.createItem = async (req, res) => {
  const collectionName = req.params.name;
  const models = require('../models');
  const Model = models[collectionName];
  const data = req.body;

  if (!Model) return res.status(404).send('Коллекция не найдена');

  try {
    await Model.create(data);
    res.redirect(`/collections/${collectionName}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка при создании документа');
  }
};

exports.updateItem = async (req, res) => {
  const collectionName = req.params.name;
  const models = require('../models');
  const Model = models[collectionName];
  const id = req.params.id;
  const data = req.body;

  if (!Model) return res.status(404).send('Коллекция не найдена');

  try {
    await Model.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    res.redirect(`/collections/${collectionName}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка при обновлении документа');
  }
};


const models = require('../models');

const CASCADE_DELETE_RULES = {
  customers: [
    { model: 'orders', foreignField: 'customer_id' },
    { model: 'sales', foreignField: 'customer_id' }
  ],
  products: [
    { model: 'orders', foreignField: 'product_id' },
    { model: 'distributions', foreignField: 'product_id' },
    { model: 'sales', foreignField: 'product_id' }
  ],
  outlets: [
    { model: 'distributions', foreignField: 'outlet_id' },
    { model: 'sales', foreignField: 'outlet_id' }
  ],
  suppliers: [
    { model: 'queries', foreignField: 'supplier_id' }
  ]
};

exports.deleteItem = async (req, res) => {
  const collectionName = req.params.name;
  const Model = models[collectionName];
  const id = req.params.id;

  if (!Model) return res.status(404).send('Коллекция не найдена');

  try {
    await Model.findByIdAndDelete(id);

    const rules = CASCADE_DELETE_RULES[collectionName];

    if (rules && Array.isArray(rules)) {
      for (const rule of rules) {
        const TargetModel = models[rule.model];

        if (!TargetModel) continue;

        const filter = {};
        filter[rule.foreignField] = id;

        await TargetModel.deleteMany(filter);
      }
    }

    res.redirect(`/collections/${collectionName}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Ошибка при удалении документа');
  }
};